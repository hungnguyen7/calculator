(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_App_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__),_Buttons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_Formula__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),_Output__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(11),isOperator=/[x/+-]/,endsWithOperator=/[x/+-]$/,endsWithNegativeSign=/[x/+]-$/,Calculator=function(_React$Component){Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component);var _super=Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(e){var t;return Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(t=_super.call(this,e)).state={currentValue:"0",prevValue:"0",formula:"",currentSign:"pos",lastClicked:"",evaluated:!1},t.initialize=t.initialize.bind(Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleDecimal=t.handleDecimal.bind(Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleNumbers=t.handleNumbers.bind(Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleOperators=t.handleOperators.bind(Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleEvaluate=t.handleEvaluate.bind(Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t}return Object(C_Users_hungn_Desktop_FreeCodeCamp_React_Projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"initialize",value:function(){this.setState({currentValue:"0",prevValue:"0",formula:"",currentSign:"pos",lastClicked:"",evaluated:!1})}},{key:"maxDigitWarning",value:function(){var e=this;this.setState({currentValue:"Digit Limit Met",prevValue:this.state.currentValue}),setTimeout((function(){e.setState({currentValue:e.state.prevValue})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.currentValue.includes("Limit")&&!this.state.evaluated){for(var expression=this.state.formula;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/\u2011/g,"-");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentValue:answer.toString(),formula:expression.replace(/\*/g,"\u22c5").replace(/-/g,"\u2011")+"="+answer,prevValue:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){if(!this.state.currentValue.includes("Limit")){var t=e.target.value,_=this.state,a=_.formula,r=_.prevValue,s=_.evaluated;this.setState({currentValue:t,evaluated:!1}),s?this.setState({formula:r+t}):endsWithOperator.test(a)?endsWithNegativeSign.test(a)?"-"!==t&&this.setState({formula:r+t}):this.setState({formula:(endsWithNegativeSign.test(a+t)?a:r)+t}):this.setState({prevValue:a,formula:a+t})}}},{key:"handleNumbers",value:function(e){if(!this.state.currentValue.includes("Limit")){var t=e.target.value,_=this.state,a=_.currentValue,r=_.formula,s=_.evaluated;this.setState({evaluated:!1}),a.length>21?this.maxDigitWarning():s?(console.log("Buzzz"),this.setState({currentValue:t,formula:"0"!==t?t:""})):this.setState({currentValue:"0"===a||isOperator.test(a)?t:a+t,formula:"0"===a&&"0"===t?""===r?t:r:/([^.0-9]0|^0)$/.test(r)?r.slice(0,-1)+t:r+t})}}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentValue:"0.",formula:"0.",evaluated:!1}):this.state.currentValue.includes(".")||this.state.currentValue.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentValue.length>21?this.maxDigitWarning():endsWithOperator.test(this.state.formula)||"0"===this.state.currentValue&&""===this.state.formula?this.setState({currentValue:"0.",formula:this.state.formula+"0."}):this.setState({currentValue:this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:this.state.formula+"."}))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Formula__WEBPACK_IMPORTED_MODULE_8__.a,{formula:this.state.formula.replace(/x/g,".")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Output__WEBPACK_IMPORTED_MODULE_9__.a,{currentValue:this.state.currentValue}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_7__.a,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,initialize:this.initialize,numbers:this.handleNumbers,operators:this.handleOperators})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"author"}," ","Designed and Coded By ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://github.com/hungnguyen7",target:"_blank"},"Hung Nguyen")))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},function(e,t,_){"use strict";_.d(t,"a",(function(){return m}));var a=_(1),r=_(2),s=_(3),n=_(4),l=_(0),u=_.n(l),i={background:"#ac3939"},o={background:"#666666"},c={background:"#004466",position:"absolute",height:130,bottom:5},m=function(e){Object(n.a)(_,e);var t=Object(s.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("button",{id:"clear",onClick:this.props.initialize,value:"AC",className:"jumbo",style:i},"AC"),u.a.createElement("button",{id:"divide",onClick:this.props.operators,value:"/",style:o},"/"),u.a.createElement("button",{id:"multiply",onClick:this.props.operators,value:"x",style:o},"x"),u.a.createElement("button",{id:"seven",onClick:this.props.numbers,value:"7"},"7"),u.a.createElement("button",{id:"eight",onClick:this.props.numbers,value:"8"},"8"),u.a.createElement("button",{id:"nine",onClick:this.props.numbers,value:"9"},"9"),u.a.createElement("button",{id:"subtract",onClick:this.props.operators,value:"-",style:o},"-"),u.a.createElement("button",{id:"four",onClick:this.props.numbers,value:"4"},"4"),u.a.createElement("button",{id:"five",onClick:this.props.numbers,value:"5"},"5"),u.a.createElement("button",{id:"six",onClick:this.props.numbers,value:"6"},"6"),u.a.createElement("button",{id:"add",onClick:this.props.operators,value:"+",style:o},"+"),u.a.createElement("button",{id:"one",onClick:this.props.numbers,value:"1"},"1"),u.a.createElement("button",{id:"two",onClick:this.props.numbers,value:"2"},"2"),u.a.createElement("button",{id:"three",onClick:this.props.numbers,value:"3"},"3"),u.a.createElement("button",{id:"zero",onClick:this.props.numbers,value:"0",className:"jumbo"},"0"),u.a.createElement("button",{id:"decimal",onClick:this.props.decimal,value:"."},"."),u.a.createElement("button",{id:"equals",onClick:this.props.evaluate,value:"=",style:c},"="))}}]),_}(u.a.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return i}));var a=_(1),r=_(2),s=_(3),n=_(4),l=_(0),u=_.n(l),i=function(e){Object(n.a)(_,e);var t=Object(s.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){return u.a.createElement("div",{className:"formulaScreen"},this.props.formula)}}]),_}(u.a.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return i}));var a=_(1),r=_(2),s=_(3),n=_(4),l=_(0),u=_.n(l),i=function(e){Object(n.a)(_,e);var t=Object(s.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(r.a)(_,[{key:"render",value:function(){return u.a.createElement("div",{className:"outputScreen",id:"display"},this.props.currentValue)}}]),_}(u.a.Component)},function(e,t,_){e.exports=_(19)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),r=_.n(a),s=_(7),n=_.n(s),l=(_(17),_(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.6388911b.chunk.js.map