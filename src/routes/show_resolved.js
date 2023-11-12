import React, { useState } from 'react';

function ShowResolved({ showResolved, setShowResolved }) {
  return (
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
  );
}

export default ShowResolved;
