import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import EstablishmentForm from './EstablishmentForm';
import { Context } from '../../../context/GlobalContext';
import Loader from '../../Loader/Loader';
import SearchHotel from '../../SearchHotel/SearchHotel';

interface Props {}

const Establishments: React.FC<Props> = () => {
  const localContext = React.useContext(Context);
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
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Manage Establishments" />
        </Card>
      </Section>
      {createEstablishment && (
        <Section>
          <Card>
            <EstablishmentForm />
          </Card>
        </Section>
      )}
      {!createEstablishment && (
        <Section>
          <Card>
            <SearchHotel editable />
          </Card>
        </Section>
      )}
    </>
  );
};

export default Establishments;
