/******/ (function (modules) {
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
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
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
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s =
      "./src/classical-App/browser_version_control/index.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/core-js/internals/a-function.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it) {
          if (typeof it != "function") {
            throw TypeError(String(it) + " is not a function");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/a-possible-prototype.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        module.exports = function (it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + " as a prototype");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/add-to-unscopables.js":
      /*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var create = __webpack_require__(
          /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );

        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;

        // Array.prototype[@@unscopables]
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
        if (ArrayPrototype[UNSCOPABLES] == undefined) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null),
          });
        }

        // add a key to Array.prototype[@@unscopables]
        module.exports = function (key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/an-instance.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError(
              "Incorrect " + (name ? name + " " : "") + "invocation"
            );
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/an-object.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-includes.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"
        );

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );

        var defineProperty = Object.defineProperty;
        var cache = {};

        var thrower = function (it) {
          throw it;
        };

        module.exports = function (METHOD_NAME, options) {
          if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
          if (!options) options = {};
          var method = [][METHOD_NAME];
          var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
          var argument0 = has(options, 0) ? options[0] : thrower;
          var argument1 = has(options, 1) ? options[1] : undefined;

          return (cache[METHOD_NAME] =
            !!method &&
            !fails(function () {
              if (ACCESSORS && !DESCRIPTORS) return true;
              var O = { length: -1 };

              if (ACCESSORS)
                defineProperty(O, 1, { enumerable: true, get: thrower });
              else O[1] = 1;

              method.call(O, argument0, argument1);
            }));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );

        // call something on iterator step with safe closing on error
        module.exports = function (iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (error) {
            var returnMethod = iterator["return"];
            if (returnMethod !== undefined)
              anObject(returnMethod.call(iterator));
            throw error;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;

        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function () {
              return { done: !!called++ };
            },
            return: function () {
              SAFE_CLOSING = true;
            },
          };
          iteratorWithReturn[ITERATOR] = function () {
            return this;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(iteratorWithReturn, function () {
            throw 2;
          });
        } catch (error) {
          /* empty */
        }

        module.exports = function (exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function () {
              return {
                next: function () {
                  return { done: (ITERATION_SUPPORT = true) };
                },
              };
            };
            exec(object);
          } catch (error) {
            /* empty */
          }
          return ITERATION_SUPPORT;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/classof-raw.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/classof.js":
      /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        // ES3 wrong here
        var CORRECT_ARGUMENTS =
          classofRaw(
            (function () {
              return arguments;
            })()
          ) == "Arguments";

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function (it) {
              var O, tag, result;
              return it === undefined
                ? "Undefined"
                : it === null
                ? "Null"
                : // @@toStringTag case
                typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) ==
                  "string"
                ? tag
                : // builtinTag case
                CORRECT_ARGUMENTS
                ? classofRaw(O)
                : // ES3 arguments fallback
                (result = classofRaw(O)) == "Object" &&
                  typeof O.callee == "function"
                ? "Arguments"
                : result;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/collection-strong.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;
        var create = __webpack_require__(
          /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js"
        );
        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js"
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js"
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js"
        );
        var iterate = __webpack_require__(
          /*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js"
        );
        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js"
        );
        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js"
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var fastKey = __webpack_require__(
          /*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js"
        ).fastKey;
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );

        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;

        module.exports = {
          getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0,
              });
              if (!DESCRIPTORS) that.size = 0;
              if (iterable != undefined)
                iterate(iterable, that[ADDER], that, IS_MAP);
            });

            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function (that, key, value) {
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              var previous, index;
              // change existing entry
              if (entry) {
                entry.value = value;
                // create new entry
              } else {
                state.last = entry = {
                  index: (index = fastKey(key, true)),
                  key: key,
                  value: value,
                  previous: (previous = state.last),
                  next: undefined,
                  removed: false,
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== "F") state.index[index] = entry;
              }
              return that;
            };

            var getEntry = function (that, key) {
              var state = getInternalState(that);
              // fast case
              var index = fastKey(key);
              var entry;
              if (index !== "F") return state.index[index];
              // frozen object case
              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key) return entry;
              }
            };

            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while (entry) {
                  entry.removed = true;
                  if (entry.previous)
                    entry.previous = entry.previous.next = undefined;
                  delete data[entry.index];
                  entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function (key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.next;
                  var prev = entry.previous;
                  delete state.index[entry.index];
                  entry.removed = true;
                  if (prev) prev.next = next;
                  if (next) next.previous = prev;
                  if (state.first == entry) state.first = next;
                  if (state.last == entry) state.last = prev;
                  if (DESCRIPTORS) state.size--;
                  else that.size--;
                }
                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                var state = getInternalState(this);
                var boundFunction = bind(
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined,
                  3
                );
                var entry;
                while ((entry = entry ? entry.next : state.first)) {
                  boundFunction(entry.value, entry.key, this);
                  // revert to the last existing entry
                  while (entry && entry.removed) entry = entry.previous;
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(this, key);
              },
            });

            redefineAll(
              C.prototype,
              IS_MAP
                ? {
                    // 23.1.3.6 Map.prototype.get(key)
                    get: function get(key) {
                      var entry = getEntry(this, key);
                      return entry && entry.value;
                    },
                    // 23.1.3.9 Map.prototype.set(key, value)
                    set: function set(key, value) {
                      return define(this, key === 0 ? 0 : key, value);
                    },
                  }
                : {
                    // 23.2.3.1 Set.prototype.add(value)
                    add: function add(value) {
                      return define(this, (value =
                        value === 0 ? 0 : value), value);
                    },
                  }
            );
            if (DESCRIPTORS)
              defineProperty(C.prototype, "size", {
                get: function () {
                  return getInternalState(this).size;
                },
              });
            return C;
          },
          setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
            var getInternalCollectionState = internalStateGetterFor(
              CONSTRUCTOR_NAME
            );
            var getInternalIteratorState = internalStateGetterFor(
              ITERATOR_NAME
            );
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            defineIterator(
              C,
              CONSTRUCTOR_NAME,
              function (iterated, kind) {
                setInternalState(this, {
                  type: ITERATOR_NAME,
                  target: iterated,
                  state: getInternalCollectionState(iterated),
                  kind: kind,
                  last: undefined,
                });
              },
              function () {
                var state = getInternalIteratorState(this);
                var kind = state.kind;
                var entry = state.last;
                // revert to the last existing entry
                while (entry && entry.removed) entry = entry.previous;
                // get next entry
                if (
                  !state.target ||
                  !(state.last = entry = entry ? entry.next : state.state.first)
                ) {
                  // or finish the iteration
                  state.target = undefined;
                  return { value: undefined, done: true };
                }
                // return step by kind
                if (kind == "keys") return { value: entry.key, done: false };
                if (kind == "values")
                  return { value: entry.value, done: false };
                return { value: [entry.key, entry.value], done: false };
              },
              IS_MAP ? "entries" : "values",
              !IS_MAP,
              true
            );

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(CONSTRUCTOR_NAME);
          },
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/collection.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var InternalMetadataModule = __webpack_require__(
          /*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js"
        );
        var iterate = __webpack_require__(
          /*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js"
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"
        );
        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js"
        );

        module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
          var ADDER = IS_MAP ? "set" : "add";
          var NativeConstructor = global[CONSTRUCTOR_NAME];
          var NativePrototype =
            NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};

          var fixMethod = function (KEY) {
            var nativeMethod = NativePrototype[KEY];
            redefine(
              NativePrototype,
              KEY,
              KEY == "add"
                ? function add(value) {
                    nativeMethod.call(this, value === 0 ? 0 : value);
                    return this;
                  }
                : KEY == "delete"
                ? function (key) {
                    return IS_WEAK && !isObject(key)
                      ? false
                      : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : KEY == "get"
                ? function get(key) {
                    return IS_WEAK && !isObject(key)
                      ? undefined
                      : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : KEY == "has"
                ? function has(key) {
                    return IS_WEAK && !isObject(key)
                      ? false
                      : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : function set(key, value) {
                    nativeMethod.call(this, key === 0 ? 0 : key, value);
                    return this;
                  }
            );
          };

          // eslint-disable-next-line max-len
          if (
            isForced(
              CONSTRUCTOR_NAME,
              typeof NativeConstructor != "function" ||
                !(
                  IS_WEAK ||
                  (NativePrototype.forEach &&
                    !fails(function () {
                      new NativeConstructor().entries().next();
                    }))
                )
            )
          ) {
            // create collection constructor
            Constructor = common.getConstructor(
              wrapper,
              CONSTRUCTOR_NAME,
              IS_MAP,
              ADDER
            );
            InternalMetadataModule.REQUIRED = true;
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor();
            // early implementations not supports chaining
            var HASNT_CHAINING =
              instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
            var THROWS_ON_PRIMITIVES = fails(function () {
              instance.has(1);
            });
            // most early implementations doesn't supports iterables, most modern - not close it correctly
            // eslint-disable-next-line no-new
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (
              iterable
            ) {
              new NativeConstructor(iterable);
            });
            // for early implementations -0 and +0 not the same
            var BUGGY_ZERO =
              !IS_WEAK &&
              fails(function () {
                // V8 ~ Chromium 42- fails only with 5+ elements
                var $instance = new NativeConstructor();
                var index = 5;
                while (index--) $instance[ADDER](index, index);
                return !$instance.has(-0);
              });

            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function (dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(
                  new NativeConstructor(),
                  dummy,
                  Constructor
                );
                if (iterable != undefined)
                  iterate(iterable, that[ADDER], that, IS_MAP);
                return that;
              });
              Constructor.prototype = NativePrototype;
              NativePrototype.constructor = Constructor;
            }

            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod("delete");
              fixMethod("has");
              IS_MAP && fixMethod("get");
            }

            if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

            // weak collections should not contains .clear method
            if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
          }

          exported[CONSTRUCTOR_NAME] = Constructor;
          $(
            { global: true, forced: Constructor != NativeConstructor },
            exported
          );

          setToStringTag(Constructor, CONSTRUCTOR_NAME);

          if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

          return Constructor;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var ownKeys = __webpack_require__(
          /*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js"
        );
        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );

        module.exports = function (target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key))
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(source, key)
              );
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var MATCH = wellKnownSymbol("match");

        module.exports = function (METHOD_NAME) {
          var regexp = /./;
          try {
            "/./"[METHOD_NAME](regexp);
          } catch (e) {
            try {
              regexp[MATCH] = false;
              return "/./"[METHOD_NAME](regexp);
            } catch (f) {
              /* empty */
            }
          }
          return false;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        module.exports = !fails(function () {
          function F() {
            /* empty */
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var IteratorPrototype = __webpack_require__(
          /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js"
        ).IteratorPrototype;
        var create = __webpack_require__(
          /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );

        var returnThis = function () {
          return this;
        };

        module.exports = function (IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, {
            next: createPropertyDescriptor(1, next),
          });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );

        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-property-descriptor.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/define-iterator.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var createIteratorConstructor = __webpack_require__(
          /*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js"
        );
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js"
        );
        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );
        var IteratorsCore = __webpack_require__(
          /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js"
        );

        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";

        var returnThis = function () {
          return this;
        };

        module.exports = function (
          Iterable,
          NAME,
          IteratorConstructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          createIteratorConstructor(IteratorConstructor, NAME, next);

          var getIterationMethod = function (KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function () {
              return new IteratorConstructor(this);
            };
          };

          var TO_STRING_TAG = NAME + " Iterator";
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator =
            IterablePrototype[ITERATOR] ||
            IterablePrototype["@@iterator"] ||
            (DEFAULT && IterablePrototype[DEFAULT]);
          var defaultIterator =
            (!BUGGY_SAFARI_ITERATORS && nativeIterator) ||
            getIterationMethod(DEFAULT);
          var anyNativeIterator =
            NAME == "Array"
              ? IterablePrototype.entries || nativeIterator
              : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;

          // fix native
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(
              anyNativeIterator.call(new Iterable())
            );
            if (
              IteratorPrototype !== Object.prototype &&
              CurrentIteratorPrototype.next
            ) {
              if (
                !IS_PURE &&
                getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype
              ) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (
                  typeof CurrentIteratorPrototype[ITERATOR] != "function"
                ) {
                  createNonEnumerableProperty(
                    CurrentIteratorPrototype,
                    ITERATOR,
                    returnThis
                  );
                }
              }
              // Set @@toStringTag to native iterators
              setToStringTag(
                CurrentIteratorPrototype,
                TO_STRING_TAG,
                true,
                true
              );
              if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
            }
          }

          // fix Array#{values, @@iterator}.name in V8 / FF
          if (
            DEFAULT == VALUES &&
            nativeIterator &&
            nativeIterator.name !== VALUES
          ) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }

          // define iterator
          if (
            (!IS_PURE || FORCED) &&
            IterablePrototype[ITERATOR] !== defaultIterator
          ) {
            createNonEnumerableProperty(
              IterablePrototype,
              ITERATOR,
              defaultIterator
            );
          }
          Iterators[NAME] = defaultIterator;

          // export additional methods
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES),
            };
            if (FORCED)
              for (KEY in methods) {
                if (
                  BUGGY_SAFARI_ITERATORS ||
                  INCORRECT_VALUES_NAME ||
                  !(KEY in IterablePrototype)
                ) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $(
                {
                  target: NAME,
                  proto: true,
                  forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME,
                },
                methods
              );
          }

          return methods;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/descriptors.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        // Thank's IE8 for his funny defineProperty
        module.exports = !fails(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/document-create-element.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/dom-iterables.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/enum-bug-keys.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];

        /***/
      },

    /***/ "./node_modules/core-js/internals/export.js":
      /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        ).f;
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );
        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js"
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js"
        );

        /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
        module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];
              FORCED = isForced(
                GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
                options.forced
              );
              // contained in target
              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              // add a flag to not completely full polyfills
              if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              // extend global
              redefine(target, key, sourceProperty, options);
            }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/fails.js":
      /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/freezing.js":
      /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        module.exports = !fails(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/function-bind-context.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"
        );

        // optional / simple context binding
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 0:
              return function () {
                return fn.call(that);
              };
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function (/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/get-built-in.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var path = __webpack_require__(
          /*! ../internals/path */ "./node_modules/core-js/internals/path.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        var aFunction = function (variable) {
          return typeof variable == "function" ? variable : undefined;
        };

        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/get-iterator-method.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");

        module.exports = function (it) {
          if (it != undefined)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/global.js":
      /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
          var check = function (it) {
            return it && it.Math == Math && it;
          };

          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          module.exports =
            // eslint-disable-next-line no-undef
            check(typeof globalThis == "object" && globalThis) ||
            check(typeof window == "object" && window) ||
            check(typeof self == "object" && self) ||
            check(typeof global == "object" && global) ||
            // eslint-disable-next-line no-new-func
            Function("return this")();

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"
          )
        ));

        /***/
      },

    /***/ "./node_modules/core-js/internals/has.js":
      /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/hidden-keys.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/internals/html.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );

        module.exports = getBuiltIn("document", "documentElement");

        /***/
      },

    /***/ "./node_modules/core-js/internals/ie8-dom-define.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"
        );

        // Thank's IE8 for his funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            return (
              Object.defineProperty(createElement("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });

        /***/
      },

    /***/ "./node_modules/core-js/internals/indexed-object.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );

        var split = "".split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) == "String" ? split.call(it, "") : Object(it);
            }
          : Object;

        /***/
      },

    /***/ "./node_modules/core-js/internals/inherit-if-required.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js"
        );

        // makes subclassing work correct for wrapped built-ins
        module.exports = function ($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf &&
            // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (NewTarget = dummy.constructor) == "function" &&
            NewTarget !== Wrapper &&
            isObject((NewTargetPrototype = NewTarget.prototype)) &&
            NewTargetPrototype !== Wrapper.prototype
          )
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/inspect-source.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js"
        );

        var functionToString = Function.toString;

        // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
        if (typeof store.inspectSource != "function") {
          store.inspectSource = function (it) {
            return functionToString.call(it);
          };
        }

        module.exports = store.inspectSource;

        /***/
      },

    /***/ "./node_modules/core-js/internals/internal-metadata.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;
        var uid = __webpack_require__(
          /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"
        );
        var FREEZING = __webpack_require__(
          /*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js"
        );

        var METADATA = uid("meta");
        var id = 0;

        var isExtensible =
          Object.isExtensible ||
          function () {
            return true;
          };

        var setMetadata = function (it) {
          defineProperty(it, METADATA, {
            value: {
              objectID: "O" + ++id, // object ID
              weakData: {}, // weak collections IDs
            },
          });
        };

        var fastKey = function (it, create) {
          // return a primitive with prefix
          if (!isObject(it))
            return typeof it == "symbol"
              ? it
              : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return "F";
            // not necessary to add metadata
            if (!create) return "E";
            // add missing metadata
            setMetadata(it);
            // return object ID
          }
          return it[METADATA].objectID;
        };

        var getWeakData = function (it, create) {
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMetadata(it);
            // return the store of weak collections IDs
          }
          return it[METADATA].weakData;
        };

        // add metadata on freeze-family methods calling
        var onFreeze = function (it) {
          if (
            FREEZING &&
            meta.REQUIRED &&
            isExtensible(it) &&
            !has(it, METADATA)
          )
            setMetadata(it);
          return it;
        };

        var meta = (module.exports = {
          REQUIRED: false,
          fastKey: fastKey,
          getWeakData: getWeakData,
          onFreeze: onFreeze,
        });

        hiddenKeys[METADATA] = true;

        /***/
      },

    /***/ "./node_modules/core-js/internals/internal-state.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var objectHas = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function (it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function (it) {
            return wmget.call(store, it) || {};
          };
          has = function (it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function (it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-forced.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        var replacement = /#|\.prototype\./;

        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
            ? false
            : typeof detection == "function"
            ? fails(detection)
            : !!detection;
        };

        var normalize = (isForced.normalize = function (string) {
          return String(string).replace(replacement, ".").toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = "N");
        var POLYFILL = (isForced.POLYFILL = "P");

        module.exports = isForced;

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-object.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-pure.js":
      /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = false;

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-regexp.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var MATCH = wellKnownSymbol("match");

        // `IsRegExp` abstract operation
        // https://tc39.github.io/ecma262/#sec-isregexp
        module.exports = function (it) {
          var isRegExp;
          return (
            isObject(it) &&
            ((isRegExp = it[MATCH]) !== undefined
              ? !!isRegExp
              : classof(it) == "RegExp")
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/iterate.js":
      /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js"
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js"
        );
        var callWithSafeIterationClosing = __webpack_require__(
          /*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
        );

        var Result = function (stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        var iterate = (module.exports = function (
          iterable,
          fn,
          that,
          AS_ENTRIES,
          IS_ITERATOR
        ) {
          var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
          var iterator, iterFn, index, length, result, next, step;

          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != "function")
              throw TypeError("Target is not iterable");
            // optimisation for array iterators
            if (isArrayIteratorMethod(iterFn)) {
              for (
                index = 0, length = toLength(iterable.length);
                length > index;
                index++
              ) {
                result = AS_ENTRIES
                  ? boundFunction(
                      anObject((step = iterable[index]))[0],
                      step[1]
                    )
                  : boundFunction(iterable[index]);
                if (result && result instanceof Result) return result;
              }
              return new Result(false);
            }
            iterator = iterFn.call(iterable);
          }

          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            result = callWithSafeIterationClosing(
              iterator,
              boundFunction,
              step.value,
              AS_ENTRIES
            );
            if (typeof result == "object" && result && result instanceof Result)
              return result;
          }
          return new Result(false);
        });

        iterate.stop = function (result) {
          return new Result(true, result);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/iterators-core.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;

        var returnThis = function () {
          return this;
        };

        // `%IteratorPrototype%` object
        // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

        if ([].keys) {
          arrayIterator = [].keys();
          // Safari 8 has buggy iterators w/o `next`
          if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(
              getPrototypeOf(arrayIterator)
            );
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }

        if (IteratorPrototype == undefined) IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }

        module.exports = {
          IteratorPrototype: IteratorPrototype,
          BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/iterators.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/internals/native-symbol.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
          });

        /***/
      },

    /***/ "./node_modules/core-js/internals/native-weak-map.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js"
        );

        var WeakMap = global.WeakMap;

        module.exports =
          typeof WeakMap === "function" &&
          /native code/.test(inspectSource(WeakMap));

        /***/
      },

    /***/ "./node_modules/core-js/internals/not-a-regexp.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js"
        );

        module.exports = function (it) {
          if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-create.js":
      /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var defineProperties = __webpack_require__(
          /*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );
        var html = __webpack_require__(
          /*! ../internals/html */ "./node_modules/core-js/internals/html.js"
        );
        var documentCreateElement = __webpack_require__(
          /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"
        );

        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");

        var EmptyConstructor = function () {
          /* empty */
        };

        var scriptTag = function (content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };

        // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
        var NullProtoObjectViaActiveX = function (activeXDocument) {
          activeXDocument.write(scriptTag(""));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak
          return temp;
        };

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var NullProtoObjectViaIFrame = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          // https://github.com/zloirock/core-js/issues/475
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug
        var activeXDocument;
        var NullProtoObject = function () {
          try {
            /* global ActiveXObject */
            activeXDocument = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {
            /* ignore */
          }
          NullProtoObject = activeXDocument
            ? NullProtoObjectViaActiveX(activeXDocument)
            : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true;

        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === undefined
              ? result
              : defineProperties(result, Properties);
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-define-properties.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var objectKeys = __webpack_require__(
          /*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js"
        );

        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        module.exports = DESCRIPTORS
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index = 0;
              var key;
              while (length > index)
                definePropertyModule.f(
                  O,
                  (key = keys[index++]),
                  Properties[key]
                );
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-define-property.js":
      /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );

        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"
        );

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P))
                return createPropertyDescriptor(
                  !propertyIsEnumerableModule.f.call(O, P),
                  O[P]
                );
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"
        );

        var hiddenKeys = enumBugKeys.concat("length", "prototype");

        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"
        );
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
          /*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js"
        );

        var IE_PROTO = sharedKey("IE_PROTO");
        var ObjectPrototype = Object.prototype;

        // `Object.getPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.getprototypeof
        module.exports = CORRECT_PROTOTYPE_GETTER
          ? Object.getPrototypeOf
          : function (O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];
              if (
                typeof O.constructor == "function" &&
                O instanceof O.constructor
              ) {
                return O.constructor.prototype;
              }
              return O instanceof Object ? ObjectPrototype : null;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-keys-internal.js":
      /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var indexOf = __webpack_require__(
          /*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js"
        ).indexOf;
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );

        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-keys.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"
        );

        // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys
        module.exports =
          Object.keys ||
          function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var aPossiblePrototype = __webpack_require__(
          /*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js"
        );

        // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        module.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    "__proto__"
                  ).set;
                  setter.call(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }
                return function setPrototypeOf(O, proto) {
                  anObject(O);
                  aPossiblePrototype(proto);
                  if (CORRECT_SETTER) setter.call(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-to-string.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"
        );

        // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        module.exports = TO_STRING_TAG_SUPPORT
          ? {}.toString
          : function toString() {
              return "[object " + classof(this) + "]";
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/own-keys.js":
      /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js"
        );
        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );

        // all object keys, includes non-enumerable and symbols
        module.exports =
          getBuiltIn("Reflect", "ownKeys") ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols
              ? keys.concat(getOwnPropertySymbols(it))
              : keys;
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/path.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        module.exports = global;

        /***/
      },

    /***/ "./node_modules/core-js/internals/redefine-all.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );

        module.exports = function (target, src, options) {
          for (var key in src) redefine(target, key, src[key], options);
          return target;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/redefine.js":
      /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js"
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");

        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name"))
              createNonEnumerableProperty(value, "name", key);
            enforceInternalState(value).source = TEMPLATE.join(
              typeof key == "string" ? key : ""
            );
          }
          if (O === global) {
            if (simple) O[key] = value;
            else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple) O[key] = value;
          else createNonEnumerableProperty(O, key, value);
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, "toString", function toString() {
          return (
            (typeof this == "function" && getInternalState(this).source) ||
            inspectSource(this)
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/require-object-coercible.js":
      /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-global.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );

        module.exports = function (key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-species.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );

        var SPECIES = wellKnownSymbol("species");

        module.exports = function (CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;

          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function () {
                return this;
              },
            });
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-to-string-tag.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");

        module.exports = function (it, TAG, STATIC) {
          if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, {
              configurable: true,
              value: TAG,
            });
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared-key.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"
        );

        var keys = shared("keys");

        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared-store.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );

        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || setGlobal(SHARED, {});

        module.exports = store;

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared.js":
      /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );
        var store = __webpack_require__(
          /*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js"
        );

        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: IS_PURE ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/string-multibyte.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        // `String.prototype.{ codePointAt, at }` methods implementation
        var createMethod = function (CONVERT_TO_STRING) {
          return function ($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size)
              return CONVERT_TO_STRING ? "" : undefined;
            first = S.charCodeAt(position);
            return first < 0xd800 ||
              first > 0xdbff ||
              position + 1 === size ||
              (second = S.charCodeAt(position + 1)) < 0xdc00 ||
              second > 0xdfff
              ? CONVERT_TO_STRING
                ? S.charAt(position)
                : first
              : CONVERT_TO_STRING
              ? S.slice(position, position + 2)
              : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
          };
        };

        module.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod(true),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/string-trim.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );
        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js"
        );

        var whitespace = "[" + whitespaces + "]";
        var ltrim = RegExp("^" + whitespace + whitespace + "*");
        var rtrim = RegExp(whitespace + whitespace + "*$");

        // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
        var createMethod = function (TYPE) {
          return function ($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, "");
            if (TYPE & 2) string = string.replace(rtrim, "");
            return string;
          };
        };

        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod(3),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-absolute-index.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-indexed-object.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-integer.js":
      /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger
        module.exports = function (argument) {
          return isNaN((argument = +argument))
            ? 0
            : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-length.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength
        module.exports = function (argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-object.js":
      /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject
        module.exports = function (argument) {
          return Object(requireObjectCoercible(argument));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-primitive.js":
      /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            typeof (fn = input.valueOf) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-string-tag-support.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};

        test[TO_STRING_TAG] = "z";

        module.exports = String(test) === "[object z]";

        /***/
      },

    /***/ "./node_modules/core-js/internals/uid.js":
      /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var id = 0;
        var postfix = Math.random();

        module.exports = function (key) {
          return (
            "Symbol(" +
            String(key === undefined ? "" : key) +
            ")_" +
            (++id + postfix).toString(36)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js"
        );

        module.exports =
          NATIVE_SYMBOL &&
          // eslint-disable-next-line no-undef
          !Symbol.sham &&
          // eslint-disable-next-line no-undef
          typeof Symbol.iterator == "symbol";

        /***/
      },

    /***/ "./node_modules/core-js/internals/well-known-symbol.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var shared = __webpack_require__(
          /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"
        );
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js"
        );
        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js"
        );

        var WellKnownSymbolsStore = shared("wks");
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol
          : (Symbol && Symbol.withoutSetter) || uid;

        module.exports = function (name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name))
              WellKnownSymbolsStore[name] = Symbol[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol(
                "Symbol." + name
              );
          }
          return WellKnownSymbolsStore[name];
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/whitespaces.js":
      /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports =
          "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.array.includes.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var $includes = __webpack_require__(
          /*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js"
        ).includes;
        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js"
        );
        var arrayMethodUsesToLength = __webpack_require__(
          /*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js"
        );

        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
          ACCESSORS: true,
          1: 0,
        });

        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        $(
          { target: "Array", proto: true, forced: !USES_TO_LENGTH },
          {
            includes: function includes(el /* , fromIndex = 0 */) {
              return $includes(
                this,
                el,
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );

        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
        addToUnscopables("includes");

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.array.iterator.js":
      /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );
        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js"
        );

        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

        // `Array.prototype.entries` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.entries
        // `Array.prototype.keys` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.keys
        // `Array.prototype.values` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.values
        // `Array.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
        // `CreateArrayIterator` internal method
        // https://tc39.github.io/ecma262/#sec-createarrayiterator
        module.exports = defineIterator(
          Array,
          "Array",
          function (iterated, kind) {
            setInternalState(this, {
              type: ARRAY_ITERATOR,
              target: toIndexedObject(iterated), // target
              index: 0, // next index
              kind: kind, // kind
            });
            // `%ArrayIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
          },
          function () {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;
            if (!target || index >= target.length) {
              state.target = undefined;
              return { value: undefined, done: true };
            }
            if (kind == "keys") return { value: index, done: false };
            if (kind == "values") return { value: target[index], done: false };
            return { value: [index, target[index]], done: false };
          },
          "values"
        );

        // argumentsList[@@iterator] is %ArrayProto_values%
        // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
        // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
        Iterators.Arguments = Iterators.Array;

        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.function.name.js":
      /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;

        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";

        // Function instances `.name` property
        // https://tc39.github.io/ecma262/#sec-function-instances-name
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function () {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return "";
              }
            },
          });
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.map.js":
      /*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var collection = __webpack_require__(
          /*! ../internals/collection */ "./node_modules/core-js/internals/collection.js"
        );
        var collectionStrong = __webpack_require__(
          /*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js"
        );

        // `Map` constructor
        // https://tc39.github.io/ecma262/#sec-map-objects
        module.exports = collection(
          "Map",
          function (init) {
            return function Map() {
              return init(this, arguments.length ? arguments[0] : undefined);
            };
          },
          collectionStrong
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.number.constructor.js":
      /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var create = __webpack_require__(
          /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js"
        );
        var getOwnPropertyNames = __webpack_require__(
          /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js"
        ).f;
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        ).f;
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;
        var trim = __webpack_require__(
          /*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js"
        ).trim;

        var NUMBER = "Number";
        var NativeNumber = global[NUMBER];
        var NumberPrototype = NativeNumber.prototype;

        // Opera ~12 has broken Object#toString
        var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

        // `ToNumber` abstract operation
        // https://tc39.github.io/ecma262/#sec-tonumber
        var toNumber = function (argument) {
          var it = toPrimitive(argument, false);
          var first, third, radix, maxCode, digits, length, index, code;
          if (typeof it == "string" && it.length > 2) {
            it = trim(it);
            first = it.charCodeAt(0);
            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break; // fast equal of /^0b[01]+$/i
                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break; // fast equal of /^0o[0-7]+$/i
                default:
                  return +it;
              }
              digits = it.slice(2);
              length = digits.length;
              for (index = 0; index < length; index++) {
                code = digits.charCodeAt(index);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
              }
              return parseInt(digits, radix);
            }
          }
          return +it;
        };

        // `Number` constructor
        // https://tc39.github.io/ecma262/#sec-number-constructor
        if (
          isForced(
            NUMBER,
            !NativeNumber(" 0o1") ||
              !NativeNumber("0b1") ||
              NativeNumber("+0x1")
          )
        ) {
          var NumberWrapper = function Number(value) {
            var it = arguments.length < 1 ? 0 : value;
            var dummy = this;
            return dummy instanceof NumberWrapper &&
              // check on 1..constructor(foo) case
              (BROKEN_CLASSOF
                ? fails(function () {
                    NumberPrototype.valueOf.call(dummy);
                  })
                : classof(dummy) != NUMBER)
              ? inheritIfRequired(
                  new NativeNumber(toNumber(it)),
                  dummy,
                  NumberWrapper
                )
              : toNumber(it);
          };
          for (
            var keys = DESCRIPTORS
                ? getOwnPropertyNames(NativeNumber)
                : // ES3:
                  (
                    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY," +
                    // ES2015 (in case, if modules with ES2015 Number statics required before):
                    "EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER," +
                    "MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger"
                  ).split(","),
              j = 0,
              key;
            keys.length > j;
            j++
          ) {
            if (
              has(NativeNumber, (key = keys[j])) &&
              !has(NumberWrapper, key)
            ) {
              defineProperty(
                NumberWrapper,
                key,
                getOwnPropertyDescriptor(NativeNumber, key)
              );
            }
          }
          NumberWrapper.prototype = NumberPrototype;
          NumberPrototype.constructor = NumberWrapper;
          redefine(global, NUMBER, NumberWrapper);
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.object.to-string.js":
      /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var toString = __webpack_require__(
          /*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js"
        );

        // `Object.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, "toString", toString, { unsafe: true });
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.includes.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var notARegExp = __webpack_require__(
          /*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );
        var correctIsRegExpLogic = __webpack_require__(
          /*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js"
        );

        // `String.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.includes
        $(
          {
            target: "String",
            proto: true,
            forced: !correctIsRegExpLogic("includes"),
          },
          {
            includes: function includes(searchString /* , position = 0 */) {
              return !!~String(requireObjectCoercible(this)).indexOf(
                notARegExp(searchString),
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.iterator.js":
      /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var charAt = __webpack_require__(
          /*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js"
        ).charAt;
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );
        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js"
        );

        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

        // `String.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
        defineIterator(
          String,
          "String",
          function (iterated) {
            setInternalState(this, {
              type: STRING_ITERATOR,
              string: String(iterated),
              index: 0,
            });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
          },
          function next() {
            var state = getInternalState(this);
            var string = state.string;
            var index = state.index;
            var point;
            if (index >= string.length) return { value: undefined, done: true };
            point = charAt(string, index);
            state.index += point.length;
            return { value: point, done: false };
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var DOMIterables = __webpack_require__(
          /*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js"
        );
        var ArrayIteratorMethods = __webpack_require__(
          /*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var ArrayValues = ArrayIteratorMethods.values;

        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[ITERATOR] !== ArrayValues)
              try {
                createNonEnumerableProperty(
                  CollectionPrototype,
                  ITERATOR,
                  ArrayValues
                );
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }
            if (!CollectionPrototype[TO_STRING_TAG]) {
              createNonEnumerableProperty(
                CollectionPrototype,
                TO_STRING_TAG,
                COLLECTION_NAME
              );
            }
            if (DOMIterables[COLLECTION_NAME])
              for (var METHOD_NAME in ArrayIteratorMethods) {
                // some Chrome versions have non-configurable methods on DOMTokenList
                if (
                  CollectionPrototype[METHOD_NAME] !==
                  ArrayIteratorMethods[METHOD_NAME]
                )
                  try {
                    createNonEnumerableProperty(
                      CollectionPrototype,
                      METHOD_NAME,
                      ArrayIteratorMethods[METHOD_NAME]
                    );
                  } catch (error) {
                    CollectionPrototype[METHOD_NAME] =
                      ArrayIteratorMethods[METHOD_NAME];
                  }
              }
          }
        }

        /***/
      },

    /***/ "./node_modules/ua-parser-js/src/ua-parser.js":
      /*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * UAParser.js v0.7.21
         * Lightweight JavaScript-based User-Agent string parser
         * https://github.com/faisalman/ua-parser-js
         *
         * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
         * Licensed under MIT License
         */

        (function (window, undefined) {
          "use strict";

          //////////////
          // Constants
          /////////////

          var LIBVERSION = "0.7.21",
            EMPTY = "",
            UNKNOWN = "?",
            FUNC_TYPE = "function",
            UNDEF_TYPE = "undefined",
            OBJ_TYPE = "object",
            STR_TYPE = "string",
            MAJOR = "major", // deprecated
            MODEL = "model",
            NAME = "name",
            TYPE = "type",
            VENDOR = "vendor",
            VERSION = "version",
            ARCHITECTURE = "architecture",
            CONSOLE = "console",
            MOBILE = "mobile",
            TABLET = "tablet",
            SMARTTV = "smarttv",
            WEARABLE = "wearable",
            EMBEDDED = "embedded";

          ///////////
          // Helper
          //////////

          var util = {
            extend: function (regexes, extensions) {
              var mergedRegexes = {};
              for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                  mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                  mergedRegexes[i] = regexes[i];
                }
              }
              return mergedRegexes;
            },
            has: function (str1, str2) {
              if (typeof str1 === "string") {
                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
              } else {
                return false;
              }
            },
            lowerize: function (str) {
              return str.toLowerCase();
            },
            major: function (version) {
              return typeof version === STR_TYPE
                ? version.replace(/[^\d\.]/g, "").split(".")[0]
                : undefined;
            },
            trim: function (str) {
              return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
          };

          ///////////////
          // Map helper
          //////////////

          var mapper = {
            rgx: function (ua, arrays) {
              var i = 0,
                j,
                k,
                p,
                q,
                matches,
                match;

              // loop through all regexes maps
              while (i < arrays.length && !matches) {
                var regex = arrays[i], // even sequence (0,2,4,..)
                  props = arrays[i + 1]; // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {
                  matches = regex[j++].exec(ua);

                  if (!!matches) {
                    for (p = 0; p < props.length; p++) {
                      match = matches[++k];
                      q = props[p];
                      // check if given property is actually array
                      if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length == 2) {
                          if (typeof q[1] == FUNC_TYPE) {
                            // assign modified match
                            this[q[0]] = q[1].call(this, match);
                          } else {
                            // assign given value, ignore regex match
                            this[q[0]] = q[1];
                          }
                        } else if (q.length == 3) {
                          // check whether function or regex
                          if (
                            typeof q[1] === FUNC_TYPE &&
                            !(q[1].exec && q[1].test)
                          ) {
                            // call function (usually string mapper)
                            this[q[0]] = match
                              ? q[1].call(this, match, q[2])
                              : undefined;
                          } else {
                            // sanitize match using given regex
                            this[q[0]] = match
                              ? match.replace(q[1], q[2])
                              : undefined;
                          }
                        } else if (q.length == 4) {
                          this[q[0]] = match
                            ? q[3].call(this, match.replace(q[1], q[2]))
                            : undefined;
                        }
                      } else {
                        this[q] = match ? match : undefined;
                      }
                    }
                  }
                }
                i += 2;
              }
            },

            str: function (str, map) {
              for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                  for (var j = 0; j < map[i].length; j++) {
                    if (util.has(map[i][j], str)) {
                      return i === UNKNOWN ? undefined : i;
                    }
                  }
                } else if (util.has(map[i], str)) {
                  return i === UNKNOWN ? undefined : i;
                }
              }
              return str;
            },
          };

          ///////////////
          // String map
          //////////////

          var maps = {
            browser: {
              oldsafari: {
                version: {
                  "1.0": "/8",
                  "1.2": "/1",
                  "1.3": "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              },
            },

            device: {
              amazon: {
                model: {
                  "Fire Phone": ["SD", "KF"],
                },
              },
              sprint: {
                model: {
                  "Evo Shift 4G": "7373KT",
                },
                vendor: {
                  HTC: "APA",
                  Sprint: "Sprint",
                },
              },
            },

            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  "2000": "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  "7": "NT 6.1",
                  "8": "NT 6.2",
                  "8.1": "NT 6.3",
                  "10": ["NT 6.4", "NT 10.0"],
                  RT: "ARM",
                },
              },
            },
          };

          //////////////
          // Regex map
          /////////////

          var regexes = {
            browser: [
              [
                // Presto based
                /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
                /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
                /(opera)[\/\s]+([\w\.]+)/i, // Opera < 9.80
              ],
              [NAME, VERSION],
              [
                /(opios)[\/\s]+([\w\.]+)/i, // Opera mini on iphone >= 8.0
              ],
              [[NAME, "Opera Mini"], VERSION],
              [
                /\s(opr)\/([\w\.]+)/i, // Opera Webkit
              ],
              [[NAME, "Opera"], VERSION],
              [
                // Mixed
                /(kindle)\/([\w\.]+)/i, // Kindle
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                // Trident based
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                // Avant/IEMobile/SlimBrowser
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, // Baidu Browser
                /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer

                // Webkit/KHTML based
                /(rekonq)\/([\w\.]*)/i, // Rekonq
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
              ],
              [NAME, VERSION],
              [
                /(konqueror)\/([\w\.]+)/i, // Konqueror
              ],
              [[NAME, "Konqueror"], VERSION],
              [
                /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i, // IE11
              ],
              [[NAME, "IE"], VERSION],
              [
                /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i, // Microsoft Edge
              ],
              [[NAME, "Edge"], VERSION],
              [
                /(yabrowser)\/([\w\.]+)/i, // Yandex
              ],
              [[NAME, "Yandex"], VERSION],
              [
                /(Avast)\/([\w\.]+)/i, // Avast Secure Browser
              ],
              [[NAME, "Avast Secure Browser"], VERSION],
              [
                /(AVG)\/([\w\.]+)/i, // AVG Secure Browser
              ],
              [[NAME, "AVG Secure Browser"], VERSION],
              [
                /(puffin)\/([\w\.]+)/i, // Puffin
              ],
              [[NAME, "Puffin"], VERSION],
              [
                /(focus)\/([\w\.]+)/i, // Firefox Focus
              ],
              [[NAME, "Firefox Focus"], VERSION],
              [
                /(opt)\/([\w\.]+)/i, // Opera Touch
              ],
              [[NAME, "Opera Touch"], VERSION],
              [
                /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i, // UCBrowser
              ],
              [[NAME, "UCBrowser"], VERSION],
              [
                /(comodo_dragon)\/([\w\.]+)/i, // Comodo Dragon
              ],
              [[NAME, /_/g, " "], VERSION],
              [
                /(windowswechat qbcore)\/([\w\.]+)/i, // WeChat Desktop for Windows Built-in Browser
              ],
              [[NAME, "WeChat(Win) Desktop"], VERSION],
              [
                /(micromessenger)\/([\w\.]+)/i, // WeChat
              ],
              [[NAME, "WeChat"], VERSION],
              [
                /(brave)\/([\w\.]+)/i, // Brave browser
              ],
              [[NAME, "Brave"], VERSION],
              [
                /(qqbrowserlite)\/([\w\.]+)/i, // QQBrowserLite
              ],
              [NAME, VERSION],
              [
                /(QQ)\/([\d\.]+)/i, // QQ, aka ShouQ
              ],
              [NAME, VERSION],
              [
                /m?(qqbrowser)[\/\s]?([\w\.]+)/i, // QQBrowser
              ],
              [NAME, VERSION],
              [
                /(baiduboxapp)[\/\s]?([\w\.]+)/i, // Baidu App
              ],
              [NAME, VERSION],
              [
                /(2345Explorer)[\/\s]?([\w\.]+)/i, // 2345 Browser
              ],
              [NAME, VERSION],
              [
                /(MetaSr)[\/\s]?([\w\.]+)/i, // SouGouBrowser
              ],
              [NAME],
              [
                /(LBBROWSER)/i, // LieBao Browser
              ],
              [NAME],
              [
                /xiaomi\/miuibrowser\/([\w\.]+)/i, // MIUI Browser
              ],
              [VERSION, [NAME, "MIUI Browser"]],
              [
                /;fbav\/([\w\.]+);/i, // Facebook App for iOS & Android
              ],
              [VERSION, [NAME, "Facebook"]],
              [
                /safari\s(line)\/([\w\.]+)/i, // Line App for iOS
                /android.+(line)\/([\w\.]+)\/iab/i, // Line App for Android
              ],
              [NAME, VERSION],
              [
                /headlesschrome(?:\/([\w\.]+)|\s)/i, // Chrome Headless
              ],
              [VERSION, [NAME, "Chrome Headless"]],
              [
                /\swv\).+(chrome)\/([\w\.]+)/i, // Chrome WebView
              ],
              [[NAME, /(.+)/, "$1 WebView"], VERSION],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION],
              [
                // Oculus / Samsung Browser

                /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i, // Android Browser
              ],
              [VERSION, [NAME, "Android Browser"]],
              [
                /(sailfishbrowser)\/([\w\.]+)/i, // Sailfish Browser
              ],
              [[NAME, "Sailfish Browser"], VERSION],
              [
                /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                // Chrome/OmniWeb/Arora/Tizen/Nokia
              ],
              [NAME, VERSION],
              [
                /(dolfin)\/([\w\.]+)/i, // Dolphin
              ],
              [[NAME, "Dolphin"], VERSION],
              [
                /(qihu|qhbrowser|qihoobrowser|360browser)/i, // 360
              ],
              [[NAME, "360 Browser"]],
              [
                /((?:android.+)crmo|crios)\/([\w\.]+)/i, // Chrome for Android/iOS
              ],
              [[NAME, "Chrome"], VERSION],
              [
                /(coast)\/([\w\.]+)/i, // Opera Coast
              ],
              [[NAME, "Opera Coast"], VERSION],
              [
                /fxios\/([\w\.-]+)/i, // Firefox for iOS
              ],
              [VERSION, [NAME, "Firefox"]],
              [
                /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i, // Mobile Safari
              ],
              [VERSION, [NAME, "Mobile Safari"]],
              [
                /version\/([\w\.]+).+?(mobile\s?safari|safari)/i, // Safari & Safari Mobile
              ],
              [VERSION, NAME],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i, // Google Search Appliance on iOS
              ],
              [[NAME, "GSA"], VERSION],
              [
                /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i, // Safari < 3.0
              ],
              [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [NAME, VERSION],
              [
                // Gecko based
                /(navigator|netscape)\/([\w\.-]+)/i, // Netscape
              ],
              [[NAME, "Netscape"], VERSION],
              [
                /(swiftfox)/i, // Swiftfox
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla

                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                /(links)\s\(([\w\.]+)/i, // Links
                /(gobrowser)\/?([\w\.]*)/i, // GoBrowser
                /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
                /(mosaic)[\/\s]([\w\.]+)/i, // Mosaic
              ],
              [NAME, VERSION],
            ],

            cpu: [
              [
                /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i, // AMD64
              ],
              [[ARCHITECTURE, "amd64"]],
              [
                /(ia32(?=;))/i, // IA32 (quicktime)
              ],
              [[ARCHITECTURE, util.lowerize]],
              [
                /((?:i[346]|x)86)[;\)]/i, // IA32
              ],
              [[ARCHITECTURE, "ia32"]],
              [
                // PocketPC mistakenly identified as PowerPC
                /windows\s(ce|mobile);\sppc;/i,
              ],
              [[ARCHITECTURE, "arm"]],
              [
                /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i, // PowerPC
              ],
              [[ARCHITECTURE, /ower/, "", util.lowerize]],
              [
                /(sun4\w)[;\)]/i, // SPARC
              ],
              [[ARCHITECTURE, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
              ],
              [[ARCHITECTURE, util.lowerize]],
            ],

            device: [
              [
                /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i, // iPad/PlayBook
              ],
              [MODEL, VENDOR, [TYPE, TABLET]],
              [
                /applecoremedia\/[\w\.]+ \((ipad)/, // iPad
              ],
              [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]],
              [
                /(apple\s{0,1}tv)/i, // Apple TV
              ],
              [
                [MODEL, "Apple TV"],
                [VENDOR, "Apple"],
                [TYPE, SMARTTV],
              ],
              [
                /(archos)\s(gamepad2?)/i, // Archos
                /(hp).+(touchpad)/i, // HP TouchPad
                /(hp).+(tablet)/i, // HP Tablet
                /(kindle)\/([\w\.]+)/i, // Kindle
                /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
                /(dell)\s(strea[kpr\s\d]*[\dko])/i, // Dell Streak
              ],
              [VENDOR, MODEL, [TYPE, TABLET]],
              [
                /(kf[A-z]+)\sbuild\/.+silk\//i, // Kindle Fire HD
              ],
              [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
              [
                /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i, // Fire Phone
              ],
              [
                [MODEL, mapper.str, maps.device.amazon.model],
                [VENDOR, "Amazon"],
                [TYPE, MOBILE],
              ],
              [
                /android.+aft([bms])\sbuild/i, // Fire TV
              ],
              [MODEL, [VENDOR, "Amazon"], [TYPE, SMARTTV]],
              [
                /\((ip[honed|\s\w*]+);.+(apple)/i, // iPod/iPhone
              ],
              [MODEL, VENDOR, [TYPE, MOBILE]],
              [
                /\((ip[honed|\s\w*]+);/i, // iPod/iPhone
              ],
              [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]],
              [
                /(blackberry)[\s-]?(\w+)/i, // BlackBerry
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp)\s([\w\s]+\w)/i, // HP iPAQ
                /(asus)-?(\w+)/i, // Asus
              ],
              [VENDOR, MODEL, [TYPE, MOBILE]],
              [
                /\(bb10;\s(\w+)/i, // BlackBerry 10
              ],
              [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]],
              [
                // Asus Tablets
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [VENDOR, "Sony"],
                [MODEL, "Xperia Tablet"],
                [TYPE, TABLET],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]],
              [
                /\s(ouya)\s/i, // Ouya
                /(nintendo)\s([wids3u]+)/i, // Nintendo
              ],
              [VENDOR, MODEL, [TYPE, CONSOLE]],
              [
                /android.+;\s(shield)\sbuild/i, // Nvidia
              ],
              [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
              [
                /(playstation\s[34portablevi]+)/i, // Playstation
              ],
              [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]],
              [
                /(sprint\s(\w+))/i, // Sprint Phones
              ],
              [
                [VENDOR, mapper.str, maps.device.sprint.vendor],
                [MODEL, mapper.str, maps.device.sprint.model],
                [TYPE, MOBILE],
              ],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, // HTC
                /(zte)-(\w*)/i, // ZTE
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
              ],
              [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
              [
                /(nexus\s9)/i, // HTC Nexus 9
              ],
              [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i, // Huawei
              ],
              [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]],
              [
                /android.+(bah2?-a?[lw]\d{2})/i, // Huawei MediaPad
              ],
              [MODEL, [VENDOR, "Huawei"], [TYPE, TABLET]],
              [
                /(microsoft);\s(lumia[\s\w]+)/i, // Microsoft Lumia
              ],
              [VENDOR, MODEL, [TYPE, MOBILE]],
              [
                /[\s\(;](xbox(?:\sone)?)[\s\);]/i, // Microsoft Xbox
              ],
              [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]],
              [
                /(kin\.[onetw]{3})/i, // Microsoft Kin
              ],
              [
                [MODEL, /\./g, " "],
                [VENDOR, "Microsoft"],
                [TYPE, MOBILE],
              ],
              [
                // Motorola
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]],
              [
                /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i, // HbbTV devices
              ],
              [
                [VENDOR, util.trim],
                [MODEL, util.trim],
                [TYPE, SMARTTV],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [MODEL, /^/, "SmartTV"],
                [VENDOR, "Samsung"],
                [TYPE, SMARTTV],
              ],
              [
                /\(dtv[\);].+(aquos)/i, // Sharp
              ],
              [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]],
              [
                // Samsung
                /smart-tv.+(samsung)/i,
              ],
              [VENDOR, [TYPE, SMARTTV], MODEL],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]],
              [
                /sie-(\w*)/i, // Siemens
              ],
              [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
              [
                /(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
                /(nokia)[\s_-]?([\w-]*)/i,
              ],
              [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]],
              [
                /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i, // Acer
              ],
              [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
              [
                /android.+([vl]k\-?\d{3})\s+build/i, // LG Tablet
              ],
              [MODEL, [VENDOR, "LG"], [TYPE, TABLET]],
              [
                /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i, // LG Tablet
              ],
              [[VENDOR, "LG"], MODEL, [TYPE, TABLET]],
              [
                /(lg) netcast\.tv/i, // LG SmartTV
              ],
              [VENDOR, MODEL, [TYPE, SMARTTV]],
              [
                /(nexus\s[45])/i, // LG
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]],
              [
                /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i, // Lenovo tablets
              ],
              [VENDOR, MODEL, [TYPE, TABLET]],
              [
                /android.+(ideatab[a-z0-9\-\s]+)/i, // Lenovo
              ],
              [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [VENDOR, MODEL, [TYPE, MOBILE]],
              [
                /linux;.+((jolla));/i, // Jolla
              ],
              [VENDOR, MODEL, [TYPE, MOBILE]],
              [
                /((pebble))app\/[\d\.]+\s/i, // Pebble
              ],
              [VENDOR, MODEL, [TYPE, WEARABLE]],
              [
                /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i, // OPPO
              ],
              [VENDOR, MODEL, [TYPE, MOBILE]],
              [
                /crkey/i, // Google Chromecast
              ],
              [
                [MODEL, "Chromecast"],
                [VENDOR, "Google"],
                [TYPE, SMARTTV],
              ],
              [
                /android.+;\s(glass)\s\d/i, // Google Glass
              ],
              [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]],
              [
                /android.+;\s(pixel c)[\s)]/i, // Google Pixel C
              ],
              [MODEL, [VENDOR, "Google"], [TYPE, TABLET]],
              [
                /android.+;\s(pixel( [23])?( xl)?)[\s)]/i, // Google Pixel
              ],
              [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                // Xiaomi Mi
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i, // Redmi Phones
              ],
              [
                [MODEL, /_/g, " "],
                [VENDOR, "Xiaomi"],
                [TYPE, MOBILE],
              ],
              [
                /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i, // Mi Pad tablets
              ],
              [
                [MODEL, /_/g, " "],
                [VENDOR, "Xiaomi"],
                [TYPE, TABLET],
              ],
              [
                /android.+;\s(m[1-5]\snote)\sbuild/i, // Meizu
              ],
              [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
              [/(mz)-([\w-]{2,})/i],
              [[VENDOR, "Meizu"], MODEL, [TYPE, MOBILE]],
              [
                /android.+a000(1)\s+build/i, // OnePlus
                /android.+oneplus\s(a\d{4})[\s)]/i,
              ],
              [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
              [
                /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i, // RCA Tablets
              ],
              [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
              [
                /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i, // Dell Venue Tablets
              ],
              [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i, // Verizon Tablet
              ],
              [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i, // Barnes & Noble Tablet
              ],
              [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]],
              [
                /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i, // Barnes & Noble Tablet
              ],
              [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
              [
                /android.+;\s(k88)\sbuild/i, // ZTE K Series Tablet
              ],
              [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i, // Swiss GEN Mobile
              ],
              [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
              [
                /android.+[;\/]\s*(zur\d{3})\s+build/i, // Swiss ZUR Tablet
              ],
              [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i, // Zeki Tablets
              ],
              [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i, // Dragon Touch Tablet
              ],
              [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i, // Insignia Tablets
              ],
              [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i, // NextBook Tablets
              ],
              [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
              [
                // Voice Xtreme Phones

                /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i, // LvTel Phones
              ],
              [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
              [/android.+;\s(PH-1)\s/i],
              [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
              [
                // Essential PH-1

                /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i, // Envizen Tablets
              ],
              [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i, // Le Pan Tablets
              ],
              [VENDOR, MODEL, [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i, // MachSpeed Tablets
              ],
              [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
              [
                /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i, // Trinity Tablets
              ],
              [VENDOR, MODEL, [TYPE, TABLET]],
              [
                /android.+[;\/]\s*TU_(1491)\s+build/i, // Rotor Tablets
              ],
              [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
              [
                /android.+(KS(.+))\s+build/i, // Amazon Kindle Tablets
              ],
              [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
              [
                /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i, // Gigaset Tablets
              ],
              [VENDOR, MODEL, [TYPE, TABLET]],
              [
                /\s(tablet|tab)[;\/]/i, // Unidentifiable Tablet
                /\s(mobile)(?:[;\/]|\ssafari)/i, // Unidentifiable Mobile
              ],
              [[TYPE, util.lowerize], VENDOR, MODEL],
              [
                /[\s\/\(](smart-?tv)[;\)]/i, // SmartTV
              ],
              [[TYPE, SMARTTV]],
              [
                /(android[\w\.\s\-]{0,9});.+build/i, // Generic Android Device
              ],
              [MODEL, [VENDOR, "Generic"]],
            ],

            engine: [
              [
                /windows.+\sedge\/([\w\.]+)/i, // EdgeHTML
              ],
              [VERSION, [NAME, "EdgeHTML"]],
              [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i, // Blink
              ],
              [VERSION, [NAME, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i, // Presto
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
                /(icab)[\/\s]([23]\.[\d\.]+)/i, // iCab
              ],
              [NAME, VERSION],
              [
                /rv\:([\w\.]{1,9}).+(gecko)/i, // Gecko
              ],
              [VERSION, NAME],
            ],

            os: [
              [
                // Windows based
                /microsoft\s(windows)\s(vista|xp)/i, // Windows (iTunes)
              ],
              [NAME, VERSION],
              [
                /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, // Windows Phone
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [NAME, [VERSION, mapper.str, maps.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [NAME, "Windows"],
                [VERSION, mapper.str, maps.os.windows.version],
              ],
              [
                // Mobile/Embedded OS
                /\((bb)(10);/i, // BlackBerry 10
              ],
              [[NAME, "BlackBerry"], VERSION],
              [
                /(blackberry)\w*\/?([\w\.]*)/i, // Blackberry
                /(tizen|kaios)[\/\s]([\w\.]+)/i, // Tizen/KaiOS
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
              ],
              [NAME, VERSION],
              [
                /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i, // Symbian
              ],
              [[NAME, "Symbian"], VERSION],
              [
                /\((series40);/i, // Series 40
              ],
              [NAME],
              [
                /mozilla.+\(mobile;.+gecko.+firefox/i, // Firefox OS
              ],
              [[NAME, "Firefox OS"], VERSION],
              [
                // Console
                /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation

                // GNU/Linux based
                /(mint)[\/\s\(]?(\w*)/i, // Mint
                /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                /(hurd|linux)\s?([\w\.]*)/i, // Hurd/Linux
                /(gnu)\s?([\w\.]*)/i, // GNU
              ],
              [NAME, VERSION],
              [
                /(cros)\s[\w]+\s([\w\.]+\w)/i, // Chromium OS
              ],
              [[NAME, "Chromium OS"], VERSION],
              [
                // Solaris
                /(sunos)\s?([\w\.\d]*)/i, // Solaris
              ],
              [[NAME, "Solaris"], VERSION],
              [
                // BSD based
                /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
              ],
              [NAME, VERSION],
              [
                /(haiku)\s(\w+)/i, // Haiku
              ],
              [NAME, VERSION],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, // iOS
              ],
              [
                [VERSION, /_/g, "."],
                [NAME, "iOS"],
              ],
              [
                /(mac\sos\sx)\s?([\w\s\.]*)/i,
                /(macintosh|mac(?=_powerpc)\s)/i, // Mac OS
              ],
              [
                [NAME, "Mac OS"],
                [VERSION, /_/g, "."],
              ],
              [
                // Other
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i, // Solaris
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, // AIX
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
                /(unix)\s?([\w\.]*)/i, // UNIX
              ],
              [NAME, VERSION],
            ],
          };

          /////////////////
          // Constructor
          ////////////////
          var UAParser = function (uastring, extensions) {
            if (typeof uastring === "object") {
              extensions = uastring;
              uastring = undefined;
            }

            if (!(this instanceof UAParser)) {
              return new UAParser(uastring, extensions).getResult();
            }

            var ua =
              uastring ||
              (window && window.navigator && window.navigator.userAgent
                ? window.navigator.userAgent
                : EMPTY);
            var rgxmap = extensions
              ? util.extend(regexes, extensions)
              : regexes;

            this.getBrowser = function () {
              var browser = { name: undefined, version: undefined };
              mapper.rgx.call(browser, ua, rgxmap.browser);
              browser.major = util.major(browser.version); // deprecated
              return browser;
            };
            this.getCPU = function () {
              var cpu = { architecture: undefined };
              mapper.rgx.call(cpu, ua, rgxmap.cpu);
              return cpu;
            };
            this.getDevice = function () {
              var device = {
                vendor: undefined,
                model: undefined,
                type: undefined,
              };
              mapper.rgx.call(device, ua, rgxmap.device);
              return device;
            };
            this.getEngine = function () {
              var engine = { name: undefined, version: undefined };
              mapper.rgx.call(engine, ua, rgxmap.engine);
              return engine;
            };
            this.getOS = function () {
              var os = { name: undefined, version: undefined };
              mapper.rgx.call(os, ua, rgxmap.os);
              return os;
            };
            this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            };
            this.getUA = function () {
              return ua;
            };
            this.setUA = function (uastring) {
              ua = uastring;
              return this;
            };
            return this;
          };

          UAParser.VERSION = LIBVERSION;
          UAParser.BROWSER = {
            NAME: NAME,
            MAJOR: MAJOR, // deprecated
            VERSION: VERSION,
          };
          UAParser.CPU = {
            ARCHITECTURE: ARCHITECTURE,
          };
          UAParser.DEVICE = {
            MODEL: MODEL,
            VENDOR: VENDOR,
            TYPE: TYPE,
            CONSOLE: CONSOLE,
            MOBILE: MOBILE,
            SMARTTV: SMARTTV,
            TABLET: TABLET,
            WEARABLE: WEARABLE,
            EMBEDDED: EMBEDDED,
          };
          UAParser.ENGINE = {
            NAME: NAME,
            VERSION: VERSION,
          };
          UAParser.OS = {
            NAME: NAME,
            VERSION: VERSION,
          };

          ///////////
          // Export
          //////////

          // check js environment
          if (typeof exports !== UNDEF_TYPE) {
            // nodejs env
            if (typeof module !== UNDEF_TYPE && module.exports) {
              exports = module.exports = UAParser;
            }
            exports.UAParser = UAParser;
          } else {
            // requirejs env (optional)
            if (true) {
              !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
              }.call(exports, __webpack_require__, exports, module)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          }

          // jQuery/Zepto specific (optional)
          // Note:
          //   In AMD env the global scope should be kept clean, but jQuery is an exception.
          //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
          //   and we should catch that.
          var $ = window && (window.jQuery || window.Zepto);
          if ($ && !$.ua) {
            var parser = new UAParser();
            $.ua = parser.getResult();
            $.ua.get = function () {
              return parser.getUA();
            };
            $.ua.set = function (uastring) {
              parser.setUA(uastring);
              var result = parser.getResult();
              for (var prop in result) {
                $.ua[prop] = result[prop];
              }
            };
          }
        })(typeof window === "object" ? window : this);

        /***/
      },

    /***/ "./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

    /***/ "./src/classical-App/browser_version_control/html_templates.ts":
      /*!*********************************************************************!*\
  !*** ./src/classical-App/browser_version_control/html_templates.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports["default"] = getNotSupportPromptHTML;

        /**
         * Get string html segment about the not support prompt.
         * @param content The prompt message.
         * @returns The string html segment prompt the browser is not supported.
         */
        function getNotSupportPromptHTML(content) {
          return (
            '<p style="text-align: center; font-weight: bold; color: red;">' +
            content +
            "</p>"
          );
        }

        /***/
      },

    /***/ "./src/classical-App/browser_version_control/index.ts":
      /*!************************************************************!*\
  !*** ./src/classical-App/browser_version_control/index.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var _module = _interopRequireDefault(
          __webpack_require__(
            /*! ./module */ "./src/classical-App/browser_version_control/module.ts"
          )
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        (0, _module["default"])();

        /***/
      },

    /***/ "./src/classical-App/browser_version_control/module.ts":
      /*!*************************************************************!*\
  !*** ./src/classical-App/browser_version_control/module.ts ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        __webpack_require__(
          /*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js"
        );

        exports.__esModule = true;
        exports["default"] = applyBrowserVersionControl;

        var _uaParserJs = __webpack_require__(
          /*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js"
        );

        var _constants = __webpack_require__(
          /*! ../../common/constants */ "./src/common/constants.ts"
        );

        var _promptMessages = _interopRequireDefault(
          __webpack_require__(
            /*! ../../common/prompt-messages */ "./src/common/prompt-messages.ts"
          )
        );

        var _html_templates = _interopRequireDefault(
          __webpack_require__(
            /*! ./html_templates */ "./src/classical-App/browser_version_control/html_templates.ts"
          )
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * Use the user agent to detect the browser is whether or not in supported browser list.
         * @return If the browser is supported return `true` else return `false`.
         */
        function isSupportedBrowser() {
          var supportedOS = _constants.SUPPORTED.os;
          var supportedBrowser = _constants.SUPPORTED.browser;
          var userAgent =
            window && window.navigator && window.navigator.userAgent;
          var parser = new _uaParserJs.UAParser(userAgent);

          var _parser$getBrowser = parser.getBrowser(),
            browserName = _parser$getBrowser.name,
            browserMajorVersion = _parser$getBrowser.major;

          var _parser$getOS = parser.getOS(),
            osName = _parser$getOS.name;

          if (
            supportedOS.includes(osName) &&
            supportedBrowser.has(browserName) &&
            Number(browserMajorVersion) >=
              Number(supportedBrowser.get(browserName))
          ) {
            return true;
          }

          return false;
        }
        /** Hide the entire HTML document by set the display of root node into "none". */

        function hideHTMLDocument() {
          document.documentElement.style.display = "none";
        }
        /** Show the HTML document by set the display of root node into empty. */

        function showHTMLDocument() {
          document.documentElement.style.display = "";
        }
        /** Prompt the browser is not supported by replacing the body html with prompt html. */

        function promptBrowserIsNotSupported() {
          var promptMessage = _promptMessages["default"].isNotSupportedBrowser;
          document.body.innerHTML = (0, _html_templates["default"])(
            promptMessage
          );
          showHTMLDocument();
        }
        /**
         * Append an event listener for window's load event.
         * @param listener The event listener callback.
         * @description To compat with IE versions before IE9, using `window.attachEvent`
         * if there is no `window.addEventListener`.
         */

        function addLoadEventListenerForWindow(listener) {
          if (window.addEventListener) {
            window.addEventListener("load", listener);
          } else if (window.attachEvent) {
            window.attachEvent("onload", listener);
          }
        }
        /**
         * Apply browser version control.
         * @description If the browser is not supported, we will hide the html first,
         * and replace the html with prompt message after the page loaded.
         */

        function applyBrowserVersionControl() {
          if (!isSupportedBrowser()) {
            window.isSupportedBrowser = false;
            hideHTMLDocument();
            addLoadEventListenerForWindow(promptBrowserIsNotSupported);
          } else {
            window.isSupportedBrowser = true;
          }
        }

        /***/
      },

    /***/ "./src/common/constants.ts":
      /*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        __webpack_require__(
          /*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js"
        );

        __webpack_require__(
          /*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js"
        );

        __webpack_require__(
          /*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        );

        exports.__esModule = true;
        exports.LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH = exports.STOP_LOG = exports.SUPPORTED = exports.PROMPT_MESSAGE_ID = exports.PROMPT_MESSAGE_CLASS_NAME = exports.CACHING_CONFIG = exports.OBLIGATION_NAME_FOR_FILTER = exports.RESOURCE_TYPE = void 0;
        var RESOURCE_TYPE = "spole";
        exports.RESOURCE_TYPE = RESOURCE_TYPE;
        var OBLIGATION_NAME_FOR_FILTER = "FilterByColumn";
        exports.OBLIGATION_NAME_FOR_FILTER = OBLIGATION_NAME_FOR_FILTER;
        var CACHING_CONFIG = {
          cachingStore: "session",
          cachingTimeoutSeconds: 180,
        };
        exports.CACHING_CONFIG = CACHING_CONFIG;
        var PROMPT_MESSAGE_CLASS_NAME = {
          message: "nxl-message",
          row: "nxl-control-row",
          error: "nxl-error",
          hide: "nxl-hide",
        };
        exports.PROMPT_MESSAGE_CLASS_NAME = PROMPT_MESSAGE_CLASS_NAME;
        var PROMPT_MESSAGE_ID = {
          expChangeWarning: "nxl-exp-warning",
        };
        exports.PROMPT_MESSAGE_ID = PROMPT_MESSAGE_ID;
        var SUPPORTED = {
          os: ["Windows", "Mac OS"],
          browser: new Map([
            ["Edge", 80],
            ["Chrome", 49],
            ["Firefox", 52],
          ]),
        };
        exports.SUPPORTED = SUPPORTED;
        var STOP_LOG = false;
        exports.STOP_LOG = STOP_LOG;
        var LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH =
          "/_layouts/15/advsetng.aspx";
        exports.LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH = LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH;

        /***/
      },

    /***/ "./src/common/prompt-messages.ts":
      /*!***************************************!*\
  !*** ./src/common/prompt-messages.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports["default"] = void 0;
        var PROMPT_MESSAGES = {
          isNotSupportedBrowser: "Your browser is not supported.",
          waiting: "Checking access policies",
          deny:
            "You do not have access rights for this action. Contact your SharePoint administrator if you should have access.",
          invalidFieldError: 'The"{colName}" field is not in this list.',
          listExpChangeWarning:
            "You cannot change the SharePoint experience type.",
          returnToClassicPage:
            "You must return to SharePoint Classic experience.",
          wrongObligationOperator: 'The could not use operator: "{operator}"',
        };
        var _default = PROMPT_MESSAGES;
        exports["default"] = _default;

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mcmVlemluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWEtcGFyc2VyLWpzL3NyYy91YS1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3NpY2FsLUFwcC9icm93c2VyX3ZlcnNpb25fY29udHJvbC9odG1sX3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3NpY2FsLUFwcC9icm93c2VyX3ZlcnNpb25fY29udHJvbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3NpY2FsLUFwcC9icm93c2VyX3ZlcnNpb25fY29udHJvbC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wcm9tcHQtbWVzc2FnZXMudHMiXSwibmFtZXMiOlsiZ2V0Tm90U3VwcG9ydFByb21wdEhUTUwiLCJjb250ZW50IiwiaXNTdXBwb3J0ZWRCcm93c2VyIiwic3VwcG9ydGVkT1MiLCJTVVBQT1JURUQiLCJvcyIsInN1cHBvcnRlZEJyb3dzZXIiLCJicm93c2VyIiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwicGFyc2VyIiwiVUFQYXJzZXIiLCJnZXRCcm93c2VyIiwiYnJvd3Nlck5hbWUiLCJuYW1lIiwiYnJvd3Nlck1ham9yVmVyc2lvbiIsIm1ham9yIiwiZ2V0T1MiLCJvc05hbWUiLCJpbmNsdWRlcyIsImhhcyIsIk51bWJlciIsImdldCIsImhpZGVIVE1MRG9jdW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNob3dIVE1MRG9jdW1lbnQiLCJwcm9tcHRCcm93c2VySXNOb3RTdXBwb3J0ZWQiLCJwcm9tcHRNZXNzYWdlIiwiUFJPTVBUX01FU1NBR0VTIiwiaXNOb3RTdXBwb3J0ZWRCcm93c2VyIiwiYm9keSIsImlubmVySFRNTCIsImFkZExvYWRFdmVudExpc3RlbmVyRm9yV2luZG93IiwibGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhcHBseUJyb3dzZXJWZXJzaW9uQ29udHJvbCIsIlJFU09VUkNFX1RZUEUiLCJPQkxJR0FUSU9OX05BTUVfRk9SX0ZJTFRFUiIsIkNBQ0hJTkdfQ09ORklHIiwiY2FjaGluZ1N0b3JlIiwiY2FjaGluZ1RpbWVvdXRTZWNvbmRzIiwiUFJPTVBUX01FU1NBR0VfQ0xBU1NfTkFNRSIsIm1lc3NhZ2UiLCJyb3ciLCJlcnJvciIsImhpZGUiLCJQUk9NUFRfTUVTU0FHRV9JRCIsImV4cENoYW5nZVdhcm5pbmciLCJNYXAiLCJTVE9QX0xPRyIsIkxJU1RfQURWQU5DRURfU0VUVElOR1NfU0VSVkVSX1JFUVVFU1RfUEFUSCIsIndhaXRpbmciLCJkZW55IiwiaW52YWxpZEZpZWxkRXJyb3IiLCJsaXN0RXhwQ2hhbmdlV2FybmluZyIsInJldHVyblRvQ2xhc3NpY1BhZ2UiLCJ3cm9uZ09ibGlnYXRpb25PcGVyYXRvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVB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RUFBRSxtREFOQTtBQU90QkMscUJBQW1CLEVBQUUsbURBUEM7QUFRdEJDLHlCQUF1QixFQUFFO0FBUkgsQ0FBeEI7ZUFXZTdCLGUiLCJmaWxlIjoiYnJvd3Nlcl92ZXJzaW9uX2NvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jbGFzc2ljYWwtQXBwL2Jyb3dzZXJfdmVyc2lvbl9jb250cm9sL2luZGV4LnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNhY2hlID0ge307XG5cbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgb3B0aW9ucykge1xuICBpZiAoaGFzKGNhY2hlLCBNRVRIT0RfTkFNRSkpIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV07XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICB2YXIgQUNDRVNTT1JTID0gaGFzKG9wdGlvbnMsICdBQ0NFU1NPUlMnKSA/IG9wdGlvbnMuQUNDRVNTT1JTIDogZmFsc2U7XG4gIHZhciBhcmd1bWVudDAgPSBoYXMob3B0aW9ucywgMCkgPyBvcHRpb25zWzBdIDogdGhyb3dlcjtcbiAgdmFyIGFyZ3VtZW50MSA9IGhhcyhvcHRpb25zLCAxKSA/IG9wdGlvbnNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXSA9ICEhbWV0aG9kICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFDQ0VTU09SUyAmJiAhREVTQ1JJUFRPUlMpIHJldHVybiB0cnVlO1xuICAgIHZhciBPID0geyBsZW5ndGg6IC0xIH07XG5cbiAgICBpZiAoQUNDRVNTT1JTKSBkZWZpbmVQcm9wZXJ0eShPLCAxLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogdGhyb3dlciB9KTtcbiAgICBlbHNlIE9bMV0gPSAxO1xuXG4gICAgbWV0aG9kLmNhbGwoTywgYXJndW1lbnQwLCBhcmd1bWVudDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJykuZmFzdEtleTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgaW50ZXJuYWxTdGF0ZUdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuICAgICAgICB0eXBlOiBDT05TVFJVQ1RPUl9OQU1FLFxuICAgICAgICBpbmRleDogY3JlYXRlKG51bGwpLFxuICAgICAgICBmaXJzdDogdW5kZWZpbmVkLFxuICAgICAgICBsYXN0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH0pO1xuICAgICAgaWYgKCFERVNDUklQVE9SUykgdGhhdC5zaXplID0gMDtcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB0aGF0LCBJU19NQVApO1xuICAgIH0pO1xuXG4gICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXG4gICAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgIHZhciBwcmV2aW91cywgaW5kZXg7XG4gICAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubGFzdCA9IGVudHJ5ID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzID0gc3RhdGUubGFzdCxcbiAgICAgICAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgICAgICAgcmVtb3ZlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFzdGF0ZS5maXJzdCkgc3RhdGUuZmlyc3QgPSBlbnRyeTtcbiAgICAgICAgaWYgKHByZXZpb3VzKSBwcmV2aW91cy5uZXh0ID0gZW50cnk7XG4gICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSsrO1xuICAgICAgICBlbHNlIHRoYXQuc2l6ZSsrO1xuICAgICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHN0YXRlLmluZGV4W2luZGV4XSA9IGVudHJ5O1xuICAgICAgfSByZXR1cm4gdGhhdDtcbiAgICB9O1xuXG4gICAgdmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIC8vIGZhc3QgY2FzZVxuICAgICAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICAgICAgdmFyIGVudHJ5O1xuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiBzdGF0ZS5pbmRleFtpbmRleF07XG4gICAgICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgICAgIGZvciAoZW50cnkgPSBzdGF0ZS5maXJzdDsgZW50cnk7IGVudHJ5ID0gZW50cnkubmV4dCkge1xuICAgICAgICBpZiAoZW50cnkua2V5ID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgICB2YXIgZGF0YSA9IHN0YXRlLmluZGV4O1xuICAgICAgICB2YXIgZW50cnkgPSBzdGF0ZS5maXJzdDtcbiAgICAgICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnByZXZpb3VzKSBlbnRyeS5wcmV2aW91cyA9IGVudHJ5LnByZXZpb3VzLm5leHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaW5kZXhdO1xuICAgICAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5maXJzdCA9IHN0YXRlLmxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSA9IDA7XG4gICAgICAgIGVsc2UgdGhhdC5zaXplID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uZXh0O1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAgICAgZGVsZXRlIHN0YXRlLmluZGV4W2VudHJ5LmluZGV4XTtcbiAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wcmV2aW91cyA9IHByZXY7XG4gICAgICAgICAgaWYgKHN0YXRlLmZpcnN0ID09IGVudHJ5KSBzdGF0ZS5maXJzdCA9IG5leHQ7XG4gICAgICAgICAgaWYgKHN0YXRlLmxhc3QgPT0gZW50cnkpIHN0YXRlLmxhc3QgPSBwcmV2O1xuICAgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZS0tO1xuICAgICAgICAgIGVsc2UgdGhhdC5zaXplLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5maXJzdCkge1xuICAgICAgICAgIGJvdW5kRnVuY3Rpb24oZW50cnkudmFsdWUsIGVudHJ5LmtleSwgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIElTX01BUCA/IHtcbiAgICAgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudmFsdWU7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSA6IHtcbiAgICAgIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eShDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKSB7XG4gICAgdmFyIElURVJBVE9SX05BTUUgPSBDT05TVFJVQ1RPUl9OQU1FICsgJyBJdGVyYXRvcic7XG4gICAgdmFyIGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICB2YXIgZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihJVEVSQVRPUl9OQU1FKTtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgZGVmaW5lSXRlcmF0b3IoQywgQ09OU1RSVUNUT1JfTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogSVRFUkFUT1JfTkFNRSxcbiAgICAgICAgdGFyZ2V0OiBpdGVyYXRlZCxcbiAgICAgICAgc3RhdGU6IGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlKGl0ZXJhdGVkKSxcbiAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgbGFzdDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUodGhpcyk7XG4gICAgICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG4gICAgICB2YXIgZW50cnkgPSBzdGF0ZS5sYXN0O1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXN0YXRlLnRhcmdldCB8fCAhKHN0YXRlLmxhc3QgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLnN0YXRlLmZpcnN0KSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICBzdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHsgdmFsdWU6IGVudHJ5LmtleSwgZG9uZTogZmFsc2UgfTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogZW50cnkudmFsdWUsIGRvbmU6IGZhbHNlIH07XG4gICAgICByZXR1cm4geyB2YWx1ZTogW2VudHJ5LmtleSwgZW50cnkudmFsdWVdLCBkb25lOiBmYWxzZSB9O1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhDT05TVFJVQ1RPUl9OQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIEludGVybmFsTWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtbWV0YWRhdGEnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUsIHdyYXBwZXIsIGNvbW1vbikge1xuICB2YXIgSVNfTUFQID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdNYXAnKSAhPT0gLTE7XG4gIHZhciBJU19XRUFLID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdXZWFrJykgIT09IC0xO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgTmF0aXZlQ29uc3RydWN0b3IgPSBnbG9iYWxbQ09OU1RSVUNUT1JfTkFNRV07XG4gIHZhciBOYXRpdmVQcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3RvciAmJiBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHZhciBDb25zdHJ1Y3RvciA9IE5hdGl2ZUNvbnN0cnVjdG9yO1xuICB2YXIgZXhwb3J0ZWQgPSB7fTtcblxuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBuYXRpdmVNZXRob2QgPSBOYXRpdmVQcm90b3R5cGVbS0VZXTtcbiAgICByZWRlZmluZShOYXRpdmVQcm90b3R5cGUsIEtFWSxcbiAgICAgIEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSA6IEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyB1bmRlZmluZWQgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgaWYgKGlzRm9yY2VkKENPTlNUUlVDVE9SX05BTUUsIHR5cGVvZiBOYXRpdmVDb25zdHJ1Y3RvciAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBOYXRpdmVQcm90b3R5cGUuZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIENvbnN0cnVjdG9yID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpO1xuICAgIEludGVybmFsTWV0YWRhdGFNb2R1bGUuUkVRVUlSRUQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzRm9yY2VkKENPTlNUUlVDVE9SX05BTUUsIHRydWUpKSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9IGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGl0ZXJhYmxlKTsgfSk7XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcblxuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZShkdW1teSwgQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLCBkdW1teSwgQ29uc3RydWN0b3IpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgdGhhdCwgSVNfTUFQKTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE5hdGl2ZVByb3RvdHlwZTtcbiAgICAgIE5hdGl2ZVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cblxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuXG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBOYXRpdmVQcm90b3R5cGUuY2xlYXIpIGRlbGV0ZSBOYXRpdmVQcm90b3R5cGUuY2xlYXI7XG4gIH1cblxuICBleHBvcnRlZFtDT05TVFJVQ1RPUl9OQU1FXSA9IENvbnN0cnVjdG9yO1xuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IENvbnN0cnVjdG9yICE9IE5hdGl2ZUNvbnN0cnVjdG9yIH0sIGV4cG9ydGVkKTtcblxuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBGUkVFWklORyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mcmVlemluZycpO1xuXG52YXIgTUVUQURBVEEgPSB1aWQoJ21ldGEnKTtcbnZhciBpZCA9IDA7XG5cbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgc2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgZGVmaW5lUHJvcGVydHkoaXQsIE1FVEFEQVRBLCB7IHZhbHVlOiB7XG4gICAgb2JqZWN0SUQ6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHdlYWtEYXRhOiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gYSBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBREFUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YWRhdGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFEQVRBXS5vYmplY3RJRDtcbn07XG5cbnZhciBnZXRXZWFrRGF0YSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBREFUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YWRhdGEoaXQpO1xuICAvLyByZXR1cm4gdGhlIHN0b3JlIG9mIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFEQVRBXS53ZWFrRGF0YTtcbn07XG5cbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWklORyAmJiBtZXRhLlJFUVVJUkVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQURBVEEpKSBzZXRNZXRhZGF0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJFUVVJUkVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2Vha0RhdGE6IGdldFdlYWtEYXRhLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cbmhpZGRlbktleXNbTUVUQURBVEFdID0gdHJ1ZTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEFTX0VOVFJJRVMsIElTX0lURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgQVNfRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEFTX0VOVFJJRVNcbiAgICAgICAgICA/IGJvdW5kRnVuY3Rpb24oYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG5pdGVyYXRlLnN0b3AgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxuaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICghSVNfUFVSRSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IHt9LnRvU3RyaW5nIDogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjYuNScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYE1hcGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW1hcC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ01hcCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKCFUT19TVFJJTkdfVEFHX1NVUFBPUlQpIHtcbiAgcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5kZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyohXG4gKiBVQVBhcnNlci5qcyB2MC43LjIxXG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE5IEZhaXNhbCBTYWxtYW4gPGZAZmFpc2FsbWFuLmNvbT5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cblxuKGZ1bmN0aW9uICh3aW5kb3csIHVuZGVmaW5lZCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBDb25zdGFudHNcbiAgICAvLy8vLy8vLy8vLy8vXG5cblxuICAgIHZhciBMSUJWRVJTSU9OICA9ICcwLjcuMjEnLFxuICAgICAgICBFTVBUWSAgICAgICA9ICcnLFxuICAgICAgICBVTktOT1dOICAgICA9ICc/JyxcbiAgICAgICAgRlVOQ19UWVBFICAgPSAnZnVuY3Rpb24nLFxuICAgICAgICBVTkRFRl9UWVBFICA9ICd1bmRlZmluZWQnLFxuICAgICAgICBPQkpfVFlQRSAgICA9ICdvYmplY3QnLFxuICAgICAgICBTVFJfVFlQRSAgICA9ICdzdHJpbmcnLFxuICAgICAgICBNQUpPUiAgICAgICA9ICdtYWpvcicsIC8vIGRlcHJlY2F0ZWRcbiAgICAgICAgTU9ERUwgICAgICAgPSAnbW9kZWwnLFxuICAgICAgICBOQU1FICAgICAgICA9ICduYW1lJyxcbiAgICAgICAgVFlQRSAgICAgICAgPSAndHlwZScsXG4gICAgICAgIFZFTkRPUiAgICAgID0gJ3ZlbmRvcicsXG4gICAgICAgIFZFUlNJT04gICAgID0gJ3ZlcnNpb24nLFxuICAgICAgICBBUkNISVRFQ1RVUkU9ICdhcmNoaXRlY3R1cmUnLFxuICAgICAgICBDT05TT0xFICAgICA9ICdjb25zb2xlJyxcbiAgICAgICAgTU9CSUxFICAgICAgPSAnbW9iaWxlJyxcbiAgICAgICAgVEFCTEVUICAgICAgPSAndGFibGV0JyxcbiAgICAgICAgU01BUlRUViAgICAgPSAnc21hcnR0dicsXG4gICAgICAgIFdFQVJBQkxFICAgID0gJ3dlYXJhYmxlJyxcbiAgICAgICAgRU1CRURERUQgICAgPSAnZW1iZWRkZWQnO1xuXG5cbiAgICAvLy8vLy8vLy8vL1xuICAgIC8vIEhlbHBlclxuICAgIC8vLy8vLy8vLy9cblxuXG4gICAgdmFyIHV0aWwgPSB7XG4gICAgICAgIGV4dGVuZCA6IGZ1bmN0aW9uIChyZWdleGVzLCBleHRlbnNpb25zKSB7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkUmVnZXhlcyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZWdleGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbnNbaV0gJiYgZXh0ZW5zaW9uc1tpXS5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZFJlZ2V4ZXNbaV0gPSBleHRlbnNpb25zW2ldLmNvbmNhdChyZWdleGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWRSZWdleGVzW2ldID0gcmVnZXhlc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkUmVnZXhlcztcbiAgICAgICAgfSxcbiAgICAgICAgaGFzIDogZnVuY3Rpb24gKHN0cjEsIHN0cjIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0cjEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHIxLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG93ZXJpemUgOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ham9yIDogZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YodmVyc2lvbikgPT09IFNUUl9UWVBFID8gdmVyc2lvbi5yZXBsYWNlKC9bXlxcZFxcLl0vZywnJykuc3BsaXQoXCIuXCIpWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICB0cmltIDogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIE1hcCBoZWxwZXJcbiAgICAvLy8vLy8vLy8vLy8vL1xuXG5cbiAgICB2YXIgbWFwcGVyID0ge1xuXG4gICAgICAgIHJneCA6IGZ1bmN0aW9uICh1YSwgYXJyYXlzKSB7XG5cbiAgICAgICAgICAgIHZhciBpID0gMCwgaiwgaywgcCwgcSwgbWF0Y2hlcywgbWF0Y2g7XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgcmVnZXhlcyBtYXBzXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGFycmF5cy5sZW5ndGggJiYgIW1hdGNoZXMpIHtcblxuICAgICAgICAgICAgICAgIHZhciByZWdleCA9IGFycmF5c1tpXSwgICAgICAgLy8gZXZlbiBzZXF1ZW5jZSAoMCwyLDQsLi4pXG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gYXJyYXlzW2kgKyAxXTsgICAvLyBvZGQgc2VxdWVuY2UgKDEsMyw1LC4uKVxuICAgICAgICAgICAgICAgIGogPSBrID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIHRyeSBtYXRjaGluZyB1YXN0cmluZyB3aXRoIHJlZ2V4ZXNcbiAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IHJlZ2V4Lmxlbmd0aCAmJiAhbWF0Y2hlcykge1xuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSByZWdleFtqKytdLmV4ZWModWEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIW1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCBwcm9wcy5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbWF0Y2hlc1srK2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEgPSBwcm9wc1twXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBnaXZlbiBwcm9wZXJ0eSBpcyBhY3R1YWxseSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcSA9PT0gT0JKX1RZUEUgJiYgcS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHFbMV0gPT0gRlVOQ19UWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzaWduIG1vZGlmaWVkIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1txWzBdXSA9IHFbMV0uY2FsbCh0aGlzLCBtYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBnaXZlbiB2YWx1ZSwgaWdub3JlIHJlZ2V4IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1txWzBdXSA9IHFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocS5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBmdW5jdGlvbiBvciByZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxWzFdID09PSBGVU5DX1RZUEUgJiYgIShxWzFdLmV4ZWMgJiYgcVsxXS50ZXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgZnVuY3Rpb24gKHVzdWFsbHkgc3RyaW5nIG1hcHBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3FbMF1dID0gbWF0Y2ggPyBxWzFdLmNhbGwodGhpcywgbWF0Y2gsIHFbMl0pIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYW5pdGl6ZSBtYXRjaCB1c2luZyBnaXZlbiByZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBtYXRjaCA/IG1hdGNoLnJlcGxhY2UocVsxXSwgcVsyXSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcVswXV0gPSBtYXRjaCA/IHFbM10uY2FsbCh0aGlzLCBtYXRjaC5yZXBsYWNlKHFbMV0sIHFbMl0pKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcV0gPSBtYXRjaCA/IG1hdGNoIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RyIDogZnVuY3Rpb24gKHN0ciwgbWFwKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hcFtpXSA9PT0gT0JKX1RZUEUgJiYgbWFwW2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXBbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsLmhhcyhtYXBbaV1bal0sIHN0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGkgPT09IFVOS05PV04pID8gdW5kZWZpbmVkIDogaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXRpbC5oYXMobWFwW2ldLCBzdHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaSA9PT0gVU5LTk9XTikgPyB1bmRlZmluZWQgOiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBTdHJpbmcgbWFwXG4gICAgLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgdmFyIG1hcHMgPSB7XG5cbiAgICAgICAgYnJvd3NlciA6IHtcbiAgICAgICAgICAgIG9sZHNhZmFyaSA6IHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uIDoge1xuICAgICAgICAgICAgICAgICAgICAnMS4wJyAgIDogJy84JyxcbiAgICAgICAgICAgICAgICAgICAgJzEuMicgICA6ICcvMScsXG4gICAgICAgICAgICAgICAgICAgICcxLjMnICAgOiAnLzMnLFxuICAgICAgICAgICAgICAgICAgICAnMi4wJyAgIDogJy80MTInLFxuICAgICAgICAgICAgICAgICAgICAnMi4wLjInIDogJy80MTYnLFxuICAgICAgICAgICAgICAgICAgICAnMi4wLjMnIDogJy80MTcnLFxuICAgICAgICAgICAgICAgICAgICAnMi4wLjQnIDogJy80MTknLFxuICAgICAgICAgICAgICAgICAgICAnPycgICAgIDogJy8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRldmljZSA6IHtcbiAgICAgICAgICAgIGFtYXpvbiA6IHtcbiAgICAgICAgICAgICAgICBtb2RlbCA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0ZpcmUgUGhvbmUnIDogWydTRCcsICdLRiddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwcmludCA6IHtcbiAgICAgICAgICAgICAgICBtb2RlbCA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0V2byBTaGlmdCA0RycgOiAnNzM3M0tUJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmVuZG9yIDoge1xuICAgICAgICAgICAgICAgICAgICAnSFRDJyAgICAgICA6ICdBUEEnLFxuICAgICAgICAgICAgICAgICAgICAnU3ByaW50JyAgICA6ICdTcHJpbnQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9zIDoge1xuICAgICAgICAgICAgd2luZG93cyA6IHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uIDoge1xuICAgICAgICAgICAgICAgICAgICAnTUUnICAgICAgICA6ICc0LjkwJyxcbiAgICAgICAgICAgICAgICAgICAgJ05UIDMuMTEnICAgOiAnTlQzLjUxJyxcbiAgICAgICAgICAgICAgICAgICAgJ05UIDQuMCcgICAgOiAnTlQ0LjAnLFxuICAgICAgICAgICAgICAgICAgICAnMjAwMCcgICAgICA6ICdOVCA1LjAnLFxuICAgICAgICAgICAgICAgICAgICAnWFAnICAgICAgICA6IFsnTlQgNS4xJywgJ05UIDUuMiddLFxuICAgICAgICAgICAgICAgICAgICAnVmlzdGEnICAgICA6ICdOVCA2LjAnLFxuICAgICAgICAgICAgICAgICAgICAnNycgICAgICAgICA6ICdOVCA2LjEnLFxuICAgICAgICAgICAgICAgICAgICAnOCcgICAgICAgICA6ICdOVCA2LjInLFxuICAgICAgICAgICAgICAgICAgICAnOC4xJyAgICAgICA6ICdOVCA2LjMnLFxuICAgICAgICAgICAgICAgICAgICAnMTAnICAgICAgICA6IFsnTlQgNi40JywgJ05UIDEwLjAnXSxcbiAgICAgICAgICAgICAgICAgICAgJ1JUJyAgICAgICAgOiAnQVJNJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmVnZXggbWFwXG4gICAgLy8vLy8vLy8vLy8vL1xuXG5cbiAgICB2YXIgcmVnZXhlcyA9IHtcblxuICAgICAgICBicm93c2VyIDogW1tcblxuICAgICAgICAgICAgLy8gUHJlc3RvIGJhc2VkXG4gICAgICAgICAgICAvKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSBNaW5pXG4gICAgICAgICAgICAvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSBNb2JpL1RhYmxldFxuICAgICAgICAgICAgLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSA+IDkuODBcbiAgICAgICAgICAgIC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDwgOS44MFxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8ob3Bpb3MpW1xcL1xcc10rKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIG1pbmkgb24gaXBob25lID49IDguMFxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnT3BlcmEgTWluaSddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSBXZWJraXRcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ09wZXJhJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8vIE1peGVkXG4gICAgICAgICAgICAvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZVxuICAgICAgICAgICAgLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0qKS9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMdW5hc2NhcGUvTWF4dGhvbi9OZXRmcm9udC9KYXNtaW5lL0JsYXplclxuICAgICAgICAgICAgLy8gVHJpZGVudCBiYXNlZFxuICAgICAgICAgICAgLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltKSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF2YW50L0lFTW9iaWxlL1NsaW1Ccm93c2VyXG4gICAgICAgICAgICAvKGJpZHVicm93c2VyfGJhaWR1YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAvLyBCYWlkdSBCcm93c2VyXG4gICAgICAgICAgICAvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlclxuXG4gICAgICAgICAgICAvLyBXZWJraXQvS0hUTUwgYmFzZWRcbiAgICAgICAgICAgIC8ocmVrb25xKVxcLyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVrb25xXG4gICAgICAgICAgICAvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qc3xib3dzZXJ8cXVhcmt8cXVwemlsbGF8ZmFsa29uKVxcLyhbXFx3XFwuLV0rKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENocm9taXVtL0Zsb2NrL1JvY2tNZWx0L01pZG9yaS9FcGlwaGFueS9TaWxrL1NreWZpcmUvQm9sdC9Jcm9uL0lyaWRpdW0vUGhhbnRvbUpTL0Jvd3Nlci9RdXBaaWxsYS9GYWxrb25cbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtvbnF1ZXJvclxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnS29ucXVlcm9yJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFMTFcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0lFJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oZWRnZXxlZGdpb3N8ZWRnYXxlZGcpXFwvKChcXGQrKT9bXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pY3Jvc29mdCBFZGdlXG4gICAgICAgICAgICBdLCBbW05BTUUsICdFZGdlJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWWFuZGV4XG4gICAgICAgICAgICBdLCBbW05BTUUsICdZYW5kZXgnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhBdmFzdClcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdmFzdCBTZWN1cmUgQnJvd3NlclxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnQXZhc3QgU2VjdXJlIEJyb3dzZXInXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhBVkcpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBVkcgU2VjdXJlIEJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0FWRyBTZWN1cmUgQnJvd3NlciddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHB1ZmZpbilcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1ZmZpblxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnUHVmZmluJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oZm9jdXMpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBGb2N1c1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnRmlyZWZveCBGb2N1cyddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKG9wdClcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIFRvdWNoXG4gICAgICAgICAgICBdLCBbW05BTUUsICdPcGVyYSBUb3VjaCddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKCg/OltcXHNcXC9dKXVjP1xccz9icm93c2VyfCg/Omp1Yy4rKXVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2kgICAgICAgICAvLyBVQ0Jyb3dzZXJcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1VDQnJvd3NlciddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW9kbyBEcmFnb25cbiAgICAgICAgICAgIF0sIFtbTkFNRSwgL18vZywgJyAnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyh3aW5kb3dzd2VjaGF0IHFiY29yZSlcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZUNoYXQgRGVza3RvcCBmb3IgV2luZG93cyBCdWlsdC1pbiBCcm93c2VyXG4gICAgICAgICAgICBdLCBbW05BTUUsICdXZUNoYXQoV2luKSBEZXNrdG9wJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8obWljcm9tZXNzZW5nZXIpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2VDaGF0XG4gICAgICAgICAgICBdLCBbW05BTUUsICdXZUNoYXQnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhicmF2ZSlcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCcmF2ZSBicm93c2VyXG4gICAgICAgICAgICBdLCBbW05BTUUsICdCcmF2ZSddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHFxYnJvd3NlcmxpdGUpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFFRQnJvd3NlckxpdGVcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKFFRKVxcLyhbXFxkXFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFFRLCBha2EgU2hvdVFcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvbT8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBRUUJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKGJhaWR1Ym94YXBwKVtcXC9cXHNdPyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCYWlkdSBBcHBcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKDIzNDVFeHBsb3JlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyMzQ1IEJyb3dzZXJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKE1ldGFTcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb3VHb3VCcm93c2VyXG4gICAgICAgICAgICBdLCBbTkFNRV0sIFtcblxuICAgICAgICAgICAgLyhMQkJST1dTRVIpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaWVCYW8gQnJvd3NlclxuICAgICAgICAgICAgXSwgW05BTUVdLCBbXG5cbiAgICAgICAgICAgIC94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1JVUkgQnJvd3NlclxuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnTUlVSSBCcm93c2VyJ11dLCBbXG5cbiAgICAgICAgICAgIC87ZmJhdlxcLyhbXFx3XFwuXSspOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFjZWJvb2sgQXBwIGZvciBpT1MgJiBBbmRyb2lkXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdGYWNlYm9vayddXSwgW1xuXG4gICAgICAgICAgICAvc2FmYXJpXFxzKGxpbmUpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaW5lIEFwcCBmb3IgaU9TXG4gICAgICAgICAgICAvYW5kcm9pZC4rKGxpbmUpXFwvKFtcXHdcXC5dKylcXC9pYWIvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaW5lIEFwcCBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC9oZWFkbGVzc2Nocm9tZSg/OlxcLyhbXFx3XFwuXSspfFxccykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENocm9tZSBIZWFkbGVzc1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnQ2hyb21lIEhlYWRsZXNzJ11dLCBbXG5cbiAgICAgICAgICAgIC9cXHN3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgV2ViVmlld1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAvKC4rKS8sICckMSBXZWJWaWV3J10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oKD86b2N1bHVzfHNhbXN1bmcpYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXG4gICAgICAgICAgICBdLCBbW05BTUUsIC8oLisoPzpnfHVzKSkoLispLywgJyQxICQyJ10sIFZFUlNJT05dLCBbICAgICAgICAgICAgICAgIC8vIE9jdWx1cyAvIFNhbXN1bmcgQnJvd3NlclxuXG4gICAgICAgICAgICAvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKSovaSAgICAgICAgLy8gQW5kcm9pZCBCcm93c2VyXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdBbmRyb2lkIEJyb3dzZXInXV0sIFtcblxuICAgICAgICAgICAgLyhzYWlsZmlzaGJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWlsZmlzaCBCcm93c2VyXG4gICAgICAgICAgICBdLCBbW05BTUUsICdTYWlsZmlzaCBCcm93c2VyJ10sIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUvT21uaVdlYi9Bcm9yYS9UaXplbi9Ob2tpYVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9scGhpblxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnRG9scGhpbiddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvKHFpaHV8cWhicm93c2VyfHFpaG9vYnJvd3NlcnwzNjBicm93c2VyKS9pICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDM2MFxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnMzYwIEJyb3dzZXInXV0sIFtcblxuICAgICAgICAgICAgLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUgZm9yIEFuZHJvaWQvaU9TXG4gICAgICAgICAgICBdLCBbW05BTUUsICdDaHJvbWUnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLyhjb2FzdClcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSBDb2FzdFxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnT3BlcmEgQ29hc3QnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGZvciBpT1NcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0ZpcmVmb3gnXV0sIFtcblxuICAgICAgICAgICAgL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pICAgICAgICAgICAgICAgICAgICAgICAvLyBNb2JpbGUgU2FmYXJpXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgW05BTUUsICdNb2JpbGUgU2FmYXJpJ11dLCBbXG5cbiAgICAgICAgICAgIC92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2kgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSAmIFNhZmFyaSBNb2JpbGVcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBOQU1FXSwgW1xuXG4gICAgICAgICAgICAvd2Via2l0Lis/KGdzYSlcXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pICAvLyBHb29nbGUgU2VhcmNoIEFwcGxpYW5jZSBvbiBpT1NcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0dTQSddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPCAzLjBcbiAgICAgICAgICAgIF0sIFtOQU1FLCBbVkVSU0lPTiwgbWFwcGVyLnN0ciwgbWFwcy5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sIFtcblxuICAgICAgICAgICAgLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8vIEdlY2tvIGJhc2VkXG4gICAgICAgICAgICAvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldHNjYXBlXG4gICAgICAgICAgICBdLCBbW05BTUUsICdOZXRzY2FwZSddLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgLyhzd2lmdGZveCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTd2lmdGZveFxuICAgICAgICAgICAgLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEljZURyYWdvbi9JY2V3ZWFzZWwvQ2FtaW5vL0NoaW1lcmEvRmVubmVjL01hZW1vL01pbmltby9Db25rZXJvclxuICAgICAgICAgICAgLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXh8cGFsZW1vb258YmFzaWxpc2t8d2F0ZXJmb3gpXFwvKFtcXHdcXC4tXSspJC9pLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3gvU2VhTW9ua2V5L0stTWVsZW9uL0ljZUNhdC9JY2VBcGUvRmlyZWJpcmQvUGhvZW5peFxuICAgICAgICAgICAgLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ppbGxhXG5cbiAgICAgICAgICAgIC8vIE90aGVyXG4gICAgICAgICAgICAvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvbGFyaXMvTHlueC9EaWxsby9pQ2FiL0RvcmlzL0FtYXlhL3czbS9OZXRTdXJmL1NsZWlwbmlyXG4gICAgICAgICAgICAvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMaW5rc1xuICAgICAgICAgICAgLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb0Jyb3dzZXJcbiAgICAgICAgICAgIC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElDRSBCcm93c2VyXG4gICAgICAgICAgICAvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3NhaWNcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXVxuICAgICAgICBdLFxuXG4gICAgICAgIGNwdSA6IFtbXG5cbiAgICAgICAgICAgIC8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaSAgICAgICAgICAgICAgICAgICAgIC8vIEFNRDY0XG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2FtZDY0J11dLCBbXG5cbiAgICAgICAgICAgIC8oaWEzMig/PTspKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUEzMiAocXVpY2t0aW1lKVxuICAgICAgICAgICAgXSwgW1tBUkNISVRFQ1RVUkUsIHV0aWwubG93ZXJpemVdXSwgW1xuXG4gICAgICAgICAgICAvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTMyXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2lhMzInXV0sIFtcblxuICAgICAgICAgICAgLy8gUG9ja2V0UEMgbWlzdGFrZW5seSBpZGVudGlmaWVkIGFzIFBvd2VyUENcbiAgICAgICAgICAgIC93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXG4gICAgICAgICAgICBdLCBbW0FSQ0hJVEVDVFVSRSwgJ2FybSddXSwgW1xuXG4gICAgICAgICAgICAvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUG93ZXJQQ1xuICAgICAgICAgICAgXSwgW1tBUkNISVRFQ1RVUkUsIC9vd2VyLywgJycsIHV0aWwubG93ZXJpemVdXSwgW1xuXG4gICAgICAgICAgICAvKHN1bjRcXHcpWztcXCldL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1BBUkNcbiAgICAgICAgICAgIF0sIFtbQVJDSElURUNUVVJFLCAnc3BhcmMnXV0sIFtcblxuICAgICAgICAgICAgLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCtbO2xdKSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJQTY0LCA2OEssIEFSTS82NCwgQVZSLzMyLCBJUklYLzY0LCBNSVBTLzY0LCBTUEFSQy82NCwgUEEtUklTQ1xuICAgICAgICAgICAgXSwgW1tBUkNISVRFQ1RVUkUsIHV0aWwubG93ZXJpemVdXVxuICAgICAgICBdLFxuXG4gICAgICAgIGRldmljZSA6IFtbXG5cbiAgICAgICAgICAgIC9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKSw7LV0rKHJpbXxhcHBsZSkvaSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlQYWQvUGxheUJvb2tcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgVkVORE9SLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaVBhZFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnQXBwbGUnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oYXBwbGVcXHN7MCwxfXR2KS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcGxlIFRWXG4gICAgICAgICAgICBdLCBbW01PREVMLCAnQXBwbGUgVFYnXSwgW1ZFTkRPUiwgJ0FwcGxlJ10sIFtUWVBFLCBTTUFSVFRWXV0sIFtcblxuICAgICAgICAgICAgLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJjaG9zXG4gICAgICAgICAgICAvKGhwKS4rKHRvdWNocGFkKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICAvKGhwKS4rKHRhYmxldCkvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhQIFRhYmxldFxuICAgICAgICAgICAgLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLaW5kbGVcbiAgICAgICAgICAgIC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb29rXG4gICAgICAgICAgICAvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxsIFN0cmVha1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvKGtmW0Etel0rKVxcc2J1aWxkXFwvLitzaWxrXFwvL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtpbmRsZSBGaXJlIEhEXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcLy4rc2lsa1xcLy9pICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgUGhvbmVcbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLmFtYXpvbi5tb2RlbF0sIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvYW5kcm9pZC4rYWZ0KFtibXNdKVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIFRWXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBbWF6b24nXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuXG4gICAgICAgICAgICAvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlQb2QvaVBob25lXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFZFTkRPUiwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlQb2QvaVBob25lXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBcHBsZSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJsYWNrQmVycnlcbiAgICAgICAgICAgIC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0qKS9pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCZW5RL1BhbG0vU29ueS1Fcmljc3Nvbi9BY2VyL0FzdXMvRGVsbC9NZWl6dS9Nb3Rvcm9sYS9Qb2x5dHJvblxuICAgICAgICAgICAgLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSFAgaVBBUVxuICAgICAgICAgICAgLyhhc3VzKS0/KFxcdyspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXN1c1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL1xcKGJiMTA7XFxzKFxcdyspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCbGFja0JlcnJ5IDEwXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdCbGFja0JlcnJ5J10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3VzIFRhYmxldHNcbiAgICAgICAgICAgIC9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgN3xwYWRmb25lfHAwMGMpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0FzdXMnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb255XG4gICAgICAgICAgICAvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2lcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnU29ueSddLCBbTU9ERUwsICdYcGVyaWEgVGFibGV0J10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL2FuZHJvaWQuK1xccyhbYy1nXVxcZHs0fXxzb1stbF1cXHcrKSg/PVxcc2J1aWxkXFwvfFxcKS4rY2hyb21lXFwvKD8hWzEtNl17MCwxfVxcZFxcLikpL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1NvbnknXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9cXHMob3V5YSlcXHMvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdXlhXG4gICAgICAgICAgICAvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOaW50ZW5kb1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBDT05TT0xFXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE52aWRpYVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTnZpZGlhJ10sIFtUWVBFLCBDT05TT0xFXV0sIFtcblxuICAgICAgICAgICAgLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheXN0YXRpb25cbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1NvbnknXSwgW1RZUEUsIENPTlNPTEVdXSwgW1xuXG4gICAgICAgICAgICAvKHNwcmludFxccyhcXHcrKSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3ByaW50IFBob25lc1xuICAgICAgICAgICAgXSwgW1tWRU5ET1IsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLnNwcmludC52ZW5kb3JdLCBbTU9ERUwsIG1hcHBlci5zdHIsIG1hcHMuZGV2aWNlLnNwcmludC5tb2RlbF0sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpfFxcc2J1aWxkKXxcXHcrKS9pLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhUQ1xuICAgICAgICAgICAgLyh6dGUpLShcXHcqKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWlRFXG4gICAgICAgICAgICAvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0qKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsY2F0ZWwvR2Vla3NQaG9uZS9OZXhpYW4vUGFuYXNvbmljL1NvbnlcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIFtNT0RFTCwgL18vZywgJyAnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC8obmV4dXNcXHM5KS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhUQyBOZXh1cyA5XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdIVEMnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9kXFwvaHVhd2VpKFtcXHdcXHMtXSspWztcXCldL2ksXG4gICAgICAgICAgICAvKG5leHVzXFxzNnB8dm9nLWwyOXxhbmUtbHgxfGVtbC1sMjkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIdWF3ZWlcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0h1YXdlaSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKyhiYWgyPy1hP1tsd11cXGR7Mn0pL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSHVhd2VpIE1lZGlhUGFkXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdIdWF3ZWknXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWljcm9zb2Z0IEx1bWlhXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaWNyb3NvZnQgWGJveFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTWljcm9zb2Z0J10sIFtUWVBFLCBDT05TT0xFXV0sIFtcbiAgICAgICAgICAgIC8oa2luXFwuW29uZXR3XXszfSkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pY3Jvc29mdCBLaW5cbiAgICAgICAgICAgIF0sIFtbTU9ERUwsIC9cXC4vZywgJyAnXSwgW1ZFTkRPUiwgJ01pY3Jvc29mdCddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3Rvcm9sYVxuICAgICAgICAgICAgL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/Oj8oXFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLFxuICAgICAgICAgICAgL21vdFtcXHMtXT8oXFx3KikvaSxcbiAgICAgICAgICAgIC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaSxcbiAgICAgICAgICAgIC8obmV4dXNcXHM2KS9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdNb3Rvcm9sYSddLCBbVFlQRSwgTU9CSUxFXV0sIFtcbiAgICAgICAgICAgIC9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTW90b3JvbGEnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pICAgICAgICAgICAgLy8gSGJiVFYgZGV2aWNlc1xuICAgICAgICAgICAgXSwgW1tWRU5ET1IsIHV0aWwudHJpbV0sIFtNT0RFTCwgdXRpbC50cmltXSwgW1RZUEUsIFNNQVJUVFZdXSwgW1xuXG4gICAgICAgICAgICAvaGJidHYuK21hcGxlOyhcXGQrKS9pXG4gICAgICAgICAgICBdLCBbW01PREVMLCAvXi8sICdTbWFydFRWJ10sIFtWRU5ET1IsICdTYW1zdW5nJ10sIFtUWVBFLCBTTUFSVFRWXV0sIFtcblxuICAgICAgICAgICAgL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNoYXJwXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdTaGFycCddLCBbVFlQRSwgU01BUlRUVl1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLFxuICAgICAgICAgICAgLygoU00tVFxcdyspKS9pXG4gICAgICAgICAgICBdLCBbW1ZFTkRPUiwgJ1NhbXN1bmcnXSwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgWyAgICAgICAgICAgICAgICAgIC8vIFNhbXN1bmdcbiAgICAgICAgICAgIC9zbWFydC10di4rKHNhbXN1bmcpL2lcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIFtUWVBFLCBTTUFSVFRWXSwgTU9ERUxdLCBbXG4gICAgICAgICAgICAvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1cXHdbXFx3XFxkXSspKS9pLFxuICAgICAgICAgICAgLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikvaSxcbiAgICAgICAgICAgIC9zZWMtKChzZ2hcXHcrKSkvaVxuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdTYW1zdW5nJ10sIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgL3NpZS0oXFx3KikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2llbWVuc1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU2llbWVucyddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5va2lhXG4gICAgICAgICAgICAvKG5va2lhKVtcXHNfLV0/KFtcXHctXSopL2lcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnTm9raWEnXSwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZFt4XFxkXFwuXFxzO10rXFxzKFthYl1bMS03XVxcLT9bMDE3OGFdXFxkXFxkPykvaSAgICAgICAgICAgICAgICAgICAvLyBBY2VyXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdBY2VyJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rKFt2bF1rXFwtP1xcZHszfSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExHIFRhYmxldFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTEcnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG4gICAgICAgICAgICAvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2kgICAgICAgICAgICAgICAgICAgICAvLyBMRyBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnTEcnXSwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgLyhsZykgbmV0Y2FzdFxcLnR2L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEcgU21hcnRUVlxuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBTTUFSVFRWXV0sIFtcbiAgICAgICAgICAgIC8obmV4dXNcXHNbNDVdKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExHXG4gICAgICAgICAgICAvbGdbZTtcXHNcXC8tXSsoXFx3KikvaSxcbiAgICAgICAgICAgIC9hbmRyb2lkLitsZyhcXC0/W1xcZFxcd10rKVxccytidWlsZC9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdMRyddLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgLyhsZW5vdm8pXFxzPyhzKD86NTAwMHw2MDAwKSg/OltcXHctXSspfHRhYig/OltcXHNcXHddKykpL2kgICAgICAgICAgICAgLy8gTGVub3ZvIHRhYmxldHNcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMZW5vdm9cbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0xlbm92byddLCBbVFlQRSwgVEFCTEVUXV0sIFtcbiAgICAgICAgICAgIC8obGVub3ZvKVtfXFxzLV0/KFtcXHctXSspL2lcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFtcblxuICAgICAgICAgICAgL2xpbnV4Oy4rKChqb2xsYSkpOy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKb2xsYVxuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQZWJibGVcbiAgICAgICAgICAgIF0sIFtWRU5ET1IsIE1PREVMLCBbVFlQRSwgV0VBUkFCTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhvcHBvKVxccz8oW1xcd1xcc10rKVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT1BQT1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvY3JrZXkvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdvb2dsZSBDaHJvbWVjYXN0XG4gICAgICAgICAgICBdLCBbW01PREVMLCAnQ2hyb21lY2FzdCddLCBbVkVORE9SLCAnR29vZ2xlJ10sIFtUWVBFLCBTTUFSVFRWXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgR2xhc3NcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0dvb2dsZSddLCBbVFlQRSwgV0VBUkFCTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhwaXhlbCBjKVtcXHMpXS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR29vZ2xlIFBpeGVsIENcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0dvb2dsZSddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMocGl4ZWwoIFsyM10pPyggeGwpPylbXFxzKV0vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdvb2dsZSBQaXhlbFxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnR29vZ2xlJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWGlhb21pIEhvbmdtaSAnbnVtZXJpYycgbW9kZWxzXG4gICAgICAgICAgICAvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLCAgICAgICAgICAgICAgIC8vIFhpYW9taSBIb25nbWlcbiAgICAgICAgICAgIC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86YVxcZHxvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZD9cXHc/KVtcXHNfXSooPzpwbHVzKT8pXFxzK2J1aWxkL2ksICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBYaWFvbWkgTWlcbiAgICAgICAgICAgIC9hbmRyb2lkLisocmVkbWlbXFxzXFwtX10qKD86bm90ZSk/KD86W1xcc19dKltcXHdcXHNdKykpXFxzK2J1aWxkL2kgICAgICAgLy8gUmVkbWkgUGhvbmVzXG4gICAgICAgICAgICBdLCBbW01PREVMLCAvXy9nLCAnICddLCBbVkVORE9SLCAnWGlhb21pJ10sIFtUWVBFLCBNT0JJTEVdXSwgW1xuICAgICAgICAgICAgL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpwYWQpKD86W1xcc19dKltcXHdcXHNdKykpXFxzK2J1aWxkL2kgICAgICAgICAgICAvLyBNaSBQYWQgdGFibGV0c1xuICAgICAgICAgICAgXSxbW01PREVMLCAvXy9nLCAnICddLCBbVkVORE9SLCAnWGlhb21pJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMobVsxLTVdXFxzbm90ZSlcXHNidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZWl6dVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTWVpenUnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG4gICAgICAgICAgICAvKG16KS0oW1xcdy1dezIsfSkvaVxuICAgICAgICAgICAgXSwgW1tWRU5ET1IsICdNZWl6dSddLCBNT0RFTCwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uZVBsdXNcbiAgICAgICAgICAgIC9hbmRyb2lkLitvbmVwbHVzXFxzKGFcXGR7NH0pW1xccyldL2lcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ09uZVBsdXMnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKFJDVFtcXGRcXHddKylcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSQ0EgVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnUkNBJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9cXHNdKyhWZW51ZVtcXGRcXHNdezIsN30pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsbCBWZW51ZSBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdEZWxsJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihRW1R8TV1bXFxkXFx3XSspXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmVyaXpvbiBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1Zlcml6b24nXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMrKEJhcm5lc1smXFxzXStOb2JsZVxccyt8Qk5bUlRdKShWPy4qKVxccytidWlsZC9pICAgICAvLyBCYXJuZXMgJiBOb2JsZSBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnQmFybmVzICYgTm9ibGUnXSwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKyhUTVxcZHszfS4qXFxiKVxccytidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmFybmVzICYgTm9ibGUgVGFibGV0XG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdOdVZpc2lvbiddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKztcXHMoazg4KVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFpURSBLIFNlcmllcyBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1pURSddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooZ2VuXFxkezN9KVxccytidWlsZC4qNDloL2kgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3dpc3MgR0VOIE1vYmlsZVxuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnU3dpc3MnXSwgW1RZUEUsIE1PQklMRV1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKHp1clxcZHszfSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN3aXNzIFpVUiBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1N3aXNzJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKigoWmVraSk/VEIuKlxcYilcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBaZWtpIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1pla2knXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC8oYW5kcm9pZCkuK1s7XFwvXVxccysoW1lSXVxcZHsyfSlcXHMrYnVpbGQvaSxcbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMrKERyYWdvbltcXC1cXHNdK1RvdWNoXFxzK3xEVCkoXFx3ezV9KVxcc2J1aWxkL2kgICAgICAgIC8vIERyYWdvbiBUb3VjaCBUYWJsZXRcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnRHJhZ29uIFRvdWNoJ10sIE1PREVMLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooTlMtP1xcd3swLDl9KVxcc2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zaWduaWEgVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnSW5zaWduaWEnXSwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKChOWHxOZXh0KS0/XFx3ezAsOX0pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgIC8vIE5leHRCb29rIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ05leHRCb29rJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihYdHJlbWVcXF8pPyhWKDFbMDQ1XXwyWzAxNV18MzB8NDB8NjB8N1swNV18OTApKVxccytidWlsZC9pXG4gICAgICAgICAgICBdLCBbW1ZFTkRPUiwgJ1ZvaWNlJ10sIE1PREVMLCBbVFlQRSwgTU9CSUxFXV0sIFsgICAgICAgICAgICAgICAgICAgIC8vIFZvaWNlIFh0cmVtZSBQaG9uZXNcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooTFZURUxcXC0pPyhWMVsxMl0pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAvLyBMdlRlbCBQaG9uZXNcbiAgICAgICAgICAgIF0sIFtbVkVORE9SLCAnTHZUZWwnXSwgTU9ERUwsIFtUWVBFLCBNT0JJTEVdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rO1xccyhQSC0xKVxccy9pXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdFc3NlbnRpYWwnXSwgW1RZUEUsIE1PQklMRV1dLCBbICAgICAgICAgICAgICAgIC8vIEVzc2VudGlhbCBQSC0xXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKFYoMTAwTUR8NzAwTkF8NzAxMXw5MTdHKS4qXFxiKVxccytidWlsZC9pICAgICAgICAgIC8vIEVudml6ZW4gVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnRW52aXplbiddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuK1s7XFwvXVxccyooTGVbXFxzXFwtXStQYW4pW1xcc1xcLV0rKFxcd3sxLDl9KVxccytidWlsZC9pICAgICAgICAgIC8vIExlIFBhbiBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9hbmRyb2lkLitbO1xcL11cXHMqKFRyaW9bXFxzXFwtXSouKilcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWNoU3BlZWQgVGFibGV0c1xuICAgICAgICAgICAgXSwgW01PREVMLCBbVkVORE9SLCAnTWFjaFNwZWVkJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKihUcmluaXR5KVtcXC1cXHNdKihUXFxkezN9KVxccytidWlsZC9pICAgICAgICAgICAgICAgIC8vIFRyaW5pdHkgVGFibGV0c1xuICAgICAgICAgICAgXSwgW1ZFTkRPUiwgTU9ERUwsIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rWztcXC9dXFxzKlRVXygxNDkxKVxccytidWlsZC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvdG9yIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ1JvdG9yJ10sIFtUWVBFLCBUQUJMRVRdXSwgW1xuXG4gICAgICAgICAgICAvYW5kcm9pZC4rKEtTKC4rKSlcXHMrYnVpbGQvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbWF6b24gS2luZGxlIFRhYmxldHNcbiAgICAgICAgICAgIF0sIFtNT0RFTCwgW1ZFTkRPUiwgJ0FtYXpvbiddLCBbVFlQRSwgVEFCTEVUXV0sIFtcblxuICAgICAgICAgICAgL2FuZHJvaWQuKyhHaWdhc2V0KVtcXHNcXC1dKyhRXFx3ezEsOX0pXFxzK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgLy8gR2lnYXNldCBUYWJsZXRzXG4gICAgICAgICAgICBdLCBbVkVORE9SLCBNT0RFTCwgW1RZUEUsIFRBQkxFVF1dLCBbXG5cbiAgICAgICAgICAgIC9cXHModGFibGV0fHRhYilbO1xcL10vaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmlkZW50aWZpYWJsZSBUYWJsZXRcbiAgICAgICAgICAgIC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5pZGVudGlmaWFibGUgTW9iaWxlXG4gICAgICAgICAgICBdLCBbW1RZUEUsIHV0aWwubG93ZXJpemVdLCBWRU5ET1IsIE1PREVMXSwgW1xuXG4gICAgICAgICAgICAvW1xcc1xcL1xcKF0oc21hcnQtP3R2KVs7XFwpXS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTbWFydFRWXG4gICAgICAgICAgICBdLCBbW1RZUEUsIFNNQVJUVFZdXSwgW1xuXG4gICAgICAgICAgICAvKGFuZHJvaWRbXFx3XFwuXFxzXFwtXXswLDl9KTsuK2J1aWxkL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmljIEFuZHJvaWQgRGV2aWNlXG4gICAgICAgICAgICBdLCBbTU9ERUwsIFtWRU5ET1IsICdHZW5lcmljJ11dXG4gICAgICAgIF0sXG5cbiAgICAgICAgZW5naW5lIDogW1tcblxuICAgICAgICAgICAgL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWRnZUhUTUxcbiAgICAgICAgICAgIF0sIFtWRVJTSU9OLCBbTkFNRSwgJ0VkZ2VIVE1MJ11dLCBbXG5cbiAgICAgICAgICAgIC93ZWJraXRcXC81MzdcXC4zNi4rY2hyb21lXFwvKD8hMjcpKFtcXHdcXC5dKykvaSAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCbGlua1xuICAgICAgICAgICAgXSwgW1ZFUlNJT04sIFtOQU1FLCAnQmxpbmsnXV0sIFtcblxuICAgICAgICAgICAgLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmVzdG9cbiAgICAgICAgICAgIC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbXxnb2FubmEpXFwvKFtcXHdcXC5dKykvaSwgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZWJLaXQvVHJpZGVudC9OZXRGcm9udC9OZXRTdXJmL0FtYXlhL0x5bngvdzNtL0dvYW5uYVxuICAgICAgICAgICAgLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEtIVE1ML1Rhc21hbi9MaW5rc1xuICAgICAgICAgICAgLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlDYWJcbiAgICAgICAgICAgIF0sIFtOQU1FLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvcnZcXDooW1xcd1xcLl17MSw5fSkuKyhnZWNrbykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlY2tvXG4gICAgICAgICAgICBdLCBbVkVSU0lPTiwgTkFNRV1cbiAgICAgICAgXSxcblxuICAgICAgICBvcyA6IFtbXG5cbiAgICAgICAgICAgIC8vIFdpbmRvd3MgYmFzZWRcbiAgICAgICAgICAgIC9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaW5kb3dzIChpVHVuZXMpXG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sIFtcbiAgICAgICAgICAgIC8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgUlRcbiAgICAgICAgICAgIC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKilbXFxzXFwvXT8oW1xcZFxcLlxcc1xcd10qKS9pLCAgICAgICAgICAgICAgICAgICAvLyBXaW5kb3dzIFBob25lXG4gICAgICAgICAgICAvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaVxuICAgICAgICAgICAgXSwgW05BTUUsIFtWRVJTSU9OLCBtYXBwZXIuc3RyLCBtYXBzLm9zLndpbmRvd3MudmVyc2lvbl1dLCBbXG4gICAgICAgICAgICAvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2lcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ1dpbmRvd3MnXSwgW1ZFUlNJT04sIG1hcHBlci5zdHIsIG1hcHMub3Mud2luZG93cy52ZXJzaW9uXV0sIFtcblxuICAgICAgICAgICAgLy8gTW9iaWxlL0VtYmVkZGVkIE9TXG4gICAgICAgICAgICAvXFwoKGJiKSgxMCk7L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCbGFja0JlcnJ5IDEwXG4gICAgICAgICAgICBdLCBbW05BTUUsICdCbGFja0JlcnJ5J10sIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0qKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCbGFja2JlcnJ5XG4gICAgICAgICAgICAvKHRpemVufGthaW9zKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaXplbi9LYWlPU1xuICAgICAgICAgICAgLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xzYWlsZmlzaHxjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0qKS9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFuZHJvaWQvV2ViT1MvUGFsbS9RTlgvQmFkYS9SSU0vTWVlR28vQ29udGlraS9TYWlsZmlzaCBPU1xuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG4gICAgICAgICAgICAvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0qKS9pICAgICAgICAgICAgICAgICAgLy8gU3ltYmlhblxuICAgICAgICAgICAgXSwgW1tOQU1FLCAnU3ltYmlhbiddLCBWRVJTSU9OXSwgW1xuICAgICAgICAgICAgL1xcKChzZXJpZXM0MCk7L2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VyaWVzIDQwXG4gICAgICAgICAgICBdLCBbTkFNRV0sIFtcbiAgICAgICAgICAgIC9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggT1NcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0ZpcmVmb3ggT1MnXSwgVkVSU0lPTl0sIFtcblxuICAgICAgICAgICAgLy8gQ29uc29sZVxuICAgICAgICAgICAgLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzNHBvcnRhYmxldnVdKykvaSwgICAgICAgICAgICAgICAgICAgLy8gTmludGVuZG8vUGxheXN0YXRpb25cblxuICAgICAgICAgICAgLy8gR05VL0xpbnV4IGJhc2VkXG4gICAgICAgICAgICAvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyopL2ksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaW50XG4gICAgICAgICAgICAvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWdlaWEvVmVjdG9yTGludXhcbiAgICAgICAgICAgIC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxzdXNlfG9wZW5zdXNlfGdlbnRvb3woPz1cXHMpYXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oPyFjaHJvbSkoW1xcd1xcLi1dKikvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSm9saS9VYnVudHUvRGViaWFuL1NVU0UvR2VudG9vL0FyY2gvU2xhY2t3YXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZlZG9yYS9NYW5kcml2YS9DZW50T1MvUENMaW51eE9TL1JlZEhhdC9aZW53YWxrL0xpbnB1c1xuICAgICAgICAgICAgLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0qKS9pLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIdXJkL0xpbnV4XG4gICAgICAgICAgICAvKGdudSlcXHM/KFtcXHdcXC5dKikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdOVVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLCBbXG5cbiAgICAgICAgICAgIC8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hyb21pdW0gT1NcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ0Nocm9taXVtIE9TJ10sIFZFUlNJT05dLFtcblxuICAgICAgICAgICAgLy8gU29sYXJpc1xuICAgICAgICAgICAgLyhzdW5vcylcXHM/KFtcXHdcXC5cXGRdKikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29sYXJpc1xuICAgICAgICAgICAgXSwgW1tOQU1FLCAnU29sYXJpcyddLCBWRVJTSU9OXSwgW1xuXG4gICAgICAgICAgICAvLyBCU0QgYmFzZWRcbiAgICAgICAgICAgIC9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSopL2kgICAgICAgICAgICAgICAgICAgIC8vIEZyZWVCU0QvTmV0QlNEL09wZW5CU0QvUEMtQlNEL0RyYWdvbkZseVxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dLFtcblxuICAgICAgICAgICAgLyhoYWlrdSlcXHMoXFx3KykvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhaWt1XG4gICAgICAgICAgICBdLCBbTkFNRSwgVkVSU0lPTl0sW1xuXG4gICAgICAgICAgICAvY2ZuZXR3b3JrXFwvLitkYXJ3aW4vaSxcbiAgICAgICAgICAgIC9pcFtob25lYWRdezIsNH0oPzouKm9zXFxzKFtcXHddKylcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaSAgICAgICAgICAgICAvLyBpT1NcbiAgICAgICAgICAgIF0sIFtbVkVSU0lPTiwgL18vZywgJy4nXSwgW05BTUUsICdpT1MnXV0sIFtcblxuICAgICAgICAgICAgLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXSopL2ksXG4gICAgICAgICAgICAvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWMgT1NcbiAgICAgICAgICAgIF0sIFtbTkFNRSwgJ01hYyBPUyddLCBbVkVSU0lPTiwgL18vZywgJy4nXV0sIFtcblxuICAgICAgICAgICAgLy8gT3RoZXJcbiAgICAgICAgICAgIC8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKikvaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbGFyaXNcbiAgICAgICAgICAgIC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKSovaSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFJWFxuICAgICAgICAgICAgLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXN8ZnVjaHNpYSkvaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhbjkvTWluaXgvQmVPUy9PUzIvQW1pZ2FPUy9Nb3JwaE9TL1JJU0NPUy9PcGVuVk1TL0Z1Y2hzaWFcbiAgICAgICAgICAgIC8odW5peClcXHM/KFtcXHdcXC5dKikvaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVU5JWFxuICAgICAgICAgICAgXSwgW05BTUUsIFZFUlNJT05dXG4gICAgICAgIF1cbiAgICB9O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgLy8vLy8vLy8vLy8vLy8vL1xuICAgIHZhciBVQVBhcnNlciA9IGZ1bmN0aW9uICh1YXN0cmluZywgZXh0ZW5zaW9ucykge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdWFzdHJpbmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBleHRlbnNpb25zID0gdWFzdHJpbmc7XG4gICAgICAgICAgICB1YXN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVQVBhcnNlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVUFQYXJzZXIodWFzdHJpbmcsIGV4dGVuc2lvbnMpLmdldFJlc3VsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVhID0gdWFzdHJpbmcgfHwgKCh3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCA6IEVNUFRZKTtcbiAgICAgICAgdmFyIHJneG1hcCA9IGV4dGVuc2lvbnMgPyB1dGlsLmV4dGVuZChyZWdleGVzLCBleHRlbnNpb25zKSA6IHJlZ2V4ZXM7XG5cbiAgICAgICAgdGhpcy5nZXRCcm93c2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJyb3dzZXIgPSB7IG5hbWU6IHVuZGVmaW5lZCwgdmVyc2lvbjogdW5kZWZpbmVkIH07XG4gICAgICAgICAgICBtYXBwZXIucmd4LmNhbGwoYnJvd3NlciwgdWEsIHJneG1hcC5icm93c2VyKTtcbiAgICAgICAgICAgIGJyb3dzZXIubWFqb3IgPSB1dGlsLm1ham9yKGJyb3dzZXIudmVyc2lvbik7IC8vIGRlcHJlY2F0ZWRcbiAgICAgICAgICAgIHJldHVybiBicm93c2VyO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldENQVSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjcHUgPSB7IGFyY2hpdGVjdHVyZTogdW5kZWZpbmVkIH07XG4gICAgICAgICAgICBtYXBwZXIucmd4LmNhbGwoY3B1LCB1YSwgcmd4bWFwLmNwdSk7XG4gICAgICAgICAgICByZXR1cm4gY3B1O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldERldmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZXZpY2UgPSB7IHZlbmRvcjogdW5kZWZpbmVkLCBtb2RlbDogdW5kZWZpbmVkLCB0eXBlOiB1bmRlZmluZWQgfTtcbiAgICAgICAgICAgIG1hcHBlci5yZ3guY2FsbChkZXZpY2UsIHVhLCByZ3htYXAuZGV2aWNlKTtcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0RW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVuZ2luZSA9IHsgbmFtZTogdW5kZWZpbmVkLCB2ZXJzaW9uOiB1bmRlZmluZWQgfTtcbiAgICAgICAgICAgIG1hcHBlci5yZ3guY2FsbChlbmdpbmUsIHVhLCByZ3htYXAuZW5naW5lKTtcbiAgICAgICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0T1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3MgPSB7IG5hbWU6IHVuZGVmaW5lZCwgdmVyc2lvbjogdW5kZWZpbmVkIH07XG4gICAgICAgICAgICBtYXBwZXIucmd4LmNhbGwob3MsIHVhLCByZ3htYXAub3MpO1xuICAgICAgICAgICAgcmV0dXJuIG9zO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdWEgICAgICA6IHRoaXMuZ2V0VUEoKSxcbiAgICAgICAgICAgICAgICBicm93c2VyIDogdGhpcy5nZXRCcm93c2VyKCksXG4gICAgICAgICAgICAgICAgZW5naW5lICA6IHRoaXMuZ2V0RW5naW5lKCksXG4gICAgICAgICAgICAgICAgb3MgICAgICA6IHRoaXMuZ2V0T1MoKSxcbiAgICAgICAgICAgICAgICBkZXZpY2UgIDogdGhpcy5nZXREZXZpY2UoKSxcbiAgICAgICAgICAgICAgICBjcHUgICAgIDogdGhpcy5nZXRDUFUoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRVQSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB1YTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRVQSA9IGZ1bmN0aW9uICh1YXN0cmluZykge1xuICAgICAgICAgICAgdWEgPSB1YXN0cmluZztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVUFQYXJzZXIuVkVSU0lPTiA9IExJQlZFUlNJT047XG4gICAgVUFQYXJzZXIuQlJPV1NFUiA9IHtcbiAgICAgICAgTkFNRSAgICA6IE5BTUUsXG4gICAgICAgIE1BSk9SICAgOiBNQUpPUiwgLy8gZGVwcmVjYXRlZFxuICAgICAgICBWRVJTSU9OIDogVkVSU0lPTlxuICAgIH07XG4gICAgVUFQYXJzZXIuQ1BVID0ge1xuICAgICAgICBBUkNISVRFQ1RVUkUgOiBBUkNISVRFQ1RVUkVcbiAgICB9O1xuICAgIFVBUGFyc2VyLkRFVklDRSA9IHtcbiAgICAgICAgTU9ERUwgICA6IE1PREVMLFxuICAgICAgICBWRU5ET1IgIDogVkVORE9SLFxuICAgICAgICBUWVBFICAgIDogVFlQRSxcbiAgICAgICAgQ09OU09MRSA6IENPTlNPTEUsXG4gICAgICAgIE1PQklMRSAgOiBNT0JJTEUsXG4gICAgICAgIFNNQVJUVFYgOiBTTUFSVFRWLFxuICAgICAgICBUQUJMRVQgIDogVEFCTEVULFxuICAgICAgICBXRUFSQUJMRTogV0VBUkFCTEUsXG4gICAgICAgIEVNQkVEREVEOiBFTUJFRERFRFxuICAgIH07XG4gICAgVUFQYXJzZXIuRU5HSU5FID0ge1xuICAgICAgICBOQU1FICAgIDogTkFNRSxcbiAgICAgICAgVkVSU0lPTiA6IFZFUlNJT05cbiAgICB9O1xuICAgIFVBUGFyc2VyLk9TID0ge1xuICAgICAgICBOQU1FICAgIDogTkFNRSxcbiAgICAgICAgVkVSU0lPTiA6IFZFUlNJT05cbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy9cbiAgICAvLyBFeHBvcnRcbiAgICAvLy8vLy8vLy8vXG5cblxuICAgIC8vIGNoZWNrIGpzIGVudmlyb25tZW50XG4gICAgaWYgKHR5cGVvZihleHBvcnRzKSAhPT0gVU5ERUZfVFlQRSkge1xuICAgICAgICAvLyBub2RlanMgZW52XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBVTkRFRl9UWVBFICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBVQVBhcnNlcjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlVBUGFyc2VyID0gVUFQYXJzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVxdWlyZWpzIGVudiAob3B0aW9uYWwpXG4gICAgICAgIGlmICh0eXBlb2YoZGVmaW5lKSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVQVBhcnNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgLy8gYnJvd3NlciBlbnZcbiAgICAgICAgICAgIHdpbmRvdy5VQVBhcnNlciA9IFVBUGFyc2VyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8galF1ZXJ5L1plcHRvIHNwZWNpZmljIChvcHRpb25hbClcbiAgICAvLyBOb3RlOlxuICAgIC8vICAgSW4gQU1EIGVudiB0aGUgZ2xvYmFsIHNjb3BlIHNob3VsZCBiZSBrZXB0IGNsZWFuLCBidXQgalF1ZXJ5IGlzIGFuIGV4Y2VwdGlvbi5cbiAgICAvLyAgIGpRdWVyeSBhbHdheXMgZXhwb3J0cyB0byBnbG9iYWwgc2NvcGUsIHVubGVzcyBqUXVlcnkubm9Db25mbGljdCh0cnVlKSBpcyB1c2VkLFxuICAgIC8vICAgYW5kIHdlIHNob3VsZCBjYXRjaCB0aGF0LlxuICAgIHZhciAkID0gd2luZG93ICYmICh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7XG4gICAgaWYgKCQgJiYgISQudWEpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBVQVBhcnNlcigpO1xuICAgICAgICAkLnVhID0gcGFyc2VyLmdldFJlc3VsdCgpO1xuICAgICAgICAkLnVhLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZXIuZ2V0VUEoKTtcbiAgICAgICAgfTtcbiAgICAgICAgJC51YS5zZXQgPSBmdW5jdGlvbiAodWFzdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcnNlci5zZXRVQSh1YXN0cmluZyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VyLmdldFJlc3VsdCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkLnVhW3Byb3BdID0gcmVzdWx0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxufSkodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyB3aW5kb3cgOiB0aGlzKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogR2V0IHN0cmluZyBodG1sIHNlZ21lbnQgYWJvdXQgdGhlIG5vdCBzdXBwb3J0IHByb21wdC5cbiAqIEBwYXJhbSBjb250ZW50IFRoZSBwcm9tcHQgbWVzc2FnZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgaHRtbCBzZWdtZW50IHByb21wdCB0aGUgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb3RTdXBwb3J0UHJvbXB0SFRNTChjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYDxwIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJlZDtcIj4ke2NvbnRlbnR9PC9wPmA7XG59XG4iLCJpbXBvcnQgYXBwbHlCcm93c2VyVmVyc2lvbkNvbnRyb2wgZnJvbSAnLi9tb2R1bGUnO1xuXG5hcHBseUJyb3dzZXJWZXJzaW9uQ29udHJvbCgpO1xuIiwiaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuaW1wb3J0IHsgU1VQUE9SVEVEIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgUFJPTVBUX01FU1NBR0VTIGZyb20gJy4uLy4uL2NvbW1vbi9wcm9tcHQtbWVzc2FnZXMnO1xuaW1wb3J0IGdldE5vdFN1cHBvcnRQcm9tcHRIVE1MIGZyb20gJy4vaHRtbF90ZW1wbGF0ZXMnO1xuXG4vKipcbiAqIFVzZSB0aGUgdXNlciBhZ2VudCB0byBkZXRlY3QgdGhlIGJyb3dzZXIgaXMgd2hldGhlciBvciBub3QgaW4gc3VwcG9ydGVkIGJyb3dzZXIgbGlzdC5cbiAqIEByZXR1cm4gSWYgdGhlIGJyb3dzZXIgaXMgc3VwcG9ydGVkIHJldHVybiBgdHJ1ZWAgZWxzZSByZXR1cm4gYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdXBwb3J0ZWRCcm93c2VyKCk6IGJvb2xlYW4ge1xuICBjb25zdCBzdXBwb3J0ZWRPUzogc3RyaW5nW10gPSBTVVBQT1JURUQub3M7XG4gIGNvbnN0IHN1cHBvcnRlZEJyb3dzZXI6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBTVVBQT1JURUQuYnJvd3NlcjtcbiAgY29uc3QgdXNlckFnZW50ID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBVQVBhcnNlcih1c2VyQWdlbnQpO1xuICBjb25zdCB7IG5hbWU6IGJyb3dzZXJOYW1lLCBtYWpvcjogYnJvd3Nlck1ham9yVmVyc2lvbiB9ID0gcGFyc2VyLmdldEJyb3dzZXIoKTtcbiAgY29uc3QgeyBuYW1lOiBvc05hbWUgfSA9IHBhcnNlci5nZXRPUygpO1xuXG4gIGlmIChcbiAgICBzdXBwb3J0ZWRPUy5pbmNsdWRlcyhvc05hbWUpICYmXG4gICAgc3VwcG9ydGVkQnJvd3Nlci5oYXMoYnJvd3Nlck5hbWUpICYmXG4gICAgTnVtYmVyKGJyb3dzZXJNYWpvclZlcnNpb24pID49IE51bWJlcihzdXBwb3J0ZWRCcm93c2VyLmdldChicm93c2VyTmFtZSkpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogSGlkZSB0aGUgZW50aXJlIEhUTUwgZG9jdW1lbnQgYnkgc2V0IHRoZSBkaXNwbGF5IG9mIHJvb3Qgbm9kZSBpbnRvIFwibm9uZVwiLiAqL1xuZnVuY3Rpb24gaGlkZUhUTUxEb2N1bWVudCgpOiB2b2lkIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8qKiBTaG93IHRoZSBIVE1MIGRvY3VtZW50IGJ5IHNldCB0aGUgZGlzcGxheSBvZiByb290IG5vZGUgaW50byBlbXB0eS4gKi9cbmZ1bmN0aW9uIHNob3dIVE1MRG9jdW1lbnQoKTogdm9pZCB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG59XG5cbi8qKiBQcm9tcHQgdGhlIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZCBieSByZXBsYWNpbmcgdGhlIGJvZHkgaHRtbCB3aXRoIHByb21wdCBodG1sLiAqL1xuZnVuY3Rpb24gcHJvbXB0QnJvd3NlcklzTm90U3VwcG9ydGVkKCk6IHZvaWQge1xuICBjb25zdCBwcm9tcHRNZXNzYWdlOiBzdHJpbmcgPSBQUk9NUFRfTUVTU0FHRVMuaXNOb3RTdXBwb3J0ZWRCcm93c2VyO1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGdldE5vdFN1cHBvcnRQcm9tcHRIVE1MKHByb21wdE1lc3NhZ2UpO1xuICBzaG93SFRNTERvY3VtZW50KCk7XG59XG5cbi8qKlxuICogQXBwZW5kIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB3aW5kb3cncyBsb2FkIGV2ZW50LlxuICogQHBhcmFtIGxpc3RlbmVyIFRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFjay5cbiAqIEBkZXNjcmlwdGlvbiBUbyBjb21wYXQgd2l0aCBJRSB2ZXJzaW9ucyBiZWZvcmUgSUU5LCB1c2luZyBgd2luZG93LmF0dGFjaEV2ZW50YFxuICogaWYgdGhlcmUgaXMgbm8gYHdpbmRvdy5hZGRFdmVudExpc3RlbmVyYC5cbiAqL1xuZnVuY3Rpb24gYWRkTG9hZEV2ZW50TGlzdGVuZXJGb3JXaW5kb3cobGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lcik7XG4gIH0gZWxzZSBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBicm93c2VyIHZlcnNpb24gY29udHJvbC5cbiAqIEBkZXNjcmlwdGlvbiBJZiB0aGUgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkLCB3ZSB3aWxsIGhpZGUgdGhlIGh0bWwgZmlyc3QsXG4gKiBhbmQgcmVwbGFjZSB0aGUgaHRtbCB3aXRoIHByb21wdCBtZXNzYWdlIGFmdGVyIHRoZSBwYWdlIGxvYWRlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlCcm93c2VyVmVyc2lvbkNvbnRyb2woKTogdm9pZCB7XG4gIGlmICghaXNTdXBwb3J0ZWRCcm93c2VyKCkpIHtcbiAgICB3aW5kb3cuaXNTdXBwb3J0ZWRCcm93c2VyID0gZmFsc2U7XG4gICAgaGlkZUhUTUxEb2N1bWVudCgpO1xuICAgIGFkZExvYWRFdmVudExpc3RlbmVyRm9yV2luZG93KHByb21wdEJyb3dzZXJJc05vdFN1cHBvcnRlZCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmlzU3VwcG9ydGVkQnJvd3NlciA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhY2hpbmdDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IFJFU09VUkNFX1RZUEUgPSAnc3BvbGUnO1xuZXhwb3J0IGNvbnN0IE9CTElHQVRJT05fTkFNRV9GT1JfRklMVEVSID0gJ0ZpbHRlckJ5Q29sdW1uJztcblxuZXhwb3J0IGNvbnN0IENBQ0hJTkdfQ09ORklHOiBDYWNoaW5nQ29uZmlndXJhdGlvbiA9IHtcbiAgY2FjaGluZ1N0b3JlOiAnc2Vzc2lvbicsXG4gIGNhY2hpbmdUaW1lb3V0U2Vjb25kczogMTgwLFxufTtcblxuZXhwb3J0IGNvbnN0IFBST01QVF9NRVNTQUdFX0NMQVNTX05BTUUgPSB7XG4gIG1lc3NhZ2U6ICdueGwtbWVzc2FnZScsXG4gIHJvdzogJ254bC1jb250cm9sLXJvdycsXG4gIGVycm9yOiAnbnhsLWVycm9yJyxcbiAgaGlkZTogJ254bC1oaWRlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQUk9NUFRfTUVTU0FHRV9JRCA9IHtcbiAgZXhwQ2hhbmdlV2FybmluZzogJ254bC1leHAtd2FybmluZycsXG59O1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEID0ge1xuICBvczogWydXaW5kb3dzJywgJ01hYyBPUyddLFxuICBicm93c2VyOiBuZXcgTWFwKFtcbiAgICBbJ0VkZ2UnLCA4MF0sXG4gICAgWydDaHJvbWUnLCA0OV0sXG4gICAgWydGaXJlZm94JywgNTJdLFxuICBdKSxcbn07XG5cbmV4cG9ydCBjb25zdCBTVE9QX0xPRyA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgTElTVF9BRFZBTkNFRF9TRVRUSU5HU19TRVJWRVJfUkVRVUVTVF9QQVRIID0gJy9fbGF5b3V0cy8xNS9hZHZzZXRuZy5hc3B4JztcbiIsImNvbnN0IFBST01QVF9NRVNTQUdFUyA9IHtcbiAgaXNOb3RTdXBwb3J0ZWRCcm93c2VyOiAnWW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQuJyxcbiAgd2FpdGluZzogJ0NoZWNraW5nIGFjY2VzcyBwb2xpY2llcycsXG4gIGRlbnk6XG4gICAgJ1lvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgcmlnaHRzIGZvciB0aGlzIGFjdGlvbi4gQ29udGFjdCB5b3VyIFNoYXJlUG9pbnQgYWRtaW5pc3RyYXRvciBpZiB5b3Ugc2hvdWxkIGhhdmUgYWNjZXNzLicsXG4gIGludmFsaWRGaWVsZEVycm9yOiAnVGhlXCJ7Y29sTmFtZX1cIiBmaWVsZCBpcyBub3QgaW4gdGhpcyBsaXN0LicsXG4gIGxpc3RFeHBDaGFuZ2VXYXJuaW5nOiAnWW91IGNhbm5vdCBjaGFuZ2UgdGhlIFNoYXJlUG9pbnQgZXhwZXJpZW5jZSB0eXBlLicsXG4gIHJldHVyblRvQ2xhc3NpY1BhZ2U6ICdZb3UgbXVzdCByZXR1cm4gdG8gU2hhcmVQb2ludCBDbGFzc2ljIGV4cGVyaWVuY2UuJyxcbiAgd3JvbmdPYmxpZ2F0aW9uT3BlcmF0b3I6ICdUaGUgY291bGQgbm90IHVzZSBvcGVyYXRvcjogXCJ7b3BlcmF0b3J9XCInLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUFJPTVBUX01FU1NBR0VTO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
