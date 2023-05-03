import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="globalLoader">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt=""
          />
        </div>
        <div id="menu"></div>
        <div id="modal"></div>
        <div id="overlay"></div>
        <div id="card"></div>
      </body>
    </Html>
  );
}
