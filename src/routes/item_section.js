import React, { useState } from 'react';
import './config/item_section.css';

class Item {
  constructor(name, archived) {
    this.name = name;
    this.archived = archived;
  }
}

function ItemSection({ showResolved }) {
    const items = [new Item("Item 1", false), new Item("Item 2", true), new Item("Item 3", false)];
  
    const displayedItems = showResolved ? items : items.filter(item => !item.archived);
  
    return (
      <div className="items-section">
        {displayedItems.map(item => (
          <div key={item.name} className="d-flex justify-content-between align-items-center mb-2">
            <span>{item.name}</span>
            <div>
              {!item.archived && <button className="btn btn-primary btn-sm owner-btn" /** TODO: add callback to archive item */>Mark as Resolved</button>}
              <button className="btn btn-danger btn-sm ml-2 owner-btn" /** TODO: add callback to remove item */>Remove</button>
            </div>
          </div>
        ))}
  
        <div className="mt-3">
          <label>Add Item:</label>
          <input type="text" placeholder="Enter item name" /** TODO: add callback to add item on enter key press *//>
        </div>
      </div>
    );
  }

export default ItemSection;
