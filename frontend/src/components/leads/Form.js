import { logOutUser } from "@/redux/features/auth-slice";
import { postLead } from "@/redux/features/lead-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.lead.status);
  const error = useSelector((state) => state.lead.error);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (status === "failed") {
      toast.error(`Error: ${error}`, {
        autoClose: 8000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    if (status === "success") {
      toast.success("Lead Created", {
        autoClose: 8000,
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [status, error]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(postLead(formData));
  };

  const logoutFrom = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <ToastContainer />

      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            onChange={onChange}
            value={formData.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="m-2 btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <button onClick={logoutFrom}>Logout</button>
    </div>
  );
};

export default Form;
