import React from 'react';
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
import { cross } from '../../util/icons';

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
            {!!action && <TableHeader>Action</TableHeader>}
          </TableRow>
        </thead>
        <tbody>
          {(rows || []).map((item: Enquiry, index) => (
            <RemovableRow key={index} remove={deleted} busy={busy}>
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
                  return <TableDataCell key={index}>{item[headerName]}</TableDataCell>;
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
                    {cross}
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
