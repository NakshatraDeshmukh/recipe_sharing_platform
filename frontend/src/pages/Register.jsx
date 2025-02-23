import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/register", { username, email, password });
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      alert("Registration failed. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create an Account</h2>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleRegister}>Register</button>
        <p className="login-text">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
