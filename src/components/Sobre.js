import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
  minHeight: '100vh',
};

const cardStyle = {
  width: '18rem',

};
const imgStyle = {
    width: '100%', 
    height: 'auto',

};

function CardExample() {
  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src="/logo192.png" alt="Card image" style={imgStyle} />
        <Card.Body>
          <Card.Title>Olá</Card.Title>
          <Card.Text>
            O projeto GPSVotos foi desenvolvido a pedido de um candidato para ajudar na gestão de informações sobre eleitores durante as visitas.
            O objetivo é fornecer uma visão detalhada das necessidades dos eleitores em seus bairros e residências, incluindo requisitos específicos
            relacionados a atendimento hospitalar e outros serviços essenciais. Com o GPSVotos, o candidato pode mapear as áreas de interesse,
            organizar visitas e otimizar estratégias de campanha com base nas informações coletadas diretamente dos eleitores. A ferramenta visa
            melhorar a comunicação e garantir que as necessidades da comunidade sejam atendidas de maneira eficiente e eficaz.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
