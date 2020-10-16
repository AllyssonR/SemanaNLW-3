import React from 'react';
import '../styles/pages/landing.css';
import Logoimg from'../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom';
function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={Logoimg} alt="Happy"/>
        <main>
          <h1>Leve Felicidade ao mundo</h1>
          <p>Visite orfanatos e mude a vida de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Ribeirão Preto</strong>
          <span>São Paulo</span>
        </div>
        <Link to="#" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>
      </div>
    </div>
  );
}

export default Landing;