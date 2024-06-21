import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_1, URL_MARKER_2, points } from './points';

type MapProps = {
  selectedPointId: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_1,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_2,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function CityMap(props: MapProps): JSX.Element {
  const { selectedPointId } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const selectedPoint = points.find((point) => point.id === selectedPointId);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, selectedPointId]);

  return (<section style={{height: '100%'}} ref={mapRef}></section>);
}

export default CityMap;
