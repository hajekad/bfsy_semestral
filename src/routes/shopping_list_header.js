import React, { useState } from 'react';
import './config/shopping_list_header.css';

function ShoppingListHeader({ owner }) {
  return (
    <div className="list-header">
      <h4 className="list-title">Shopping List Name</h4>
      {owner && (<button className="btn btn-secondary btn-sm edit-button" /** TODO: add callback to edit name */>Edit</button>)}
    </div>
  );
}

export default ShoppingListHeader;
