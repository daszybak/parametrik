import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="hr">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/icons/apple-touch-icon-152x152-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/icons/apple-touch-icon-144x144-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/icons/apple-touch-icon-120x120-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/icons/apple-touch-icon-114x114-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/icons/apple-touch-icon-76x76-precomposed.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/icons/apple-touch-icon-72x72-precomposed.png"
          />

          <meta
            name="description"
            content="Established as engineering office for Mechanical Engineering that is continuously striving for the top quality in every aspect of performance."
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Noto+Serif:ital,wght@0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
