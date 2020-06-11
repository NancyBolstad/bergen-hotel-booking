import * as React from 'react';
import { useForm } from 'react-hook-form';
import Typography from '../../Typography/Typography';
import { UserContext } from '../../../context/UserContext';
import { Block, EditingButtonGroup } from '../styles/common';
import Busy from '../../Loader/Busy';
import { Form, StyledLabel, StyledInput, ErrorMessage } from '../../FormElement';
import { Button } from '../../Button/styles';
import AccountSchema from './account.schema';
import { cross, edit } from '../../../util/icons';
import useIsMobile from '../../../hooks/useIsMobile';

interface Props {}

const EditAccount: React.FC<Props> = () => {
  const { user, setUser } = React.useContext(UserContext);
  const { handleSubmit, register, errors } = useForm({
    validationSchema: AccountSchema,
  });
  const [editing, setEditing] = React.useState(false);
  const [updating, setUpdating] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <Block>
        <EditingButtonGroup direction="row" justify="flex-end">
          {editing ? (
            <Button
              variant="primary"
              size="small"
              aria-label="Drop editing"
              icon={isMobile}
              onClick={e => {
                e.preventDefault();
                setEditing(false);
              }}
            >
              {!isMobile && 'Drop editing'}
              {cross}
            </Button>
          ) : (
            <Button
              variant="primary"
              size="small"
              aria-label="Edit profile"
              onClick={e => {
                e.preventDefault();
                setEditing(true);
              }}
              icon={isMobile}
            >
              {!isMobile && 'Edit Profile'}
              {edit}
            </Button>
          )}
        </EditingButtonGroup>
        <Typography variant="h2" element="h2" content="Account Details" />
        <Busy busy={updating}>
          <Form
            noValidate
            leftAlign={isMobile ? false : true}
            onSubmit={handleSubmit(({ name, email, address }) => {
              setUser({
                name: name,
                email: email,
                address: address,
                loggedIn: true,
              });
              setEditing(false);
              setUpdating(false);
            })}
          >
            <StyledLabel isSameLine>
              <Typography variant="b2" element="span" content="Name" />
              <StyledInput
                type="text"
                name="name"
                placeholder={editing ? 'Your user name' : user.name}
                ref={register}
                disabled={!editing}
              />
            </StyledLabel>
            {/* 
      // @ts-ignore */
            errors.name && editing && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <StyledLabel isSameLine>
              <Typography variant="b2" element="span" content="Email" />
              <StyledInput
                type="email"
                name="email"
                placeholder={editing ? 'Your email' : user.email}
                ref={register}
                disabled={!editing}
              />
            </StyledLabel>
            {/* 
      // @ts-ignore */
            errors.email && editing && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <StyledLabel isSameLine>
              <Typography variant="b2" element="span" content="Address" />
              <StyledInput
                type="text"
                name="address"
                placeholder={editing ? 'Your address' : user.address}
                ref={register}
                disabled={!editing}
              />
            </StyledLabel>
            {/* 
      // @ts-ignore */
            errors.address && editing && <ErrorMessage>{errors.address.message}</ErrorMessage>}
            {!!editing && (
              <Button
                variant="primary"
                size="small"
                type="submit"
                aria-label="Submit to update profile"
              >
                {updating ? 'Updating ...' : ' Update'}
              </Button>
            )}
          </Form>
        </Busy>
      </Block>
    </>
  );
};

export default EditAccount;
