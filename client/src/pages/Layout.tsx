import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Home from './Home';
import Favorites from './Favorites';
import ContrastProvider from '../context/Contrast';
import Accommodations from './Accommodations/Accommodations';

const Contact = lazy(() => import('./Contact'));
const Success = lazy(() => import('./Success'));
const HotelDetails = lazy(() => import('./HotelDetails'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <>
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
              <Route path="/accommodation/details/:id">
                <Suspense fallback={<Loader />}>
                  <HotelDetails />
                </Suspense>
              </Route>
              <Route path="/accommodations" exact>
                <Suspense fallback={<Loader />}>
                  <Accommodations />
                </Suspense>
              </Route>
              <Route exact path="/accommodations/:number">
                <Suspense fallback={<Loader />}>
                  <Accommodations />
                </Suspense>
              </Route>
              <Route path="/">
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              </Route>
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
