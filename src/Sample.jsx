import React from 'react';

//  error boundary catches only in production mode! hence npm run serve
//  event handler throwing the error is not caught
//  timeouts and other asynchronous errors are not caught as well
const Sample = (props) => {
  throw new Error('Oops!');
};

export default Sample;
