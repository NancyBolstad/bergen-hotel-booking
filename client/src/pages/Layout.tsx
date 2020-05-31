import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper/ThemeWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader/Loader';
import Home from './Home';
import Favorites from './Favorites/Favorites';
import ContrastProvider from '../context/ContrastContext';
import Blog from './Blog/Blog';
import BlogDetails from './Blog/BlogDetails';
import PrivateRoute from '../routes/PrivateRoute';
import DashBoard from './Dashboard/Dashboard';
import NotFind from './NotFind/NotFind';
import { Main } from '../components/Layout/Main';

const Contact = lazy(() => import('./Contact'));
const Book = lazy(() => import('./Book/Book'));
const Login = lazy(() => import('./Login/Login'));
const Success = lazy(() => import('./Success'));
const AccommodationDetails = lazy(() => import('./Accommodations/AccommodationDetails'));
const SearchResults = lazy(() => import('./SearchResults/SearchResults'));
const About = lazy(() => import('./About/About'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <>
            <Header />
            <Main>
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
                <Route exact path="/about">
                  <Suspense fallback={<Loader />}>
                    <About />
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
                <Route exact path="/favorites">
                  <Suspense fallback={<Loader />}>
                    <Favorites />
                  </Suspense>
                </Route>
                <Route exact path="/contact">
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                </Route>
                <Route exact path="/contact-success">
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                </Route>
                <Route exact path="/accommodation/details/:id">
                  <Suspense fallback={<Loader />}>
                    <AccommodationDetails />
                  </Suspense>
                </Route>
                <Route exact path="/accommodations">
                  <Suspense fallback={<Loader />}>
                    <SearchResults />
                  </Suspense>
                </Route>
                <Route exact path="/blog">
                  <Suspense fallback={<Loader />}>
                    <Blog />
                  </Suspense>
                </Route>
                <Route exact path="/blog/:id">
                  <Suspense fallback={<Loader />}>
                    <BlogDetails />
                  </Suspense>
                </Route>
                <Route exact path="/blog/page/:number">
                  <Suspense fallback={<Loader />}>
                    <Blog />
                  </Suspense>
                </Route>
                <Route exact path="/">
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                </Route>
                <Route component={NotFind} />
              </Switch>
            </Main>
            <Footer />
          </>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
