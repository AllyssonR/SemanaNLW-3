import React from "react";
import mapMarkerImg from "../images/Map_marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/Orphanages-map.css";
function OrphanagesMap() {  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>muitas crianças estão esperando por uma visita :)</p>
        </header>

        <footer>
          <strong>Ribeirao Preto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <div></div>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
