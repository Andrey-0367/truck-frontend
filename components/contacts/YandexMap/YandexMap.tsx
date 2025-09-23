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
          center: [55.961672, 37.932288],
          zoom: 14,
        }}
      >
        <ZoomControl />
        <GeolocationControl options={{ float: 'right' }} />
        <Placemark
          defaultGeometry={[55.961672, 37.932288]}
          properties={{ iconCaption: 'PALLADIUM' }}
        />
      </Map>
    </YMaps>
  );
};

export const YandexMap = (): JSX.Element => {
  return <YandexMapUI />;
};