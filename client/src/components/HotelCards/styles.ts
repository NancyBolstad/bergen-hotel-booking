import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
//import createFontStyles from '../../util/createFontStyles';
import Typography from '../Typography';
import { IColors } from '../../types/theme';
import Slider from '../Slider';

const Section = styled.section<{ backgroundColor?: keyof IColors }>`
  background-color: ${props => props.theme.colors.background};
  overflow: auto;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.theme.colors[props.backgroundColor]};
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Card = styled(Link)`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid white;
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  padding: ${props => props.theme.spacing.xs}rem;
  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 768px) {
    width: calc(47% - ${props => props.theme.spacing.xs}rem);
    margin: calc(${props => props.theme.spacing.m}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc(31.333% - ${props => props.theme.spacing.m}rem);
    margin: calc(${props => props.theme.spacing.m}rem / 2);
    padding: ${props => props.theme.spacing.s}rem;
  }
`;

const HotelName = styled(Typography)<{ element: 'h3' | 'h4' }>`
  margin: ${props => props.theme.spacing.xs}rem 0 ${props => props.theme.spacing.s}rem;
  text-align: left;
  transition: all 0.15s ease-in-out;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-transform: capitalize;

  ${Card}:hover &,
  ${Card}:focus & {
    text-decoration-color: ${props => props.theme.colors.onBackground};
  }
`;

const FeaturedImages = styled(Slider)`
  height: 280px;
`;

const SectionTitle = styled(Typography)<{ element: 'h2' }>`
  text-transform: capitalize;
`;

const More = styled.div`
  margin: ${props => props.theme.spacing.s}rem auto;
  @media screen and (min-width: 1280px) {
    margin: ${props => props.theme.spacing.m}rem auto;
  }
`;

export { Section, Wrapper, Card, HotelName, SectionTitle, More, FeaturedImages };
