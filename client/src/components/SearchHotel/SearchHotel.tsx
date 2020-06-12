import React from 'react';
import {
  VerticalSpacer,
  HorizontalSpacer,
  WidthConstraints,
  Section,
} from '../../components/Layout';
import Typography from '../../components/Typography/Typography';
import { HotelCardVariant, HotelCard } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader/Loader';
import useFilter from '../../hooks/useFilter';
import {
  Sections,
  SectionTitle,
  AlphabeticalResults,
  Letter,
  Letters,
  LettersWrapper,
} from './styles';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import useResponsiveWindowSize from '../../hooks/useResponsiveWindowSize';

const SearchHotel: React.FunctionComponent = () => {
  const localContext = React.useContext(Context);
  const { isTablet } = useResponsiveWindowSize();
  const { hotels, letters, filter, handleFilter, currentQueryString } = useFilter({
    autoUpdateUrl: true,
  });

  return (
    <>
      <Section>
        <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
          <HorizontalSpacer>
            <WidthConstraints size="large">
              <HotelFilter
                handler={handleFilter}
                searchDefaultValue={currentQueryString.name ? currentQueryString.name : filter.name}
                categoryDefaultValue={
                  currentQueryString.category ? currentQueryString.category : filter.category
                }
                serviceDefaultValue={
                  currentQueryString.service ? currentQueryString.service : filter.service
                }
              />
              {!!localContext.loading && <Loader />}
              {!localContext.loading && (
                <Typography
                  variant="b2"
                  element="h2"
                  content={`${hotels.length} accommodations${
                    currentQueryString.name ? ` for name "${currentQueryString.name}"` : ' '
                  } filtered by "${
                    currentQueryString.category ? currentQueryString.category : 'all categories'
                  }" and "${
                    currentQueryString.service ? currentQueryString.service : 'all services'
                  }"`}
                />
              )}
              {!localContext.loading && !!hotels && hotels.length > 0 && (
                <AlphabeticalResults>
                  <Sections flex={1}>
                    {letters.map(letter => (
                      <Section key={letter} id={letter} backgroundColor="background">
                        <SectionTitle>
                          <Typography element="h2" variant="h2" content={letter} />
                        </SectionTitle>
                        {hotels
                          .filter(
                            hotel =>
                              hotel.name.charAt(0).toLocaleLowerCase() === letter.toLowerCase(),
                          )
                          .map(hotel =>
                            isTablet ? (
                              <HotelCard card={hotel} key={hotel.id} />
                            ) : (
                              <HotelCardVariant card={hotel} key={hotel.id} />
                            ),
                          )}
                      </Section>
                    ))}
                  </Sections>
                  <LettersWrapper>
                    <Letters>
                      {letters.map(letter => (
                        <Letter
                          key={letter}
                          href="#"
                          onClick={e => {
                            e.preventDefault();

                            const el = document.getElementById(letter);

                            if (el) {
                              el.scrollIntoView({
                                behavior: 'smooth',
                              });
                            }
                          }}
                        >
                          {letter}
                        </Letter>
                      ))}
                    </Letters>
                  </LettersWrapper>
                </AlphabeticalResults>
              )}
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      </Section>
    </>
  );
};

export default SearchHotel;
