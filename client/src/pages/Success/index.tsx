import * as React from 'react';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import InfoList, { InfoListProps } from '../../components/InfoList';

interface Props {}

export const Success: React.FunctionComponent<Props> = () => {
  const data: InfoListProps = {
    list: [
      {
        title: 'Lorem ipsum dolor',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      },
      {
        title: 'Ac sapien rutrum',
        content:
          'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
      },
      {
        title: 'Pellentesque ac sapien',
        content: 'Pellentesque ac sapien ac felis accumsan rutrum. Lorem ipsum dolor sit amet.',
      },
    ],
  };
  return (
    <MainContent>
      <Typography element="h1" variant="h1" content="Thank you for contacting us!" isPrimaryColor />
      <InfoList {...data} />
    </MainContent>
  );
};

export default Success;
