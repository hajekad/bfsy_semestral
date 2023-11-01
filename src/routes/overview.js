import React from 'react';

function Overview({ setActiveRoute }) {
  React.useEffect(() => {
    setActiveRoute('overview');
  }, [setActiveRoute]);

  return (
    <div>
      {/* Insert actual content here */}
      This is the Overview page.
    </div>
  );
}

export default Overview;
