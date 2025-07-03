'use client';
import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';

export default function Map({ property }) {
  // console.log(process.env.NEXT_PUBLIC_MAPTILER_API_KEY);
  console.log(process.env.MAPTILER_API_KEY);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const RD = { lng: -69.9312, lat: 18.4861 };
  const zoom = 14;
  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [RD.lng, RD.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: '#FF0000' })
      .setLngLat([-69.9312, 18.4861])
      .addTo(map.current);
  }, [RD.lng, RD.lat, zoom]);

  return (
    <div className='map-wrap'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}
