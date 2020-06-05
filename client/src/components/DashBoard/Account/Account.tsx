import * as React from 'react';
import Typography from '../../Typography/Typography';
import { UserContext } from '../../../context/UserContext';
import { Block } from '../helper-components/Block';

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
            content={`Welcome back ${user.name}!`}
            textTransform="capitalize"
          />
        )}
        {!!user.email && <Typography variant="h5" element="h3" content={user.email} />}
      </Block>
    </>
  );
};

export default Account;
