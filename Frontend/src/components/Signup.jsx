import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {GoogleLogin} from '@react-oauth/google'
import "../App.css";

const Signup = ({setLoggedIn}) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signin`,
        { name, email, password }
      );
      console.log("Signup successful:", response.data);
      if (response.data.success) {
        alert("user Register Successfully");

        return navigate("/login");
      }
      else{
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
      console.error("Error signing up:", error);
    }
    setLoading(false);
    setEmail("");
    setPassword("");
    setname("");
  };

  const handleSucess = async (credentialResponse) => {
    setLoading(true);
    const { credential: token } = credentialResponse;
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
      { token }
    );
    if (response.data.apptoken) {
      setLoggedIn(true);
      localStorage.setItem("token", response.data.apptoken);
      localStorage.setItem("loggeduser", response.data.name);
      localStorage.setItem("userimg",response.data.userimg)
      setimg(response.data.userimg)

      setLoading(false);
      alert("Login Successful");
      navigate("/user/editor");
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  const handleError=()=>{
    alert("Internal server error");
    console.log("Login Failed");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        className="signup"
        style={{
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#fff", // Form background color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "black", margin: "20px" }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "black", fontSize: "20px" }}>Name: </label>
            <input
              type="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
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
            <label style={{ color: "black", fontSize: "20px" }}>
              Password:{" "}
            </label>
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
          <button
            type="submit"
            disabled={loading}
            style={{ marginBottom: "10px" }}
          >
            {loading ? <div className="spinner"></div> : "Register"}
          </button>
          
        </form>
        <hr />
          <p style={{ color: "black", margin: "10px", textAlign: "center" }}>
            Or
          </p>
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <GoogleLogin onSuccess={handleSucess} onError={handleError} />
          )}
          <p style={{ color: "black", margin: "10px" }}>
            Already have an account <Link to={"/login"}>Login</Link>
          </p>
      </div>
    </div>
  );
};

export default Signup;
