
type Contact = string;

interface IUnit {
  type: string;
  count: number;
}

export interface IFireStation {
  id: number;
  name: string;
  meters: number;
  minutes: number;
  contacts: Contact[];
  units: IUnit[];
}

export type bbox = [number, number, number, number];
export type center = [number, number];

interface ISelected {
  bounds: bbox;
  center: center;
}

export interface IFireBrigadeApp {
  selected: ISelected | null
}
