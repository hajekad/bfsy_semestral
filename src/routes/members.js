import React, { useState } from 'react';
import './config/members.css';

function Members({ owner }) {
  return (
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
        <span className="user">User2 {owner && <button className="btn btn-danger btn-sm ml-2 owner-btn" /** TODO: add callback to remove user from list */>Delete</button>}</span>
      </div>
      {!owner && <button className="btn btn-warning btn-sm ml-2 owner-btn" /** TODO: add callback to leave list */>Leave shopping list</button>}
    </div>
  );
}

export default Members;