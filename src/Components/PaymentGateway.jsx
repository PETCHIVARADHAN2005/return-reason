import React, { useState } from 'react';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const [activeTab, setActiveTab] = useState('RAZORPAY');
  const [razorpayData, setRazorpayData] = useState({
    key: '',
    secret: '',
    status: '',
    mode: ''
  });
  const [phonePeData, setPhonePeData] = useState({
    merchantId: '',
    merchantUserId: '',
    phoneKeyIndex: '',
    phonePeKey: '',
    status: '',
    mode: ''
  });
  const [paytmData, setPaytmData] = useState({
    merchantId: '',
    merchantKey: '',
    merchantWebsite: '',
    channel: '',
    industryType: '',
    mode: '',
    status: ''
  });

  const paymentProviders = [
    'SSLCOMMERZ', 'MOLLIE', 'SENANGPAY', 'BCASH', 'MERCADOPAGO', 
    'CASHFREE', 'PAYFAST', 'SKRILL', 'IYZICO', 'TELR', 'PESAPAL', 'MIDTRANS'
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'RAZORPAY':
        return (
          <div className="tab-content">
            <h2>RAZORPAY</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>RAZORPAY KEY</label>
                <input
                  type="text"
                  value={razorpayData.key}
                  onChange={(e) => setRazorpayData({...razorpayData, key: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>RAZORPAY SECRET</label>
                <input
                  type="text"
                  value={razorpayData.secret}
                  onChange={(e) => setRazorpayData({...razorpayData, secret: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>RAZORPAY STATUS</label>
                <div className="select-wrapper">
                  <select
                    value={razorpayData.status}
                    onChange={(e) => setRazorpayData({...razorpayData, status: e.target.value})}
                  >
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>RAZORPAY MODE</label>
                <div className="select-wrapper">
                  <select
                    value={razorpayData.mode}
                    onChange={(e) => setRazorpayData({...razorpayData, mode: e.target.value})}
                  >
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">
              {/* <span className="save-icon">📁</span> */}
              ✓ Save
            </button>
          </div>
        );

      case 'PHONEPE':
        return (
          <div className="tab-content">
            <h2>PHONEPE</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>PHONEPE MERCHANT ID</label>
                <input
                  type="text"
                  value={phonePeData.merchantId}
                  onChange={(e) => setPhonePeData({...phonePeData, merchantId: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PHONEPE MERCHANT USER ID</label>
                <input
                  type="text"
                  value={phonePeData.merchantUserId}
                  onChange={(e) => setPhonePeData({...phonePeData, merchantUserId: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PHONE KEY INDEX</label>
                <input
                  type="text"
                  value={phonePeData.phoneKeyIndex}
                  onChange={(e) => setPhonePeData({...phonePeData, phoneKeyIndex: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PHONEPE KEY</label>
                <input
                  type="text"
                  value={phonePeData.phonePeKey}
                  onChange={(e) => setPhonePeData({...phonePeData, phonePeKey: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PHONEPE STATUS</label>
                <div className="select-wrapper">
                  <select
                    value={phonePeData.status}
                    onChange={(e) => setPhonePeData({...phonePeData, status: e.target.value})}
                  >
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>PHONEPE MODE</label>
                <div className="select-wrapper">
                  <select
                    value={phonePeData.mode}
                    onChange={(e) => setPhonePeData({...phonePeData, mode: e.target.value})}
                  >
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">
              {/* <span className="save-icon">📁</span> */}
              ✓ Save
            </button>
          </div>
        );

      case 'PAYTM':
        return (
          <div className="tab-content">
            <h2>PAYTM</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>PAYTM MERCHANT ID</label>
                <input
                  type="text"
                  value={paytmData.merchantId}
                  onChange={(e) => setPaytmData({...paytmData, merchantId: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PAYTM MERCHANT KEY</label>
                <input
                  type="text"
                  value={paytmData.merchantKey}
                  onChange={(e) => setPaytmData({...paytmData, merchantKey: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PAYTM MERCHANT WEBSITE</label>
                <input
                  type="text"
                  value={paytmData.merchantWebsite}
                  onChange={(e) => setPaytmData({...paytmData, merchantWebsite: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PAYTM CHANNEL</label>
                <input
                  type="text"
                  value={paytmData.channel}
                  onChange={(e) => setPaytmData({...paytmData, channel: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PAYTM INDUSTRY TYPE</label>
                <input
                  type="text"
                  value={paytmData.industryType}
                  onChange={(e) => setPaytmData({...paytmData, industryType: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>PAYTM MODE</label>
                <div className="select-wrapper">
                  <select
                    value={paytmData.mode}
                    onChange={(e) => setPaytmData({...paytmData, mode: e.target.value})}
                  >
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>PAYTM STATUS</label>
                <div className="select-wrapper">
                  <select
                    value={paytmData.status}
                    onChange={(e) => setPaytmData({...paytmData, status: e.target.value})}
                  >
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">
              {/* <span className="save-icon">📁</span> */}
              ✓ Save
            </button>
          </div>
        );

      case 'MORE_GATEWAY':
        return (
          <div className="tab-content">
            <div className="more-gateway-grid">
              <div className="gateway-list">
                <h3>PAYSTACK</h3>
                <div className="gateway-buttons">
                  {paymentProviders.map((provider, index) => (
                    <button
                      key={index}
                      className={`gateway-btn ${index === 0 ? 'active' : ''}`}
                      onClick={() => setActiveTab(provider)}
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'SSLCOMMERZ':
        return (
          <div className="tab-content">
            <h2>SSLCOMMERZ</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>SSLCOMMERZ STORE NAME</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>SSLCOMMERZ STORE ID</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>SSLCOMMERZ STORE PASSWORD</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>SSLCOMMERZ MODE</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>SSLCOMMERZ STATUS</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">
              {/* <span className="save-icon">📁</span> */}
             ✓ Save
            </button>
          </div>
        );

      case 'MIDTRANS':
        return (
          <div className="tab-content">
            <h2>MIDTRANS</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>MIDTRANS SERVER KEY</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>MIDTRANS MODE</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>MIDTRANS STATUS</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">
              {/* <span className="save-icon">📁</span> */}
              ✓ Save
            </button>
          </div>
        );

      default:
        return (
          <div className="tab-content">
            <h2>{activeTab}</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>{activeTab} API KEY</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>{activeTab} SECRET KEY</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>{activeTab} STATUS</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Status</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>{activeTab} MODE</label>
                <div className="select-wrapper">
                  <select>
                    <option value="">Select Mode</option>
                    <option value="Sandbox">Sandbox</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="save-btn">✓ Save</button>
          </div>
        );
    }
  };

  return (
    <div className="payment-gateway-container">
      <div className="tabs-header">
        <button
          className={`tab ${activeTab === 'RAZORPAY' ? 'active' : ''}`}
          onClick={() => setActiveTab('RAZORPAY')}
        >
          RAZORPAY
        </button>
        <button
          className={`tab ${activeTab === 'PHONEPE' ? 'active' : ''}`}
          onClick={() => setActiveTab('PHONEPE')}
        >
          PHONEPE
        </button>
        <button
          className={`tab ${activeTab === 'PAYTM' ? 'active' : ''}`}
          onClick={() => setActiveTab('PAYTM')}
        >
          PAYTM
        </button>
        <button
          className={`tab ${activeTab === 'MORE_GATEWAY' ? 'active' : ''}`}
          onClick={() => setActiveTab('MORE_GATEWAY')}
        >
          <span className="dropdown-arrow">▼</span> MORE GATEWAY
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default PaymentGateway;