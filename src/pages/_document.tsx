import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#063e6f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
