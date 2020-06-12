import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  StyledInput,
  StyledLabelWrapper,
  StyledTextArea,
  Form,
  StyledLabel,
  ErrorMessage,
} from '../../../components/FormElement';
import Button, { ButtonInternal } from '../../../components/Button/Button';
import Typography from '../../../components/Typography/Typography';
import EstablishmentSchema from './establishment.schema';
import postData from '../../../util/postData';
import {
  WidthConstraints,
  VerticalSpacer,
  HorizontalSpacer,
  Flex,
} from '../../../components/Layout';
import { Image } from '../../../types/response';
import { ClickableBackgroundImage } from '../../Layout/BackgroundImage';
import { cross, solidArrow } from '../../../util/icons';
import { SelectLabel, StyledSelectInput, Arrow } from '../../FormElement/StyledSelect';
import { CATEGORIES, SERVICES, PLACEHOLDER_IMAGE, UNSPLASH_API } from '../../../util/constants';
import { StyledCheckboxWrapper } from '../../FormElement/StyledCheckbox';
import Busy from '../../Loader/Busy';
import useApi from '../../../hooks/useApi';
import { Root } from '../../../types/unsplash';
import Loader from '../../Loader/Loader';
import useResponsiveWindowSize from '../../../hooks/useResponsiveWindowSize';

interface Props {}

const EstablishmentForm: React.FC<Props> = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: EstablishmentSchema,
  });
  const { isTablet } = useResponsiveWindowSize();
  const [selectedImages, setSelectedImages] = React.useState<Image[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState<number[]>([]);
  const { results, loading } = useApi<Root[]>({
    endpoint: UNSPLASH_API,
    fetchOnMount: true,
    initialData: [
      {
        id: '',
        created_at: '',
        updated_at: '',
        promoted_at: '',
        width: 0,
        height: 0,
        color: '',
        description: '',
        alt_description: '',
        urls: {
          raw: '',
          full: '',
          regular: '',
          small: '',
          thumb: '',
        },
      },
    ],
  });

  const [posting, setPosting] = React.useState<boolean>(false);

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'establishments') {
    setPosting(true);
    if (selectedImages.length <= 0) {
      // @ts-ignore
      setSelectedImages(selectedImages.push(PLACEHOLDER_IMAGE));
    }

    const response = await postData({
      endpoint: endpoint,
      data: {
        ...data,
        featuredImages: selectedImages,
      },
    });

    if (response.status === 200) {
      setPosting(false);
      history.push(`/dashboard/establishments/`);
    }
  }

  return (
    <VerticalSpacer>
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <Flex direction="row" align="flex-end" justify="flex-end">
            <ButtonInternal
              variant="tertiaryVariant"
              size="small"
              to="/dashboard/establishments/"
              aria-label="Close form"
            >
              {cross}
            </ButtonInternal>
          </Flex>
          <Busy busy={posting}>
            <Flex direction="column">
              <Typography
                element="h2"
                variant="h2"
                content="Create a new establishment"
                textTransform="capitalize"
              />
              <Form
                onSubmit={handleSubmit((data: Object) => {
                  sendForm(data, 'establishments');
                })}
                noValidate
              >
                <StyledLabel>
                  <StyledLabelWrapper>
                    Establishment name <span>*</span>
                  </StyledLabelWrapper>
                  <StyledInput type="text" name="name" placeholder="Name" ref={register} required />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>
                    Location <span>*</span>
                  </StyledLabelWrapper>
                  <StyledInput
                    type="text"
                    name="location"
                    placeholder="Location"
                    ref={register}
                    required
                  />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>
                    Price <span>*</span>
                  </StyledLabelWrapper>
                  <StyledInput
                    type="number"
                    name="price"
                    placeholder="Price"
                    ref={register}
                    required
                  />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>
                    Description <span>*</span>
                  </StyledLabelWrapper>
                  <StyledTextArea
                    name="descriptions"
                    placeholder="Description"
                    ref={register}
                    required
                  />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.descriptions && <ErrorMessage>{errors.descriptions.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>
                    Category <span>*</span>
                  </StyledLabelWrapper>
                  <SelectLabel>
                    <StyledSelectInput
                      name="category"
                      placeholder="Category"
                      ref={register}
                      required
                      aria-label="Filter accommodations by category type"
                    >
                      <option value="">Select ...</option>
                      {(CATEGORIES || []).map((c, k) => (
                        <option key={k} value={c}>
                          {c}
                        </option>
                      ))}
                    </StyledSelectInput>
                    <Arrow>{solidArrow}</Arrow>
                  </SelectLabel>
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>Services</StyledLabelWrapper>
                  {SERVICES.map((service, index) => (
                    <StyledCheckboxWrapper key={`service-${index}`}>
                      <input type="checkbox" name={`services`} ref={register} value={service} />
                      <Typography
                        variant="b1"
                        element="p"
                        content={service}
                        textTransform="capitalize"
                      />
                    </StyledCheckboxWrapper>
                  ))}
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.services && <ErrorMessage>{errors.services.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>Select some images for the establishment</StyledLabelWrapper>
                  {loading ? (
                    <Loader />
                  ) : (
                    <VerticalSpacer topSpace="s">
                      <Flex direction="row" justify="space-between" maxHeight="480px">
                        {results.map((image, index) => {
                          return (
                            <ClickableBackgroundImage
                              isSelectable
                              customWidth={isTablet ? '75vw' : '12.25rem'}
                              customHeight="12.25rem"
                              selected={selectedIndex.includes(index)}
                              imageUrl={image.urls.small}
                              key={index}
                              onClick={e => {
                                e.preventDefault();
                                if (selectedIndex.includes(index)) {
                                  setSelectedIndex(
                                    selectedIndex.filter(s => {
                                      return s !== index;
                                    }),
                                  );
                                  setSelectedImages(
                                    selectedImages.filter(s => {
                                      return (
                                        s.url !== image.urls.full && s.alt !== image.alt_description
                                      );
                                    }),
                                  );
                                } else {
                                  setSelectedIndex([...selectedIndex, index]);
                                  setSelectedImages([
                                    ...selectedImages,
                                    {
                                      url: image.urls.regular,
                                      alt: image.alt_description,
                                    },
                                  ]);
                                }
                              }}
                            />
                          );
                        })}
                      </Flex>
                    </VerticalSpacer>
                  )}
                </StyledLabel>
                <Button size="large" variant="primary" type="submit">
                  {posting ? 'Creating ...' : 'Create'}
                </Button>
              </Form>
            </Flex>
          </Busy>
        </WidthConstraints>
      </HorizontalSpacer>
    </VerticalSpacer>
  );
};

export default EstablishmentForm;
