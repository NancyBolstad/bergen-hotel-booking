import * as React from 'react';
import styled, { css } from 'styled-components';
import { Contact } from '../../../types/response';
import Typography from '../../../components/Typography';

const MessageCard = styled.div<{ isOwner?: boolean }>`
  padding: ${props => props.theme.spacing.xs}rem;
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.white};
  width: 100%;
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 0px;
    right: auto;
    top: auto;
    bottom: -20px;
    border: 22px solid;
    border-color: transparent transparent transparent
      ${props => props.theme.colors.secondaryVariant};
  }

  ${props =>
    props.isOwner &&
    css`
      background-color: ${props => props.theme.colors.primary};

      &::after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: auto;
        right: 0px;
        bottom: -20px;
        border: 12px solid;
        border-color: ${props => props.theme.colors.primary} ${props => props.theme.colors.primary}
          transparent transparent;
      }
    `};
`;

const MessageTimestamp = styled.div`
  margin: ${props => `${props.theme.spacing.xs * 2}rem auto ${props.theme.spacing.xs}rem auto`};
  text-align: center;

  &:first-child {
    margin: ${props => `${props.theme.spacing.xs}rem auto ${props.theme.spacing.xs}rem auto`};
  }
`;

interface Props {
  contact: Contact;
}

const Message: React.FC<Props> = ({ contact }) => {
  return (
    <>
      {!!contact.createdAt && <MessageTimestamp>{contact.createdAt}</MessageTimestamp>}
      <Typography
        variant="b2"
        element="span"
        content={contact.clientName ? contact.clientName : 'Anonym'}
      />
      <MessageCard>{contact.message}</MessageCard>
    </>
  );
};

export default Message;
