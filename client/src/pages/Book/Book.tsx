import * as React from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import { Flex, FlexKid } from '../../components/Layout/Flex';
import BookForm from '../../components/Book/BookForm';
import { HotelCard } from '../../components/HotelCards';
import createMediaQuery from '../../util/createMediaQuery';
import PlainBanner from '../../components/Banner/PlainBanner';

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
  let { id } = useParams();
  const { results, loading, error } = useApi<HotelDetailsRoot>({
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

  return (
    <>
      {loading && <Loader />}
      {!!error && !loading && <PlainBanner large title={error} />}
      {!!results && !!id && !loading && !error && (
        <>
          <PlainBanner
            title={
              results.data.name
                ? `Booking your stay at ${results.data.name} `
                : `Send in your booking`
            }
            isTitleColorRed
          />
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints size="large">
                <Layout>
                  <FlexLeft flex={1}>
                    <HotelCard card={results.data} />
                  </FlexLeft>
                  <FlexKid flex={2}>
                    <BookForm establishmentId={id} establishmentName={results.data.name} />
                  </FlexKid>
                </Layout>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
        </>
      )}
    </>
  );
};

export default Book;
