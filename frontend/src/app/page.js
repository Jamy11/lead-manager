"use client";
import Header from "@/components/layouts/Header";
import Dashboards from "@/components/leads/Dashboards";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Dashboards />
        </div>
      </Provider>
    </>
  );
}
