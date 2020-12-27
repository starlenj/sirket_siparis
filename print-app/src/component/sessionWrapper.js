import React from "react";

const sessionWrapperHOC = (Component) => (props) => {
  return <Component {...props} />;
};

export default sessionWrapperHOC;
