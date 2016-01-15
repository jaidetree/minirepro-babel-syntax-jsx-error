'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Rotator = require('jsx/shared/Rotator');

var _Rotator2 = _interopRequireDefault(_Rotator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = {};

/**
 * Hero
 * Renders all of the heros into the rotator
 *
 * @class
 */
View.Hero = _react2.default.createClass({
  displayName: 'Hero',

  render: function () {
    return <section className="hero">
          </section>;
  }
});

(0, _jquery2.default)(function () {
  _reactDom2.default.render(<View.Hero />, (0, _jquery2.default)('.hero-view').get(0));
});