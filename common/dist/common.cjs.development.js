'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"primaryButton":"button-module_primaryButton__FFFjp","primaryOutlinedButton":"button-module_primaryOutlinedButton__SjNsr","dangerButton":"button-module_dangerButton__I9Y-Z","dangerOutlinedButton":"button-module_dangerOutlinedButton__7ecTb","acceptButton":"button-module_acceptButton__X7n2p","acceptOutlinedButton":"button-module_acceptOutlinedButton__ke2kp"};

var button = function button(_ref) {
  var theme = _ref.theme,
      label = _ref.label,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return React.createElement("button", {
    disabled: disabled,
    className: styles[theme + "Button"],
    onClick: onClick
  }, label);
};

var Button = button;

exports.Button = Button;
//# sourceMappingURL=common.cjs.development.js.map
