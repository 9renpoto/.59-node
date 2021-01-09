import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document<{ lang: string }> {
  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, lang: ctx.query.lng };
};

export default MyDocument;
