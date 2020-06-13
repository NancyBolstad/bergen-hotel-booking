import * as React from 'react';
import Typography from '../../../components/Typography/Typography';
import useApi from '../../../hooks/useApi';
import { EnquiriesResponse, Enquiry } from '../../../types/response';
import Loader from '../../Loader/Loader';
import Table from '../../Table/Table';
import { Block } from '../styles/common';
import { API_ENDPOINT } from '../../../util/constants';

interface Props {}

const Enquiries: React.FC<Props> = () => {
  const { results, loading } = useApi<EnquiriesResponse>({
    url: `${process.env.REACT_APP_API_URL}${API_ENDPOINT.enquires}`,
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

  React.useEffect(() => {
    setTableData(results.data.reverse());
  }, [results]);

  return (
    <>
      <Block>
        <Typography variant="h2" element="h2" content="Manage Enquiries" />
      </Block>
      {results.data.length === 0 ? (
        <Block>
          <Typography variant="h2" element="h2" content="There are no enquiries for the moment." />
        </Block>
      ) : (
        <>
          {loading ? (
            <Block>
              <Loader />
            </Block>
          ) : (
            <Block>
              <Table
                headerNames={['name', 'email', 'checkIn', 'checkOut', 'establishmentId']}
                rows={tableData}
              />
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default Enquiries;
