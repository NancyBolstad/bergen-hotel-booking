import * as React from 'react';
import SingleEnquiry from './SingleEnquiry';
import Typography from '../../../components/Typography';
import Section from '../helper-components/Section';
import Card from '../helper-components/Card';
import useApi from '../../../hooks/useApi';
import { EnquiriesResponse } from '../../../types/response';
import Loader from '../../Loader/Loader';

interface Props {}

const Enquiries: React.FC<Props> = () => {
  const { results, loading } = useApi<EnquiriesResponse>({
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

  return (
    <>
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Enquiries" />
        </Card>
      </Section>
      {results.data.length === 0 ? (
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
          {!!loading && (
            <Card>
              <Loader />
            </Card>
          )}
          {(results.data || []).map(enquiry => (
            <SingleEnquiry key={enquiry.id} enquiry={enquiry} />
          ))}
        </>
      )}
    </>
  );
};

export default Enquiries;
