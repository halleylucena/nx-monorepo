export const options = {
    name: "",
    ip: "",
    port: "",
};

export const getKitchenPrintData = async (api: any, kitchenId: number) => {
    let res: any = [];
    if (kitchenId === 0) return res;
    await api.connect("kitchens/" + kitchenId + "/printer").then((data: any) => {
        if (data.data.length === 0) {
            res = [];
            return;
        }

        res = data.data[0];

        switch (data.status) {
            case 200:
                options.name = res.printer;
                options.ip = res.ip;
                options.port = res.port;
                break;
            default:
                console.log("TODO: ERROR");
                res = options;
                break;
        }
    });

    return res;
};

export const setKitchenPrintData = async (api: any, kitchenId: number, name: string, config: any, host: string, port: number, status: number) => {
    let res: any = [];

    const params = {
        printer: name,
        data: config,
        ip: host,
        port: port,
        status: status,
    };
    // res = await api.connect('kitchens/' + kitchenId + '/printer', {'printer': name, 'data': config}, 'POST');
    res = await api.connect("kitchens/" + kitchenId + "/printer", params, "POST");
    return res.data;
};
