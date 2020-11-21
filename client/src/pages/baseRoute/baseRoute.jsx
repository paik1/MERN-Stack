import React, { Fragment } from 'react';
import Landing from '../landing/landing';

function BaseRoute() {
  // If user is already logged in then take him/her to the dashboard else landing
  return (
    <Fragment>
      <Landing/>
    </Fragment>
  );
}

export default BaseRoute;
