import styled from 'styled-components';

export const CardDetailsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing.l}rem ${props => props.theme.spacing.s}rem;
`;

export const DetailImage = styled.div`
  background: ${props => props.theme.colors.background};
  flex: 1;
  img {
    width: 100%;
    min-height: 380px;

    @media screen and (min-width: 1280px) {
      min-heigexportht: 680px;
    }
  }
`;

export const CardDetailsContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.l}rem 0;
  }
`;

export const RichText = styled.div`
  line-height: 1.8;
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  white-space: pre-wrap;

  @media screen and (min-width: 1280px) {
    margin-left: ${props => props.theme.spacing.l}rem;
  }

  p {
    margin: 0;
  }
`;
