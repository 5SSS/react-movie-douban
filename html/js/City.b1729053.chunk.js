webpackJsonp([1],{

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var city = __webpack_require__(298);

	var City = function (_React$Component) {
		_inherits(City, _React$Component);

		function City() {
			_classCallCheck(this, City);

			return _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).apply(this, arguments));
		}

		_createClass(City, [{
			key: 'render',
			value: function render() {
				var that = this;
				return _react2.default.createElement(
					'div',
					{ className: 'city' },
					_react2.default.createElement(
						'p',
						{ className: 'city-title' },
						'\u70ED\u95E8\u57CE\u5E02'
					),
					_react2.default.createElement(
						'div',
						{ className: 'city-wrap' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'\u5317\u4EAC'
							),
							_react2.default.createElement(
								'li',
								null,
								'\u4E0A\u6D77'
							),
							_react2.default.createElement(
								'li',
								null,
								'\u5E7F\u5DDE'
							),
							_react2.default.createElement(
								'li',
								null,
								'\u6DF1\u5733'
							)
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'city-title' },
						'\u6309\u5B57\u6BCD\u6392\u5E8F'
					),
					_react2.default.createElement(
						'div',
						{ className: 'city-wrap' },
						_react2.default.createElement(
							'ul',
							null,
							city.map(function (item) {
								return _react2.default.createElement(
									'li',
									{ key: item.title + 'c' },
									_react2.default.createElement(
										'a',
										{ href: '#' + item.title },
										item.title
									)
								);
							})
						)
					),
					city.map(function (item) {
						return _react2.default.createElement(
							'div',
							{ key: item.title + 'b' },
							_react2.default.createElement('a', { href: 'javascript:;', name: item.title }),
							_react2.default.createElement(
								'p',
								{ className: 'city-title' },
								item.title
							),
							_react2.default.createElement(
								'div',
								{ className: 'city-wrap' },
								_react2.default.createElement(
									'ul',
									null,
									item.city.map(function (ct) {
										return _react2.default.createElement(
											'li',
											{ key: ct + 'x', onClick: that.changeCity.bind(that) },
											ct
										);
									})
								)
							)
						);
					})
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
		}, {
			key: 'changeCity',
			value: function changeCity(event) {
				var store = this.context.store;

				var action = {
					type: 'city_chg',
					city: event.target.innerHTML
				};
				store.dispatch(action);
				_reactRouter.hashHistory.push('/');
			}
		}]);

		return City;
	}(_react2.default.Component);

	exports.default = City;

	City.contextTypes = {
		store: _react2.default.PropTypes.object
	};

/***/ },

/***/ 298:
/***/ function(module, exports) {

	"use strict";

	var all = [{ title: "A", city: ["安阳", "阿拉善盟", "安宁", "鞍山", "安庆", "安康"] }, { title: "B", city: ["宝鸡", "蚌埠", "保定", "包头", "本溪", "毕节", "北京", "巴中", "北海", "滨州", "保山", "亳州", "白山"] }, { title: "C", city: ["长治", "沧州", "常州", "长春", "长沙", "承德", "重庆", "成都", "滁州", "潮州", "郴州", "常德", "赤峰", "朝阳", "楚雄", "巢湖"] }, { title: "D", city: ["大同", "东阳", "丹东", "东莞", "达州", "德宏州", "都江堰", "大理", "德阳", "东营", "儋州", "大连", "德州", "大庆"] }, { title: "E", city: ["鄂州", "鄂尔多斯", "恩施"] }, { title: "F", city: ["福州", "阜新", "佛山", "富阳", "丰城", "抚顺", "防城港", "抚州", "阜阳"] }, { title: "G", city: ["固原", "贵阳", "广州", "公主岭市", "固始县", "广元", "赣州", "盖州", "桂林", "广安", "高邮"] }, { title: "H", city: ["汉中", "邯郸", "淮北", "河源", "黄冈", "河池", "淮南", "合作", "黑河", "海东", "杭州", "衡水", "海北州", "鹤岗", "黄山", "桦甸市", "和龙市", "衡阳", "哈尔滨", "呼和浩特", "菏泽", "合肥", "怀化", "淮安", "洪湖", "呼伦贝尔", "惠州", "湖州", "黄石", "海口", "红河州", "葫芦岛"] }, { title: "J", city: ["介休", "江油", "嘉兴", "酒泉", "佳木斯", "锦州", "景德镇", "金华", "江门", "焦作", "冀州市", "荆州", "吉安", "建德", "九江", "济南", "济宁", "揭阳", "靖江", "吉林", "晋城", "晋中", "济源", "嘉峪关", "荆门"] }, { title: "K", city: ["昆明", "开原", "开封"] }, { title: "L", city: ["娄底", "洛阳", "兰溪", "廊坊", "龙岩", "临夏州", "泸州", "吕梁", "陇南", "临安", "丽江", "乐山", "聊城", "莱芜", "连云港", "兰州", "临沧", "龙口", "六盘水", "丽水", "柳州", "临汾", "来宾", "临沂", "六安", "漯河", "辽阳", "临海"] }, { title: "M", city: ["眉山", "梅州", "茂名", "马鞍山", "绵阳", "满洲里", "牡丹江"] }, { title: "N", city: ["南充", "怒江州", "南昌", "内江", "南京", "南宁", "宁德", "南通", "宁波", "南平", "南阳"] }, { title: "P", city: ["萍乡", "盘锦", "平顶山", "莆田", "濮阳", "普洱", "攀枝花", "邳州"] }, { title: "Q", city: ["黔西南州", "黔南州", "黔东南州", "齐齐哈尔", "秦皇岛", "泉州", "青岛", "七台河", "衢州", "清远", "琼海", "钦州", "曲靖", "启东", "庆阳"] }, { title: "R", city: ["日照", "瑞安", "瑞金"] }, { title: "S", city: ["苏州", "沈阳", "韶关", "汕头", "石嘴山", "四平", "宿州", "双鸭山", "上海", "十堰", "上饶", "深圳", "汕尾", "邵阳", "三明", "松原", "石家庄", "宿迁", "三亚", "绍兴", "绥化", "朔州", "商洛", "随州", "遂宁", "商丘"] }, { title: "T", city: ["通辽", "太原", "泰州", "天水", "铜陵", "铜仁", "泰安", "天津", "唐山", "通化", "台山", "台州", "铁岭"] }, { title: "W", city: ["渭南", "无锡", "乌兰察布", "武汉", "武威", "芜湖", "梧州", "五家渠", "武安市", "潍坊", "乌鲁木齐", "威海", "温州", "吴忠", "文山", "涡阳"] }, { title: "X", city: ["厦门", "信阳", "许昌", "西安", "宣城", "新余", "湘江市", "咸宁", "西双版纳", "徐州", "兴义", "湘潭", "咸阳", "邢台", "襄阳", "孝感", "新密", "新乡", "仙桃", "锡林浩特", "西宁", "湘西州"] }, { title: "Y", city: ["延吉", "玉林", "云浮", "玉溪", "岳阳", "延安", "余姚", "银川", "榆林", "益阳", "盐城", "永州", "阳江", "扬州", "阳泉", "营口", "宜昌", "烟台", "永济市", "宜春", "宜宾", "义乌", "鹰潭", "运城"] }, { title: "Z", city: ["张掖", "舟山", "中山", "湛江", "肇庆", "中卫", "淄博", "昭通", "周口", "漳州", "资阳", "自贡", "驻马店", "遵义", "株洲", "郑州", "张家口", "镇江", "枣阳", "珠海", "张家界"] }];
	module.exports = all;

/***/ }

});