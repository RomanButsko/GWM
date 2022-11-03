import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="icon"
                    href="./../asset/favicon.svg"
                    type="image/svg+xml"
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <script
                    src="https://api-maps.yandex.ru/2.1/?apikey=1c3e1a0b-c5d3-4286-89a6-4878fd37de76&lang=ru_RU&load=Geolink"
                    type="text/javascript"
                ></script>
                <script
                    src="search_control_ppo.js"
                    type="text/javascript"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
