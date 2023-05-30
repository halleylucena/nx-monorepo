import Defer from './defer';

const options = {
    ws: null as any,
    queue: {} as any,

    print: {
        name: '',
        ip: '',
        port: '',
    },
};
export { options };

export default class ApiDesktop {
    isPOS = true;
    isOnline = true;
    status = false;

    showNotification = true;

    numberAttempts = 0;
    attemptsTaskID: any = 0;
    checkTaskID: any = 0;

    downloadLinks = [];

    queue: any = {};

    socket = {
        protocol: 'ws',
        host: 'localhost',
        port: 30080,
    };
    ws: any = null;

    constructor() {
        this.ws = options.ws;
        this.queue = options.queue;
    }

    init() {
        //if(electronJs.isOn()) return;
        const _this = this;
        this.numberAttempts = 0;
        clearInterval(this.attemptsTaskID);
        clearInterval(this.checkTaskID);

        //this.showNotification = false;

        window.setTimeout(() => {
            const startSocket = _this.startSocket();
            startSocket.then(() => {
                _this.checkTask();
            });

            startSocket.catch(() => {
                _this.attemptsTaskID = setInterval(() => {
                    _this.task();
                }, 4000);
            });
        }, 500);
    }

    task() {
        const _this = this;
        const connected = this.checkSocket();

        connected.then(() => {
            _this.checkTask();
        });

        connected.catch(() => {
            if (_this.numberAttempts >= 2) {
                if (_this.showNotification) {
                    /*uiJs.notification({
                        type: 'danger',
                        content: tt('API_APP_CONNECT_ERROR', {printAppName: appsJs.get('printAppName')}),
                    });*/
                }

                clearInterval(_this.attemptsTaskID);
                return;
            }

            _this.numberAttempts++;
        });
    }

    checkTask() {
        const _this = this;

        clearInterval(this.attemptsTaskID);
        clearInterval(this.checkTaskID);

        this.checkTaskID = setInterval(() => {
            _this.checkSocket();
        }, 4000);

        return;
    }

    setStatus(status: boolean) {
        if (status !== true) {
            status = false;
        } else {
            this.numberAttempts = 2;
        }
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    startSocket() {
        const _this = this;
        const deferred = Defer();

        const checkSocket = this.checkSocket();

        // checkSocket.then(() => {
        //     deferred.resolve();
        //     return deferred.promise;
        // });

        checkSocket.catch(() => {
            const socket = _this.socket;
            socket.port = 30080;

            _this.ws = new WebSocket(
                socket.protocol + '://' + socket.host + ':' + socket.port + '/'
            );
            _this.ws.onopen = (event: any) => {
                deferred.resolve(event);
                _this.setStatus(true);
                console.log('Vendus Dispositivos: Connected');
            };

            _this.ws.onmessage = (event: any) => {
                let parse = JSON.parse(event.data);
                parse = JSON.parse(parse.data);
                _this.parseMessage(parse);
            };

            _this.ws.onerror = (event: any) => {
                deferred.reject(event);
                console.error('Vendus Dispositivos: Socket Error');
                _this.ws = null;
                options.ws = _this.ws;
                _this.setStatus(false);
            };

            options.ws = _this.ws;
        });

        return deferred.promise;
    }

    checkSocket(connect?: any) {
        const _this = this;
        const deferred = Defer();
        if (connect) {
            const startSocket = this.startSocket();

            startSocket.then(() => {
                _this._checkSocket(deferred);
            });

            startSocket.catch(() => {
                _this._checkSocket(deferred);
            });

            return deferred.promise;
        }

        this._checkSocket(deferred);

        return deferred.promise;
    }

    _checkSocket(deferred: any) {
        if (
            typeof this.ws != 'undefined' &&
            this.ws &&
            this.ws.readyState &&
            this.ws.readyState === 1
        ) {
            this.setStatus(true);
            if (deferred) {
                deferred.resolve();
            }

            return true;
        }

        this.setStatus(false);

        if (deferred) {
            deferred.reject();
        }

        return false;
    }

    parseMessage(message: any) {
        if (message.data.id in this.queue) {
            this.queue[message.data.id].resolve(message.data.message);
            delete this.queue[message.data.id];
        }
    }

    send(type: any, msg: any) {
        /*if(!this.isOnline){
            return;
        }*/

        const _this = this;
        const deferred = Defer();
        const checkSocket = this.checkSocket();
        checkSocket.then(() => {
            const d = new Date();
            const time = d.getTime();
            const data = {
                type: 'message',
                data: {
                    id: time,
                    action: type,
                    message: msg,
                },
            };
            _this.ws.send(JSON.stringify(data));
            console.log('Vendus Dispositivos: Send Message', data);

            _this.queue[time] = deferred;
        });

        checkSocket.catch(() => {
            console.log('failed to send!');
            deferred.reject();
        });

        return deferred.promise;
    }

    sendPrint(text: any) {
        return this.send('print', text);
    }

    getPrints() {
        return this.send('listPrints', {});
    }
}
