import { Success } from './../pages/Success/index';
export interface IMediaQueries {
  small: number;
  medium: number;
  large: number;
}

export interface ISpacing {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  max: number;
}

export interface FontMediaQuery {
  query: number;
  family?: string;
  weight?: number;
  size?: number;
  lineHeight?: number;
}

export interface Font {
  family: string;
  weight: number;
  size: number;
  lineHeight?: number;
  mediaQueries?: FontMediaQuery[];
}

export interface IFonts {
  h1: Font;
  h2: Font;
  h3: Font;
  h4: Font;
  h5: Font;
  h6: Font;
  b1: Font;
  b2: Font;
  b3: Font;
}

export interface IFontFamily {
  primary: string;
  secondary?: string;
}

export interface IFontWeight {
  regular: number;
  semiBold: number;
  bold: number;
}

export interface IColors {
  primary: string;
  primaryVariant: string;
  onPrimary: string;
  secondary: string;
  secondaryVariant: string;
  onSecondary: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  success?: string;
  warning?: string;
  error?: string;
  white?: string;
  dark?: string;
}

export interface Theme {
  spacing: ISpacing;
  fonts: IFonts;
  colors: IColors;
  mediaQueries: IMediaQueries;
}
