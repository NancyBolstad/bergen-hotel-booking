import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form, StyledInput, Label, StyledLabelText, StyledTextArea, ErrorMessage } from './styles';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import contactSchema from '../../util/contactSchema';
import postData from '../../util/postData';

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: contactSchema,
  });

  let history = useHistory();

  async function sendForm(data: Object, endpoint: 'contact') {
    const response = await postData({
      endpoint: endpoint,
      data: data,
    });

    console.log(response);

    if (response.status === 200) {
      history.push('/success');
    }
  }

  return (
    <>
      <Typography element="h1" variant="h1" content="Contact Us" isPrimaryColor />
      <Form onSubmit={handleSubmit((data: Object) => sendForm(data, 'contact'))} noValidate>
        <Label>
          <StyledLabelText>
            Name <span>*</span>
          </StyledLabelText>
          <StyledInput
            type="text"
            name="clientName"
            placeholder="Your name"
            ref={register}
            required
          />
        </Label>
        {/* 
      // @ts-ignore */
        errors.clientName && <ErrorMessage>{errors.clientName.message}</ErrorMessage>}
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
