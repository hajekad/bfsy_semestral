import React from 'react';

function CreateListButton({ onCreateNewList }) {
  return (
    <div className="mt-4 mb-3">
      <button className="btn btn-primary" onClick={onCreateNewList}>Create new shopping list</button>
    </div>
  );
}

export default CreateListButton;