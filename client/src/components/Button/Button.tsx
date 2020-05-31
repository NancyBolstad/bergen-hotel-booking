import { Link } from 'react-router-dom';
import { Button } from './styles';

export type Size = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'secondaryVariant';

export interface ButtonProps {
  size: Size;
  variant: ButtonVariant;
}

const ButtonLink = Button.withComponent('a');
const ButtonInternal = Button.withComponent(Link);
const ButtonInput = Button.withComponent('input');

export default Button;
export { ButtonLink, ButtonInternal, ButtonInput };
