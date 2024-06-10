import React, { useEffect } from "react";
import Dashboards from "./leads/Dashboards";
import Link from "next/link";
import Header from "./layouts/Header";
import { useDispatch } from "react-redux";
import { getUser } from "@/redux/features/auth-slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container">
        <Dashboards />

        <div className="container">
          <p>
            <Link href="/register">Go to Register</Link>
          </p>
          <p>
            <Link href="/login">Go to Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
