import React from 'react';
import { Context } from './Context';
import FunctionD from './FunctionD';

function FunctionC() {
  const context = React.useContext(Context);
  return (
    <div>
      <h1 style={{backgroundColor: context.bkgC}}>Function C
      </h1>
      <FunctionD />
    </div>
  );
}

export default FunctionC;
