import * as React from 'react';
import Typography from '../../../components/Typography/Typography';
import useApi from '../../../hooks/useApi';
import { EnquiriesResponse, Enquiry } from '../../../types/response';
import Loader from '../../Loader/Loader';
import Table from '../../Table/Table';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../../util/constants';

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
  const [tableData, setTableData] = React.useState<Enquiry[]>([]);
  const { deleting, removed, action } = useDeleteRequest(API_ENDPOINT.enquires);

  React.useEffect(() => {
    setTableData(results.data.reverse());
  }, [results]);

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
          {loading ? (
            <Section>
              <Card>
                <Loader />
              </Card>
            </Section>
          ) : (
            <Card>
              <Table
                headerNames={['name', 'email', 'checkIn', 'checkOut', 'establishmentId']}
                rows={tableData}
                action={action}
                busy={deleting}
                deleted={removed}
              />
            </Card>
          )}
        </>
      )}
    </>
  );
};

export default Enquiries;
