import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import ReduxToastr from "react-redux-toastr";
import { AuthProvider } from "../provider/authProvider";
import { TypeComponentAuthFields } from "../provider/private-route.interface";

type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AuthProvider Component={Component}>
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
                </AuthProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
