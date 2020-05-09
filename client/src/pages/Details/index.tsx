import * as React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../../components/MainContent';
import CardDetails from '../../components/GameCardDetails';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';
import { HotelDetailsRoot } from '../../types/response';

interface Props {}

export const Details: React.FunctionComponent<Props> = () => {
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

  console.log(data);

  return (
    <>
      <MainContent>
        {loading && <Loader />}
        {!!data && !loading && (
          <CardDetails
            id={data.data.id}
            name={data.data.name}
            featuredImages={data.data.featuredImages}
          />
        )}
      </MainContent>
    </>
  );
};

export default Details;
