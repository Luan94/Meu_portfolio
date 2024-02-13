// src/components/HomePage/Banner.js
import React from 'react';
import './banner.css'; // Importe o arquivo de estilos

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-background"></div>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Seu Nome</h1>
        <h2>Desenvolvedor Web Full Stack</h2>
        <p>Construindo soluções web incríveis para transformar ideias em realidade</p>
      </div>
    </div>
  );
};

export default Banner;
