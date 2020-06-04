import * as React from 'react';
import PlainBanner from '../../components/Banner/PlainBanner';

export const NotFound: React.FunctionComponent = () => {
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

export default NotFound;
