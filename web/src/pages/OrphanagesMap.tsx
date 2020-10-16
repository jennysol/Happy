import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowDownRight } from 'react-icons/fi';
import { Map, TileLayer, Marker , Popup} from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

import mapMarkerImg from '../asserts/img/map-marker.svg';

import '../styles/pages/orphanages-map.css';

import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);
  
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

       {orphanages.map(orphanage => {
         return (
          <Marker 
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowDownRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
         )
       })}
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
          <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;