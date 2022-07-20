export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: any): value is Function {
  // eslint-disable-next-line eqeqeq
  return !!(value && {}.toString.call(value) == '[object Function]');
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}
