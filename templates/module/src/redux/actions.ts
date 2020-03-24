import {
  CLEAR_LOADING_ERROR,
  START_LOADING,
  END_LOADING,
  T{{moduleName}}ActionTypes,
} from './types';


export function clearLoadingError(): T{{moduleName}}ActionTypes {
  return {
    type: CLEAR_LOADING_ERROR,
  };
}

export function startLoading(): T{{moduleName}}ActionTypes {
  return {
    type: START_LOADING,
  };
}

export function endLoading(): T{{moduleName}}ActionTypes {
  return {
    type: END_LOADING,
  };
}
