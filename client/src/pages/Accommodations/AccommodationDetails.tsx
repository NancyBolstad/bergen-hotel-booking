import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints, Flex } from '../../components/Layout';
import Typography from '../../components/Typography/Typography';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { ButtonLink } from '../../components/Button/Button';
import { ServiceLabel } from '../../components/HotelCards/styles';
import Slider from '../../components/Slider/Slider';
import LikeButton from '../../components/Button/LikeButton';
import PlainBanner from '../../components/Banner/PlainBanner';

interface Props {}

export const HotelDetails: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  let { id } = useParams();
  const history = useHistory();
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

  React.useEffect(() => {
    if (error) {
      history.push('/404');
    }
  }, [history, error]);

  return (
    <>
      {loading && <Loader />}
      {!!results && !loading && (
        <>
          <PlainBanner
            title={`${results.data.name}`}
            isTitleColorRed
            subTitle={results.data.category}
            buttonVariant="primary"
          />
          <Slider slides={results.data.featuredImages} large />
          <VerticalSpacer topSpace="xs" bottomSpace="xs" bottomSpaceDesktop="xl">
            <HorizontalSpacer>
              <WidthConstraints size="medium">
                <Typography variant="h3" element="p" content={`Price`} />
                <Typography
                  variant="b3"
                  element="span"
                  content={`From ${results.data.price} kr per day`}
                />
                {!!results.data.services && (
                  <Typography variant="h3" element="p" content="Services" />
                )}
                <Flex>
                  {(results.data.services || []).map((service, key) => (
                    <ServiceLabel
                      key={key}
                      variant="b3"
                      element="span"
                      content={service}
                      textTransform="capitalize"
                    />
                  ))}
                </Flex>
                <Typography variant="h3" element="p" content="Description" />
                <Typography variant="b3" element="p" content={results.data.descriptions} />
                <Flex direction="row" justify="flex-start" align="center">
                  <ButtonLink
                    variant="primary"
                    size="large"
                    href={`/book/${id}`}
                    aria-label="Go to book page"
                    title="Go to book page"
                  >
                    Book
                  </ButtonLink>
                  <VerticalSpacer topSpace="s" bottomSpace="s">
                    <HorizontalSpacer>
                      {!!localContext.favorites && results.data.id && (
                        <LikeButton card={results.data} withText alginLeft />
                      )}
                    </HorizontalSpacer>
                  </VerticalSpacer>
                </Flex>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
          <HotelCardsList
            sectionTitle={`More from category: ${results.data.category}`}
            ctaText={`Explore more ${results.data.category}s`}
            ctaUrl={`/accommodations?name=&category=${results.data.category}&service=`}
            list={[...localContext.default]
              .filter(element => {
                return element.category === results.data.category && element.id !== results.data.id;
              })
              .slice(0, 4)}
          />
        </>
      )}
    </>
  );
};

export default HotelDetails;
