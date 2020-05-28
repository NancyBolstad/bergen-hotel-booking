import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex, FlexKid } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { ButtonLink } from '../../components/Button/Button';
import Slider from '../../components/Slider';

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
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints custom="980px">
                <Flex direction="row" align="flex-start">
                  <FlexKid>
                    <Typography
                      variant="b2"
                      element="h1"
                      content={results.data.category}
                      textTransform="capitalize"
                    />
                    <Typography
                      variant="h1"
                      element="h1"
                      content={results.data.name}
                      textTransform="capitalize"
                    />
                    <Typography
                      variant="h2"
                      element="h2"
                      content={`Price from ${results.data.price}`}
                    />
                    <Typography variant="b3" element="p" content={results.data.descriptions} />
                    <VerticalSpacer
                      topSpace="xs"
                      topSpaceDesktop="m"
                      bottomSpace="xs"
                      bottomSpaceDesktop="m"
                    >
                      <Slider slides={results.data.featuredImages} defaultIndex={2} />
                    </VerticalSpacer>
                    <ButtonLink
                      variant="primary"
                      size="large"
                      href={`/book/${id}`}
                      aria-label="Go to book page"
                      title="Go to book page"
                    >
                      Book
                    </ButtonLink>
                  </FlexKid>
                  <FlexKid>
                    {!!results.data.rating && (
                      <Typography
                        variant="h3"
                        element="h3"
                        content={`Rating: ${results.data.rating.toString()}`}
                      />
                    )}
                    <Typography variant="h3" element="h3" content="Features" />
                    <ul>
                      {(results.data.features || []).map((feature, key) => (
                        <li key={key}>{feature}</li>
                      ))}
                    </ul>
                    <Typography variant="h3" element="h3" content="Services" />
                    <ul>
                      {(results.data.services || []).map((service, key) => (
                        <li key={key}>{service}</li>
                      ))}
                    </ul>
                  </FlexKid>
                </Flex>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
        </PageHero>
      )}
      {localContext.loading ? (
        <Loader />
      ) : (
        <HotelCardsList
          sectionTitle="You may also interest"
          ctaText="Explore more"
          ctaUrl="/accommodations"
          list={localContext.default.slice(0, 4)}
        />
      )}
    </>
  );
};

export default HotelDetails;
