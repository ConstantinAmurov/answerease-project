import React from 'react';
import history from '../config/history';
import formatDistance from "date-fns/formatDistance";

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


export const getTimeAgo = (date) => {
  const time_ago = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
  return time_ago;
};
export const getCategoryById = (categories, id) => {

  return categories.filter((category) => category.id === id)[0];
};

export const getCategoryByName = (categories, name) => {
  return categories.filter((category) => category.name === name)[0];
};

