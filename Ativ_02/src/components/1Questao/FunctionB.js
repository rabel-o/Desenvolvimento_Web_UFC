import React from 'react';
import { Context } from './Context';
import FunctionC from './FunctionC';

function FunctionB() {
  const context = React.useContext(Context);
  return (
    <div>
      <h1 style={{backgroundColor: context.bkgB}}>Function B
      </h1>
      <FunctionC />
    </div>
  );
}

export default FunctionB;
