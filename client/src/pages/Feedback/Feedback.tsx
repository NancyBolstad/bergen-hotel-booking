import * as React from 'react';
import InfoList from '../../components/InfoList/InfoList';
import PlainBanner from '../../components/Banner/PlainBanner';
import { INFO_LIST } from '../../util/constants';

interface Props {
  bookingSuccess?: boolean;
  contactSuccess?: boolean;
}

export const Feedback: React.FunctionComponent<Props> = ({ bookingSuccess, contactSuccess }) => {
  return (
    <>
      {!!bookingSuccess && <PlainBanner title="Thank you for booking with us!" isTitleColorRed />}
      {!!contactSuccess && <PlainBanner title="Thank you for contacting us!" isTitleColorRed />}
      <InfoList {...INFO_LIST} />
    </>
  );
};

export default Feedback;
