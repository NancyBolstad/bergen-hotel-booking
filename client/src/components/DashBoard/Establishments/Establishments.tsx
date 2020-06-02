import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Card from '../helper-components/Card';
import Section from '../helper-components/Section';
import Typography from '../../Typography/Typography';
import EstablishmentForm from './EstablishmentForm';
import { Context } from '../../../context/GlobalContext';
import { HotelDetails } from '../../../types/response';
import useDeleteRequest from '../../../hooks/useDeleteRequest';
import { API_ENDPOINT, CATEGORIES, SERVICES } from '../../../util/constants';
import { cross, solidArrow } from '../../../util/icons';
import { InputFieldWrapper, Label, Select, Filter } from '../../HotelFilter/styles';
import { Arrow } from '../../FormElement/StyledSelect';
import HotelFilter from '../../HotelFilter/HotelFilter';
import SearchInput from '../../FormElement/SearchInput';
import EditableEstablishmentsList from './EditableEstablishmentsList';

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
      <Section>
        <Card>
          <Typography variant="h2" element="h2" content="Manage Establishments" />
        </Card>
      </Section>
      {!!createEstablishment && (
        <Section>
          <Card>
            <EstablishmentForm />
          </Card>
        </Section>
      )}
      {!createEstablishment && <EditableEstablishmentsList />}
    </>
  );
};

export default Establishments;
