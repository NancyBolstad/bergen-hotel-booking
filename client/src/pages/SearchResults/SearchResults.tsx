import React from 'react';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { SearchInput } from '../../components/FormElement';
import { HotelCardVariant, HotelCard } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { MockCategories, MockServices } from '../../data/data';
import { PlainBanner } from '../../components/Banner';
import Loader from '../../components/Loader/Loader';
import useFilter from '../../hooks/useFilter';
import useIsTablet from '../../hooks/useIsTablet';
import { solidArrow } from '../../util/icons';
import {
  Sections,
  Section,
  SectionTitle,
  Filter,
  InputFieldWrapper,
  SelectWrapper,
  Label,
  Arrow,
  Select,
  Results,
  Letter,
  Letters,
  LettersWrapper,
} from './styles';

const SearchResults: React.FunctionComponent = () => {
  const localContext = React.useContext(Context);
  const isTablet = useIsTablet();
  const categories = MockCategories;
  const services = MockServices;
  const { hotels, letters, filter, handleFilter, currentQueryString } = useFilter({
    autoUpdateUrl: true,
  });

  return (
    <>
      <PlainBanner title="Search, find and book accommodations in Bergen" isTitleColorRed />
      <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Filter>
              <InputFieldWrapper>
                <SearchInput
                  type="text"
                  placeholder="Find by name ..."
                  value={currentQueryString.name ? currentQueryString.name : filter.name}
                  onChange={e => {
                    handleFilter('name', e.target.value);
                  }}
                  iconPosition="18%"
                />
              </InputFieldWrapper>
              <SelectWrapper>
                <InputFieldWrapper>
                  <Label>
                    <Select
                      value={
                        currentQueryString.category ? currentQueryString.category : filter.category
                      }
                      onChange={e => {
                        handleFilter('category', e.target.value);
                      }}
                      aria-label="Filter accommodations by category type"
                    >
                      <option value="">All categories</option>
                      {(categories || []).map((c, k) => (
                        <option key={k} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                    <Arrow>{solidArrow}</Arrow>
                  </Label>
                </InputFieldWrapper>
                <InputFieldWrapper>
                  <Label>
                    <Select
                      value={
                        currentQueryString.service ? currentQueryString.service : filter.service
                      }
                      onChange={e => {
                        handleFilter('service', e.target.value);
                      }}
                      aria-label="Filter accommodations by service type"
                    >
                      <option value="">All services</option>
                      {(services || []).map((s, k) => (
                        <option key={k} value={s}>
                          {s}
                        </option>
                      ))}
                    </Select>
                    <Arrow>{solidArrow}</Arrow>
                  </Label>
                </InputFieldWrapper>
              </SelectWrapper>
            </Filter>
            {!!localContext.loading && (
              <Results>
                <Loader />
              </Results>
            )}
            {!localContext.loading && (
              <Typography
                variant="b2"
                element="h2"
                content={`Find ${hotels.length} accommodations${
                  currentQueryString.name ? ` for name "${currentQueryString.name}"` : ' '
                } filtered by "${
                  currentQueryString.category ? currentQueryString.category : 'all categories'
                }" and "${
                  currentQueryString.service ? currentQueryString.service : 'all services'
                }"`}
              />
            )}
            {!localContext.loading && !!hotels && hotels.length > 0 ? (
              <Results>
                <Sections>
                  {letters.map(letter => (
                    <Section key={letter} id={letter}>
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
              </Results>
            ) : localContext.loading ? null : (
              <Typography variant="b2" element="span" content="Search tips????" />
            )}
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </>
  );
};

export default SearchResults;
