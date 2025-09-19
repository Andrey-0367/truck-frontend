'use client';

import { GeolocationControl, Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { JSX } from 'react';

export const YandexMapUI = (): JSX.Element => {
  return (
    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
      <Map
        height="400px"
        width="100%"
        options={{
          autoFitToViewport: 'none',
        }}
        defaultState={{
          center: [56.019247, 37.955254],
          zoom: 14,
        }}
      >
        <ZoomControl />
        <GeolocationControl options={{ float: 'right' }} />
        <Placemark
          defaultGeometry={[56.019247, 37.955254]}
          properties={{ iconCaption: 'TruckCompany' }}
        />
      </Map>
    </YMaps>
  );
};

export const YandexMap = (): JSX.Element => {
  return <YandexMapUI />;
};