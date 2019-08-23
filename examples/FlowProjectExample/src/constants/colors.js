/* @flow */
export type ColorKeys =
  | 'gray'
  | 'insetTheme'
  | 'lightGray'
  | 'minorButton'
  | 'primary'
  | 'queueTheme'
  | 'stackTheme'
  | 'white';

export const colors: {[keys: ColorKeys]: string} = {
  gray: '#828282',
  insetTheme: '#A085B4',
  lightGray: '#EAEAEA',
  minorButton: '#A0A0A0',
  primary: '#4864BB',
  queueTheme: '#84A0B4',
  stackTheme: '#B48484',
  white: '#FFFFFF',
};
