import React from 'react';
import moment from 'moment';
import { Enquiry } from '../../types/response';
import {
  StyledTable,
  TableHeader,
  TableRow,
  TableDataCell,
  RemovableRow,
  DeleteButton,
} from './styles';
import { Context } from '../../context/GlobalContext';
import { trash } from '../../util/icons';
import useDeleteRequest from '../../hooks/useDeleteRequest';
import { API_ENDPOINT } from '../../util/constants';

type KeyName = keyof Enquiry;

interface Props {
  headerNames: KeyName[];
  rows: Enquiry[];
}

export const Table: React.FunctionComponent<Props> = ({ headerNames, rows }) => {
  const localContext = React.useContext(Context);
  const { deleting, removed, action, removedItemId } = useDeleteRequest(API_ENDPOINT.enquires);
  const [data, setData] = React.useState<Enquiry[]>([]);

  React.useEffect(() => {
    setData(rows);
  }, [rows]);

  React.useEffect(() => {
    if (removed && removedItemId) {
      setData(
        data.filter(element => {
          return element.id !== removedItemId;
        }),
      );
    }
  }, [removed, removedItemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            {(headerNames || []).map((headerName, index) => (
              <TableHeader key={index}>
                {headerName === 'establishmentId' ? 'Establishment' : headerName}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {(data || []).map((item: Enquiry, index) => (
            <RemovableRow
              key={index}
              remove={removed && item.id === removedItemId}
              busy={deleting && item.id === removedItemId}
            >
              {(headerNames || []).map((headerName, index) => {
                const findHotel = localContext.default.find(element => {
                  return element.id === item[headerName];
                });

                if (findHotel) {
                  return (
                    <TableDataCell key={index} className="establishment">
                      {findHotel.name}
                    </TableDataCell>
                  );
                } else {
                  return (
                    <TableDataCell key={index}>
                      {headerName === 'checkIn' || headerName === 'checkOut'
                        ? moment(new Date(item[headerName])).format('DD/MM/YY')
                        : item[headerName]}
                    </TableDataCell>
                  );
                }
              })}
              {!!action && (
                <TableDataCell>
                  <DeleteButton
                    aria-label="Delete"
                    onClick={event => {
                      event.preventDefault();
                      action(item.id);
                    }}
                  >
                    {trash}
                  </DeleteButton>
                </TableDataCell>
              )}
            </RemovableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
