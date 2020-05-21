import * as React from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';
import { HotelDetailsRoot } from '../../types/response';
import { VerticalSpacer, HorizontalSpacer, WidthConstraints } from '../../components/Layout';
import Typography from '../../components/Typography';
import { Flex, FlexKid } from '../../components/Flex';
import { HotelCardsList } from '../../components/HotelCards';
import { Context } from '../../context/GlobalContext';
import { ButtonInternal } from '../../components/Button/Button';
import Slider from '../../components/Slider';

interface Props {}

export const HotelDetails: React.FunctionComponent<Props> = () => {
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

  return (
    <>
      {loading && <Loader />}
      {!!data && !loading && (
        <PageHero figure={data.data.featuredImages[0]}>
          <VerticalSpacer topSpace="xs" topSpaceDesktop="m" bottomSpace="xs" bottomSpaceDesktop="m">
            <HorizontalSpacer>
              <WidthConstraints custom="980px">
                <Flex direction="row" align="flex-start">
                  <FlexKid>
                    <Typography
                      variant="b2"
                      element="h1"
                      content={data.data.category}
                      textTransform="capitalize"
                    />
                    <Typography
                      variant="h1"
                      element="h1"
                      content={data.data.name}
                      textTransform="capitalize"
                    />
                    <Typography
                      variant="h2"
                      element="h2"
                      content={`Price from ${data.data.price}`}
                    />
                    <Typography variant="b3" element="p" content={data.data.descriptions} />
                    <VerticalSpacer
                      topSpace="xs"
                      topSpaceDesktop="m"
                      bottomSpace="xs"
                      bottomSpaceDesktop="m"
                    >
                      <Slider slides={data.data.featuredImages} defaultIndex={2} />
                    </VerticalSpacer>
                    <ButtonInternal variant="primary" size="large" to={`/book/${id}`}>
                      Book
                    </ButtonInternal>
                  </FlexKid>
                  <FlexKid>
                    {!!data.data.rating && (
                      <Typography
                        variant="h3"
                        element="h3"
                        content={`Rating: ${data.data.rating.toString()}`}
                      />
                    )}
                    <Typography variant="h3" element="h3" content="Features" />
                    <ul>
                      {(data.data.features || []).map((feature, key) => (
                        <li key={key}>{feature}</li>
                      ))}
                    </ul>
                    <Typography variant="h3" element="h3" content="Services" />
                    <ul>
                      {(data.data.services || []).map((service, key) => (
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
          list={localContext.default.slice(0, 3)}
          backgroundColor="secondaryVariant"
        />
      )}
    </>
  );
};

export default HotelDetails;
