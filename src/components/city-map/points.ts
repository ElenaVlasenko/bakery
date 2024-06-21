type Point = {
  id: number;
  title: string;
  lat: number;
  lng: number;
  marker: string;
};

export const URL_MARKER_1 =
  'img/content/map-marker1.svg';

export const URL_MARKER_2 =
  'img/content/map-marker2.svg';

export const points: Point[] = [
  {
    id: 1,
    title: 'Кондитерская 1',
    lat: 59.970969,
    lng: 30.316252,
    marker: URL_MARKER_2
  },
  {
    id: 2,
    title: 'Кондитерская 2',
    lat: 59.967947,
    lng: 30.274708,
    marker: URL_MARKER_2
  },
  {
    id: 3,
    title: 'Производство',
    lat: 59.960380,
    lng: 30.308725,
    marker: URL_MARKER_1
  },
];
