import React from 'react';

const Sample = (props) => {
  const smash = () => {
    throw new Error('Oops! The application crashed');
  };

  return (
    <>
      <h3>Sample Component</h3>
      <button className='btn btn-primary mt-4' onClick={smash}>
        Crash!
      </button>
    </>
  );
};

export default Sample;
