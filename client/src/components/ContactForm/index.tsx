import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form, StyledInput, Label, StyledLabelText, StyledTextArea, ErrorMessage } from './styles';
import Button from '../Button';
import Typography from '../Typography';
import contactSchema from '../../util/contactSchema';

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: contactSchema,
  });

  let history = useHistory();

  const onSubmit = () => {
    history.push('/success');
  };

  return (
    <>
      <Typography element="h1" variant="h1" content="Contact Us" isPrimaryColor />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <StyledLabelText>
            First Name <span>*</span>
          </StyledLabelText>
          <StyledInput
            type="text"
            name="firstName"
            placeholder="Your first name"
            ref={register}
            required
          />
        </Label>
        {/* 
      // @ts-ignore */
        errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        <Label>
          <StyledLabelText>
            Last Name <span>*</span>
          </StyledLabelText>
          <StyledInput
            type="text"
            name="lastName"
            placeholder="Your last name"
            ref={register}
            required
          />
        </Label>
        {/* 
      // @ts-ignore */
        errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
        <Label>
          <StyledLabelText>
            Email <span>*</span>
          </StyledLabelText>
          <StyledInput type="email" name="email" placeholder="Your email" ref={register} required />
        </Label>
        {/* 
      // @ts-ignore */
        errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label>
          <StyledLabelText>
            Message <span>*</span>
          </StyledLabelText>
          <StyledTextArea name="message" placeholder="Your message" ref={register} />
        </Label>
        {/* 
      // @ts-ignore */
        errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        <Button size="large" variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
