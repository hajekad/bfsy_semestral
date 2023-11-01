import React from 'react';

function Login({ setActiveRoute }) {
  React.useEffect(() => {
    setActiveRoute('login');
  }, [setActiveRoute]);

  return (
    <div>
      {/* Insert actual content here */}
      This is the Login page.
    </div>
  );
}

export default Login;
