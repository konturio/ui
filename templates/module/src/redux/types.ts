export interface I{{moduleName}}State {
  foo: boolean;
  bar: null | string;
}

export const {{moduleName}}StateField = 'geocoderState';

export const SOME_ACTION = '{{moduleName}}/some-action';
export interface ISomeAction {
  type: typeof SOME_ACTION
  payload: string
}

export const START_LOADING = '{{moduleName}}/start-loading';
export interface IStartLoadingAction {
  type: typeof START_LOADING
}

export const END_LOADING = '{{moduleName}}/end-loading';
export interface IEndLoadingAction {
  type: typeof END_LOADING
}

export const ERROR_LOADING = '{{moduleName}}/error-loading';
export interface IErrorLoadingAction {
  type: typeof ERROR_LOADING
}

export const CLEAR_LOADING_ERROR = '{{moduleName}}/clear-loading-error';
export interface IClearLoadingErrorAction {
  type: typeof CLEAR_LOADING_ERROR
}


export type T{{moduleName}}ActionTypes =
  ISomeAction
  | IStartLoadingAction
  | IEndLoadingAction
  | IErrorLoadingAction
  | IClearLoadingErrorAction
