import React from 'react';
import Sample from './Sample';
import AppClassErrorBoundary from './AppClassErrorBoundary';

const App = (props) => {
  return (
    <>
      <div className='p-5'>
        <h2>React Error Boundary Study</h2>
        <hr />
        <AppClassErrorBoundary>
          <Sample />
        </AppClassErrorBoundary>
      </div>
    </>
  );
};

export default App;
