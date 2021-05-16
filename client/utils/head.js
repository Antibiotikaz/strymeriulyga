import React from "react";
import Head from "next/head";
import { GA_TRACKING_ID } from "../lib/gtag";

export default () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no"
      />
      <meta
        name="google-site-verification"
        content="Ha-hNjJuvAEfUdHIrP3k7-1NtyppFCVuWvxzuGSE4dc"
      />
      <meta
        name="description"
        content="Lietuviškų streamerių portalas. Lietuviškų transliacijų katalogas. Strymeriulyga.lt"
      />
      <meta name="author" content="Passhtet" />
      <meta
        name="keywords"
        content="Lietuvos, lithuanian, streamers, streameriai, tiesiogines transliacijos, streamai, streams, strymeriulyga.lt, strymeriulyga.lt"
      />
      <meta
        property="og:image"
        content="https://strymeriulyga.lt/assets/images/sl.png"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:title" content="Strymeriulyga.lt" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Lietuviškų streamerių portalas. Lietuviškų transliacijų katalogas. Strymeriulyga.lt"
      />
      <link rel="icon" href="favicon.ico" />
      <title>Strymeriulyga.lt</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <noscript></noscript>
    </Head>
  );
};
