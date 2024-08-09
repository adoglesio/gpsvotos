import React from 'react';
import '../AboutCard.css';

const AboutCard = () => {
  return (
    <div className="about-card">
      <h2>Sobre o Projeto GPSVotos</h2>
      <p>
        O projeto GPSVotos foi desenvolvido a pedido de um candidato para ajudar na gestão de informações sobre eleitores durante as visitas.
        O objetivo é fornecer uma visão detalhada das necessidades dos eleitores em seus bairros e residências, incluindo requisitos específicos
        relacionados a atendimento hospitalar e outros serviços essenciais.
      </p>
      <p>
        Com o GPSVotos, o candidato pode mapear as áreas de interesse, organizar visitas e otimizar estratégias de campanha com base nas
        informações coletadas diretamente dos eleitores. A ferramenta visa melhorar a comunicação e garantir que as necessidades da comunidade
        sejam atendidas de maneira eficiente e eficaz.
      </p>
    </div>
  );
};

export default AboutCard;
