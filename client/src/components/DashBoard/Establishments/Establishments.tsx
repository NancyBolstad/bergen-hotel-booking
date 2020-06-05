import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '../../Typography/Typography';
import EstablishmentForm from './EstablishmentForm';
import EditableEstablishmentsList from './EditableEstablishmentsList';
import { Block } from '../helper-components/Block';

interface Props {}

const Establishments: React.FC<Props> = () => {
  const [createEstablishment, setCreateEstablishment] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/dashboard/establishments/new') {
      setCreateEstablishment(true);
    } else {
      setCreateEstablishment(false);
    }
  }, [location]);

  return (
    <>
      <Block>
        <Typography variant="h2" element="h2" content="Manage Establishments" />
      </Block>
      {!!createEstablishment && (
        <Block>
          <EstablishmentForm />
        </Block>
      )}
      {!createEstablishment && <EditableEstablishmentsList />}
    </>
  );
};

export default Establishments;
