import React from 'react';
import * as moment from 'moment';
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

type KeyName = keyof Enquiry;

interface Props {
  headerNames: KeyName[];
  rows: Enquiry[];
  action?: (query: string) => void;
  busy?: boolean;
  deleted?: boolean;
}

export const Table: React.FunctionComponent<Props> = ({
  headerNames,
  rows,
  action,
  busy,
  deleted,
}) => {
  const localContext = React.useContext(Context);
  const [removeItem, setRemoveItem] = React.useState('');

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
          {(rows || []).map((item: Enquiry, index) => (
            <RemovableRow
              key={index}
              remove={deleted && item.id === removeItem}
              busy={busy && item.id === removeItem}
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
                        ? moment.utc(item[headerName]).format('DD/MM/YY')
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
                      setRemoveItem(item.id);
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
