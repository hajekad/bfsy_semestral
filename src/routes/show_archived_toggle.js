import React from 'react';
import './config/show_archived_toggle.css';

function ShowToggle({ show, setShow, text }) {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="showArchivedCheckbox"
        onChange={() => setShow(prev => !prev)}
        checked={show}
      />
      <label className="form-check-label" htmlFor="showArchivedCheckbox">
        {text}
      </label>
    </div>
  );
}

export default ShowToggle;
