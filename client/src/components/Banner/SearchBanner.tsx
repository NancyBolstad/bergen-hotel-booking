import * as React from 'react';
import styled, { css } from 'styled-components';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer, VerticalSpacer } from '../Layout';
// import { widthSize } from '../Layout/WidthConstraints';
// import { Flex } from '../Flex';
import Typography from '../Typography';
import { BackgroundImage, Image } from '../Image';
import SearchForm from '../SearchForm/SearchForm';
import useIsMobile from '../../hooks/useIsMobile';

interface Props {
  title?: string;
  subTitle?: string;
  figure?: ImageType;
  searchHandler?: (value: string) => any;
}

const BannerBackground = styled(BackgroundImage)`
  width: 100%;
  height: 55vh;
`;

const Content = styled(BackgroundImage)<{ isDesktop?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.spacing.s}rem 0;

  ${props =>
    props.isDesktop &&
    css`
      height: 209px;
    `}
`;

const Form = styled(SearchForm)``;

const SearchBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  figure,
  searchHandler,
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && (
        <Content backgroundColor="secondary" isDesktop={!isMobile}>
          <WidthConstraints size="medium">
            <HorizontalSpacer>
              {!!title && <Typography variant="h1" element="h1" content={title} isPrimaryColor />}
              {!!subTitle && <Typography variant="h2" element="h2" content={subTitle} />}
              <Form handler={searchHandler} />
            </HorizontalSpacer>
          </WidthConstraints>
        </Content>
      )}
      <BannerBackground imageUrl={figure?.url}>
        {!isMobile && (
          <Content backgroundColor="secondary" isDesktop={!isMobile}>
            <WidthConstraints size="medium">
              <HorizontalSpacer>
                {!!title && <Typography variant="h1" element="h1" content={title} isPrimaryColor />}
                {!!subTitle && <Typography variant="h2" element="h2" content={subTitle} />}
                <Form handler={searchHandler} />
              </HorizontalSpacer>
            </WidthConstraints>
          </Content>
        )}
      </BannerBackground>
    </>
  );
};

export default SearchBanner;
