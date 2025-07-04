'use client';
import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';

export default function Map({ property }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 14;

  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  useEffect(() => {
    // Verificamos que haya latitud y longitud válidas
    console.log(property);
    if (
      !property?.location?.latitud ||
      !property?.location?.longitude
    ) {
      console.warn('No hay coordenadas disponibles para esta propiedad');
      return;
    }

    const lat = property.location.latitud;
    const lng = property.location.longitude;

    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [lng, lat],
        zoom: zoom,
      });

      new maptilersdk.Marker({ color: '#FF0000' })
        .setLngLat([lng, lat])
        .addTo(map.current);
    }
  }, [property]);

  return (
    <div className='map-wrap'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}