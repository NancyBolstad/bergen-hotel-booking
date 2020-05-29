import * as React from 'react';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography';
import useApi from '../../../hooks/useApi';
import { ContactResponse } from '../../../types/response';
import SingleContact from './SingleContact';
import Loader from '../../Loader/Loader';

interface Props {}

const Messages: React.FC<Props> = () => {
  const { results, loading } = useApi<ContactResponse>({
    endpoint: `${process.env.REACT_APP_API_URL}contact`,
    fetchOnMount: true,
    initialData: {
      code: 0,
      data: [
        {
          id: '',
          clientName: '',
          email: '',
          message: '',
        },
      ],
    },
  });

  return (
    <>
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Messages" />
        </Card>
      </Section>
      {results.data.length === 0 ? (
        <Section>
          <Card>
            <Typography variant="h2" element="h2" content="There are no messages for the moment." />
          </Card>
        </Section>
      ) : (
        <>
          {!!loading && (
            <Card>
              <Loader />
            </Card>
          )}
          {(results.data || []).map(contact => (
            <SingleContact key={contact.id} contact={contact} />
          ))}
        </>
      )}
    </>
  );
};

export default Messages;
