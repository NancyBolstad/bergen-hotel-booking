import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card, { DeleteButton, EditableWrapper } from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import { HotelDetails, Root } from '../../../types/response';
import { Flex, FlexKid, VerticalSpacer } from '../../Layout';
import HotelCardVariant from '../../HotelCards/HotelCardVariant';
import { ButtonLink } from '../../Button/Button';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../../util/constants';
import { cross, trash } from '../../../util/icons';
import SearchInput from '../../FormElement/SearchInput';
import useApi from '../../../hooks/useApi';
import Loader from '../../Loader/Loader';
import { MockHotels } from '../../../data/data';

interface Props {}

const EditableEstablishmentsList: React.FC<Props> = () => {
  const { results, loading } = useApi<Root>({
    endpoint: `${process.env.REACT_APP_API_URL}establishments`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [],
    },
  });

  const history = useHistory();
  const [establishmentsList, setEstablishmentsList] = React.useState<HotelDetails[]>([]);
  const { deleting, removed, action } = useDeleteRequest(API_ENDPOINT.establishment);
  const [removeItem, setRemoveItem] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    setEstablishmentsList(results.data.reverse());
  }, [results]);

  React.useEffect(() => {
    if (removed) {
      setEstablishmentsList(
        [...establishmentsList].filter(element => {
          return element.id !== removeItem;
        }),
      );
    }
  }, [removed]);

  return (
    <>
      <Section>
        <Card>
          <VerticalSpacer topSpaceDesktop="m" bottomSpaceDesktop="m">
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
                      setEstablishmentsList(results.data);
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
          {loading ? (
            <Loader />
          ) : (
            <>
              {!!searchValue && (
                <Typography
                  variant="b2"
                  element="span"
                  content={`${establishmentsList.length} establishments "for ${searchValue}"`}
                />
              )}
              {!!establishmentsList && (
                <VerticalSpacer topSpaceDesktop="l">
                  {establishmentsList.map(establishment => (
                    <EditableWrapper>
                      <DeleteButton
                        variant="tertiaryVariant"
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
                        {trash}
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
                </VerticalSpacer>
              )}
            </>
          )}
        </Card>
      </Section>
    </>
  );
};

export default EditableEstablishmentsList;
