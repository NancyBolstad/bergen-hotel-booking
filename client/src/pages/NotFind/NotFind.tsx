import * as React from 'react';
import PlainBanner from '../../components/Banner/PlainBanner';

interface Props {}

export const NotFind: React.FunctionComponent<Props> = () => {
  return (
    <>
      <PlainBanner
        title="404 - Not found"
        buttonText="Go to home page"
        redirectLink="/"
        isTitleColorRed
        large
        widthNavigationIcon
      />
    </>
  );
};

export default NotFind;
