import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const handeLogout = (e)=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Notes-app</Link>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {localStorage.getItem('token') == null && <form className="d-flex">
              <Link className="btn btn-primary-mx-2" to="/login" role="button">Log-in</Link>
              <Link className="btn btn-primary-mx-2" to="/signup" role="button">Sign-up</Link>
            </form>}
            {localStorage.getItem('token') && <button onClick={handeLogout} className="d-flex btn btn-primary-mx-2" >
              Log-out
          </button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;