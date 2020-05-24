import * as React from 'react';
import styled, { css } from 'styled-components';
import { Route } from 'react-router-dom';
import createFontStyles from '../../../util/createFontStyles';
import createMediaQuery from '../../../util/createMediaQuery';
import SingleEnquiry from './SingleEnquiry';
import Typography from '../../../components/Typography';
import Section from '../helper-components/Section';
import Card from '../helper-components/Card';
import useApi from '../../../hooks/useApi';
import { EnquiriesResponse } from '../../../types/response';

const TableGrid = styled.div`
  display: none;

  ${createMediaQuery(
    'medium',
    css`
      display: flex;
      margin-bottom: ${props => props.theme.spacing.s}rem;
      width: 100%;
      padding: 0 calc(25px + ${props => props.theme.spacing.xs + props.theme.spacing.xs}rem);
    `,
  )}
`;

const Title = styled.div`
  display: flex;
  width: 25%;
  ${props => createFontStyles(props.theme.fonts.h4)};

  strong {
    margin-right: ${props => props.theme.spacing.xs}rem;
    display: block;
  }
`;

interface Props {}

const Enquiries: React.FC<Props> = () => {
  const { data, loading } = useApi<EnquiriesResponse>({
    endpoint: `${process.env.REACT_APP_API_URL}enquiries`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [
        {
          id: '',
          checkIn: '',
          checkOut: '',
          email: '',
          establishmentId: '',
          name: '',
        },
      ],
    },
  });

  const [orderDetailOpenList, setOrderDetailOpenList] = React.useState(
    new Array(data.data.length).fill(false),
  );

  const toggleDetailsOpen = (index: number) => () => {
    const previousDetailsState = orderDetailOpenList[index];
    const updatedOrderDetailOpenList = orderDetailOpenList.fill(false);
    updatedOrderDetailOpenList[index] = !previousDetailsState;
    setOrderDetailOpenList([...updatedOrderDetailOpenList]);
  };

  return (
    <Route
      path="/dashboard/enquiries/:orderId?"
      render={({ match }) => {
        const orderId = match.params.orderId as string | undefined;

        if (orderId) {
          const currentOrder = data.data.find(o => o.id === orderId);

          if (!currentOrder) return null;
        } else {
          return (
            <>
              <Section>
                <Card>
                  <Typography variant="h2" element="h2" content="Enquiries" />
                </Card>
              </Section>
              <TableGrid></TableGrid>
              {data.data.length === 0 ? (
                <Section>
                  <Card>
                    <Typography
                      variant="h2"
                      element="h2"
                      content="There are no enquiries for the moment."
                    />
                  </Card>
                </Section>
              ) : (
                <>
                  {(data.data || []).map((enquiry, index) => (
                    <SingleEnquiry
                      key={enquiry.id}
                      enquiry={enquiry}
                      isDetailsOpen={orderDetailOpenList[index]}
                      toggleDetailsOpen={toggleDetailsOpen(index)}
                    />
                  ))}
                </>
              )}
            </>
          );
        }
      }}
    />
  );
};

export default Enquiries;
