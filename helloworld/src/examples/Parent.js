import React from "react";

function Parent() {
  handleAskMoney = nameChild => {
    console.log(`Name's of my child ${nameChild} is asking money`);
  };

  return (
    <div>
      <h1>I'm a father</h1>
      <Child onAskMoney={this.handleAskMoney} />
    </div>
  );
}
export default Parent;
