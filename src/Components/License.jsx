import React, { useState } from 'react';
import './License.css';

const License = () => {
  const [licenseKey, setLicenseKey] = useState('Shiralure');

  const handleSave = () => {
    console.log('License key saved:', licenseKey);
    // Add your save logic here
  };

  return (
    <div className="license-container">
      <div className="license-card">
        <h2 className="license-title">License</h2>
        
        <div className="license-form">
          <label htmlFor="licenseKey" className="license-label">
            License Key
          </label>
          <input
            type="text"
            id="licenseKey"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            className="license-input"
            placeholder="Enter your license key"
          />
        </div>
        
        <div className="license-actions">
          <button onClick={handleSave} className="save-button">
            <svg className="save-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default License;