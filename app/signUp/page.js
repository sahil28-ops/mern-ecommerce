"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
const SignUp = () => {
  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const fields = [
    { name: "name", type: "text", placeholder: "Enter Name", label: "Name" },
    { name: "email", type: "email", placeholder: "Enter Email", label: "Email" },
    { name: "password", type: "password", placeholder: "Enter Password", label: "Password" },
    { name: "mobile", type: "number", placeholder: "Enter Mobile Number", label: "Mobile No" },
    { name: "address", type: "text", placeholder: "Enter Address", label: "Address" },
  ];

  const handleSignUpData = async (e) => {
    e.preventDefault();
    const { name, email, password, mobile, address } = signup;
    const response = await axios.post(`http://localhost:3001/register`, {
      name,
      email,
      password,
      mobile,
      address,
    });
    if (response.data.success) {
      console.log(response.data.message);
    } else if (response.data.message) {
      console.log(response.data.message);
    }
    setSignUp({ name: "", email: "", password: "", mobile: "", address: "" });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="text-center mb-2">
          <h1 className="h4">Sign Up</h1>
          <p className="text-muted">Create Your New Account Here</p>
        </div>
        <form onSubmit={handleSignUpData}>
          <div className="row g-2">
            {fields.map((curEle, index) => (
              <div className="col-md-6" key={curEle.id || index}>
                <label htmlFor={curEle.name} className="form-label">
                  {curEle.label}
                </label>
                <input
                  type={curEle.type}
                  placeholder={curEle.placeholder}
                  name={curEle.name}
                  id={curEle.name}
                  className="form-control"
                  onChange={(e) =>
                    setSignUp({ ...signup, [curEle.name]: e.target.value })
                  }
                  value={signup[curEle.name]}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-4">
            Sign Up
          </button>
          <p className="mt-3"> if you don't have account the go to <Link href={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
