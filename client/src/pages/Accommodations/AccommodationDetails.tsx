import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { ButtonLink } from '../../components/Button/Button';
import { ServiceLabel } from '../../components/HotelCards/styles';

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
      history.push('/');
    }
  }, [history, error]);

  return (
    <>
      {loading && <Loader />}
      {!!results && !loading && (
        <PageHero figure={results.data.featuredImages[0]}>
          <VerticalSpacer topSpace="xs" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints size="medium">
                <Typography
                  variant="b2"
                  element="span"
                  content={results.data.category}
                  textTransform="capitalize"
                  top={24}
                  topDesktop={52}
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
                <Typography variant="b3" element="p" content={results.data.descriptions} />
                <Typography variant="h3" element="h3" content="Location" />
                <Typography variant="b3" element="span" content={results.data.location} />
                <Typography variant="h3" element="h3" content="Services" />
                <Flex wrap={true}>
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
                <Typography variant="h3" element="h3" content="Features" />
                <Flex wrap>
                  {(results.data.features || []).map((feature, key) => (
                    <ServiceLabel
                      key={key}
                      variant="b3"
                      element="span"
                      content={feature}
                      textTransform="capitalize"
                    />
                  ))}
                </Flex>
                <VerticalSpacer>
                  <ButtonLink
                    variant="primary"
                    size="large"
                    href={`/book/${id}`}
                    aria-label="Go to book page"
                    title="Go to book page"
                  >
                    Book Now
                  </ButtonLink>
                </VerticalSpacer>
              </WidthConstraints>
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
