import * as React from 'react';
import Typography from '../../../components/Typography/Typography';
import useApi from '../../../hooks/useApi';
import { EnquiriesResponse } from '../../../types/response';
import Loader from '../../Loader/Loader';
import Table from '../../Table/Table';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';

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

  const [editing, setEditing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  async function deleteEnquiry(id: string) {
    setEditing(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL}enquiries/${id}`, {
      method: 'delete',
    });
    if (response.ok) {
      setSuccess(true);
    }
    setEditing(false);
  }

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
            <Section>
              <Card>
                <Loader />
              </Card>
            </Section>
          )}
          {!!results.data && (
            <Card>
              <Table
                headerNames={['name', 'email', 'checkIn', 'checkOut', 'establishmentId']}
                rows={results.data.reverse()}
                action={deleteEnquiry}
                busy={editing}
                deleted={success}
              />
            </Card>
          )}
        </>
      )}
    </>
  );
};

export default Enquiries;
