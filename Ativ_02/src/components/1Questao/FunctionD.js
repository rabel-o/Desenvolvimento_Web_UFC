import React from 'react';
import { Context } from './Context';

function FunctionD() {
  const context = React.useContext(Context);
  return (
    <h1 style={{backgroundColor: context.bkgD}}>Function D
    </h1>
  );
}

export default FunctionD;