import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../asserts/img/map-marker.svg';

import 'leaflet/dist/leaflet.css';
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
        </Map>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#fff" />
        </Link>

    </div>
  );
}

export default OrphanagesMap;