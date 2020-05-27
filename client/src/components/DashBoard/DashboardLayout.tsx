import * as React from 'react';
import styled, { css } from 'styled-components';
import { Route, useLocation, useHistory } from 'react-router-dom';
import createMediaQuery from '../../util/createMediaQuery';
import { WidthConstraints, HorizontalSpacer } from '../../components/Layout';
import Menu from './helper-components/Menu';
import Account from './Account/Account';
import Enquiries from './Enquiries/Enquiries';
import Establishments from './Establishments/Establishments';
import Messages from './Messages/Messages';
import { UserState } from '../../context/UserContext';
import Typography from '../../components/Typography';

const BackgroundWrapper = styled.main`
  background-color: ${props => props.theme.colors.secondaryVariant};
  padding: ${props => props.theme.spacing.s}rem 0;
`;

const Wrapper = styled.div``;

const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  ${createMediaQuery(
    'small',
    css`
      margin: calc(-${props => props.theme.spacing.s}rem / 2);
    `,
  )}
`;

const Section = styled.div<{ aside?: boolean }>`
  margin: ${props => props.theme.spacing.xs}rem 0;

  ${createMediaQuery(
    'small',
    css`
      padding: ${props => props.theme.spacing.xs}rem;
      margin: 0;
    `,
  )}

  ${props =>
    props.aside &&
    css`
      min-width: 312px;
      width: 100%;
      ${createMediaQuery(
        'small',
        css`
          width: auto;
        `,
      )}
    `};

  ${props =>
    !props.aside &&
    css`
      width: 100%;

      ${createMediaQuery(
        'small',
        css`
          flex: 1;
        `,
      )}
    `};
`;

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
    <BackgroundWrapper>
      <HorizontalSpacer>
        <Wrapper>
          <WidthConstraints size="large">
            <Typography
              variant="h1"
              element="h1"
              textTransform="capitalize"
              content={`Welcome back ${user.name}!`}
              isPrimaryColor
            />
            <Sections>
              <Section aside>
                <Menu />
              </Section>
              <Section>
                <Route
                  path="/dashboard/:step"
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
              </Section>
            </Sections>
          </WidthConstraints>
        </Wrapper>
      </HorizontalSpacer>
    </BackgroundWrapper>
  );
};

export default DashboardLayout;
