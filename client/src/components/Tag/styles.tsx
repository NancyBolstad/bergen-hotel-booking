import styled, { css } from 'styled-components';
import Button from '../Button';

export const TagWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.s}rem;

  @media screen and (min-width: 1280px) {
    min-width: 380px;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategoriesButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.s}rem;
`;

export const CategoriesButton = styled(Button)<{ active?: boolean }>`
  font-weight: bold;
  flex: 1;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};

  @media (min-width: 600px) {
    padding: 10px 20px;
  }

  ${props =>
    props.active === true &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: white;
    `}
`;

export const CategoriesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesListItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.s}rem;
  background-color: ${props => props.theme.colors.primaryVariant};
  padding: ${props => props.theme.spacing.xs}rem ${props => props.theme.spacing.s}rem;
  border-radius: 10px;
  margin-right: ${props => props.theme.spacing.s}rem;
  span {
    display: black;
    margin: 0 auto;
    color: ${props => props.theme.colors.background};
  }
`;
