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
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export interface Theme {
  spacing: ISpacing;
  fonts: IFonts;
  colors: IColors;
  mediaQueries: IMediaQueries;
}
