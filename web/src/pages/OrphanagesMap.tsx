import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowDownRight } from 'react-icons/fi';
import { Map, TileLayer, Marker , Popup} from 'react-leaflet';

import mapMarkerImg from '../asserts/img/map-marker.svg';

import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
return(
  <div id="page-map">
    <aside>
        <header>
            <img src={mapMarkerImg} alt="Happy" />

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua  visita :) </p>
        </header>

        <footer>
            <strong>Brasília</strong>
            <span>Distrito Federal</span>
        </footer>
    </aside>

    <Map 
      center={[-15.7477279,-48.0731581]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    > 

      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker 
        icon={mapIcon}
        position={[-15.7477279,-48.0731581]}
      >
        <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
          Lar das crianças
          <Link to="/orphanage/1">
            <FiArrowDownRight size={20} color="#fff" />
          </Link>
        </Popup>
      </Marker>
    </Map>

    <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
    </Link>

  </div>
  );
}

export default OrphanagesMap;