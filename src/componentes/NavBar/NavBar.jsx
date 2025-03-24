import React from 'react'
import CarWidget from '../CarWidget/CarWidget'
import './NavBar.css'

const NavBar = () => {
  const logo = "https://static.vecteezy.com/system/resources/previews/045/593/130/non_2x/esport-ape-logo-free-png.png";
  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <h1 className="h4 m-0">Tienda</h1>
        </div>


        <div className="d-flex align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark nav-hover" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark nav-hover" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark nav-hover" href="#">Contacto</a>
            </li>
          </ul>

          <div className="ms-3">
            <CarWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;