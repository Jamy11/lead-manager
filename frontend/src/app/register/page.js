"use client";
import { registerUser } from "@/redux/features/auth-slice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      // Handle password mismatch
      console.log("Passwords do not match");
    } else {
      // Handle form submission logic here
      // console.log("Form submitted:", formData);
      delete formData.password2;
      dispatch(registerUser(formData));
      // Reset form fields
      setFormData({
        username: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={onChange}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={onChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
              value={formData.password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={onChange}
              value={formData.password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account?
            <Link href="/login">Login</Link>
          </p>
          <p>
            <Link href="/">Go to Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
