"use client";
import React, { FC, useState } from "react";
import Image from "next/image";

const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Add your login logic here
    console.log("Logging in with", email, password);
    setError(null); // Clear error on successful submission
  };

  // Inline styles for a modern login page with a blue-violet theme
  const styles = {
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Blue-violet gradient background
      fontFamily: "Arial, sans-serif",
    },
    formContainer: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "40px",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      textAlign: "center" as "center",
    },
    logo: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "16px",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#6a11cb",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#6a11cb", // Violet color for button
      color: "#fff",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#2575fc", // Blue color on hover
    },
    errorText: {
      color: "red",
      fontSize: "14px",
      marginBottom: "20px",
    },
    forgotPassword: {
      textAlign: "right" as "right",
      fontSize: "14px",
      color: "#2575fc", // Matching blue color for forgot password link
      cursor: "pointer",
    },
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = styles.inputFocus.borderColor;
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#ddd";
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <div style={styles.logo}>
          <Image src="/path/to/logo.svg" alt="Logo" width={120} height={40} />
        </div>
        <h2 style={{ color: "#6a11cb" }}>Login</h2>{" "}
        {/* Violet color for header */}
        {error && <p style={styles.errorText}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
