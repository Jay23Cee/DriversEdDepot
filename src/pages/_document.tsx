import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/drivers-ed-depot-favicon.png?v=2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
