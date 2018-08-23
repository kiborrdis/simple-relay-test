import React from 'react';

const LoadableBlock = ({ props, children: Content, ...rest }) => {
  if (!props) {
    return (
      <div>
Loading
      </div>
    );
  }

  return <Content props={props} {...rest} />;
};

export default LoadableBlock;
