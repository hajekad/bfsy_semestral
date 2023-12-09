import React, { useState } from 'react';
import CreateListButton from './create_list_button';
import ShowToggle from './show_archived_toggle';
import ListDisplay from './list_display';
import './config/overview.css';

function ShoppingLists() {
  const [showArchived, setShowArchived] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const [shoppingLists, setShoppingLists] = useState([
    { id: 1, name: "List 1", archived: false },
    { id: 2, name: "List 2", archived: true },
    { id: 3, name: "List 3", archived: true },
  ]);

  const handleCreateNewList = () => {
    const newListName = prompt('Enter the name for the new shopping list');
    if (newListName) {
      const newList = {
        id: Math.max(...shoppingLists.map(list => list.id)) + 1, // Assigning a new unique id
        name: newListName,
        archived: false
      };
      setShoppingLists([...shoppingLists, newList]);
    }
  };

  const toggleIsOwner = () => setIsOwner(!isOwner);

  const archiveList = id => {
    if (isOwner) {
      setShoppingLists(currentLists =>
        currentLists.map(list =>
          list.id === id ? { ...list, archived: true } : list
        )
      );
    }
  };

  const deleteList = id => {
    if (isOwner) {
      setShoppingLists(currentLists =>
        currentLists.filter(list => list.id !== id)
      );
    }
  };

  return (
    <div className="container">
      <CreateListButton onCreateNewList={handleCreateNewList} />
      <ShowToggle show={isOwner} setShow={setIsOwner} text="Set owner"/>
      <ShowToggle show={showArchived} setShow={setShowArchived} text="Show archived" />
      <ListDisplay shoppingLists={shoppingLists} showArchived={showArchived} archiveList={archiveList} deleteList={deleteList} isOwner={isOwner} />
    </div>
  );
}

export default ShoppingLists;
