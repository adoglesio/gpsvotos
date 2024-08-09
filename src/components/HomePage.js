
import React from 'react';
import Image from 'react-bootstrap/Image';


function ImgLogo() {
  return <Image src="./logo512.png" fluid />;
}

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bem-vindo ao GPSVotos</h1>
      <ImgLogo />
     </div>
  );
};

export default HomePage;
