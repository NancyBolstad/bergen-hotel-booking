import * as React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from '../../components/MainContent';
import CardDetails from '../../components/GameCardDetails';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';

interface Props {}

interface mockResponse {
  code: number;
  data: {
    id: string;
    snapshot: {
      name: string;
      category: 'hotel';
      featuredImages: [];
      descriptions: '';
      location: '';
      price: 0;
      onSale: false;
      salePrice: 0;
      services: [];
      rating: 0;
      features: [];
      reviews: [];
    };
  };
}

export const Details: React.FunctionComponent<Props> = () => {
  let { id } = useParams();
  const { data, loading } = useApi<mockResponse>({
    endpoint: `${process.env.REACT_APP_API_URL}establishments/${id}`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: {
        id: '',
        snapshot: {
          name: '',
          category: 'hotel',
          featuredImages: [],
          descriptions: '',
          location: '',
          price: 0,
          onSale: false,
          salePrice: 0,
          services: [],
          rating: 0,
          features: [],
          reviews: [],
        },
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
            name={data.data.snapshot.name}
            featuredImages={data.data.snapshot.featuredImages}
          />
        )}
      </MainContent>
    </>
  );
};

export default Details;
