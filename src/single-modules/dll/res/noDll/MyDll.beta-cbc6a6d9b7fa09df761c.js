var beta_cbc6a6d9b7fa09df761c = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, exports) {
      module.exports = function (originalModule) {
        if (!originalModule.webpackPolyfill) {
          var module = Object.create(originalModule); // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, 'loaded', {
            enumerable: true,
            get: function () {
              return module.l;
            },
          });
          Object.defineProperty(module, 'id', {
            enumerable: true,
            get: function () {
              return module.i;
            },
          });
          Object.defineProperty(module, 'exports', {
            enumerable: true,
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };

      /***/
    } /* 2 */,
    ,
    /* 1 */ /***/ function (module, exports) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var Bclass = /*#__PURE__*/ (function () {
        function Bclass() {
          _classCallCheck(this, Bclass);

          _defineProperty(this, 'getSome', function () {
            return 'Bclass';
          });
        }

        _createClass(Bclass, [
          {
            key: 'getMoreMethod',
            value: function getMoreMethod() {
              return 'hello';
            },
          },
        ]);

        return Bclass;
      })();

      module.exports = Bclass;

      /***/
    },
    /* 3 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      if (true) {
        module.exports = __webpack_require__(8);
      } else {
      }

      /***/
    } /* 5 */,
    ,
    /* 4 */ /***/ function (module, exports, __webpack_require__) {
      __webpack_require__(6);
      module.exports = __webpack_require__(7);

      /***/
    },
    /* 6 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        /* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _b__WEBPACK_IMPORTED_MODULE_0__,
        );

        var beta = function beta() {
          var inst = new _b__WEBPACK_IMPORTED_MODULE_0___default.a();
          return inst.getSome();
        };

        module.exports = beta;
        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(0)(module)));

      /***/
    },
    /* 7 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );

      var CiComponent = function CiComponent(_ref) {
        var someProp = _ref.someProp;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null, someProp);
      };

      /* harmony default export */ __webpack_exports__['default'] = CiComponent;

      /***/
    },
    /* 8 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';
      /** @license React v16.13.1
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var l = __webpack_require__(9),
        n = 'function' === typeof Symbol && Symbol.for,
        p = n ? Symbol.for('react.element') : 60103,
        q = n ? Symbol.for('react.portal') : 60106,
        r = n ? Symbol.for('react.fragment') : 60107,
        t = n ? Symbol.for('react.strict_mode') : 60108,
        u = n ? Symbol.for('react.profiler') : 60114,
        v = n ? Symbol.for('react.provider') : 60109,
        w = n ? Symbol.for('react.context') : 60110,
        x = n ? Symbol.for('react.forward_ref') : 60112,
        y = n ? Symbol.for('react.suspense') : 60113,
        z = n ? Symbol.for('react.memo') : 60115,
        A = n ? Symbol.for('react.lazy') : 60116,
        B = 'function' === typeof Symbol && Symbol.iterator;

      function C(a) {
        for (var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a, c = 1; c < arguments.length; c++)
          b += '&args[]=' + encodeURIComponent(arguments[c]);

        return (
          'Minified React error #' +
          a +
          '; visit ' +
          b +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }

      var D = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        E = {};

      function F(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = E;
        this.updater = c || D;
      }

      F.prototype.isReactComponent = {};

      F.prototype.setState = function (a, b) {
        if ('object' !== typeof a && 'function' !== typeof a && null != a) throw Error(C(85));
        this.updater.enqueueSetState(this, a, b, 'setState');
      };

      F.prototype.forceUpdate = function (a) {
        this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
      };

      function G() {}

      G.prototype = F.prototype;

      function H(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = E;
        this.updater = c || D;
      }

      var I = (H.prototype = new G());
      I.constructor = H;
      l(I, F.prototype);
      I.isPureReactComponent = !0;
      var J = {
          current: null,
        },
        K = Object.prototype.hasOwnProperty,
        L = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };

      function M(a, b, c) {
        var e,
          d = {},
          g = null,
          k = null;
        if (null != b)
          for (e in (void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = '' + b.key), b))
            K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
        var f = arguments.length - 2;
        if (1 === f) d.children = c;
        else if (1 < f) {
          for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];

          d.children = h;
        }
        if (a && a.defaultProps) for (e in ((f = a.defaultProps), f)) void 0 === d[e] && (d[e] = f[e]);
        return {
          $$typeof: p,
          type: a,
          key: g,
          ref: k,
          props: d,
          _owner: J.current,
        };
      }

      function N(a, b) {
        return {
          $$typeof: p,
          type: a.type,
          key: b,
          ref: a.ref,
          props: a.props,
          _owner: a._owner,
        };
      }

      function O(a) {
        return 'object' === typeof a && null !== a && a.$$typeof === p;
      }

      function escape(a) {
        var b = {
          '=': '=0',
          ':': '=2',
        };
        return (
          '$' +
          ('' + a).replace(/[=:]/g, function (a) {
            return b[a];
          })
        );
      }

      var P = /\/+/g,
        Q = [];

      function R(a, b, c, e) {
        if (Q.length) {
          var d = Q.pop();
          d.result = a;
          d.keyPrefix = b;
          d.func = c;
          d.context = e;
          d.count = 0;
          return d;
        }

        return {
          result: a,
          keyPrefix: b,
          func: c,
          context: e,
          count: 0,
        };
      }

      function S(a) {
        a.result = null;
        a.keyPrefix = null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > Q.length && Q.push(a);
      }

      function T(a, b, c, e) {
        var d = typeof a;
        if ('undefined' === d || 'boolean' === d) a = null;
        var g = !1;
        if (null === a) g = !0;
        else
          switch (d) {
            case 'string':
            case 'number':
              g = !0;
              break;

            case 'object':
              switch (a.$$typeof) {
                case p:
                case q:
                  g = !0;
              }
          }
        if (g) return c(e, a, '' === b ? '.' + U(a, 0) : b), 1;
        g = 0;
        b = '' === b ? '.' : b + ':';
        if (Array.isArray(a))
          for (var k = 0; k < a.length; k++) {
            d = a[k];
            var f = b + U(d, k);
            g += T(d, f, c, e);
          }
        else if (
          (null === a || 'object' !== typeof a
            ? (f = null)
            : ((f = (B && a[B]) || a['@@iterator']), (f = 'function' === typeof f ? f : null)),
          'function' === typeof f)
        )
          for (a = f.call(a), k = 0; !(d = a.next()).done; ) (d = d.value), (f = b + U(d, k++)), (g += T(d, f, c, e));
        else if ('object' === d)
          throw (
            ((c = '' + a),
            Error(C(31, '[object Object]' === c ? 'object with keys {' + Object.keys(a).join(', ') + '}' : c, '')))
          );
        return g;
      }

      function V(a, b, c) {
        return null == a ? 0 : T(a, '', b, c);
      }

      function U(a, b) {
        return 'object' === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
      }

      function W(a, b) {
        a.func.call(a.context, b, a.count++);
      }

      function aa(a, b, c) {
        var e = a.result,
          d = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a)
          ? X(a, e, c, function (a) {
              return a;
            })
          : null != a &&
            (O(a) && (a = N(a, d + (!a.key || (b && b.key === a.key) ? '' : ('' + a.key).replace(P, '$&/') + '/') + c)),
            e.push(a));
      }

      function X(a, b, c, e, d) {
        var g = '';
        null != c && (g = ('' + c).replace(P, '$&/') + '/');
        b = R(b, g, e, d);
        V(a, aa, b);
        S(b);
      }

      var Y = {
        current: null,
      };

      function Z() {
        var a = Y.current;
        if (null === a) throw Error(C(321));
        return a;
      }

      var ba = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: {
          suspense: null,
        },
        ReactCurrentOwner: J,
        IsSomeRendererActing: {
          current: !1,
        },
        assign: l,
      };
      exports.Children = {
        map: function (a, b, c) {
          if (null == a) return a;
          var e = [];
          X(a, e, null, b, c);
          return e;
        },
        forEach: function (a, b, c) {
          if (null == a) return a;
          b = R(null, null, b, c);
          V(a, W, b);
          S(b);
        },
        count: function (a) {
          return V(
            a,
            function () {
              return null;
            },
            null,
          );
        },
        toArray: function (a) {
          var b = [];
          X(a, b, null, function (a) {
            return a;
          });
          return b;
        },
        only: function (a) {
          if (!O(a)) throw Error(C(143));
          return a;
        },
      };
      exports.Component = F;
      exports.Fragment = r;
      exports.Profiler = u;
      exports.PureComponent = H;
      exports.StrictMode = t;
      exports.Suspense = y;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

      exports.cloneElement = function (a, b, c) {
        if (null === a || void 0 === a) throw Error(C(267, a));
        var e = l({}, a.props),
          d = a.key,
          g = a.ref,
          k = a._owner;

        if (null != b) {
          void 0 !== b.ref && ((g = b.ref), (k = J.current));
          void 0 !== b.key && (d = '' + b.key);
          if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

          for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
        }

        var h = arguments.length - 2;
        if (1 === h) e.children = c;
        else if (1 < h) {
          f = Array(h);

          for (var m = 0; m < h; m++) f[m] = arguments[m + 2];

          e.children = f;
        }
        return {
          $$typeof: p,
          type: a.type,
          key: d,
          ref: g,
          props: e,
          _owner: k,
        };
      };

      exports.createContext = function (a, b) {
        void 0 === b && (b = null);
        a = {
          $$typeof: w,
          _calculateChangedBits: b,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        };
        a.Provider = {
          $$typeof: v,
          _context: a,
        };
        return (a.Consumer = a);
      };

      exports.createElement = M;

      exports.createFactory = function (a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };

      exports.createRef = function () {
        return {
          current: null,
        };
      };

      exports.forwardRef = function (a) {
        return {
          $$typeof: x,
          render: a,
        };
      };

      exports.isValidElement = O;

      exports.lazy = function (a) {
        return {
          $$typeof: A,
          _ctor: a,
          _status: -1,
          _result: null,
        };
      };

      exports.memo = function (a, b) {
        return {
          $$typeof: z,
          type: a,
          compare: void 0 === b ? null : b,
        };
      };

      exports.useCallback = function (a, b) {
        return Z().useCallback(a, b);
      };

      exports.useContext = function (a, b) {
        return Z().useContext(a, b);
      };

      exports.useDebugValue = function () {};

      exports.useEffect = function (a, b) {
        return Z().useEffect(a, b);
      };

      exports.useImperativeHandle = function (a, b, c) {
        return Z().useImperativeHandle(a, b, c);
      };

      exports.useLayoutEffect = function (a, b) {
        return Z().useLayoutEffect(a, b);
      };

      exports.useMemo = function (a, b) {
        return Z().useMemo(a, b);
      };

      exports.useReducer = function (a, b, c) {
        return Z().useReducer(a, b, c);
      };

      exports.useRef = function (a) {
        return Z().useRef(a);
      };

      exports.useState = function (a) {
        return Z().useState(a);
      };

      exports.version = '16.13.1';

      /***/
    },
    /* 9 */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          } // Detect buggy property enumeration order in older V8 versions.
          // https://bugs.chromium.org/p/v8/issues/detail?id=4118

          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

          test1[5] = 'de';

          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

          var test2 = {};

          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }

          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });

          if (order2.join('') !== '0123456789') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });

          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative()
        ? Object.assign
        : function (target, source) {
            var from;
            var to = toObject(target);
            var symbols;

            for (var s = 1; s < arguments.length; s++) {
              from = Object(arguments[s]);

              for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                  to[key] = from[key];
                }
              }

              if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);

                for (var i = 0; i < symbols.length; i++) {
                  if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                  }
                }
              }
            }

            return to;
          };

      /***/
    },
    /******/
  ],
);
