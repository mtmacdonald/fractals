import React from "react";
import PropTypes from "prop-types";

import "~gui-library/src/style/global.less";

const outerContainerStyle = {
  margin: "50px",
};

export const Container = ({ style, children, margin }) => {
  return (
    <div style={margin ? outerContainerStyle : {}}>
      <div style={style}>{children}</div>
    </div>
  );
};

Container.defaultProps = {
  style: {},
  margin: true,
  deprecatedMessage: null,
};

Container.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
  margin: PropTypes.bool,
  deprecatedMessage: PropTypes.string,
};
