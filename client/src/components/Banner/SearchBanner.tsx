import * as React from 'react';
import { Image as ImageType } from '../../types/types';
import { WidthConstraints, HorizontalSpacer } from '../Layout';
import Typography from '../Typography';
import SearchForm from '../SearchForm/SearchForm';
import useIsMobile from '../../hooks/useIsMobile';
import { SearchBannerContent, SearchBannerBackground } from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  figure?: ImageType;
  searchHandler?: (value: string) => any;
  placeHolderText?: string;
}

const SearchBanner: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  figure,
  searchHandler,
  placeHolderText,
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && (
        <SearchBannerContent backgroundColor="secondaryVariant" isDesktop={!isMobile}>
          <WidthConstraints size="medium">
            <HorizontalSpacer>
              {!!title && <Typography variant="h1" element="h1" content={title} isPrimaryColor />}
              {!!subTitle && <Typography variant="h2" element="h2" content={subTitle} />}
              <SearchForm
                handler={searchHandler}
                placeHolderText={placeHolderText ? placeHolderText : 'Search her'}
              />
            </HorizontalSpacer>
          </WidthConstraints>
        </SearchBannerContent>
      )}
      <SearchBannerBackground imageUrl={figure?.url}>
        {!isMobile && (
          <SearchBannerContent backgroundColor="secondaryVariant" isDesktop={!isMobile}>
            {!!title && <Typography variant="h1" element="h1" content={title} isPrimaryColor />}
            {!!subTitle && <Typography variant="h2" element="h2" content={subTitle} />}
            <WidthConstraints size="small">
              <HorizontalSpacer>
                <SearchForm
                  handler={searchHandler}
                  placeHolderText={placeHolderText ? placeHolderText : 'Search her'}
                />
              </HorizontalSpacer>
            </WidthConstraints>
          </SearchBannerContent>
        )}
      </SearchBannerBackground>
    </>
  );
};

export default SearchBanner;
