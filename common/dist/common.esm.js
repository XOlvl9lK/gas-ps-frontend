import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button-module_primaryButton__FFFjp {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  background-color: #c0f1ff;\n}\n.button-module_primaryButton__FFFjp:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}\n\n.button-module_primaryOutlinedButton__SjNsr {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: 1.5px solid #c0f1ff;\n  color: #c0f1ff;\n  background: none;\n}\n.button-module_primaryOutlinedButton__SjNsr:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}\n\n.button-module_dangerButton__I9Y-Z {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: none;\n  background-color: #F58F29;\n}\n.button-module_dangerButton__I9Y-Z:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}\n\n.button-module_dangerOutlinedButton__7ecTb {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: 1.5px solid #F58F29;\n  color: #F58F29;\n  background: none;\n}\n.button-module_dangerOutlinedButton__7ecTb:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}\n\n.button-module_acceptButton__X7n2p {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: none;\n  background-color: #3BB273;\n}\n.button-module_acceptButton__X7n2p:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}\n\n.button-module_acceptOutlinedButton__ke2kp {\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-weight: bold;\n  border: 1.5px solid #3BB273;\n  color: #3BB273;\n  background: none;\n}\n.button-module_acceptOutlinedButton__ke2kp:disabled {\n  color: white;\n  background-color: #e0e0e0;\n  border: 1.5px solid #e0e0e0;\n}";
var styles = {"primaryButton":"button-module_primaryButton__FFFjp","primaryOutlinedButton":"button-module_primaryOutlinedButton__SjNsr","dangerButton":"button-module_dangerButton__I9Y-Z","dangerOutlinedButton":"button-module_dangerOutlinedButton__7ecTb","acceptButton":"button-module_acceptButton__X7n2p","acceptOutlinedButton":"button-module_acceptOutlinedButton__ke2kp"};
styleInject(css_248z);

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

export { Button };
//# sourceMappingURL=common.esm.js.map
