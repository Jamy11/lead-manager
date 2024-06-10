"use client";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import App from "@/components/app";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}
