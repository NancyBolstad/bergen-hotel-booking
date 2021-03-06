import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import { FlexKid } from '../../components/Layout/';
import BookForm from '../../components/BookForm/BookForm';
import { HotelCard } from '../../components/HotelCards';
import PlainBanner from '../../components/Banner/PlainBanner';
import { API_ENDPOINT } from '../../util/constants';

interface Props {}

export const Book: React.FunctionComponent<Props> = () => {
  let { id } = useParams();
  const { results, loading, error } = useApi<HotelDetailsRoot>({
    url: `${process.env.REACT_APP_API_URL}${API_ENDPOINT.establishments}/${id}`,
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
              results.data.name ? `Book your stay at ${results.data.name} ` : `Send in your booking`
            }
            isTitleColorRed
          />
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints size="large">
                <Layout>
                  <FlexLeft flex={1}>
                    <VerticalSpacer>
                      <HotelCard card={results.data} />
                    </VerticalSpacer>
                  </FlexLeft>
                  <FlexRight flex={2}>
                    <BookForm establishmentId={id} establishmentName={results.data.name} />
                  </FlexRight>
                </Layout>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
        </>
      )}
    </>
  );
};

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    flex-direction: row;
    justify-content: flex-start;
    algin-items: flex-start !important;
  }
`;

const FlexLeft = styled(FlexKid)`
  a {
    margin: 0 auto;
    width: 380px;

    @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
      width: 480px;
    }

    @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
      width: 100%;
    }
  }
`;

const FlexRight = styled(FlexKid)`
  width: 100%;
`;

export default Book;
