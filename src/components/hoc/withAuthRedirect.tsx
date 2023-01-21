import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { RootState } from '../../redux/redux-store';

const mapStateToPropsRedirect = (state: RootState) => ({
  isAuth: state.auth.isAuth,
});

type Props = {
  isAuth: boolean | null;
};

const withAuthRedirect = (Component: typeof React.Component) => {
  class RedirectComponent extends React.Component<Props> {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={'/Login'} />;
      }
      return <Component {...this.props} />;
    }
  }

  const ConnectAuthRedirect = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );
  return ConnectAuthRedirect;
};

export default withAuthRedirect;
