import { DefaultTheme } from 'styled-components';
import { primaryFont } from './typography';
import { neutral } from './color';

export const defaultTheme: DefaultTheme = {
  primaryFont,
  textColor: neutral[600],
  textHover: neutral[500],
  disabled: neutral[400],
};
