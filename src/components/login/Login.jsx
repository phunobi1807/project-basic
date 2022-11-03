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
          // console.log(response.data);
          return response.data;
          // - Đăng nhập thành công thì server trả về 1 token, lấy token gán vào localStorage
          // - Mỗi lần gửi request đi từ client thì gọi token ra gán vào headers để trả về cho server xử lí, nếu token đúng thì lấy được dữ liệu.

        });
      navigate("/dashboard");
      window.location.reload();
    } catch (errors) {
     console.log(errors);
    }
  };
  return (
    <>
      <div className="form_login">
        <form onSubmit={LoginUser}>
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
