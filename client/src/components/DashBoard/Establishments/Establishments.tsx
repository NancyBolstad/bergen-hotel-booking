import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Card, { DeleteButton, EditableWrapper } from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import EstablishmentForm from './EstablishmentForm';
import { Context } from '../../../context/GlobalContext';
import SearchHotel from '../../SearchHotel/SearchHotel';
import { HotelDetails } from '../../../types/response';
import { Flex, FlexKid, VerticalSpacer } from '../../Layout';
import HotelCardVariant from '../../HotelCards/HotelCardVariant';
import Button, { ButtonLink } from '../../Button/Button';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT, CATEGORIES, SERVICES } from '../../../util/constants';
import { cross, solidArrow } from '../../../util/icons';
import { InputFieldWrapper, Label, Select, Filter } from '../../HotelFilter/styles';
import { Arrow } from '../../FormElement/StyledSelect';
import HotelFilter from '../../HotelFilter/HotelFilter';
import SearchInput from '../../FormElement/SearchInput';

interface Props {}

const Establishments: React.FC<Props> = () => {
  const localContext = React.useContext(Context);
  const [createEstablishment, setCreateEstablishment] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const [establishmentsList, setEstablishmentsList] = React.useState<HotelDetails[]>([]);
  const { deleting, removed, action } = useDeleteRequest(API_ENDPOINT.establishment);
  const [removeItem, setRemoveItem] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    if (location.pathname === '/dashboard/establishments/new') {
      setCreateEstablishment(true);
    } else {
      setCreateEstablishment(false);
    }
  }, [location]);

  React.useEffect(() => {
    setEstablishmentsList([...localContext.default].reverse());
  }, [localContext, createEstablishment, removed]);

  React.useEffect(() => {
    localContext.default.filter(element => {
      return element.id !== removeItem;
    });
  }, [removed]);

  return (
    <>
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Manage Establishments" />
        </Card>
      </Section>
      {createEstablishment && (
        <Section>
          <Card>
            <EstablishmentForm />
          </Card>
        </Section>
      )}
      {!createEstablishment && (
        <Section>
          <Card>
            <VerticalSpacer>
              <Flex direction="row" align="center" justify="space-between">
                <FlexKid>
                  <SearchInput
                    type="text"
                    placeholder="Find by name ..."
                    onChange={e => {
                      e.preventDefault();
                      setSearchValue(e.target.value);
                      setEstablishmentsList(
                        [...establishmentsList].filter(element => {
                          return element.name.toLowerCase().includes(searchValue.toLowerCase());
                        }),
                      );
                      if (!e.target.value) {
                        setEstablishmentsList([...localContext.default].reverse());
                      }
                    }}
                    iconPosition="18%"
                  />
                </FlexKid>
                <FlexKid>
                  <ButtonLink
                    variant="primary"
                    size="small"
                    onClick={e => {
                      e.preventDefault();
                      history.push('/dashboard/establishments/new');
                    }}
                  >
                    New
                  </ButtonLink>
                </FlexKid>
              </Flex>
            </VerticalSpacer>
            {searchValue && (
              <Typography
                variant="b2"
                element="span"
                content={`${establishmentsList.length} establishments for "${searchValue}"`}
              />
            )}
            {establishmentsList.map((establishment, index) => (
              <EditableWrapper>
                <DeleteButton
                  variant="tertiary"
                  size="small"
                  icon
                  removed={removed && establishment.id === removeItem}
                  aria-label="Delete establishment"
                  onClick={e => {
                    e.preventDefault();
                    setRemoveItem(establishment.id);
                    action(establishment.id);
                  }}
                >
                  {cross}
                </DeleteButton>
                <HotelCardVariant
                  miniCard
                  card={establishment}
                  key={establishment.id}
                  busy={deleting && establishment.id === removeItem}
                  removed={removed && establishment.id === removeItem}
                />
              </EditableWrapper>
            ))}
          </Card>
        </Section>
      )}
    </>
  );
};

export default Establishments;
