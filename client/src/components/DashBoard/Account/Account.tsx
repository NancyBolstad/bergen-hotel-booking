import * as React from 'react';
import Typography from '../../Typography/Typography';
import { UserContext } from '../../../context/UserContext';
import { Block } from '../styles/common';
import getTimeOfDay from '../../../util/getTimeOfDay';
import EditAccount from './EditAccount';

interface Props {}

const Account: React.FC<Props> = () => {
  const { user } = React.useContext(UserContext);

  return (
    <>
      <Block>
        {!!user.name && (
          <Typography
            variant="h2"
            element="h2"
            content={`Good ${getTimeOfDay()} ${user.name}!`}
            textTransform="capitalize"
          />
        )}
      </Block>
      <EditAccount />
    </>
  );
};

export default Account;
