import * as React from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import { WidthConstraints, HorizontalSpacer } from '../../components/Layout';
import DashboardMenu from './DashboardMenu';
import Account from './Account/Account';
import Enquiries from './Enquiries/Enquiries';
import Establishments from './Establishments/Establishments';
import Messages from './Messages/Messages';
import { UserState } from '../../context/UserContext';
import { DashboardBackgroundWrapper, DashboardSections, DashboardContent } from './styles/common';

interface Props {
  user: UserState;
}

const DashboardLayout: React.FunctionComponent<Props> = ({ user }) => {
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (location.pathname === '/dashboard') {
      history.push(`/dashboard/my-account`);
    }
  }, [location, history]);

  return (
    <DashboardBackgroundWrapper>
      <HorizontalSpacer>
        <WidthConstraints size="large">
          <DashboardSections>
            <DashboardContent aside>
              <DashboardMenu />
            </DashboardContent>
            <DashboardContent>
              <Route
                exact
                path="/dashboard/:step?/:slug?"
                render={({ match }) => {
                  const step = match.params.step as string | undefined;
                  switch (step) {
                    case 'enquiries':
                      return <Enquiries />;
                    case 'establishments':
                      return <Establishments />;
                    case 'messages':
                      return <Messages />;
                    default:
                      return <Account />;
                  }
                }}
              />
            </DashboardContent>
          </DashboardSections>
        </WidthConstraints>
      </HorizontalSpacer>
    </DashboardBackgroundWrapper>
  );
};

export default DashboardLayout;
