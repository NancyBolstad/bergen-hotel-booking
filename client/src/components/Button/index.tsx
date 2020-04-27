import { Link } from 'react-router-dom';
import { Button } from './styles';

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface ButtonProps {
  size: Size;
  variant: Variant;
}

const ButtonExternal = Button.withComponent('a');
const ButtonInternal = Button.withComponent(Link);
const ButtonInput = Button.withComponent('input');

export default Button;
export { ButtonExternal, ButtonInternal, ButtonInput };
