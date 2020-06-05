import styled, { css } from 'styled-components';
import createMediaQuery from '../../util/createMediaQuery';
import { Section } from '../../components/Layout';

export const DashboardBackgroundWrapper = styled(Section)`
  background-color: ${props => props.theme.colors.backgroundVariant};
`;

export const DashboardSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  ${createMediaQuery(
    'small',
    css`
      margin: calc(-${props => props.theme.spacing.s}rem / 2);
    `,
  )}

  ${createMediaQuery(
    'large',
    css`
      flex-wrap: nowrap;
    `,
  )}
`;

export const Content = styled.div<{ aside?: boolean }>`
  margin: ${props => props.theme.spacing.s}rem 0;
  height: 100%;

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.xs}rem;
    `,
  )}

  ${props =>
    props.aside &&
    css`
      width: 100%;
      ${createMediaQuery(
        'large',
        css`
          width: auto;
        `,
      )}
    `};

  ${props =>
    !props.aside &&
    css`
      width: 100%;

      ${createMediaQuery(
        'small',
        css`
          flex: 1;
          max-width: 980px;
        `,
      )}
    `};
`;
