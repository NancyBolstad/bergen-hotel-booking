import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BlogCard = styled.a`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid white;
  border-radius: 1rem;
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  padding: ${props => props.theme.spacing.xs}rem;
  transition: all 0.15s ease-in-out;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  border-radius: 4px;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.secondaryVariant};
  }

  @media screen and (min-width: 768px) {
    width: calc(47% - ${props => props.theme.spacing.xs}rem);
    margin: calc(${props => props.theme.spacing.m}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc(33.332% - ${props => props.theme.spacing.l}rem);
    margin: calc(${props => props.theme.spacing.l}rem / 2);
    padding: ${props => props.theme.spacing.s}rem;
  }
`;

const BlogImage = styled.img`
  width: 100%;
`;

const BlogTitle = styled(Typography)<{ element: 'h3' | 'h4' }>`
  margin: ${props => props.theme.spacing.xs}rem 0 ${props => props.theme.spacing.s}rem;
  text-align: left;
  text-transform: capitalize;
`;

const BlogIntroText = styled(Typography)<{ element: 'p' }>`
  margin: 0;
  text-align: left;
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

export { Wrapper, BlogCard, BlogImage, BlogTitle, BlogIntroText, SectionTitle, More };
