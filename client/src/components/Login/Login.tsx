import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { StyledInput, StyledLabelWrapper, Form, StyledLabel, ErrorMessage } from '../FormElement';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import LoginSchema from './login.schema';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer, Section, Flex } from '../Layout';
import { UserContext } from '../../context/UserContext';

type LoginFormData = {
  userName: string;
  password: string;
};

interface Props {}

const Login: React.FC<Props> = () => {
  const history = useHistory();
  const { user, setUser } = React.useContext(UserContext);
  const { register, errors, handleSubmit, setValue } = useForm<LoginFormData>({
    validationSchema: LoginSchema,
  });

  React.useEffect(() => {
    if (user.loggedIn) {
      history.push(`/dashboard`);
    }
  }, [user.loggedIn, history]);

  return (
    <Section>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Flex direction="column">
              <Typography element="h1" variant="h1" content="Log Into Admin Dashboard" />
              <Form
                onSubmit={handleSubmit(({ userName }) => {
                  setUser({
                    name: userName,
                    loggedIn: true,
                  });
                })}
                noValidate
              >
                <StyledLabel>
                  <StyledLabelWrapper>
                    Username <span>*</span>
                  </StyledLabelWrapper>
                  <StyledInput
                    type="text"
                    name="userName"
                    placeholder="Your username"
                    ref={register}
                    required
                    onChange={e => setValue('userName', e.target.value)}
                  />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
                <StyledLabel>
                  <StyledLabelWrapper>
                    Password <span>*</span>
                  </StyledLabelWrapper>
                  <StyledInput
                    type="password"
                    name="password"
                    placeholder="Your password"
                    ref={register}
                    required
                  />
                </StyledLabel>
                {/* 
      // @ts-ignore */
                errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                <Button size="large" variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Flex>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default Login;
