import { useEffect, useState } from 'react';
import client from '@k2-packages/client';
import { IFireStation } from '../types';

interface MVPFireStation {
  id: number;
  name: string;
  contacts: string;
  address: string;
  distance: number;
  duration: number;
  coordinates: [number, number];
  waterTenders: number;
}

// While backend work in MVP mode response need to fix
function convertResponse(response: MVPFireStation): IFireStation {
  return {
    id: response.id,
    name: response.name,
    meters: response.distance,
    minutes: response.duration,
    contacts: response.contacts.split(',').filter(c => c !== ''),
    units: [{
      type: 'Цистерны',
      count: response.waterTenders,
    }],
  };
}

export default function useFireStations(
  coords: [number, number] | undefined,
): IFireStation[] | undefined {
  const [fireStations, setFireStations] = useState<IFireStation[]>();
  useEffect(() => {
    if (coords === undefined) return;
    const serializedCoords = coords.join(encodeURIComponent(','));
    client.get<MVPFireStation[]>(`/kcfirebrigade/places?near=${serializedCoords}`)
      .then(response => {
        setFireStations(response.map(convertResponse));
      });
  }, [coords]);
  return fireStations;
}
