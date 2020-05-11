import {
  Theme,
  IColors,
  Font,
  IFontFamily,
  IFontWeight,
  IFonts,
  IMediaQueries,
  ISpacing,
} from '../types/theme';

const stableColors: Partial<IColors> = {
  success: '#049F51',
  warning: '#FFB84D',
  error: '#FF4D4D',
  white: '#ffffff',
  dark: '#000000',
  hoverColor: '#5C0F47',
};

const defaultColors: IColors = {
  primary: '#C2003D',
  primaryVariant: '#C2003D',
  onPrimary: '#ffffff',
  secondary: '#FFEBE4',
  secondaryVariant: '#FFEBE4',
  onSecondary: '#000000',
  background: '#ffffff',
  surface: '#E5E5E5',
  onSurface: '#888888',
  onBackground: '#000000',
  ...stableColors,
};

const darkThemeColors: IColors = {
  primary: '#FFEBE4',
  primaryVariant: '#FFEBE4',
  onPrimary: '#000000',
  secondary: '#FFEBE4',
  secondaryVariant: '#000000',
  onSecondary: '#000000',
  background: '#000000',
  surface: '#888888',
  onSurface: '#ffffff',
  onBackground: '#ffffff',
  ...stableColors,
};

export const defaultMediaQueries: IMediaQueries = {
  small: 600,
  medium: 768,
  large: 1280,
};

const defaultSpacing: ISpacing = {
  xs: 0.5,
  s: 1,
  m: 1.5,
  l: 2,
  xl: 3,
  xxl: 3.5,
  max: 4.5,
};

const defaultFontFamily: IFontFamily = {
  primary: "'Muli', sans-serif",
};

const defaultFontWeight: IFontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const h1: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.8125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 2.875,
      lineHeight: 1.25,
    },
  ],
};

const h2: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.5625,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 2.1875,
      lineHeight: 1.15,
    },
  ],
};

const h3: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.25,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.5625,
      lineHeight: 1.15,
    },
  ],
};

const h4: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

const h5: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.regular,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.regular,
      size: 1,
      lineHeight: 1.15,
    },
  ],
};

const h6: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1,
      lineHeight: 1.15,
    },
  ],
};

const b1: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.regular,
  size: 1,
  lineHeight: 1.25,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.regular,
      size: 1,
      lineHeight: 1.5,
    },
  ],
};

const b2: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.bold,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

const b3: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.regular,
  size: 1.125,
  lineHeight: 1.15,
  mediaQueries: [
    {
      query: defaultMediaQueries.small,
      weight: defaultFontWeight.regular,
      size: 1.25,
      lineHeight: 1.15,
    },
  ],
};

export const defaultFonts: IFonts = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b1,
  b2,
  b3,
};

export const defaultTheme: Theme = {
  spacing: defaultSpacing,
  fonts: defaultFonts,
  mediaQueries: defaultMediaQueries,
  colors: defaultColors,
};

export const darkTheme: Theme = {
  spacing: defaultSpacing,
  fonts: defaultFonts,
  mediaQueries: defaultMediaQueries,
  colors: darkThemeColors,
};

export default defaultTheme;
