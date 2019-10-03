"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var allOptions = Array(100).fill().map(function (_, i) {
  return "option " + (i + 1);
});

var FormFieldSelect = function FormFieldSelect(props) {
  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  return _react["default"].createElement(_grommet.Grommet, {
    theme: _grommet.grommet
  }, _react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_grommet.FormField, _extends({
    label: "Label",
    htmlFor: "select"
  }, props), _react["default"].createElement(_grommet.Select, {
    id: "select",
    placeholder: "placeholder",
    options: allOptions,
    value: value,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValue(option);
    }
  }))));
};

(0, _react2.storiesOf)('FormField', module).add('Select', function () {
  return _react["default"].createElement(FormFieldSelect, null);
});