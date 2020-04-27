import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { search, hamburger } from '../../util/icons';
import Button, { ButtonExternal } from '.';

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  > * {
    margin: 1rem 0;
  }
`;

const WrapperDark = styled.div`
  padding: 1rem;
  background-color: #000;
  > * {
    margin: 1rem 0;
  }
`;

storiesOf('Component/Button', module)
  .add('Primary', () => (
    <Wrapper>
      <Button size="large" variant="primary">
        Large {search}
      </Button>
      <Button size="medium" variant="primary">
        Medium {hamburger}
      </Button>
      <Button size="small" variant="primary">
        Small {search}
      </Button>
    </Wrapper>
  ))
  .add('Secondary', () => (
    <Wrapper>
      <Button size="large" variant="secondary">
        Large {search}
      </Button>
      <Button size="medium" variant="secondary">
        Medium {hamburger}
      </Button>
      <Button size="small" variant="secondary">
        Small {search}
      </Button>
    </Wrapper>
  ))
  .add('Tertiary', () => (
    <WrapperDark>
      <Button size="large" variant="tertiary">
        Large {search}
      </Button>
      <Button size="medium" variant="tertiary">
        Medium {hamburger}
      </Button>
      <Button size="small" variant="tertiary">
        Small {search}
      </Button>
    </WrapperDark>
  ))
  .add('Quaternary', () => (
    <WrapperDark>
      <Button size="large" variant="quaternary">
        Large {search}
      </Button>
      <Button size="medium" variant="quaternary">
        Medium {hamburger}
      </Button>
      <Button size="small" variant="quaternary">
        Small {search}
      </Button>
    </WrapperDark>
  ))
  .add('As anchor', () => (
    <>
      <Wrapper>
        <ButtonExternal href="#test" size="large" variant="primary">
          Large {search}
        </ButtonExternal>
        <ButtonExternal href="#test" size="small" variant="secondary">
          Small {search}
        </ButtonExternal>
      </Wrapper>
      <WrapperDark>
        <ButtonExternal href="#test" size="medium" variant="tertiary">
          Medium {hamburger}
        </ButtonExternal>
      </WrapperDark>
    </>
  ));
