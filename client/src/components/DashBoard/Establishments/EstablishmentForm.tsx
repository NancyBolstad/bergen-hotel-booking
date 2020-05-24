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
import Button from '../../../components/Button/Button';
import Typography from '../../../components/Typography';
import EstablishmentSchema from './establishment.schema';
import postData from '../../../util/postData';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../../../components/Layout';
import { Flex } from '../../../components//Flex';

interface Props {}

const EstablishmentForm: React.FC<Props> = ({}) => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: EstablishmentSchema,
  });

  const [posting, setPosting] = React.useState<boolean>(false);

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'establishments') {
    console.log(2222222);

    setPosting(true);
    console.log(data);
    const response = await postData({
      endpoint: endpoint,
      data: {
        ...data,
      },
    });

    console.log(response);

    if (response.status === 200) {
      setPosting(false);
      history.push(`/book-success`);
    }
  }

  return (
    <VerticalSpacer>
      <HorizontalSpacer>
        <WidthConstraints size="large">
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
                  Category <span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="text"
                  name="category"
                  placeholder="Category"
                  ref={register}
                  required
                />
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
              <StyledLabel>
                <StyledLabelWrapper>
                  Featured Images<span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="text"
                  name="featuredImages[0].url"
                  placeholder="Image url"
                  ref={register}
                  required
                />
                <StyledInput
                  type="text"
                  name="featuredImages[0].alt"
                  placeholder="Image alt"
                  ref={register}
                  required
                />
                <StyledInput
                  type="text"
                  name="featuredImages[1].url"
                  placeholder="Image url"
                  ref={register}
                  required
                />
                <StyledInput
                  type="text"
                  name="featuredImages[1].alt"
                  placeholder="Image alt"
                  ref={register}
                  required
                />
              </StyledLabel>
              {/* 
      // @ts-ignore */
              errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              {/* 
      // @ts-ignore */
              errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
              {/* 
        // @ts-ignore */
              errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
              {/* 
                  // @ts-ignore */
              errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
              {/* 
                            // @ts-ignore */
              errors.descriptions && <ErrorMessage>{errors.descriptions.message}</ErrorMessage>}
              {/* 
                                      // @ts-ignore */
              errors.featuredImages && <ErrorMessage>{errors.featuredImages.message}</ErrorMessage>}
              {/* 
                                                // @ts-ignore */
              errors.services && <ErrorMessage>{errors.services.message}</ErrorMessage>}
              {/* 
                                                          // @ts-ignore */
              errors.features && <ErrorMessage>{errors.features.message}</ErrorMessage>}
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
