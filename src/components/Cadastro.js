import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cadastros', formData); 
      alert('Cadastro enviado com sucesso!');
      setFormData({
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error);
      alert('Erro ao enviar cadastro. Por favor, tente novamente.');
    }
  };

  const handleSendToWhatsApp = () => {
    const texto = `
      Nome: ${formData.nome}
      Endereço: ${formData.endereco}
      Telefone: ${formData.telefone}
      Email: ${formData.email}
      Mensagem: ${formData.mensagem}
    `;

    const mensagem = encodeURIComponent(texto);
    const numeroWhatsApp = '';
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(url, '_blank');
  };

  const handleDownloadTXT = () => {
    const texto = `
      Nome: ${formData.nome}
      Endereço: ${formData.endereco}
      Telefone: ${formData.telefone}
      Email: ${formData.email}
      Mensagem: ${formData.mensagem}
    `;

    // Criar um Blob com o conteúdo
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    // Criar um link e simular um clique para baixar o arquivo
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cadastro.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='submit-button'>
          <button variant="button" onClick={handleSendToWhatsApp}>Enviar para WhatsApp</button>
          <button variant="button" onClick={handleDownloadTXT}>Baixar TXT</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
