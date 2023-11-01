import React, { useState } from 'react';
import './config/shopping_list.css';

function ShoppingListDetail() {
  const [showResolved, setShowResolved] = useState(false);

  return (
    <div className="container mt-5">
      <div className="list-header">
        <h4>Shopping List Name</h4>
        <button className="btn btn-secondary btn-sm">Edit[owner]</button>
      </div>
      
      <div className="member-section">
        <div className="mb-2">
          <label>Add member:</label>
          <input type="text" placeholder="xxxxxx" />
          <span className="owner-tag">[owner]</span>
        </div>
        <div>
          Members: 
          <span>User1 (owner)</span>
          <span>User2 <button className="btn btn-danger btn-sm ml-2">Delete[owner]</button></span>
          <button className="btn btn-warning btn-sm ml-2">Leave shopping list [if not owner]</button>
        </div>
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
              <button className="btn btn-primary btn-sm">Mark as Resolved</button>
              <button className="btn btn-danger btn-sm ml-2">Remove</button>
            </div>
          </div>
        ))}

        <div className="mt-3">
          <label>Add Item:</label>
          <input type="text" placeholder="xxxxxx" />
        </div>
      </div>

      <a href="/shopping-list" className="btn btn-secondary btn-sm">Back to Shopping Lists</a>
      <div className="mt-2">
        <code>/shopping-list/:listId</code>
      </div>
    </div>
  );
}

export default ShoppingListDetail;
