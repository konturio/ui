/* eslint-disable prettier/prettier */
import { createAction } from 'redux-act';

export const setFoo = 
  createAction<string>('map/set-foo');

export const setPosition = 
  createAction<[number, number]>('map/set-position');

export const setBoundaries = 
  createAction<GeoJSON.FeatureCollection[]>('map/set-boundaries');