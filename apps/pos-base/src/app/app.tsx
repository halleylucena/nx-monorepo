import {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    isPlatform,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import useStore from './store/store';
// import useWebSocket, { ReadyState } from 'react-use-websocket';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// /* Theme variables */
import './theme/variables.scss';
import './theme/global.scss';
import Home from './pages/Home';
import { lazy, Suspense, useEffect, useState } from 'react';
import { PrivateRoute, ProvideAuth } from './logic/auth/useProvideAuth';
import LoginPage from './pages/LoginPage';
import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';
import PrintTests from './pages/PrintTests';
import ApiDesktop from './logic/apiDesktop';

// Importing Documents from MFE
const Documents = lazy(() => import('pos-documents/Documents'));
const DocumentDetail = lazy(() => import('pos-documents/DocumentDetail'));

// Importing Products from MFE
const Products = lazy(() => import('pos-products/Products'));

setupIonicReact({
    rippleEffect: false,
    mode: 'md',
});

// Websockets
const WS_URL = 'ws://127.0.0.1:8000';
const username = 'halley';

function isDocumentEvent(message: any) {
    const evt = JSON.parse(message.data);
    return evt.type === 'contentchange';
}

const App: React.FC = () => {
    const store: any = useStore();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [disablePane, setDisablePane] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!isPlatform('capacitor')) {
            const apiDesktop = new ApiDesktop();
            apiDesktop.init();
        }
    }, []);

    // const [msg, setMsg] = useState<any>();

    // const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    //     onOpen: () => {
    //         console.log('WebSocket connection established.');
    //     },
    //     share: true,
    //     filter: () => false,
    //     retryOnError: true,
    //     shouldReconnect: () => true,
    // });

    // const lastJsonMessage: any = useWebSocket(WS_URL, {
    //     share: true,
    //     filter: isDocumentEvent,
    // });

    // useEffect(() => {
    //     if (username && readyState === ReadyState.OPEN) {
    //         console.log('WebSocket connection established. Sending userevent.');
    //         sendJsonMessage({
    //             username,
    //             type: 'userevent',
    //         });
    //     }

    //     queryClient.invalidateQueries({ queryKey: ['msg'] });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useEffect(() => {
    //     setMsg(lastJsonMessage.lastJsonMessage?.data.editorContent);
    // }, [lastJsonMessage]);

    // useEffect(() => {
    //     if (msg === '' || !msg) return;

    //     queryClient.setQueryData(msg.query, (oldData: any) => {
    //         if (!oldData) return oldData;
    //         const modArray = [...oldData];
    //         const itemToUpdate = oldData.find(
    //             (item: any) => item.id === msg.id
    //         );
    //         const itemToUpdateIndex = oldData.findIndex(
    //             (item: any) => item.id === msg.id
    //         );

    //         if (!itemToUpdate) return [...modArray];
    //         itemToUpdate[msg.data.property] =
    //             itemToUpdate[msg.data.property] + msg.data.value;
    //         if (itemToUpdateIndex !== -1) {
    //             modArray.splice(itemToUpdateIndex, 1);
    //             modArray.splice(itemToUpdateIndex, 0, itemToUpdate);
    //         }
    //         return [...modArray];
    //     });
    // }, [msg]);

    // const msg1: QueryKey = ['msg'];

    // useQuery(msg1, () => msg, {
    //     enabled: msg !== '',
    // });

    return (
        <IonApp>
            <ProvideAuth>
                <IonReactRouter>
                    <IonSplitPane contentId="main" when={false}>
                        <Menu />
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/documents" />
                            </Route>
                            <Route path="/login" exact={true}>
                                <LoginPage />
                            </Route>
                            <PrivateRoute path="/home" exact={true}>
                                <Home />
                            </PrivateRoute>
                            <PrivateRoute path="/tests" exact={true}>
                                <PrintTests />
                            </PrivateRoute>
                            <PrivateRoute path="/documents" exact={true}>
                                <Suspense>
                                    <Documents
                                        typesFiltered={store.typesFiltered}
                                        setTypesFiltered={
                                            store.setTypesFiltered
                                        }
                                        apiKey={store.apiKey}
                                    />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute path="/documents/:id" exact={true}>
                                <Suspense>
                                    <DocumentDetail apiKey={store.apiKey} />
                                </Suspense>
                            </PrivateRoute>
                            <PrivateRoute path="/products" exact={true}>
                                <Suspense>
                                    <Products apiKey={store.apiKey} />
                                </Suspense>
                            </PrivateRoute>
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </ProvideAuth>
        </IonApp>
    );
};

export default App;
