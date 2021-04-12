"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _splide = _interopRequireDefault(require("splide-nextjs/splide"));

var _utils = require("../utils");

var _events = require("../constants/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The class for the Splide component.
 */
var Splide = /*#__PURE__*/function (_React$Component) {
  _inherits(Splide, _React$Component);

  var _super = _createSuper(Splide);

  /**
   * Splide constructor.
   *
   * @param {Object}   props                     - Props.
   * @param {string}   props.id                  - Optional. Id attribute for the root element.
   * @param {string}   props.className           - Optional. Additional class name for the root element.
   * @param {boolean}  props.hasSliderWrapper    - Optional. Whether to wrap a track by a slider element.
   * @param {boolean}  props.hasAutoplayProgress - Optional. Whether to render progress bar for autoplay.
   * @param {boolean}  props.hasAutoplayControls - Optional. Whether to render play/pause button for autoplay.
   * @param {string}   props.playButtonLabel     - Optional. The label for the play button.
   * @param {string}   props.pauseButtonLabel    - Optional. The label for the pause button.
   * @param {function} props.renderControls      - Optional. A function to render custom controls.
   */
  function Splide(props) {
    var _this;

    _classCallCheck(this, Splide);

    _this = _super.call(this, props);
    _this.splideRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  /**
   * Initialize Splide right after the component is mounted.
   */


  _createClass(Splide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? {} : _this$props$options,
          _this$props$Extension = _this$props.Extensions,
          Extensions = _this$props$Extension === void 0 ? {} : _this$props$Extension,
          _this$props$Transitio = _this$props.Transition,
          Transition = _this$props$Transitio === void 0 ? null : _this$props$Transitio;
      this.splide = new _splide["default"](this.splideRef.current, options);
      this.splide.mount(Extensions, Transition);
      this.bind();
    }
    /**
     * Destroy the splide instance just before the component is unmounted.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.splide) {
        this.splide.destroy();
      }
    }
    /**
     * Remount the splide when the component is updated.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.splide.refresh();
    }
    /**
     * Register handlers to Splide events.
     * All event names are converted to "on + camelcase" without colon.
     * For example, arrows:mounted will be onArrowsMounted.
     */

  }, {
    key: "bind",
    value: function bind() {
      var _this2 = this;

      _events.EVENTS.forEach(function (event) {
        var handler = 'on' + event.split(':').map(function (fragment) {
          return fragment.charAt(0).toUpperCase() + fragment.slice(1);
        }).join('');

        if (typeof _this2.props[handler] === 'function') {
          _this2.splide.on(event, function () {
            var _this2$props;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_this2$props = _this2.props)[handler].apply(_this2$props, [_this2.splide].concat(args));
          });
        }
      });
    }
    /**
     * Sync to the given splide.
     *
     * @param {Splide} splide - Splide instance.
     */

  }, {
    key: "sync",
    value: function sync(splide) {
      if (this.splide) {
        this.splide.sync(splide);
        this.remount();
      }
    }
    /**
     * Remount the splide.
     */

  }, {
    key: "remount",
    value: function remount() {
      if (this.splide) {
        this.splide.destroy();
        this.splide.mount();
        this.bind();
      }
    }
    /**
     * Render the track element.
     *
     * @return {ReactNode}
     */

  }, {
    key: "renderTrack",
    value: function renderTrack() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__track"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "splide__list"
      }, this.props.children));
    }
    /**
     * Render the component.
     *
     * @return {ReactNode} - React component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          hasSliderWrapper = _this$props2.hasSliderWrapper,
          hasAutoplayProgress = _this$props2.hasAutoplayProgress,
          hasAutoplayControls = _this$props2.hasAutoplayControls,
          _this$props2$playButt = _this$props2.playButtonLabel,
          playButtonLabel = _this$props2$playButt === void 0 ? 'Play' : _this$props2$playButt,
          _this$props2$pauseBut = _this$props2.pauseButtonLabel,
          pauseButtonLabel = _this$props2$pauseBut === void 0 ? 'Pause' : _this$props2$pauseBut,
          _this$props2$renderCo = _this$props2.renderControls,
          renderControls = _this$props2$renderCo === void 0 ? _utils.noop : _this$props2$renderCo;
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: id,
        className: (0, _utils.classNames)('splide', className),
        ref: this.splideRef
      }, hasSliderWrapper && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__slider"
      }, this.renderTrack()), !hasSliderWrapper && this.renderTrack(), hasAutoplayProgress && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__progress"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__progress__bar"
      })), hasAutoplayControls && /*#__PURE__*/_react["default"].createElement("div", {
        className: "splide__autoplay"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "splide__play"
      }, playButtonLabel), /*#__PURE__*/_react["default"].createElement("button", {
        className: "splide__pause"
      }, pauseButtonLabel)), renderControls());
    }
  }]);

  return Splide;
}(_react["default"].Component);

exports["default"] = Splide;