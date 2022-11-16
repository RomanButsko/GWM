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
import { GoogleOAuthProvider } from "@react-oauth/google";

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthProvider Component={Component}>
                    <Head>
                        <meta name="viewport" content="viewport-fit=cover" />
                    </Head>
                    <YMaps
                        query={{
                            ns: "use-load-option",
                            apikey: "1c3e1a0b-c5d3-4286-89a6-4878fd37de76",
                        }}
                    >
                        <Component {...pageProps} />
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
