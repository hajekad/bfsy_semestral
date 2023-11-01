import React, { useState } from 'react';
import './config/overview.css';

function ShoppingLists() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="container">
      <div className="mt-4 mb-3">
        <button className="btn btn-primary">Create new shopping list</button>
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="showArchivedCheckbox"
          onChange={() => setShowArchived(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="showArchivedCheckbox">
          Show archived
        </label>
      </div>

      {/* Sample Lists */}
      <div className="mb-2">
        <div className="d-flex justify-content-between align-items-center">
          <span>List 1</span>
          <div>
            <button className="btn btn-secondary btn-sm">Open</button>
            <button className="btn btn-warning btn-sm owner-btn">Archive [Owner]</button>
            <button className="btn btn-danger btn-sm owner-btn">Delete [Owner]</button>
          </div>
        </div>
      </div>

      {showArchived && (
        <>
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span className="archived-text">List 2 (Archived)</span>
              <button className="btn btn-secondary btn-sm">Open</button>
            </div>
          </div>
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span className="archived-text">List 3 (Archived)</span>
              <button className="btn btn-secondary btn-sm">Open</button>
            </div>
          </div>
        </>
      )}

      <div className="mt-2">
        <code>/shopping-list</code>
      </div>
    </div>
  );
}

export default ShoppingLists;
