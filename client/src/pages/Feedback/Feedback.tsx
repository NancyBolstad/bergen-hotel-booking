import * as React from 'react';
import { useLocation } from 'react-router-dom';
import InfoList, { InfoListProps } from '../../components/InfoList/InfoList';
import PlainBanner from '../../components/Banner/PlainBanner';

interface Props {
  bookingSuccess?: boolean;
  contactSuccess?: boolean;
}

export const Feedback: React.FunctionComponent<Props> = ({ bookingSuccess, contactSuccess }) => {
  const location = useLocation();

  console.log(location);
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
      {!!bookingSuccess && <PlainBanner title="Thank you for booking with us!" isTitleColorRed />}
      {!!contactSuccess && <PlainBanner title="Thank you for contacting us!" isTitleColorRed />}
      <InfoList {...data} />
    </>
  );
};

export default Feedback;
