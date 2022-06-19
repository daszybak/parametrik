import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="hr">
        <Head>
          {/* <link rel="icon" href="images/icons/favicon.ico" />
          <link rel="apple-touch-icon" href="images/icons/logo192.png" />
          <link rel="manifest" href="images/icons/manifest.json" /> */}

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