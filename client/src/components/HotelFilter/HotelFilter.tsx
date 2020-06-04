import React from 'react';
import { SearchInput } from '../FormElement';
import { solidArrow } from '../../util/icons';
import { Filter, InputFieldWrapper, Arrow, Label, Select } from './styles';
import { Flex } from '../Layout';
import { CATEGORIES, SERVICES } from '../../util/constants';

interface Props {
  handler: (type: 'name' | 'category' | 'service', value: string) => void;
  searchDefaultValue: string;
  categoryDefaultValue: string;
  serviceDefaultValue: string;
}

const HotelFilter: React.FunctionComponent<Props> = ({
  handler,
  searchDefaultValue,
  categoryDefaultValue,
  serviceDefaultValue,
}) => {
  return (
    <>
      <Filter>
        <Flex direction="row" align="center">
          <SearchInput
            type="text"
            placeholder="Find by name ..."
            value={searchDefaultValue}
            onChange={e => {
              e.preventDefault();
              handler('name', e.target.value);
            }}
            iconPosition="18%"
          />
        </Flex>
        <Flex direction="row">
          <InputFieldWrapper>
            <Label>
              <Select
                value={categoryDefaultValue}
                onChange={e => {
                  handler('category', e.target.value);
                }}
                aria-label="Filter accommodations by category type"
              >
                <option value="">All categories</option>
                {(CATEGORIES || []).map((c, k) => (
                  <option key={k} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
              <Arrow>{solidArrow}</Arrow>
            </Label>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>
              <Select
                value={serviceDefaultValue}
                onChange={e => {
                  handler('service', e.target.value);
                }}
                aria-label="Filter accommodations by service type"
              >
                <option value="">All services</option>
                {(SERVICES || []).map((s, k) => (
                  <option key={k} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
              <Arrow>{solidArrow}</Arrow>
            </Label>
          </InputFieldWrapper>
        </Flex>
      </Filter>
    </>
  );
};
export default HotelFilter;
