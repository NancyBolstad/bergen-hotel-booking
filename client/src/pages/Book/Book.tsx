import * as React from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import { Flex, FlexKid } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import BookForm from '../../components/Book/BookForm';
import { HotelCard } from '../../components/HotelCards';
//import { MockHotels } from '../../data/data';
import createMediaQuery from '../../util/createMediaQuery';

interface Props {}

const Layout = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;

  ${createMediaQuery(
    'large',
    css`
      flex-direction: row;
      justify-content: flex-start;
      algin-items: flex-start;
    `,
  )}
`;

const FlexLeft = styled(FlexKid)`
  a {
    background-color: ${props => props.theme.colors.secondaryVariant};
    margin: 0 auto;
    ${createMediaQuery(
      'large',
      css`
        width: 100%;
      `,
    )}
  }
`;

export const Book: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  let { id } = useParams();
  const { data, loading } = useApi<HotelDetailsRoot>({
    endpoint: `${process.env.REACT_APP_API_URL}establishments/${id}`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: {
        id: '',
        category: '',
        descriptions: '',
        featuredImages: [],
        features: [],
        location: '',
        name: '',
        onSale: false,
        price: 0,
        rating: 0,
        salePrice: 0,
        services: [],
      },
    },
  });

  // const data = MockHotels[1];
  // const loading = false;

  return (
    <>
      {loading && <Loader />}
      {!!data && !!id && !loading && (
        <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
          <HorizontalSpacer>
            <WidthConstraints size="large">
              <Layout>
                <FlexLeft flex={1}>
                  <HotelCard card={data.data} />
                </FlexLeft>
                <FlexKid flex={2}>
                  <BookForm establishmentId={id} establishmentName={data.data.name} />
                </FlexKid>
              </Layout>
            </WidthConstraints>
          </HorizontalSpacer>
        </VerticalSpacer>
      )}
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="You may also interest"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 3)}
          backgroundColor="secondaryVariant"
        />
      )}
    </>
  );
};

export default Book;
