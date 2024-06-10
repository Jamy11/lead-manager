import React from "react";
import Form from "./Form";
import Leads from "./Leads";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Dashboards = () => {
  return (
    <div>
      <Form />
      <Leads />
    </div>
  );
};

export default PrivateRoute(Dashboards);
