import React from 'react';
import './config/list_display.css';

function ListDisplay({ shoppingLists, showArchived, archiveList, deleteList, isOwner }) {
  return (
    <div>
      {shoppingLists.filter(list => showArchived || !list.archived).map(list => (
        <div key={list.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${list.archived ? 'archived' : ''}`}>
          <span>{list.name}</span>
          <div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => console.log('Open List')}>Open</button>
            {isOwner && (
              <>
                <button className="btn btn-sm btn-outline-secondary ml-2" onClick={() => archiveList(list.id)}>Archive</button>
                <button className="btn btn-sm btn-outline-danger ml-2" onClick={() => deleteList(list.id)}>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListDisplay;
