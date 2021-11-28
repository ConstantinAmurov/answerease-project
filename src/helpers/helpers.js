import React from 'react';
import history from '../config/history';

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} >&nbsp;</h3>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export const browserRedirect = location => {
  history.push(location);
};

export const setToken = (token) => {
  window.localStorage.setItem('token', token);
};

export const checkAuthorization = () => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    return true;
  }

  return false;
};

export const checkSession = (user) => {
  if (checkAuthorization() && user)
    return true;

  return false;
};