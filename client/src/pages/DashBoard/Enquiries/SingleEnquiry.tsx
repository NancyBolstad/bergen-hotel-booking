import * as React from 'react';
import styled, { css } from 'styled-components';
import { arrow } from '../../../util/icons';
import createMediaQuery from '../../../util/createMediaQuery';
import Typography from '../../../components/Typography';
import Section from '../helper-components/Section';
import Card from '../helper-components/Card';
import useApi from '../../../hooks/useApi';
import { Enquiry } from '../../../types/response';

const TableGrid = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const OrderStatusIndicator = styled.div`
  background: ${props => props.theme.colors.primaryVariant};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  grid-row: 1;
`;

const OrderStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OrderStatus = styled(Typography)`
  padding-left: ${props => `${props.theme.spacing.xs}rem`};
  padding-right: ${props => `${props.theme.spacing.xs}rem`};

  ${createMediaQuery(
    'medium',
    css`
      padding-left: ${props => `${props.theme.spacing.xs}rem`};
      padding-right: 0;
    `,
  )}
`;

const OrderName = styled(Typography)<{ hideOnDesktop?: boolean }>`
  ${props =>
    props.hideOnDesktop &&
    css`
      display: flex;

      ${createMediaQuery(
        'medium',
        css`
          display: none;
        `,
      )}
    `};
`;

const OrderInfoWrapper = styled.div`
  display: flex;
  margin-left: ${props => props.theme.spacing.s}rem;
  position: relative;
`;

const OrderInfo = styled.div<{ trigger?: boolean; hideOnMobile?: boolean }>`
  width: 25%;

  ${props =>
    props.trigger &&
    css`
      width: auto;
    `}

  ${props =>
    props.hideOnMobile &&
    css`
      display: none;

      ${createMediaQuery(
        'medium',
        css`
          display: block;
        `,
      )}
    `}
`;

const ExpandIcon = styled.button<{ isPointingUp: boolean }>`
  border: none;
  background: transparent;

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground} !important;
    transform: ${props => (props.isPointingUp ? css`rotate(-90deg)` : css`rotate(90deg)`)};
  }
`;

interface Props {
  enquiry: Enquiry;
  isDetailsOpen: boolean;
  toggleDetailsOpen: () => void;
}

const SingleEnquiry: React.FC<Props> = ({ isDetailsOpen, toggleDetailsOpen, enquiry }) => {
  return (
    <Section>
      <Card>
        <TableGrid
          onClick={() => toggleDetailsOpen()}
          aria-label={isDetailsOpen ? 'Hide details' : 'Show details'}
        >
          <OrderInfoWrapper>
            {!!enquiry.createdAt && <OrderInfo>{enquiry.createdAt}</OrderInfo>}
            {!!enquiry.id && <OrderInfo>{enquiry.id}</OrderInfo>}
            <OrderInfo trigger>
              <ExpandIcon isPointingUp={isDetailsOpen}>{arrow}</ExpandIcon>
            </OrderInfo>
          </OrderInfoWrapper>
        </TableGrid>
      </Card>
    </Section>
  );
};

export default SingleEnquiry;
