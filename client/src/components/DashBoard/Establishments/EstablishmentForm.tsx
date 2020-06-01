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
  FlexKid,
} from '../../../components/Layout';
import { Image } from '../../../types/response';
import ImageGrid from '../../Image/ImageGrid';
import { ClickableBackgroundImage } from '../../Image/BackgroundImage';
import { cross, solidArrow } from '../../../util/icons';
import { SelectLabel, StyledSelectInput, Arrow } from '../../FormElement/StyledSelect';
import { CATEGORIES } from '../../../util/constants';
import useIsTablet from '../../../hooks/useIsTablet';

const gridImages: Image[] = [
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 1',
  },
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 2',
  },
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 3',
  },
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 4',
  },
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 5',
  },
  {
    url:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    alt: 'Foo 6',
  },
];

interface Props {
  toggleClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

const EstablishmentForm: React.FC<Props> = ({ toggleClose }) => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: EstablishmentSchema,
  });
  const isTablet = useIsTablet();
  const [selectedImages, setSelectedImages] = React.useState<Image[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState<number[]>([]);

  const [posting, setPosting] = React.useState<boolean>(false);

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'establishments') {
    setPosting(true);
    // const response = await postData({
    //   endpoint: endpoint,
    //   data: {
    //     ...data,
    //     featuredImages: selectedImages,
    //   },
    // });

    // if (response.status === 200) {
    //   setPosting(false);
    //   history.push(`/book-success`);
    // }
  }
  console.log(selectedImages);

  return (
    <VerticalSpacer>
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <Flex direction="row" align="flex-end" justify="flex-end">
            <ButtonInternal
              variant="tertiary"
              size="small"
              iconButton
              to="/dashboard/establishments/"
              aria-label="Close form"
            >
              {cross}
            </ButtonInternal>
          </Flex>
          <Flex direction="column">
            <Typography
              element="h2"
              variant="h2"
              content="Create a new establishment"
              textTransform="capitalize"
            />
            <Form
              onSubmit={handleSubmit((data: Object) => sendForm(data, 'establishments'))}
              noValidate
            >
              <StyledLabel>
                <StyledLabelWrapper>
                  Establishment name <span>*</span>
                </StyledLabelWrapper>
                <StyledInput type="text" name="name" placeholder="Name" ref={register} required />
              </StyledLabel>
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
              <StyledLabel>
                <StyledLabelWrapper>
                  Descriptions <span>*</span>
                </StyledLabelWrapper>
                <StyledTextArea
                  name="descriptions"
                  placeholder="Descriptions"
                  ref={register}
                  required
                />
              </StyledLabel>
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
                    {(CATEGORIES || []).map((c, k) => (
                      <option key={k} value={c}>
                        {c}
                      </option>
                    ))}
                  </StyledSelectInput>
                  <Arrow>{solidArrow}</Arrow>
                </SelectLabel>
              </StyledLabel>
              <StyledLabel>
                <StyledLabelWrapper>
                  Features <span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="text"
                  name="features[0]"
                  placeholder="features"
                  ref={register}
                  required
                />
                <StyledInput type="text" name="features[1]" placeholder="Services" ref={register} />
              </StyledLabel>
              <StyledLabel>
                <StyledLabelWrapper>
                  Services <span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="text"
                  name="services[0]"
                  placeholder="Services"
                  ref={register}
                  required
                />
                <StyledInput
                  type="text"
                  name="services[1]"
                  placeholder="Services"
                  ref={register}
                  required
                />
                <StyledInput
                  type="text"
                  name="services[2]"
                  placeholder="Services"
                  ref={register}
                  required
                />
              </StyledLabel>
              <Flex direction="row" justify="space-between">
                {gridImages.map((image, index) => {
                  return (
                    <ClickableBackgroundImage
                      isSelectable
                      customWidth={isTablet ? '75vw' : '12.25rem'}
                      customHeight="12.25rem"
                      selected={selectedIndex.includes(index)}
                      imageUrl={image.url}
                      key={index}
                      onClick={e => {
                        e.preventDefault();
                        console.log(image.alt);
                        if (selectedIndex.includes(index)) {
                          setSelectedIndex(
                            selectedIndex.filter(s => {
                              return s != index;
                            }),
                          );
                          setSelectedImages(
                            selectedImages.filter(s => {
                              return s != image;
                            }),
                          );
                        } else {
                          setSelectedIndex([...selectedIndex, index]);
                          setSelectedImages([...selectedImages, image]);
                        }
                      }}
                    />
                  );
                })}
              </Flex>
              <Button size="large" variant="primary" type="submit">
                {posting ? 'Sending ...' : 'Send'}
              </Button>
            </Form>
          </Flex>
        </WidthConstraints>
      </HorizontalSpacer>
    </VerticalSpacer>
  );
};

export default EstablishmentForm;
