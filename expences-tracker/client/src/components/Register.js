import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/v1/users/register",
        {
          name: name,
          email: email,
          password: password,
        },
        config
      );

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(x) => setName(x.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(x) => setEmail(x.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(x) => setPassword(x.target.value)}
              placeholder="Password"
            />
          </div>
          <Link to="/login">Already Register ? Cleck Here to login</Link>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
