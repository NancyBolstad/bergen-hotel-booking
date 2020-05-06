import * as React from 'react';
import { StyledComponent } from 'styled-components';
import { IFonts } from '../../types/theme';
import { Space, Text } from './styles';

type Element = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Variant = keyof IFonts;

export interface Space {
  top?: number;
  topDesktop?: number;
  bottom?: number;
  bottomDesktop?: number;
}

export interface Styles extends Space {
  variant: Variant;
  maxWidth?: number;
  isPrimaryColor?: boolean;
}

interface HeadingProps extends Styles {
  element: Element;
  content: string;
}

const Span = Text.withComponent('span');
const H1 = Text.withComponent('h1');
const H2 = Text.withComponent('h2');
const H3 = Text.withComponent('h3');
const H4 = Text.withComponent('h4');
const H5 = Text.withComponent('h5');
const H6 = Text.withComponent('h6');

const Typography: React.FC<HeadingProps> = ({ content, element, variant, ...rest }) => {
  let Elem: StyledComponent<any, any>;

  switch (element) {
    case 'h1':
      Elem = H1;
      break;

    case 'h2':
      Elem = H2;
      break;

    case 'h3':
      Elem = H3;
      break;

    case 'h4':
      Elem = H4;
      break;

    case 'h5':
      Elem = H5;
      break;

    case 'h6':
      Elem = H6;
      break;

    case 'span':
      Elem = Span;
      break;

    default:
      Elem = Text;
      break;
  }

  return (
    <Elem variant={variant} element={element} {...rest}>
      {content}
    </Elem>
  );
};

export default Typography;
