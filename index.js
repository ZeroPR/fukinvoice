"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _fs = _interopRequireDefault(require("fs"));

var _ejs = _interopRequireDefault(require("ejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function printPDF(_x) {
  return _printPDF.apply(this, arguments);
}

function _printPDF() {
  _printPDF = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(template) {
    var css,
        data,
        optionsPDF,
        browser,
        page,
        html_str,
        html_rendered,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            css = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            data = _args.length > 2 ? _args[2] : undefined;
            optionsPDF = _args.length > 3 ? _args[3] : undefined;
            _context.next = 5;
            return _puppeteer["default"].launch({
              headless: true
            });

          case 5:
            browser = _context.sent;
            _context.next = 8;
            return browser.newPage();

          case 8:
            page = _context.sent;
            html_str = _fs["default"].readFileSync(template);
            html_rendered = _ejs["default"].render(html_str.toString(), data);
            _context.next = 13;
            return page["goto"]("data:text/html, ".concat(html_rendered), {
              waitUntil: ['load', 'domcontentloaded', 'networkidle0']
            });

          case 13:
            if (!css) {
              _context.next = 16;
              break;
            }

            _context.next = 16;
            return page.addStyleTag(css);

          case 16:
            _context.next = 18;
            return page.pdf(optionsPDF);

          case 18:
            return _context.abrupt("return", _context.sent);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _printPDF.apply(this, arguments);
}

var _default = printPDF;
exports["default"] = _default;
