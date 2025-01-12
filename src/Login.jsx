import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "employee" && pwd === "emp123") {
      navigate("/employee/dashboard");
    } else if (username === "admin" && pwd === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/606/28/desktop-wallpaper-big-data-data-analysis.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
