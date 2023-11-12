import React, { useState } from 'react';
import './config/shopping_list.css';
import ShoppingListHeader from './shopping_list_header';
import Members from './members';
import ItemSection from './item_section';

function ShoppingListDetail() {
  const [owner, setOwner] = useState(false);
  const [showResolved, setShowResolved] = useState(false);

  return (
    <div className="container mt-5">
      <ShoppingListHeader owner={owner} />

      <Members owner={owner} />

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

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="ownerCheckbox"
          onChange={() => setOwner(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="showResolvedCheckbox">
          I am owner (TODO: remove on addition of user management)
        </label>
      </div>

      <ItemSection showResolved={showResolved} />

      <a href="/shopping-list" className="btn btn-secondary btn-sm">Back to Shopping Lists</a>
    </div>
  );
}

export default ShoppingListDetail;
