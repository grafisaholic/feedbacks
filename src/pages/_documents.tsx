import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
