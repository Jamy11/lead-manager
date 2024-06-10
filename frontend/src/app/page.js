"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import App from "@/components/app";
export default function Home({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </>
  );
}
