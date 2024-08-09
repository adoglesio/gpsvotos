
import React from 'react';
import AboutCard from './AboutCard'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bem-vindo ao GPSVotos</h1>
      <AboutCard /> {/* Exibe o card com informações sobre o projeto */}
    </div>
  );
};

export default HomePage;
