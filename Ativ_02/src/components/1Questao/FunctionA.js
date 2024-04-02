import React from "react";
import { Context } from "./Context";
import FunctionB from './FunctionB';

function FunctionA() {
    const context = React.useContext(Context);
    return (
      <Context.Provider value={context}>
        <div>
          <h1 style={{backgroundColor: context.bkgA}}>Function A
          </h1>
          <FunctionB />
        </div>
      </Context.Provider>
    );
  }
  
  export default FunctionA;