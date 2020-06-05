import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper/ThemeWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import ContrastProvider from '../context/ContrastContext';
import PrivateRoute from '../routes/PrivateRoute';
import { Main } from '../components/Layout/Main';
import { ROUTES } from '../routes/Routes';

const Home = lazy(() => import('./Home/Home'));
const Contact = lazy(() => import('./Contact/Contact'));
const Book = lazy(() => import('./Book/Book'));
const Login = lazy(() => import('./Login/Login'));
const Feedback = lazy(() => import('./Feedback/Feedback'));
const AccommodationDetails = lazy(() => import('./Accommodations/AccommodationDetails'));
const SearchResults = lazy(() => import('./SearchResults/SearchResults'));
const About = lazy(() => import('./About/About'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Favorites = lazy(() => import('./Favorites/Favorites'));
const Blog = lazy(() => import('./Blog/Blog'));
const BlogDetails = lazy(() => import('./Blog/BlogDetails'));
const DashBoard = lazy(() => import('./Dashboard/Dashboard'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <>
            <Header />
            <Main>
              <Suspense fallback={<Loader />}>
                <Switch>
                  <PrivateRoute path={ROUTES.DASHBOARD} component={DashBoard} exact />
                  <PrivateRoute path={ROUTES.DASHBOARD_MAIN} component={DashBoard} exact />
                  <PrivateRoute path={ROUTES.DASHBOARD_SUB} component={DashBoard} exact />
                  <Route exact path={ROUTES.LOGIN} component={Login} />
                  <Route exact path={ROUTES.SEARCH} component={SearchResults} />
                  <Route exact path={ROUTES.ABOUT} component={About} />
                  <Route exact path={ROUTES.BOOK} component={Book} />
                  <Route exact path={ROUTES.BOOK_SUCCESS}>
                    <Feedback bookingSuccess />
                  </Route>
                  <Route exact path={ROUTES.FAVORITES} component={Favorites} />
                  <Route exact path={ROUTES.CONTACT} component={Contact} />
                  <Route exact path={ROUTES.CONTACT_SUCCESS}>
                    <Feedback contactSuccess />
                  </Route>
                  <Route
                    exact
                    path={ROUTES.ACCOMMODATION_DETAILS}
                    component={AccommodationDetails}
                  />
                  <Route exact path={ROUTES.ACCOMMODATIONS} component={SearchResults} />
                  <Route exact path={ROUTES.BLOG} component={Blog} />
                  <Route exact path={ROUTES.BLOG_DETAILS} component={BlogDetails} />
                  <Route exact path={ROUTES.BLOG_PAGINATION} component={Blog} />
                  <Route exact path={ROUTES.INDEX} component={Home} />
                  <Route path={ROUTES.INDEX} component={NotFound} />
                </Switch>
              </Suspense>
            </Main>
            <Footer />
          </>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
