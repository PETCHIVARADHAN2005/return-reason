import React, { useState } from 'react';
import { X, AlertCircle, Eye, Edit, Trash2, Plus } from 'lucide-react';
import './Pages.css';

const PagesComponent = () => {
  const [reasons, setReasons] = useState([
    {
      id: 1,
      title: 'Benefits',
      details: 'Advantages,perks or positive outcomes gained from a product',
      status: 'Active',
    },
  ]);

  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [currentReason, setCurrentReason] = useState({
    id: null,
    title: '',
    details: '',
    status: 'Active',
  });
  const [deleteId, setDeleteId] = useState(null);

  const handleAdd = () => {
    setCurrentReason({
      id: null,
      title: '',
      details: '',
      status: 'Active',
    });
    setShowAddEdit(true);
  };

  const handleEdit = (reason) => {
    setCurrentReason(reason);
    setShowAddEdit(true);
  };

  const handleView = (reason) => {
    setCurrentReason(reason);
    setShowView(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleSave = () => {
    if (currentReason.id) {
      setReasons(reasons.map((r) => (r.id === currentReason.id ? currentReason : r)));
    } else {
      const newReason = {
        ...currentReason,
        id: Math.max(...reasons.map((r) => r.id), 0) + 1,
      };
      setReasons([...reasons, newReason]);
    }
    setShowAddEdit(false);
  };

  const handleDelete = () => {
    setReasons(reasons.filter((r) => r.id !== deleteId));
    setShowDelete(false);
    setDeleteId(null);
  };

  const handleCancel = () => {
    setShowAddEdit(false);
    setShowView(false);
    setShowDelete(false);
    setDeleteId(null);
  };

  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 70px)', padding: '24px' }}>
      <div className="main-card">
        <div className="header">
          <h1>Pages</h1>
          <button onClick={handleAdd} className="add-btn">
            <div className="add-icon">
              <Plus size={20} />
            </div>
            Add
          </button>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Descriptions</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reasons.map((reason) => (
                <tr key={reason.id}>
                  <td>{reason.title}</td>
                  <td>{reason.details}</td>
                  <td>
                    <span className={`status-badge ${reason.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                      {reason.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => handleView(reason)} className="action-btn view-btn">
                        <Eye size={16} />
                      </button>
                      <button onClick={() => handleEdit(reason)} className="action-btn edit-btn">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDeleteClick(reason.id)} className="action-btn delete-btn">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="footer">
          Showing 1 to {reasons.length} of {reasons.length} entries
        </div>
      </div>

      {showAddEdit && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit Attribute</h2>
              <button onClick={handleCancel} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="modal-content">
              <div className="form-group">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  value={currentReason.title}
                  onChange={(e) => setCurrentReason({ ...currentReason, title: e.target.value })}
                  className="form-input"
                  placeholder="Defective Product"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <div className="radio-group">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={currentReason.status === 'Active'}
                      onChange={(e) => setCurrentReason({ ...currentReason, status: e.target.value })}
                      className="radio-input"
                    />
                    Active
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={currentReason.status === 'Inactive'}
                      onChange={(e) => setCurrentReason({ ...currentReason, status: e.target.value })}
                      className="radio-input"
                    />
                    Inactive
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Details</label>
                <textarea
                  value={currentReason.details}
                  onChange={(e) => setCurrentReason({ ...currentReason, details: e.target.value })}
                  className="form-textarea"
                  placeholder="Product arrived damaged or not functioning"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={handleSave} className="btn btn-primary">
                ✓ Save
              </button>
              <button onClick={handleCancel} className="btn btn-secondary">
                ⊗ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showView && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>View Attribute</h2>
              <button onClick={handleCancel} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="modal-content">
              <div className="view-field">
                <div className="view-label">Title :</div>
                <div className="view-value">{currentReason.title}</div>
              </div>

              <div className="view-field">
                <div className="view-label">Status :</div>
                <div className={`view-value view-status ${currentReason.status.toLowerCase()}`}>
                  {currentReason.status}
                </div>
              </div>

              <div className="view-field">
                <div className="view-label">Details :</div>
                <div className="view-value">{currentReason.details}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDelete && (
        <div className="modal-overlay">
          <div className="modal delete-modal">
            <div className="delete-content">
              <div className="warning-icon">
                <AlertCircle size={32} />
              </div>

              <h3 className="delete-title">Are you sure ?</h3>

              <p className="delete-message">
                You will not be able to recover the deleted record!
              </p>

              <div className="delete-buttons">
                <button onClick={handleDelete} className="btn btn-primary">
                  Yes, Delete it !
                </button>
                <button onClick={handleCancel} className="btn btn-secondary">
                  No, Cancel !
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesComponent;