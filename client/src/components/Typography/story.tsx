import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Typography from '.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mockContent: string =
  'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.';

const mockHeading: string = 'Neque porro quisquam dolorem';

const mockHeading1 = <Typography element="h1" variant="h1" content={`H1 ${mockHeading}`} />;

const mockHeading2 = (
  <Typography element="h2" variant="h2" content={`H2 ${mockHeading}`} isPrimaryColor />
);

const mockHeading3 = (
  <Typography element="h3" variant="h3" content={`H3 ${mockHeading}`} isPrimaryColor />
);
const mockHeading4 = <Typography element="h4" variant="h4" content={`H4 ${mockHeading}`} />;

const mockHeading5 = (
  <Typography element="h5" variant="h5" content={`H5 ${mockHeading}`} isPrimaryColor />
);

const mockHeading6 = (
  <Typography element="h6" variant="h6" content={`H6 ${mockHeading}`} isPrimaryColor />
);

const VariantA = (
  <Typography
    content={`Span b1, algin:left: ${mockContent}`}
    element="span"
    variant="b1"
    maxWidth={480}
    isPrimaryColor
  />
);

const VariantB = (
  <Typography
    content={`Paragraph b2, algin:center: ${mockContent}`}
    element="p"
    variant="b2"
    maxWidth={480}
    isPrimaryColor
  />
);

const VariantC = (
  <Typography
    content={`Paragraph b3, algin:right: ${mockContent}`}
    element="p"
    variant="b3"
    maxWidth={680}
  />
);

storiesOf('Component/Typography', module).add('Default', () => (
  <Wrapper>
    {mockHeading1}
    {mockHeading2}
    {mockHeading3}
    {mockHeading4}
    {mockHeading5}
    {mockHeading6}
    {VariantA}
    {VariantB}
    {VariantC}
  </Wrapper>
));
