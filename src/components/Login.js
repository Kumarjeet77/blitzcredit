// Login.js
import React, { useState } from 'react';
import '../assets/Login.css';
import OtpInput from './OtpInput';

import logo from '../assets/logo.png';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSendOtp = () => {
    // Implement OTP sending logic here (replace with actual functionality later)
    console.log(`Sending OTP to ${phoneNumber}`);
    setShowOtpInput(true);
  };

  const handleOtpSubmit = (otp) => {
    // Implement OTP verification logic here (replace with actual functionality later)
    console.log(`Verifying OTP: ${otp}`);
    // After successful verification, you can navigate to the next step or perform any other action.
  };

  return (
    <div className="login-container">
      <div className="top-section">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
      </div>
      <h2>Login:</h2>
      <br></br>
      {!showOtpInput ? (
        <form>
          <div className="input-container">
            <label></label>
            <div className="input-div">
              <input
                type="tel"
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
          <button className="otp-button" onClick={handleSendOtp}>
            <b>Send OTP</b>
          </button>
        </form>
      ) : (
        <OtpInput onOtpSubmit={handleOtpSubmit} />
      )}
      <br></br><br></br><br></br>
    </div>
  );
};

export default Login;
