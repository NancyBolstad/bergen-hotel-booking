import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import { IMediaQueries, Theme } from '../types/theme';

type SelectableQueries = keyof IMediaQueries;

export default function createMediaQuery(
  query: SelectableQueries,
  styles: FlattenInterpolation<ThemeProps<DefaultTheme & Theme>>,
): FlattenInterpolation<ThemeProps<DefaultTheme & Theme>> {
  return css`
    @media all and (min-width: ${props => props.theme.mediaQueries[query]}px) {
      ${styles};
    }
  `;
}
