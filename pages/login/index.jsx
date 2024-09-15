
// pages/login.js

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from 'cookies-next';

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://api-bootcamp.do.dibimbing.id/api/v1/login", {
        email,
        password,
      },
      {headers : {
        "Content-Type" : "application/json",
        apiKey : "w05KkI9AWhKxzvPFtXotUva-",
      }}
    );
    
      if (response.status === 200) {
        const token = response.data.token; 
        setCookie('token', token); 
        router.push("/list-menu")
        
      }
    } catch (error) {
      // Alert on error
      alert("Login failed. Please check your password and your email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "400px", padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

