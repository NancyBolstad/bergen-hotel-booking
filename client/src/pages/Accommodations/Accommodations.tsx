import * as React from 'react';
import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { HotelDetails, HotelCategories, HotelServices } from '../../types/response';
import createMediaQuery from '../../util/createMediaQuery';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { HotelCardVariant } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { MockHotels, MockCategories, MockServices } from '../../mocks/data';
import MainContent from '../../components/MainContent';
import { PlainBanner } from '../../components/Banner';
import { solidArrow } from '../../util/icons';

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

const EmployeesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmployeeData = styled.div``;

const LettersWrapper = styled.div``;

const Letters = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  position: sticky;
  top: 5.5625rem;
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

export const SelectFieldWrapper = styled.div`
  position: relative;
  transition: opacity 0.1s ease-in-out;
  display: flex;
`;

export const Label = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  margin-bottom: ${props => props.theme.spacing.xs}rem;
  display: block;
  color: ${props => props.theme.colors.primary};
`;

export const Select = styled.select`
  height: 40px;
  width: 9.8rem;
  margin-left: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  background-size: 20px 20px;
  ${props => createFontStyles(props.theme.fonts.b1)};
  border: 1px solid ${props => props.theme.colors.onBackground};
  padding: 0 16px;
  margin-top: ${props => props.theme.spacing.xs}rem;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;

  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

export const Arrow = styled.div`
  position: absolute;
  pointer-events: none;
  right: 0.7rem;
  top: 1.1875rem;

  svg {
    width: 10px;
    height: 10px;
    fill: ${props => props.theme.colors.primary};
  }
`;

type FilterTypes = 'category' | 'service' | 'name';

interface Props {
  mockServices?: HotelServices[];
  mockCategories?: HotelCategories[];
  mockHotels?: HotelDetails[];
}

const Accommodations: React.FunctionComponent<Props> = ({
  mockCategories,
  mockHotels,
  mockServices,
}) => {
  const localContext = React.useContext(Context);
  const [letters, setLetters] = React.useState([] as string[]);
  const [filter, setFilter] = React.useState({ category: '', service: '', name: '' });
  const [hotels, setHotels] = React.useState(localContext.default);
  const results: HotelDetails[] = localContext.default;
  const categories = MockCategories;
  const services = MockServices;

  React.useEffect(() => {
    setHotels(localContext.default);
  }, [localContext.default]);

  function extractHotelsInfo(hotels: HotelDetails[]) {
    const letters: string[] = [];

    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];

      if (hotel.name) {
        const letter = hotel.name.charAt(0).toUpperCase();

        if (!letters.includes(letter)) {
          letters.push(letter);
        }
      }
    }

    setLetters(letters.sort());
  }

  function handleFilter(type: 'category' | 'service' | 'name', value: string) {
    filter[type] = value;

    setHotels(
      (mockHotels || results).filter(e => {
        let match = true;

        if (filter.category.length > 0) {
          match = !!e.category && e.category === filter.category;
        }

        if (match && filter.service.length > 0) {
          match = !!e.services && e.services.includes(filter.service);
        }

        if (match && filter.name.length > 0) {
          match = !!e.name && e.name.toLowerCase().includes(filter.name.toLowerCase());
        }

        return match;
      }),
    );

    setFilter(filter);
  }

  React.useEffect(() => {
    extractHotelsInfo(hotels);
  }, [hotels]);

  return (
    <>
      <PlainBanner
        title="Accommodations"
        subTitle="Search, find and book your stay at Bergen."
        isTitleColorRed
      />
      <MainContent>
        <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
          <HorizontalSpacer>
            <WidthConstraints size="large">
              <Filter>
                <SelectFieldWrapper>
                  <Typography variant="b3" element="span" content="Filter by" />
                  <Label>
                    <Arrow>{solidArrow}</Arrow>
                    <Select
                      value={filter.category}
                      onChange={e => {
                        handleFilter('category', e.target.value);
                      }}
                    >
                      <option value="">All</option>
                      {(mockCategories || categories).map((c, k) => (
                        <option key={k} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                  </Label>
                </SelectFieldWrapper>
                <Select
                  value={filter.service}
                  onChange={e => {
                    handleFilter('service', e.target.value);
                  }}
                >
                  <option value="">All</option>
                  {(mockServices || services).map((s, k) => (
                    <option key={k} value={s}>
                      {s}
                    </option>
                  ))}
                </Select>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={filter.name}
                  onChange={e => {
                    handleFilter('name', e.target.value);
                  }}
                />
              </Filter>
              <Results>
                <Sections>
                  {letters.map(letter => (
                    <Section key={letter} id={letter}>
                      <SectionTitle>
                        <Typography element="h2" variant="h2" content={letter} />
                      </SectionTitle>
                      {hotels
                        .filter(hotel => hotel.name.charAt(0) === letter.toLowerCase())
                        .map((hotel, index) => (
                          <HotelCardVariant card={hotel} key={index} />
                        ))}
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
              </Results>
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      </MainContent>
    </>
  );
};

export default Accommodations;
