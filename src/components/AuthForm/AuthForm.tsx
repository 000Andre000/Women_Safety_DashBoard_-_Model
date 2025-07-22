import React, { useState, useEffect } from "react";
import "./AuthForm.css";

const AuthForm: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // "user" or "admin"

  const toggle = () => {
    setIsSignIn((prevState) => !prevState);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("user");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        toggle();
      } else {
        alert(data.detail || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error during signup.");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify({ username, role }));
        window.location.href = role === "admin" ? "http://localhost:8501/" : "/home";
      } else {
        alert(data.detail || "Login failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error during login.");
    }
  };

  return (
    <div
      id="auth-form-container"
      className={`auth-container ${isSignIn ? "sign-in" : "sign-up"}`}
    >
      <div className="auth-row">
        {/* SIGN UP */}
        <div
          className={`auth-col auth-align-items-center auth-flex-col ${
            isSignIn ? "sign-up" : "sign-in"
          }`}
        >
          <div className="auth-form-wrapper auth-align-items-center">
            <div className="auth-form sign-up">
              <h2>Sign Up</h2>
              <div className="auth-input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="auth-input-group">
                <i className="bx bx-mail-send"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="auth-input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="auth-input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleSignup}>
                Sign up
              </button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="auth-pointer">
                  Log in here
                </b>
              </p>
            </div>
          </div>
        </div>

        {/* SIGN IN */}
        <div
          className={`auth-col auth-align-items-center auth-flex-col ${
            isSignIn ? "sign-in" : "sign-up"
          }`}
        >
          <div className="auth-form-wrapper auth-align-items-center">
            <div className="auth-form sign-in">
              <h2>{role === "admin" ? "Admin Login" : "User Login"}</h2>

              {/* Role Selector */}
              <div className="auth-role-select" style={{ marginBottom: "16px" }}>
                <label style={{ fontWeight: "bold" }}>
                  Login As:
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{
                      marginLeft: "10px",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
              </div>

              <div className="auth-input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder={role === "admin" ? "Admin ID" : "Username"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="auth-input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" onClick={handleLogin}>
                Log In
              </button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="auth-pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="auth-row auth-content-row">
        <div className="auth-col auth-align-items-center auth-flex-col">
          <div className="auth-text sign-in">
            <h2>{role === "admin" ? "Admin Login Panel" : "Welcome Back!"}</h2>
          </div>
          <div className="auth-img sign-in"></div>
        </div>

        <div className="auth-col auth-align-items-center auth-flex-col">
          <div className="auth-img sign-up"></div>
          <div className="auth-text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;