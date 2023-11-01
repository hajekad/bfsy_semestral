import React from 'react';

function ShoppingList({ setActiveRoute }) {
  React.useEffect(() => {
    setActiveRoute('shopping_list');
  }, [setActiveRoute]);

  return (
    <div>
      {/* Insert actual content here */}
      This is the Shopping List page.
    </div>
  );
}

export default ShoppingList;
