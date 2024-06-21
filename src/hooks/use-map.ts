import { useEffect, useState, MutableRefObject, useRef, EffectCallback } from 'react';
import { Map, TileLayer } from 'leaflet';
import { points } from '../components/city-map/points';

const ZOOM = 13;

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const point = points[0];

  const effectCallback: EffectCallback = () => {
    const { lat, lng } = point;
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(
        mapRef.current,
        {
          center: { lat, lng },
          zoom: ZOOM
        }
      );

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.panTo({ lat, lng });
    }
  };

  useEffect(effectCallback, [mapRef, point, map]);

  return map;
}

export default useMap;
