import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import ReduxToastr from "react-redux-toastr";
import { AuthProvider } from "../provider/authProvider";
import { TypeComponentAuthFields } from "../provider/private-route.interface";
import Head from "next/head";
import "../styles/calendarStyle.sass";
import "../styles/map.sass";
import { YMaps } from "@pbe/react-yandex-maps";
import Script from "next/script";

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthProvider Component={Component}>
                    <Head>
                        <meta name="viewport" content="viewport-fit=cover" />
                    </Head>
                    <Script
                        src="https://api-maps.yandex.ru/2.1/?apikey=1c3e1a0b-c5d3-4286-89a6-4878fd37de76&lang=ru_RU&load=Geolink"
                        type="text/javascript"
                    ></Script>
                    <Script
                        src="search_control_ppo.js"
                        type="text/javascript"
                    ></Script>
                    <YMaps>
                        <Component {...pageProps} />;
                        {/* <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick
                /> */}
                    </YMaps>
                </AuthProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
