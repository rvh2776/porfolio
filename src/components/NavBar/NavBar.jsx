// import { useEffect } from 'react';
import './NavBar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export const NavBar = ({ onNavigate }) => {

    // useEffect(() => {
    //     const logo = document.querySelector('.logo');
    //     const typingDuration = 3500; // Duración en milisegundos, debe coincidir con la duración de la animación CSS
    
    //     const timer = setTimeout(() => {
    //       if (logo) {
    //         logo.style.borderRight = 'none'; // Elimina el cursor
    //         logo.style.animation = 'none'; // Detiene la animación de parpadeo
    //       }
    //     }, typingDuration);
    
    //     return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
    
    //   }, []);

  return (

      <nav className="navbar fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">

      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* <h2 className="logo mx-2 mt-1 text-start logo">Rafael Velazquez.</h2> */}
        <div className="logo-container">
            <h2 className="logo ms-2 pt-1">Rafael Velazquez.</h2>
        </div>
        <div className="d-flex justify-content-center flex-grow-1">
          <button className="btn btn-sm btn-outline-primary me-1 navbar-button"  onClick={() => onNavigate(0) } >FRONT</button>
          <button className="btn btn-sm btn-outline-warning mx-1 navbar-button" onClick={() => onNavigate(1)}>SKILLS</button>
          <button className="btn btn-sm btn-outline-success mx-1 navbar-button" onClick={() => onNavigate(3)}>PROJECTS</button>
          <button className="btn btn-sm btn-outline-info mx-1 navbar-button" onClick={() => onNavigate(7)}>BACK</button>
        </div>

        <div className="d-flex align-items-center">

          <a href="https://github.com/rvh2776" target="_blank" rel="noopener noreferrer" className="mx-2 navbar-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-velazquez-25a928165/" target="_blank" rel="noopener noreferrer" className="mx-2 navbar-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:rafael.vh@gmail.com" className="mx-2 navbar-icon">
            <FaEnvelope size={30} />
          </a>

        </div>
      </div>
      
    </nav>
  );
};