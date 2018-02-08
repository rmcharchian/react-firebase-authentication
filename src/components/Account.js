import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = (props, { authUser }) =>
  <div>
    {/* <h1>Account: {authUser.email}</h1> */}
    <h1>Forget your password?</h1>
    <PasswordForgetForm />

    <h1>Change your password.</h1>
    <PasswordChangeForm />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = ( authUser ) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

// protected page