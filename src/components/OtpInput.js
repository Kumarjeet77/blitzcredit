// OtpInput.js
import React, { useState, useRef } from "react";
import "../assets/OtpInput.css";
import home from "../components/Homepage";

const OtpInput = ({ onOtpSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Allow only numeric input
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move to the next input field
    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input field on backspace
    if (e.key === "Backspace" && index > 0) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index - 1] = "";
        return newOtp;
      });
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp === "1234") {
      setErrorMessage("");
      onOtpSubmit(enteredOtp);

      // Simulate a delay and redirect to the home page
      setTimeout(() => {
        console.log("Redirecting to home page...");
        window.location.href = { home };
        // You can use react-router-dom or any other method to navigate to the home page
      }, 2000);
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <form className="otp-input-form" onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={inputRefs[index]}
          />
        ))}
        <button type="submit">Submit OTP</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default OtpInput;
