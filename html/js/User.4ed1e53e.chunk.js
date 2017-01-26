webpackJsonp([3],{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var User = function (_React$Component) {
		_inherits(User, _React$Component);

		function User() {
			_classCallCheck(this, User);

			return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
		}

		_createClass(User, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "user" },
					_react2.default.createElement(
						"div",
						{ className: "user-title" },
						_react2.default.createElement(
							"div",
							{ className: "user-icon" },
							_react2.default.createElement("img", { src: "./images/user.png" })
						),
						_react2.default.createElement(
							"div",
							{ className: "user-mess" },
							_react2.default.createElement(
								"p",
								null,
								"\u624B\u673A\u7528\u62370624"
							),
							_react2.default.createElement(
								"p",
								null,
								"ID:123456789"
							),
							_react2.default.createElement(
								"a",
								{ href: "#/" },
								"\u9000\u51FA"
							)
						)
					),
					_react2.default.createElement(
						"a",
						{ href: "#/", className: "user-order" },
						_react2.default.createElement("span", { className: "icon-tit" }),
						_react2.default.createElement(
							"span",
							{ className: "icon-txt" },
							"\u6211\u7684\u8BA2\u5355"
						),
						_react2.default.createElement(
							"span",
							{ className: "icon-cut" },
							"0\u5F20"
						),
						_react2.default.createElement("img", { src: "./images/rt.png" })
					),
					_react2.default.createElement(
						"a",
						{ href: "#/", className: "user-order" },
						_react2.default.createElement("span", { className: "icon-tit" }),
						_react2.default.createElement(
							"span",
							{ className: "icon-txt" },
							"\u5F85\u4ED8\u8BA2\u5355"
						),
						_react2.default.createElement(
							"span",
							{ className: "icon-cut" },
							"0\u5F20"
						),
						_react2.default.createElement("img", { src: "./images/rt.png" })
					),
					_react2.default.createElement(
						"a",
						{ href: "#/", className: "user-order" },
						_react2.default.createElement("span", { className: "icon-tit" }),
						_react2.default.createElement(
							"span",
							{ className: "icon-txt" },
							"\u8BBE\u7F6E"
						),
						_react2.default.createElement("img", { src: "./images/rt.png" })
					)
				);
			}
		}]);

		return User;
	}(_react2.default.Component);

	exports.default = User;

/***/ }

});