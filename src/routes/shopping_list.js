import React, { useState } from 'react';
import './config/shopping_list.css';

function ShoppingListDetail() {
  const [owner, member] = useState(true);
  const [showResolved, setShowResolved] = useState(false);

  return (
    <div className="container mt-5">
      <div className="list-header">
        <h4 className="list-title">Shopping List Name</h4>
        {owner && (<button className="btn btn-secondary btn-sm edit-button">Edit</button>)}
      </div>

      <div className="member-section">
        {owner &&
          <div className="mb-2">
            <label>Add member:</label>
            <input type="text" placeholder="xxxxxx" />
          </div>
        }
        <div>
          <span className="user">Other members:</span>
          <span className="user">User1 (owner)</span>
          <span className="user">User2 {owner && <button className="btn btn-danger btn-sm ml-2 owner-btn">Delete</button>}</span>
        </div>

        {member && <button className="btn btn-warning btn-sm ml-2 owner-btn">Leave shopping list</button>}
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="showResolvedCheckbox"
          onChange={() => setShowResolved(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="showResolvedCheckbox">
          Show resolved
        </label>
      </div>

      <div className="items-section">
        {['Item 1', 'Item 2', 'Item 3'].map(item => (
          <div key={item} className="d-flex justify-content-between align-items-center mb-2">
            <span>{item}</span>
            <div>
              <button className="btn btn-primary btn-sm owner-btn">Mark as Resolved</button>
              <button className="btn btn-danger btn-sm ml-2 owner-btn">Remove</button>
            </div>
          </div>
        ))}

        <div className="mt-3">
          <label>Add Item:</label>
          <input type="text" placeholder="xxxxxx" />
        </div>
      </div>

      <a href="/shopping-list" className="btn btn-secondary btn-sm">Back to Shopping Lists</a>
    </div>
  );
}

export default ShoppingListDetail;
