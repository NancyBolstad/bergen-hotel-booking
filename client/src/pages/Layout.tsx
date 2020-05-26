import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader/Loader';
import Home from './Home';
import Favorites from './Favorites';
import ContrastProvider from '../context/ContrastContext';
import Accommodations from './Accommodations/Accommodations';
import Blog from './Blog/Blog';
import BlogDetails from './Blog/BlogDetails';
import PrivateRoute from '../routes/PrivateRoute';
import DashBoard from './Dashboard/Dashboard';
import MainContent from '../components/MainContent';

const Contact = lazy(() => import('./Contact'));
const Book = lazy(() => import('./Book/Book'));
const Login = lazy(() => import('./Login/Login'));
const Success = lazy(() => import('./Success'));
const AccommodationDetails = lazy(() => import('./Accommodations/AccommodationDetails'));
const SearchResults = lazy(() => import('./SearchResults/SearchResults'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <>
            <Header />
            <MainContent>
              <Switch>
                <PrivateRoute path="/dashboard/" component={DashBoard} exact />
                <PrivateRoute path="/dashboard/:slug" component={DashBoard} exact />
                <Route exact path="/login">
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                </Route>
                <Route exact path="/search">
                  <Suspense fallback={<Loader />}>
                    <SearchResults />
                  </Suspense>
                </Route>
                <Route exact path="/book/:id">
                  <Suspense fallback={<Loader />}>
                    <Book />
                  </Suspense>
                </Route>
                <Route exact path="/book-success">
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
                <Route exact path="/contact-success">
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                </Route>
                <Route path="/accommodation/details/:id">
                  <Suspense fallback={<Loader />}>
                    <AccommodationDetails />
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
                <Route path="/blog" exact>
                  <Suspense fallback={<Loader />}>
                    <Blog />
                  </Suspense>
                </Route>
                <Route path="/blog/:id" exact>
                  <Suspense fallback={<Loader />}>
                    <BlogDetails />
                  </Suspense>
                </Route>
                <Route exact path="/blog/page/:number">
                  <Suspense fallback={<Loader />}>
                    <Blog />
                  </Suspense>
                </Route>
                <Route path="/">
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                </Route>
              </Switch>
            </MainContent>
            <Footer />
          </>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
