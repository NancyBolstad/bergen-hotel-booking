import * as React from 'react';
import styled from 'styled-components';
import { WidthConstraints } from '../Layout';

const Image = styled.img`
  display: block;
  width: 100%;
`;

const CaptionWrapper = styled(WidthConstraints)`
  border-top: 2px solid ${props => props.theme.colors.primary};
  padding-top: ${props => props.theme.spacing.xs}rem;
`;

export { Image, CaptionWrapper };
