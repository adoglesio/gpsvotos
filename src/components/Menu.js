// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaClipboardList, FaInfoCircle } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <FaHome size={24} />
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/cadastro" className="menu-link">
            <FaUser size={24} />
            Cadastro
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/relatorio" className="menu-link">
            <FaClipboardList size={24} />
            Relatório
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/desenvolvedor" className="menu-link">
            <FaUser size={24} />
            Desenvolvedor
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sobre" className="menu-link">
            <FaInfoCircle size={24} />
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
