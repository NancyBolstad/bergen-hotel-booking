import * as React from 'react';
import { solidArrow } from '../../util/icons';
import { Wrapper, SelectFieldWrapper, Label, Arrow, StyledSelect } from './styles';
import Typography from '../Typography';

export interface Option {
  label?: string;
  value?: string;
  isSelected?: boolean;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: Option[];
  handler?: (value: string) => any;
}

const Select: React.FunctionComponent<Props> = ({
  required = false,
  disabled = false,
  label,
  options,
  handler,
  children,
  ...restProps
}) => {
  return (
    <Wrapper>
      <SelectFieldWrapper>
        <Label>
          <Typography content={label} variant="h4" element="span" isPrimaryColor />
          <Arrow>{solidArrow}</Arrow>
          <StyledSelect
            required={required}
            {...restProps}
            onChange={(e: any) => {
              e.preventDefault();
              if (!!handler) handler(e.currentTarget.value);
            }}
            onClick={(e: any) => {
              e.preventDefault();
              if (!!handler) handler(e.currentTarget.value);
            }}
          >
            {children}
            {(options || []).map(option => (
              <option key={option.value} value={option.value} selected={option.isSelected}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
        </Label>
      </SelectFieldWrapper>
    </Wrapper>
  );
};

export default Select;
