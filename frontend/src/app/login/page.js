"use client";
import { loginUser } from "@/redux/features/auth-slice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData.username, formData.password);
    dispatch(loginUser(formData));
  };
  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p>
            Don't have an account?
            <Link href="/register">Register</Link>
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
