import React, { useState } from 'react';
import { Mail, MessageSquare, Bell } from 'lucide-react';

const NotificationAlert = () => {
  const [activeTab, setActiveTab] = useState('mail');
  const [formData, setFormData] = useState({
    mail: {
      orderPending: { enabled: false, message: 'Your order is successfully placed. Your order will be delivered in 5-7 working days.' },
      orderConfirmation: { enabled: false, message: 'Your order is being packed and ready to be dispatched.' },
      orderOnTheWay: { enabled: false, message: 'Your order is on the way.' },
      orderDelivered: { enabled: false, message: 'Your order is successfully delivered.' },
      orderCancelled: { enabled: false, message: 'Your order is cancelled.' },
      orderRejected: { enabled: false, message: 'Your order is rejected.' },
      adminNewOrder: { enabled: false, message: 'You have a new order.' }
    },
    sms: {
      orderPending: { enabled: false, message: 'Your order is successfully placed. Your order will be delivered in 5-7 working days.' },
      orderConfirmation: { enabled: false, message: 'Your order is being packed and ready to be dispatched.' },
      orderOnTheWay: { enabled: false, message: 'Your order is on the way.' },
      orderDelivered: { enabled: false, message: 'Your order is successfully delivered.' },
      orderCancelled: { enabled: false, message: 'Your order is cancelled.' },
      orderRejected: { enabled: false, message: 'Your order is rejected.' },
      adminNewOrder: { enabled: false, message: 'You have a new order.' }
    },
    push: {
      orderPending: { enabled: false, message: 'Your order is successfully placed. Your order will be delivered in 5-7 working days.' },
      orderConfirmation: { enabled: false, message: 'Your order is being packed and ready to be dispatched.' },
      orderOnTheWay: { enabled: false, message: 'Your order is on the way.' },
      orderDelivered: { enabled: false, message: 'Your order is successfully delivered.' },
      orderCancelled: { enabled: false, message: 'Your order is cancelled.' },
      orderRejected: { enabled: false, message: 'Your order is rejected.' },
      adminNewOrder: { enabled: false, message: 'You have a new order.' }
    }
  });

  const handleToggle = (type, field) => {
    setFormData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: {
          ...prev[activeTab][field],
          enabled: !prev[activeTab][field].enabled
        }
      }
    }));
  };

  const handleMessageChange = (type, field, message) => {
    setFormData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: {
          ...prev[activeTab][field],
          message: message
        }
      }
    }));
  };

  const handleSave = () => {
    console.log('Saving notification settings:', formData);
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case 'mail': return 'MAIL NOTIFICATION MESSAGES';
      case 'sms': return 'SMS NOTIFICATION MESSAGES';
      case 'push': return 'PUSH NOTIFICATION MESSAGES';
      default: return 'MAIL NOTIFICATION MESSAGES';
    }
  };

  const renderMessageForm = () => {
    const currentData = formData[activeTab];
    
    return (
      <div className="message-form">
        <h2 className="form-title">{getTabTitle()}</h2>
        
        <div className="message-grid">
          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order Pending Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderPending.enabled}
                  onChange={() => handleToggle(activeTab, 'orderPending')}
                />
                <span className="toggle-status">
                  {currentData.orderPending.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderPending.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderPending', e.target.value)}
              rows="3"
            />
          </div>

          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order Confirmation Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderConfirmation.enabled}
                  onChange={() => handleToggle(activeTab, 'orderConfirmation')}
                />
                <span className="toggle-status">
                  {currentData.orderConfirmation.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderConfirmation.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderConfirmation', e.target.value)}
              rows="3"
            />
          </div>

          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order On The Way Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderOnTheWay.enabled}
                  onChange={() => handleToggle(activeTab, 'orderOnTheWay')}
                />
                <span className="toggle-status">
                  {currentData.orderOnTheWay.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderOnTheWay.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderOnTheWay', e.target.value)}
              rows="2"
            />
          </div>

          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order Delivered Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderDelivered.enabled}
                  onChange={() => handleToggle(activeTab, 'orderDelivered')}
                />
                <span className="toggle-status">
                  {currentData.orderDelivered.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderDelivered.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderDelivered', e.target.value)}
              rows="2"
            />
          </div>

          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order Cancelled Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderCancelled.enabled}
                  onChange={() => handleToggle(activeTab, 'orderCancelled')}
                />
                <span className="toggle-status">
                  {currentData.orderCancelled.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderCancelled.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderCancelled', e.target.value)}
              rows="2"
            />
          </div>

          <div className="message-group">
            <div className="message-header">
              <label className="message-label">Order Rejected Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.orderRejected.enabled}
                  onChange={() => handleToggle(activeTab, 'orderRejected')}
                />
                <span className="toggle-status">
                  {currentData.orderRejected.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.orderRejected.message}
              onChange={(e) => handleMessageChange(activeTab, 'orderRejected', e.target.value)}
              rows="2"
            />
          </div>

          <div className="message-group full-width">
            <div className="message-header">
              <label className="message-label">Admin And Manager New Order Message</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  checked={currentData.adminNewOrder.enabled}
                  onChange={() => handleToggle(activeTab, 'adminNewOrder')}
                />
                <span className="toggle-status">
                  {currentData.adminNewOrder.enabled ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
            <textarea
              className="message-textarea"
              value={currentData.adminNewOrder.message}
              onChange={(e) => handleMessageChange(activeTab, 'adminNewOrder', e.target.value)}
              rows="2"
            />
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          <span className="save-icon">✓</span>
          SAVE
        </button>
      </div>
    );
  };

  return (
    <div className="notification-alert-container">
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'mail' ? 'active' : ''}`}
          onClick={() => setActiveTab('mail')}
        >
          <Mail size={16} />
          MAIL
        </button>
        <button 
          className={`tab-button ${activeTab === 'sms' ? 'active' : ''}`}
          onClick={() => setActiveTab('sms')}
        >
          <MessageSquare size={16} />
          SMS
        </button>
        <button 
          className={`tab-button ${activeTab === 'push' ? 'active' : ''}`}
          onClick={() => setActiveTab('push')}
        >
          <Bell size={16} />
          PUSH NOTIFICATION
        </button>
      </div>

      {renderMessageForm()}

      <style jsx>{`
        .notification-alert-container {
          background-color: #f8f9fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .tab-navigation {
          display: flex;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 0;
          margin: 0;
        }

        .tab-button {
          background: #f8f9fa;
          border: none;
          padding: 16px 24px;
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          border-radius: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tab-button:hover {
          background: #e5e7eb;
        }

        .tab-button.active {
          background: #6366f1;
          color: white;
        }

        .message-form {
          background: white;
          padding: 32px;
          margin: 0;
        }

        .form-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 32px 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .message-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        .message-group {
          display: flex;
          flex-direction: column;
        }

        .message-group.full-width {
          grid-column: 1 / -1;
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .message-label {
          font-size: 12px;
          font-weight: 500;
          color: #6b7280;
          text-transform: capitalize;
        }

        .toggle-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toggle-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .toggle-status {
          font-size: 12px;
          font-weight: 500;
          color: #6b7280;
          min-width: 24px;
        }

        .message-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
          color: #6b7280;
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
          line-height: 1.4;
        }

        .message-textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.1);
        }

        .save-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .save-button:hover {
          background: #5855eb;
        }

        .save-button:active {
          background: #4f46e5;
        }

        .save-icon {
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .tab-navigation {
            flex-direction: column;
          }
          
          .tab-button {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
          }

          .message-form {
            padding: 20px;
          }

          .message-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .message-group.full-width {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationAlert;