import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Home from './Home';
import Details from './Details';
import Favorites from './Favorites';
import ContrastProvider from '../context/Contrast';

const Contact = lazy(() => import('./Contact'));
const Success = lazy(() => import('./Success'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/success">
                <Suspense fallback={<Loader />}>
                  <Success />
                </Suspense>
              </Route>
              <Route path="/favorites">
                <Suspense fallback={<Loader />}>
                  <Favorites />
                </Suspense>
              </Route>
              <Route path="/contact">
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              </Route>
              <Route path="/details/:id">
                <Suspense fallback={<Loader />}>
                  <Details />
                </Suspense>
              </Route>
              <Route path="/">
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              </Route>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
