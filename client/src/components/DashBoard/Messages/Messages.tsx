import * as React from 'react';
import Card, { MessageCard, MessageCardHeading, DeleteButton } from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import useApi from '../../../hooks/useApi';
import { ContactResponse, Contact } from '../../../types/response';
import Loader from '../../Loader/Loader';
import transformLangText from '../../../util/transformLangText';
import { arrow, trash } from '../../../util/icons';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../../util/constants';

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
          createdAt: 0,
        },
      ],
    },
  });
  const [expanded, setIsExpanded] = React.useState(false);
  const [messagesList, setMessagesList] = React.useState<Contact[]>([]);
  const { deleting, removed, action, removedItemId } = useDeleteRequest(API_ENDPOINT.contact);

  React.useEffect(() => {
    setMessagesList(results.data.reverse());
  }, [results]);

  React.useEffect(() => {
    if (removed && removedItemId) {
      setMessagesList(
        messagesList.filter(element => {
          return element.id !== removedItemId;
        }),
      );
    }
  }, [removed, removedItemId]);

  return (
    <>
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Messages" />
        </Card>
      </Section>
      {loading && (
        <Section>
          <Card>
            <Loader />
          </Card>
        </Section>
      )}
      {messagesList.length === 0 ? (
        <Section>
          <Card>
            <Typography variant="h2" element="h2" content="There are no messages for the moment." />
          </Card>
        </Section>
      ) : (
        <>
          <Section>
            {(messagesList || []).map(item => {
              return (
                <>
                  <MessageCard
                    key={item.id}
                    removed={removed && item.id === removedItemId}
                    busy={deleting && item.id === removedItemId}
                  >
                    <DeleteButton
                      variant="tertiaryVariant"
                      size="small"
                      removed={removed && item.id === removedItemId}
                      icon
                      aria-label="Delete establishment"
                      onClick={e => {
                        e.preventDefault();
                        action(item.id);
                      }}
                    >
                      {trash}
                    </DeleteButton>
                    {!!item.createdAt && (
                      <Typography
                        variant="b1"
                        element="span"
                        content={`${new Date(item.createdAt).toDateString()}`}
                        bottom={8}
                      />
                    )}
                    <Typography
                      variant="h2"
                      element="span"
                      content={item.clientName ? item.clientName : 'Anonym'}
                      bottom={16}
                      bottomDesktop={24}
                    />
                    {!!item.email && (
                      <Typography variant="b1" element="span" content={`Email: ${item.email}`} />
                    )}
                    <Typography
                      variant="b1"
                      element="p"
                      content={expanded ? item.message : transformLangText(item.message, 100)}
                      bottom={8}
                    />
                    <MessageCardHeading
                      expanded={expanded}
                      href="#"
                      aria-label={`${expanded ? 'Read less' : 'Read more'} ${transformLangText(
                        item.message,
                        120,
                      )}`}
                      onClick={e => {
                        e.preventDefault();
                        setIsExpanded(!expanded);
                      }}
                    >
                      {expanded ? 'Close' : 'Read More'}
                      {arrow}
                    </MessageCardHeading>
                  </MessageCard>
                </>
              );
            })}
          </Section>
        </>
      )}
    </>
  );
};

export default Messages;
