import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
import Slider from '../../components/Slider/Slider';
import { PlainBanner } from '../../components/Banner';
import LikeButton from '../../components/Button/LikeButton';
import { heartSolid, heart } from '../../util/icons';

interface Props {}

export const HotelDetails: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  console.log(localContext.favorites);
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
        <>
          <PlainBanner
            title={`${results.data.name}`}
            isTitleColorRed
            subTitle={results.data.category}
            buttonVariant="primary"
          />
          <Slider slides={results.data.featuredImages} defaultIndex={1} large />
          <VerticalSpacer topSpace="xs" bottomSpace="xs" bottomSpaceDesktop="xl">
            <HorizontalSpacer>
              <WidthConstraints size="medium">
                <Typography variant="h3" element="p" content={`Price`} />
                <Typography
                  variant="b3"
                  element="span"
                  content={`From ${results.data.price} kr per day`}
                />
                <Typography variant="h3" element="p" content="Services" />
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
                <Typography variant="h3" element="p" content="Features" />
                <Flex>
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
                <Typography variant="h3" element="p" content="Descriptions" />
                <Typography variant="b3" element="p" content={results.data.descriptions} />
                <Flex direction="column" justify="flex-start" align="flex-start">
                  <ButtonLink
                    variant="primary"
                    size="large"
                    href={`/book/${id}`}
                    aria-label="Go to book page"
                    title="Go to book page"
                  >
                    Book Now
                  </ButtonLink>
                  <VerticalSpacer topSpace="s" bottomSpace="s">
                    {!!localContext.favorites && results.data.id && (
                      <LikeButton card={results.data} withText alginLeft />
                    )}
                  </VerticalSpacer>
                </Flex>
              </WidthConstraints>
            </HorizontalSpacer>
          </VerticalSpacer>
          <VerticalSpacer topSpace="xs" topSpaceDesktop="xl">
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
          </VerticalSpacer>
        </>
      )}
    </>
  );
};

export default HotelDetails;
