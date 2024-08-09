import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Desenvolvedor = () => {
  return (
    <div className="desenvolvedor-container">
      <h1>Sobre o Desenvolvedor</h1>
      <p>Olá! Eu sou Adoglésio Gomes, desenvolvedor web. Aqui estão minhas redes sociais:</p>
      <div className="social-links">
        <a
          href="https://www.instagram.com/adoglesiog/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram size={30} />
          Instagram
        </a>
        <a
          href="https://wa.me/5573999257758"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp size={30} />
          WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/adogl%C3%A9siogomes/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={30} />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Desenvolvedor;
