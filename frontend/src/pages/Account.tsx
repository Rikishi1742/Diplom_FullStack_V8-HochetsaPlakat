import React, { useContext } from 'react'
import { UserContext, LoginStatus } from '../context/UserContext';
import { useNavigate, } from 'react-router-dom';

import AccountContent from '../components/Account/AccountContent';

type Props = {}

function Account({ }: Props) {

  const { loginStatus } = useContext(UserContext);
  const navigate = useNavigate();

  if (loginStatus === LoginStatus.LoggedOut) {
    navigate('/');
  }

  return (
    <AccountContent />
  )
}

export default Account;