import createEmotionCache from "@/helpers/createEmotionCache";
import theme from "@/helpers/theme";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";

const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   style: ["normal", "italic"],
   subsets: ["latin"],
   // display: "swap",
});

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
   const {
      Component,
      emotionCache = clientSideEmotionCache,
      pageProps,
      router,
   } = props;

   useEffect(() => {
      const handleRouteStart = () => NProgress.start();
      const handleRouteDone = () => NProgress.done();

      router.events.on("routeChangeStart", handleRouteStart);
      router.events.on("routeChangeComplete", handleRouteDone);
      router.events.on("routeChangeError", handleRouteDone);

      return () => {
         // Make sure to remove the event handler on unmount!
         router.events.off("routeChangeStart", handleRouteStart);
         router.events.off("routeChangeComplete", handleRouteDone);
         router.events.off("routeChangeError", handleRouteDone);
      };
   }, []);

   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <meta
               name="viewport"
               content="initial-scale=1, width=device-width"
            />
         </Head>
         <ThemeProvider theme={theme}>
            <main className={roboto.className}>
               <Component {...pageProps} />
            </main>
            <CssBaseline />
         </ThemeProvider>
      </CacheProvider>
   );
}
