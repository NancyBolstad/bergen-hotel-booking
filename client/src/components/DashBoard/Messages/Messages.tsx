import * as React from 'react';
import { MessageCard, ExpandButton, DeleteButton, Block } from '../styles/common';
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
  const [expanded, setIsExpanded] = React.useState('');
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
  }, [removed, removedItemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Block>
        <Typography variant="h2" element="h2" content="Messages" />
      </Block>
      {loading && (
        <Block>
          <Loader />
        </Block>
      )}
      {messagesList.length === 0 ? (
        <Block>
          <Typography variant="h2" element="h2" content="There are no messages for the moment." />
        </Block>
      ) : (
        <>
          {(messagesList || []).map(item => {
            return (
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
                  content={
                    expanded
                      ? item.message
                      : item.message.length > 100
                      ? transformLangText(item.message, 100)
                      : item.message
                  }
                  bottom={8}
                />
                {item.message.length > 100 && (
                  <ExpandButton
                    expanded={expanded === item.id}
                    href="#"
                    aria-label={`${expanded ? 'Read less' : 'Read more'} ${transformLangText(
                      item.message,
                      120,
                    )}`}
                    onClick={e => {
                      e.preventDefault();
                      if (expanded) {
                        setIsExpanded('');
                      } else {
                        setIsExpanded(item.id);
                      }
                    }}
                  >
                    {expanded === item.id ? 'Read Less' : 'Read More'}
                    {arrow}
                  </ExpandButton>
                )}
              </MessageCard>
            );
          })}
        </>
      )}
    </>
  );
};

export default Messages;
