'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _blueTape = require('blue-tape');

var _blueTape2 = _interopRequireDefault(_blueTape);

var _globPromise = require('glob-promise');

var _globPromise2 = _interopRequireDefault(_globPromise);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _blueTape2.default)('transpilation should be up to date', (function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(t) {
    var rootDir, sourceDir, distDir, sources, stats;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rootDir = _path2.default.join(__dirname, '../..');
            sourceDir = _path2.default.join(rootDir, 'src');
            distDir = _path2.default.join(rootDir, 'dist');
            _context.next = 5;
            return (0, _globPromise2.default)(__dirname + '/../../src/**/*.js');

          case 5:
            sources = _context.sent;
            _context.next = 8;
            return _promise2.default.all(sources.map(function (source) {
              var dist = _path2.default.join(distDir, source.substr(sourceDir.length + 1));
              return _promise2.default.all([source, dist, _fsPromise2.default.stat(source), _fsPromise2.default.stat(dist)]);
            }));

          case 8:
            stats = _context.sent;

            stats.forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray3.default)(_ref, 4);

              var source = _ref2[0];
              var dist = _ref2[1];
              var sourceStats = _ref2[2];
              var distStats = _ref2[3];

              t.ok(new Date(distStats.mtime) >= new Date(sourceStats.mtime), source.substr(sourceDir.length + 1) + ' should be transpiled and up to date');
            });

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
})());
//# sourceMappingURL=transpilation.js.map