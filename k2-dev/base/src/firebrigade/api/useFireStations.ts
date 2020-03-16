import { useEffect, useState } from 'react';
import client from '@k2-packages/client';
import { IFireStation } from '../types';

export default function useFireStations(coords: [number, number]): IFireStation[] | undefined {
  const [fireStations, setFireStations] = useState<IFireStation[]>();
  useEffect(() => {
    const serializedCoords = coords.join(encodeURIComponent(','));
    client.get<IFireStation[]>(`/places?near${serializedCoords}`)
      .then(response => setFireStations(response));
  }, [coords]);
  return fireStations;
}
