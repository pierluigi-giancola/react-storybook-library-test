import React from 'react';

function Title(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("h1", null, text);
}

Title.defaultProps = {
  text: 'TESTO DI DEFAULT'
};
export default Title;