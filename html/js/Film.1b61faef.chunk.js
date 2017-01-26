webpackJsonp([2],{

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var Film = function (_React$Component) {
		_inherits(Film, _React$Component);

		function Film() {
			_classCallCheck(this, Film);

			return _possibleConstructorReturn(this, (Film.__proto__ || Object.getPrototypeOf(Film)).apply(this, arguments));
		}

		_createClass(Film, [{
			key: 'render',
			value: function render() {
				var pg = this.props.params.id;
				pg = pg.split('-');
				var store = this.context.store;

				var state = store.getState();
				var movie = state.def;
				if (state.movieCount != 4) {
					if (pg[1] == 'now') {
						//热映
						movie = state.movies[pg[0]];
					} else {
						//即将
						movie = state.coming[pg[0]];
					}
				}
				return _react2.default.createElement(
					'div',
					{ className: 'film' },
					_react2.default.createElement(
						'div',
						{ className: 'film-img' },
						_react2.default.createElement('img', { src: "./images/1.jpg" })
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-trck' },
						'\u5F71\u7247\u7B80\u4ECB'
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-row' },
						_react2.default.createElement(
							'span',
							null,
							'\u5BFC\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u6F14 : '
						),
						_react2.default.createElement(
							'span',
							null,
							movie.dy
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-row' },
						_react2.default.createElement(
							'span',
							null,
							'\u4E3B\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u6F14 : '
						),
						_react2.default.createElement(
							'span',
							null,
							movie.peo
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-row' },
						_react2.default.createElement(
							'span',
							null,
							'\u5730\u533A\u8BED\u8A00 : '
						),
						_react2.default.createElement(
							'span',
							null,
							'\u82F1\u8BED|\u56FD\u8BED'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-row' },
						_react2.default.createElement(
							'span',
							null,
							'\u7C7B\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u578B : '
						),
						_react2.default.createElement(
							'span',
							null,
							movie.lx
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'film-row' },
						_react2.default.createElement(
							'span',
							null,
							'\u4E0A\u6620\u65E5\u671F : '
						),
						_react2.default.createElement(
							'span',
							null,
							movie.date
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'film-txt' },
						'\u8BE5\u90E8\u5F71\u7247\u8FD8\u6CA1\u4E0A\u6620\u5C31\u53D7\u5230\u5E7F\u5927\u5F71\u8FF7\u7684\u671F\u5F85\uFF0C\u771F\u662F\u53EF\u559C\u53EF\u8D3A\uFF0C\u5F71\u7247\u5267\u60C5\u7D27\u51D1\u5408\u7406\uFF0C\u6F14\u5458\u8868\u6F14\u5230\u4F4D\uFF0C\u6545\u4E8B\u5185\u5BB9\u548C\u60C5\u8282\u90FD\u65E0\u53EF\u6311\u5254\uFF0C\u662F\u4E00\u90E8\u7ADE\u4E89\u5965\u65AF\u5361\u7684\u597D\u7535\u5F71\uFF0C\u597D\u4E86\u6211\u5B9E\u5728\u7F16\u4E0D\u4E0B\u53BB\u4E86\uFF0C\u8C46\u74E3api\u6CA1\u6709\u7535\u5F71\u8BE6\u7EC6\u3002\u3002\u3002'
					),
					_react2.default.createElement(
						'a',
						{ href: movie.link, className: 'film-buy' },
						'\u7ACB\u5373\u8D2D\u7968'
					)
				);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var store = this.context.store;

				this.unsubscribe = store.subscribe(function () {
					return _this2.forceUpdate();
				});
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unsubscribe();
			}
		}]);

		return Film;
	}(_react2.default.Component);

	exports.default = Film;

	Film.contextTypes = {
		store: _react2.default.PropTypes.object
	};

/***/ }

});