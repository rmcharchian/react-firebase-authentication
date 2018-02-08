import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

// import withAuthentication from './withAuthentication'; REMOVED WITH ADDITION OF CONST withAuthorization (authCondition)

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(routes.SIGN_IN);
                }
            });
        }

        render() {
            return this.context.authUser ? <Component /> : null;
        }
    }

    WithAuthorization.contextTypes = {
        authUser: PropTypes.object,
    }

    return withRouter (WithAuthorization);
}

export default withAuthorization;