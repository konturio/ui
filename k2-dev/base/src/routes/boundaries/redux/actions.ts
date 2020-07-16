/* eslint-disable prettier/prettier */
import { createAction } from 'redux-act';
import { marker } from './types';

export const setSource = 
  createAction<{[prop: string]: any; id: string }>('map/setSource');

export const setPosition = 
  createAction<[number, number]>('map/set-position');

export const setBoundaries = 
  createAction<GeoJSON.FeatureCollection[]>('map/set-boundaries');

export const showBoundaries = 
  createAction<GeoJSON.FeatureCollection[]>('map/show-boundaries');

export const setMarker = 
    createAction<marker>('map/set-marker');

export const removeMarker = 
    createAction<string>('map/remove-marker');