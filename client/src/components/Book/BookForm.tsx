import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { StyledInput, StyledLabelWrapper, Form, StyledLabel, ErrorMessage } from '../FormElement';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import BookSchema from './book.schema';
import postData from '../../util/postData';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import { Flex } from '../Flex';

interface Props {
  establishmentId: string;
  establishmentName?: string;
}

const BookForm: React.FC<Props> = ({ establishmentId, establishmentName }) => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: BookSchema,
  });

  const [posting, setPosting] = React.useState<boolean>(false);

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'enquiries') {
    setPosting(true);
    const response = await postData({
      endpoint: endpoint,
      data: {
        ...data,
        establishmentId,
      },
    });

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
              content={
                establishmentName
                  ? `Booking your stay at ${establishmentName} `
                  : `Send in your booking`
              }
              textTransform="capitalize"
            />
            <Form onSubmit={handleSubmit((data: Object) => sendForm(data, 'enquiries'))} noValidate>
              <StyledLabel>
                <StyledLabelWrapper>
                  Name <span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Your name"
                  ref={register}
                  required
                />
              </StyledLabel>
              {/* 
      // @ts-ignore */
              errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              <StyledLabel>
                <StyledLabelWrapper>
                  Email <span>*</span>
                </StyledLabelWrapper>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Your email"
                  ref={register}
                  required
                />
              </StyledLabel>
              {/* 
      // @ts-ignore */
              errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              <StyledLabel>
                <StyledLabelWrapper>
                  Check-in Date <span>*</span>
                </StyledLabelWrapper>
                <StyledInput type="date" name="checkIn" ref={register} required />
              </StyledLabel>
              {/* 
      // @ts-ignore */
              errors.checkIn && <ErrorMessage>{errors.checkIn.message}</ErrorMessage>}
              <StyledLabel>
                <StyledLabelWrapper>
                  Check-out Date <span>*</span>
                </StyledLabelWrapper>
                <StyledInput type="date" name="checkOut" ref={register} required />
              </StyledLabel>
              {/* 
      // @ts-ignore */
              errors.checkOut && <ErrorMessage>{errors.checkOut.message}</ErrorMessage>}
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

export default BookForm;
