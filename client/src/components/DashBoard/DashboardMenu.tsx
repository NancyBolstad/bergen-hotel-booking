import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {
  DashboardMenuWrapper,
  DashboardNav,
  DashboardNavList,
  DashboardNavListItem,
  DashboardMenuIcon,
  DashboardNavLink,
} from './styles/DashboardMenu';
import { UserContext } from '../../context/UserContext';
import slugMatch from '../../util/slugMatch';
import Typography from '../Typography/Typography';
import { user, hotel, enquiry, messages, logout } from '../../util/icons';

interface Props {}

const DashboardMenu: React.FC<Props> = () => {
  const location = useLocation();
  const { logOut } = React.useContext(UserContext);
  const isMyProfileActive = slugMatch('my-account', location.pathname);
  const isEstablishmentsActive = slugMatch('establishments', location.pathname);
  const isEnquiriesActive = slugMatch('enquiries', location.pathname);
  const isCustomerServiceActive = slugMatch('messages', location.pathname);

  return (
    <DashboardMenuWrapper>
      <DashboardNav>
        <DashboardNavList>
          <DashboardNavListItem>
            <DashboardNavLink
              to="/dashboard/my-account"
              aria-label="Go to my account"
              current={isMyProfileActive ? 'true' : 'false'}
            >
              <DashboardMenuIcon current={isMyProfileActive ? 'true' : 'false'}>
                {user}
              </DashboardMenuIcon>
              <Typography variant="b3" element="span" content="My Account" />
            </DashboardNavLink>
          </DashboardNavListItem>
          <DashboardNavListItem>
            <DashboardNavLink
              to="/dashboard/establishments"
              aria-label="Go to establishments"
              current={isEstablishmentsActive ? 'true' : 'false'}
            >
              <DashboardMenuIcon current={isEstablishmentsActive ? 'true' : 'false'}>
                {hotel}
              </DashboardMenuIcon>
              <Typography variant="b3" element="span" content="Establishments" />
            </DashboardNavLink>
          </DashboardNavListItem>
          <DashboardNavListItem>
            <DashboardNavLink
              to="/dashboard/enquiries"
              aria-label="Go to enquiries"
              current={isEnquiriesActive ? 'true' : 'false'}
            >
              <DashboardMenuIcon current={isEnquiriesActive ? 'true' : 'false'}>
                {enquiry}
              </DashboardMenuIcon>
              <Typography variant="b3" element="span" content="Enquiries" />
            </DashboardNavLink>
          </DashboardNavListItem>
          <DashboardNavListItem>
            <DashboardNavLink
              to="/dashboard/messages"
              aria-label="Go to messages"
              current={isCustomerServiceActive ? 'true' : 'false'}
            >
              <DashboardMenuIcon current={isCustomerServiceActive ? 'true' : 'false'}>
                {messages}
              </DashboardMenuIcon>
              <Typography variant="b3" element="span" content="Messages" />
            </DashboardNavLink>
          </DashboardNavListItem>
          <DashboardNavListItem>
            <DashboardNavLink
              to="/log-out"
              onClick={e => {
                e.preventDefault();
                logOut();
              }}
              aria-label="Log out"
            >
              <DashboardMenuIcon>{logout}</DashboardMenuIcon>
              <Typography variant="b3" element="span" content="Log out" />
            </DashboardNavLink>
          </DashboardNavListItem>
        </DashboardNavList>
      </DashboardNav>
    </DashboardMenuWrapper>
  );
};

export default DashboardMenu;
