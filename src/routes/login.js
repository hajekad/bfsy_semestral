import React from 'react';
import './config/login.css';  // Assuming App.css contains the sakura theme CSS

function Login({ setActiveRoute }) {
  React.useEffect(() => {
    setActiveRoute('login');
  }, [setActiveRoute]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <div className="card sakura-card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn sakura-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
