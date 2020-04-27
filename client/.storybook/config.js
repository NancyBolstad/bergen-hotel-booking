import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeWrapper from '../src/components/ThemeWrapper';
import defaultTheme from '../src/util/defaultTheme';
import ContrastProvider from '../src/context/Contrast';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /story\.tsx?$/));
}
const withWrapper = cb => (
  <ContrastProvider>
    <ThemeWrapper theme={defaultTheme}>
      <BrowserRouter>{cb()}</BrowserRouter>
    </ThemeWrapper>
  </ContrastProvider>
);

addDecorator(withWrapper);
configure(loadStories, module);
