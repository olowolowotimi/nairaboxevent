import React from 'react';
import Head from 'next/head';
import '../style/Global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Nairaboxevent</title>
        <link rel="icon" href="/static/img/nairaboxlogo.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Amaranth:ital@1&display=swap" rel="stylesheet" />
        <link href="/static/styles/slick-theme.css" rel="stylesheet" />
        <link href="/static/styles/slick.css" rel="stylesheet" />

      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;