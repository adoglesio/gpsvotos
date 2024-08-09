import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const Relatorio = () => {
  const [cadastros, setCadastros] = useState([]);
  const [txtContent, setTxtContent] = useState('');

  useEffect(() => {
    const fetchCadastros = async () => {
      try {
        const response = await axios.get('/api/cadastros');
        setCadastros(response.data);
      } catch (error) {
        console.error('Erro ao buscar cadastros:', error);
      }
    };

    fetchCadastros();
  }, []);

  const handleFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    newFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        processFileContent(text);
      };
      reader.readAsText(file);
    });
  };

  const processFileContent = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const newCadastros = [];

    for (let i = 0; i < lines.length; i += 5) {
      if (lines[i]) {
        const nome = lines[i].replace('Nome: ', '').trim() || '';
        const endereco = lines[i + 1]?.replace('Endereço: ', '').trim() || '';
        const telefone = lines[i + 2]?.replace('Telefone: ', '').trim() || '';
        const email = lines[i + 3]?.replace('Email: ', '').trim() || '';
        const mensagem = lines[i + 4]?.replace('Mensagem: ', '').trim() || '';
        newCadastros.push({ nome, endereco, telefone, email, mensagem });
      }
    }

    setCadastros(prevCadastros => [...prevCadastros, ...newCadastros]);
    setTxtContent(prevTxtContent => prevTxtContent + '\n' + text); // Adicionar novo conteúdo ao existente
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const lines = txtContent.split('\n');
    lines.forEach((line, index) => {
      doc.text(line, 10, 10 + (index * 10));
    });
    doc.save('relatorio.pdf');
  };

  return (
    <div className="relatorio-container">
      <h1>Relatório de Cadastros</h1>
      <input
        type="file"
        accept=".txt"
        multiple
        onChange={handleFilesChange}
        style={{ marginTop: '20px' }}
      />
      <button onClick={exportToPDF} style={{ marginTop: '20px' }}>Salvar como PDF</button>
      <div className="txt-preview">
        <h2>Conteúdo do Arquivo TXT:</h2>
        <pre>{txtContent}</pre>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro, index) => (
            <tr key={index}>
              <td>{cadastro.nome}</td>
              <td>{cadastro.endereco}</td>
              <td>{cadastro.telefone}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio;
