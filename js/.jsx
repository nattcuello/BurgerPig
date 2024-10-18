import React from 'react';
import './styles.css';

function LoginPage() {
  return (
    <div className="login-page">
      <img className="background-image" src="https://via.placeholder.com/390x844" alt="Background" />
      <img className="logo" src="https://via.placeholder.com/318x218" alt="Logo" />
      <img className="banner" src="https://via.placeholder.com/348x224" alt="Banner" />

      <div className="login-container">
        <div className="login-title">LOGIN</div>
        <div className="input-group">
          <label htmlFor="email">USUARIO</label>
          <input type="text" id="email" placeholder="usuario@gmail.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">CONTRASEÑA</label>
          <input type="password" id="password" placeholder="********" />
        </div>
        <div className="button-group">
          <button className="btn-menu">VOLVER AL MENU</button>
          <button className="btn-login">Ingresar</button>
        </div>
        <div className="extra-options">
          <a href="#" className="forgot-password">Olvidé mi contraseña</a> / 
          <a href="#" className="register">Registrarme</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
