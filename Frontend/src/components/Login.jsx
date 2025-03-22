import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setLoggedIn,loggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, { email, password });

      if(response.data.success){
        setLoggedIn(true);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('loggeduser',response.data.name);
        navigate('/user/editor');
      }
    } catch (error) {
      alert("Some Error Occured Please Try Again")

      console.error("Error logging in:", error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f0f2f5"
      }}
    >
      <div
        className="login"
        style={{
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#fff", // Form background color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h1 style={{ color: "black" ,margin:'20px'}}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "black", fontSize: "20px" }}>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                color: "black",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "black" ,fontSize:'20px'}}>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                color: "black",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            />
          </div>
          <button type="submit">Login</button>
            <p style={{color:"black" ,margin:"10px"}}>Don't have an account <Link to={'/signup'}>Create Account</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
