import React, { useState } from "react";
import "../assets/Login.css";

import logo from "../assets/logo.png"; // Adjust the path based on your project structure

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtp = () => {
    // Implement OTP sending logic here (replace with actual functionality later)
    console.log(`Sending OTP to ${phoneNumber}`);
  };

  return (
    <div className="login-container">
      <div className="top-section">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
      </div>
      <h2>Login:</h2>
      <br></br>
      <form>
        <div className="input-container">
          <label></label>
          <div className="input-div">
            <input
              type="tel" // Changed to type "tel" for phone numbers
              id="mobileInput"
              placeholder="Enter your mobile number"
              maxLength="10"
              className="w-full p-0 text-sm text-gray-900 bg-transparent border-0 outline-none appearance-none ring-0 placeholder:text-lg"
              required=""
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        <button className="otp-button" onClick={sendOtp}>
          <b>Send OTP</b>
        </button>
      </form>
      <br></br><br></br><br></br>
    </div>
  );
};

export default Login;
