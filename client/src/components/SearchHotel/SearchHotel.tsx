import React from 'react';
import {
  VerticalSpacer,
  HorizontalSpacer,
  WidthConstraints,
  Section,
  Flex,
} from '../../components/Layout';
import Typography from '../../components/Typography/Typography';
import { HotelCardVariant, HotelCard } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader/Loader';
import useFilter from '../../hooks/useFilter';
import useIsTablet from '../../hooks/useIsTablet';
import {
  Sections,
  SectionTitle,
  AlphabeticalResults,
  Letter,
  Letters,
  LettersWrapper,
} from './styles';
import HotelFilter from '../../components/HotelFilter/HotelFilter';

interface Props {
  alphabeticalSort?: boolean;
  editable?: boolean;
}

const SearchHotel: React.FunctionComponent<Props> = ({ alphabeticalSort, editable }) => {
  const localContext = React.useContext(Context);
  const isTablet = useIsTablet();
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
                addEstablishment={editable}
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
              {!localContext.loading && !!hotels && hotels.length > 0 && !!alphabeticalSort && (
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
              {!localContext.loading && !!hotels && hotels.length > 0 && !alphabeticalSort && (
                <Flex direction="column">
                  {hotels.map(hotel =>
                    isTablet ? (
                      <HotelCard card={hotel} key={hotel.id} />
                    ) : (
                      <HotelCardVariant card={hotel} key={hotel.id} />
                    ),
                  )}
                </Flex>
              )}
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      </Section>
    </>
  );
};

export default SearchHotel;