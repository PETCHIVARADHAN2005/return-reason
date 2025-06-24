import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const OTPComponent = () => {
  const [otpType, setOtpType] = useState('');
  const [otpDigitLimit, setOtpDigitLimit] = useState('');
  const [otpExpireTime, setOtpExpireTime] = useState('');

  const handleSave = () => {
    console.log('Saving OTP settings:', {
      otpType,
      otpDigitLimit,
      otpExpireTime
    });
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2 className="otp-title">OTP</h2>
        
        <div className="form-group">
          <label className="form-label">
            OTP TYPE <span className="required">*</span>
          </label>
          <div className="select-container">
            <select 
              className="form-select"
              value={otpType}
              onChange={(e) => setOtpType(e.target.value)}
            >
              <option value="">--</option>
              <option value="numeric">Numeric</option>
              <option value="alphanumeric">Alphanumeric</option>
              <option value="alphabetic">Alphabetic</option>
            </select>
            <ChevronDown className="select-icon" size={16} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            OTP DIGIT LIMIT <span className="required">*</span>
          </label>
          <div className="select-container">
            <select 
              className="form-select"
              value={otpDigitLimit}
              onChange={(e) => setOtpDigitLimit(e.target.value)}
            >
              <option value="">--</option>
              <option value="4">4 digits</option>
              <option value="6">6 digits</option>
              <option value="8">8 digits</option>
            </select>
            <ChevronDown className="select-icon" size={16} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            OTP EXPIRE TIME <span className="required">*</span>
          </label>
          <div className="select-container">
            <select 
              className="form-select"
              value={otpExpireTime}
              onChange={(e) => setOtpExpireTime(e.target.value)}
            >
              <option value="">--</option>
              <option value="1">1 minute</option>
              <option value="2">2 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
            </select>
            <ChevronDown className="select-icon" size={16} />
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          <span className="save-icon">✓</span>
          Save
        </button>
      </div>

      <style jsx>{`
        .otp-container {
          padding: 20px;
          background-color: #f8f9fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .otp-card {
          background: white;
          border-radius: 8px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        }

        .otp-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 32px 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .form-group {
          margin-bottom: 24px;
          display: inline-block;
          width: 48%;
          margin-right: 4%;
        }

        .form-group:nth-child(even) {
          margin-right: 0;
        }

        .form-group:last-of-type {
          width: 48%;
          margin-right: 0;
          display: block;
        }

        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .required {
          color: #ef4444;
        }

        .select-container {
          position: relative;
          width: 100%;
        }

        .form-select {
          width: 100%;
          height: 48px;
          padding: 0 40px 0 16px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background: white;
          font-size: 14px;
          color: #9ca3af;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .form-select:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.1);
        }

        .form-select:hover {
          border-color: #9ca3af;
        }

        .select-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
        }

        .save-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.2s ease;
          margin-top: 32px;
          height: 40px;
        }

        .save-button:hover {
          background: #5855eb;
        }

        .save-button:active {
          background: #4f46e5;
        }

        .save-icon {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .otp-container {
            padding: 16px;
          }
          
          .otp-card {
            padding: 24px;
            max-width: 100%;
          }

          .form-group {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
          }

          .form-group:last-of-type {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default OTPComponent;