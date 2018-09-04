import React from "react";

const PageTop = props => {
  return (
    <div className="page_top">
      <div className="container">{props.title}</div>
    </div>
  );
};

export default PageTop;
