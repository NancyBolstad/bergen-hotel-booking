import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot, HotelDetails as HotelDetailsTypes } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex, FlexKid } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { ButtonLink } from '../../components/Button/Button';

interface Props {}

export const HotelDetails: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  let { id } = useParams();
  const history = useHistory();
  const [relatedHotels, setRelatedHotels] = React.useState<HotelDetailsTypes[]>();
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
      history.push('/');
    }
  }, [history, error]);

  React.useEffect(
    () => {
      const relatedHotels = [...localContext.default]
        .filter(element => {
          return element.category === results.data.category;
        })
        .slice(0, 4);

      setRelatedHotels(relatedHotels);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      {loading && <Loader />}
      {!!results && !loading && (
        <PageHero figure={results.data.featuredImages[0]}>
          <VerticalSpacer topSpace="xs" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <Flex direction="row" align="flex-start">
                <FlexKid flexBasis="70%">
                  <Typography
                    variant="b2"
                    element="span"
                    content={results.data.category}
                    textTransform="capitalize"
                  />
                  <Typography
                    variant="h1"
                    element="h1"
                    content={results.data.name}
                    textTransform="capitalize"
                    isPrimaryColor
                  />
                  <Typography
                    variant="h2"
                    element="h2"
                    content={`Price: ${results.data.price}`}
                    textTransform="capitalize"
                  />
                  <Typography variant="b3" element="p" content={results.data.location} />
                  <Typography variant="b3" element="p" content={results.data.descriptions} />
                  <ButtonLink
                    variant="primary"
                    size="large"
                    href={`/book/${id}`}
                    aria-label="Go to book page"
                    title="Go to book page"
                  >
                    Book Now
                  </ButtonLink>
                </FlexKid>
                <FlexKid>
                  <Typography variant="h3" element="h3" content="Services" />
                  <ul>
                    {(results.data.services || []).map((service, key) => (
                      <li key={key}>{service}</li>
                    ))}
                  </ul>
                  <Typography variant="h3" element="h3" content="Features" />
                  <ul>
                    {(results.data.features || []).map((feature, key) => (
                      <li key={key}>{feature}</li>
                    ))}
                  </ul>
                </FlexKid>
              </Flex>
            </HorizontalSpacer>
          </VerticalSpacer>
        </PageHero>
      )}
      {!localContext.loading && (
        <HotelCardsList
          sectionTitle="You may also interest"
          ctaText={`Explore more ${
            results.data.category === 'hostels' ? 'hostel' : results.data.category
          }s`}
          ctaUrl={`/accommodations?name=&category=${results.data.category}&service=`}
          list={[...localContext.default]
            .filter(element => {
              return element.category === results.data.category;
            })
            .slice(0, 4)}
        />
      )}
    </>
  );
};

export default HotelDetails;
