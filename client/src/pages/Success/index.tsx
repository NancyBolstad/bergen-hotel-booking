import * as React from 'react';
import InfoList, { InfoListProps } from '../../components/InfoList/InfoList';
import PlainBanner from '../../components/Banner/PlainBanner';

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
    <>
      <PlainBanner title="Thank you for contacting us!" isTitleColorRed />
      <InfoList {...data} />
    </>
  );
};

export default Success;
