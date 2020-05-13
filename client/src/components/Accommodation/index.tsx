import * as React from 'react';
import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { HotelDetails, HotelCategories, HotelServices } from '../../types/response';
import createMediaQuery from '../../util/createMediaQuery';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../Layout';
import Typography from '../Typography';
import { HotelCardsListVariant } from '../HotelCards/';
import { Context } from '../../context/GlobalContext';
import { service } from '../../util/icons';

const Sections = styled.div`
  flex: 1;
  margin-right: ${props => props.theme.spacing.xs}rem;

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.m}rem;
    `,
  )}
`;

const Section = styled.div``;

const SectionTitle = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 2px solid #28303f;
  background: white;
  z-index: 900;
`;

const EmployeeData = styled.div``;

const LettersWrapper = styled.div``;

const Letters = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  position: sticky;
  top: 0;
  margin-top: ${props => props.theme.spacing.m}rem;
`;

const Letter = styled.a`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  color: inherit;
  text-decoration: none;

  ${props => createFontStyles(props.theme.fonts.h6)}

  ${createMediaQuery(
    'small',
    css`
      margin-right: ${props => props.theme.spacing.xs}rem;
    `,
  )}
`;

const Results = styled.div`
  display: flex;
`;

const Filter = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.xs}rem;
  }

  ${createMediaQuery(
    'medium',
    css`
      display: flex;
      align-items: flex-end;

      > *:not(:first-child) {
        margin-bottom: 0;
        margin-left: ${props => props.theme.spacing.xs}rem;
      }

      > p {
        margin-bottom: 6px !important;
      }
    `,
  )}
`;

type FilterTypes = 'category' | 'service' | 'name';

interface Props {}

const Accommodations: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const [letters, setLetters] = React.useState([] as string[]);
  const [filter, setFilter] = React.useState({ category: '', service: '', name: '' });
  const [results, setResults] = React.useState<HotelDetails[]>([]);
  const [categories, setCategories] = React.useState<HotelCategories[]>([]);
  const [services, setServices] = React.useState<string[]>([]);

  React.useEffect(() => {
    setResults(localContext.default);
  }, [localContext.default]);

  function createCategoriesList(hotels: HotelDetails[]) {
    const categories: HotelCategories[] = [];
    hotels.map(hotel => {
      if (!!hotel.category && !categories.includes(hotel.category)) {
        categories.push(hotel.category);
      }
    });
    setCategories(categories.sort());
  }

  function createServicesList(hotels: HotelDetails[]) {
    const services: string[] = [];
    hotels.map(hotel => {
      hotel.services?.map(service => {
        if (!!service && !services.includes(service)) {
          services.push(service);
        }
      });
    });
    setServices(services.sort());
  }

  function createLettersList(hotels: HotelDetails[]) {
    const letters: string[] = [];

    for (let i = 0; i < hotels.length; i++) {
      const hotel: HotelDetails = hotels[i];

      if (hotel.name) {
        const letter = hotel.name.charAt(0).toUpperCase();

        if (!letters.includes(letter)) {
          letters.push(letter);
        }
      }
    }

    setLetters(letters.sort());
  }

  function handleFilter(type: FilterTypes, value: string) {
    filter[type] = value;

    setResults(
      results.filter(result => {
        let match = true;

        if (match && filter.category.length > 0) {
          match = !!result.category && result.category === filter.category;
        }

        if (match && filter.service.length > 0) {
          console.log(filter);

          match = !!result.services && result.services.includes(filter.service);
        }

        if (match && filter.name.length > 0) {
          match = !!result.name && result.name.toLowerCase().includes(filter.name.toLowerCase());
        }

        return match;
      }),
    );

    setFilter(filter);
  }

  React.useEffect(() => {
    createLettersList(results);
    createCategoriesList(results);
    createServicesList(results);
  }, [results]);

  return (
    <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <Typography element="h1" variant="h2" content="Accommodations" />
          <Filter>
            <Typography variant="b3" element="span" content="Filter by" />
            <select
              value={filter.category}
              onChange={e => {
                handleFilter('category', e.target.value);
              }}
            >
              <option value="">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={filter.service}
              onChange={e => {
                handleFilter('service', e.target.value);
              }}
            >
              <option value="">All</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search her"
              value={filter.name}
              onChange={e => {
                handleFilter('name', e.target.value);
              }}
            />
            <button
              onClick={e => {
                setResults(localContext.default);
              }}
            >
              Reset
            </button>
          </Filter>
          <Results>
            <Sections>
              {letters.map(l => (
                <Section key={l} id={l}>
                  <SectionTitle>
                    <Typography element="h2" variant="h2" content={l} />
                  </SectionTitle>
                  <HotelCardsListVariant list={results} />
                </Section>
              ))}
            </Sections>
            <LettersWrapper>
              <Letters>
                {letters.map(l => (
                  <Letter
                    key={l}
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById(l);
                      if (el) {
                        el.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    {l}
                  </Letter>
                ))}
              </Letters>
            </LettersWrapper>
          </Results>
        </WidthConstraints>
      </HorizontalSpacer>
    </VerticalSpacer>
  );
};

export default Accommodations;
