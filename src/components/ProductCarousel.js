import React from 'react';
import '../App.css';
import main from '../assets/images/main.jpg';


const MainBanner = () => {
  return (
    <div className="wrapper">
    <div className="fullscreen-image">
      <img src = {main} alt="main" />
      </div>
    </div>
  );
};

export default MainBanner;
