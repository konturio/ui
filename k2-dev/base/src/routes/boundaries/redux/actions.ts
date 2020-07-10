/* eslint-disable prettier/prettier */
import { createAction } from 'redux-act';

export const setFoo = 
  createAction<string>('map/set-foo');