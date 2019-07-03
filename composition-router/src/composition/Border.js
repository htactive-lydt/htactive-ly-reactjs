import React from 'react';

function Border(props) {
  return (
    <div className={'border border-' + props.color}>
      {props.children}
    </div>
  );
}

export default Border;