import React, { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/api/auth/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          console.log(response.data);
          return response.data;
        });
      navigate("/dashboard");
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  return (
    <>
      <div className="form_login">
        <form onSubmit={LoginUser}>
          <p>{msg}</p>
          <input
            type="text"
            placeholder="Vui lòng nhập Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Vui lòng nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </>
  );
};

export default Login;
