import { r as registerInstance, c as createEvent, h, g as getElement } from './core-8f5ef0c7.js';
import { i as require$$0, j as isHexColor_1, T as TinyDatePicker } from './index-9d3b27e3.js';
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import { z as zxcvbn } from './main-07539eea.js';
import { m as moment } from './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-c32519f3.js';

const isTextArea = function (type) {
    return (type === "textarea");
};
const isFileUpload = function (type) {
    return (type === "file");
};
const hasIncrements = function (type) {
    return (type === "number" || isDatePicker(type));
};
const shouldBeAnInput = function (type) {
    return !(isTextArea(type) || isFileUpload(type) || isDatePicker(type));
};
const isDatePicker = function (type) {
    return (["date", "month"].includes(type));
};
const hasValue = function (value) {
    return (value && value !== "" && value.length >= 1);
};

var toDate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(toDate_1);

var toFloat_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString.default)(str);
  return parseFloat(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(toFloat_1);

var toInt_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString.default)(str);
  return parseInt(str, radix || 10);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(toInt_1);

var toBoolean_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || str === 'true';
  }

  return str !== '0' && str !== 'false' && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(toBoolean_1);

var equals_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString.default)(str);
  return str === comparison;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(equals_1);

var toString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toString(input) {
  if (_typeof(input) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(toString_1);

var contains_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = _interopRequireDefault(require$$0);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString.default)(str);
  return str.indexOf((0, _toString.default)(elem)) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(contains_1);

var matches_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString.default)(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(matches_1);

var merge_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isByteLength_1);

var isFQDN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isFQDN_1);

var isIP_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isIP_1);

var isEmail_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);

    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isEmail_1);

var isURL_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(require$$0);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isURL_1);

var isMACAddress_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

function isMACAddress(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMACAddress_1);

var isIPRange_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = _interopRequireDefault(require$$0);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString.default)(str);
  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  } // Disallow preceding 0 i.e. 01, 02, ...


  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isIPRange_1);

var isBoolean_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isBoolean_1);

var alpha_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alpha = alpha;
var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alphanumeric = alphanumeric;
var decimal = {
  'en-US': '.',
  ar: '٫'
};
exports.decimal = decimal;
var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
exports.englishLocales = englishLocales;

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
} // Source: http://www.localeplanet.com/java/


var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
exports.arabicLocales = arabicLocales;

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
} // Source: https://en.wikipedia.org/wiki/Decimal_mark


var dotDecimal = [];
exports.dotDecimal = dotDecimal;
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];
exports.commaDecimal = commaDecimal;

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT']; // see #862

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];
});

unwrapExports(alpha_1);

var isAlpha_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in alpha_1.alpha) {
    return alpha_1.alpha[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(alpha_1.alpha);
exports.locales = locales;
});

unwrapExports(isAlpha_1);

var isAlphanumeric_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in alpha_1.alphanumeric) {
    return alpha_1.alphanumeric[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(alpha_1.alphanumeric);
exports.locales = locales;
});

unwrapExports(isAlphanumeric_1);

var isNumeric_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return numeric.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isNumeric_1);

var isInt_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isInt_1);

var isPort_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = _interopRequireDefault(isInt_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt.default)(str, {
    min: 0,
    max: 65535
  });
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isPort_1);

var isLowercase_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString.default)(str);
  return str === str.toLowerCase();
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isLowercase_1);

var isUppercase_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString.default)(str);
  return str === str.toUpperCase();
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isUppercase_1);

var isAscii_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isAscii_1);

var isFullWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;

function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}
});

unwrapExports(isFullWidth_1);

var isHalfWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;

function isHalfWidth(str) {
  (0, _assertString.default)(str);
  return halfWidth.test(str);
}
});

unwrapExports(isHalfWidth_1);

var isVariableWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = _interopRequireDefault(require$$0);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return isFullWidth_1.fullWidth.test(str) && isHalfWidth_1.halfWidth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isVariableWidth_1);

var isMultibyte_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString.default)(str);
  return multibyte.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMultibyte_1);

var isSurrogatePair_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isSurrogatePair_1);

var isFloat_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? alpha_1.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var locales = Object.keys(alpha_1.decimal);
exports.locales = locales;
});

unwrapExports(isFloat_1);

var includes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(includes_1);

var isDecimal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = _interopRequireDefault(merge_1);

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(alpha_1.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);

  if (options.locale in alpha_1.decimal) {
    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isDecimal_1);

var isHexadecimal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isHexadecimal_1);

var isDivisibleBy_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = _interopRequireDefault(require$$0);

var _toFloat = _interopRequireDefault(toFloat_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString.default)(str);
  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isDivisibleBy_1);

var isISRC_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISRC_1);

var isMD5_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMD5_1);

var isHash_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-f0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isHash_1);

var isJWT_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

function isJWT(str) {
  (0, _assertString.default)(str);
  return jwt.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isJWT_1);

var isJSON_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isJSON(str) {
  (0, _assertString.default)(str);

  try {
    var obj = JSON.parse(str);
    return !!obj && _typeof(obj) === 'object';
  } catch (e) {
    /* ignore */
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isJSON_1);

var isEmpty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(require$$0);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isEmpty_1);

var isLength_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLength;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isLength_1);

var isUUID_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  (0, _assertString.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isUUID_1);

var isMongoId_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = _interopRequireDefault(require$$0);

var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMongoId_1);

var isAfter_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = _interopRequireDefault(require$$0);

var _toDate = _interopRequireDefault(toDate_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original > comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isAfter_1);

var isBefore_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = _interopRequireDefault(require$$0);

var _toDate = _interopRequireDefault(toDate_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isBefore_1);

var isIn_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIn;

var _assertString = _interopRequireDefault(require$$0);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isIn(str, options) {
  (0, _assertString.default)(str);
  var i;

  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];

    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString.default)(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (_typeof(options) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isIn_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isCreditCard_1);

var isIdentityCard_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIdentityCard;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  ES: function ES(str) {
    (0, _assertString.default)(str);
    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    var sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
      return charsValue[char];
    });
    return sanitized.endsWith(controlDigits[number % 23]);
  }
};

function isIdentityCard(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'any';
  (0, _assertString.default)(str);

  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (var key in validators) {
      if (validators.hasOwnProperty(key)) {
        var validator = validators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isIdentityCard_1);

var isISIN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString.default)(str);

  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble = true;

  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISIN_1);

var isISBN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }

  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i;

  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }

    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }

    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }

    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISBN_1);

var isISSN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

  if (!testIssn.test(str)) {
    return false;
  }

  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;

  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }

  return checksum % 11 === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISSN_1);

var isMobilePhone_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /\+?(88)?0?1[356789][0-9]{8}\b/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-MU': /^(\+?230|0)?\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */
// aliases

phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString.default)(str);

  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }

  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }

      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str); // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(phones);
exports.locales = locales;
});

unwrapExports(isMobilePhone_1);

var isCurrency_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = _interopRequireDefault(merge_1);

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
  });
  var symbol = "(\\".concat(options.symbol.replace(/\./g, '\\.'), ")").concat(options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


  if (options.allow_negative_sign_placeholder) {
    pattern = "( (?!\\-))?".concat(pattern);
  } else if (options.allow_space_after_symbol) {
    pattern = " ?".concat(pattern);
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  } // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space


  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isCurrency_1);

var isISO8601_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));
  if (isNaN(d.getUTCFullYear())) return false;

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str, options) {
  (0, _assertString.default)(str);
  var check = iso8601.test(str);
  if (!options) return check;
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISO8601_1);

var isRFC3339_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */
var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

function isRFC3339(str) {
  (0, _assertString.default)(str);
  return rfc3339.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isRFC3339_1);

var isISO31661Alpha2_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISO31661Alpha2_1);

var isISO31661Alpha3_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha3;

var _assertString = _interopRequireDefault(require$$0);

var _includes = _interopRequireDefault(includes_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isISO31661Alpha3_1);

var isBase64_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isBase64_1);

var isDataURI_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');

  if (data.length < 2) {
    return false;
  }

  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();

  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }

  var mediaType = schemeAndMediaType.substr(5);

  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }

  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') ; else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isDataURI_1);

var isMagnetURI_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString.default)(url);
  return magnetURI.test(url.trim());
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMagnetURI_1);

var isMimeType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/
// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"

var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"

var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isMimeType_1);

var isLatLong = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

function _default(str) {
  (0, _assertString.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isLatLong);

var isPostalCode = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function _default(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}
});

unwrapExports(isPostalCode);

var ltrim_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("^[".concat(chars, "]+"), 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(ltrim_1);

var rtrim_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("[".concat(chars, "]")) : /\s/;
  var idx = str.length - 1;

  for (; idx >= 0 && pattern.test(str[idx]); idx--) {
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(rtrim_1);

var trim_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(rtrim_1);

var _ltrim = _interopRequireDefault(ltrim_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(trim_1);

var _escape = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(_escape);

var _unescape = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(_unescape);

var blacklist_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(blacklist_1);

var stripLow_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = _interopRequireDefault(require$$0);

var _blacklist = _interopRequireDefault(blacklist_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(stripLow_1);

var whitelist_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(whitelist_1);

var isWhitelisted_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString.default)(str);

  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isWhitelisted_1);

var normalizeEmail_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,
  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,
  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,
  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,
  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,
  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
}; // List of domains used by iCloud

var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
// This list is likely incomplete

var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }

  return '';
}

function normalizeEmail(email, options) {
  options = (0, _merge.default)(options, default_normalize_email_options);
  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }

  return parts.join('@');
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(normalizeEmail_1);

var validator_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(toDate_1);

var _toFloat = _interopRequireDefault(toFloat_1);

var _toInt = _interopRequireDefault(toInt_1);

var _toBoolean = _interopRequireDefault(toBoolean_1);

var _equals = _interopRequireDefault(equals_1);

var _contains = _interopRequireDefault(contains_1);

var _matches = _interopRequireDefault(matches_1);

var _isEmail = _interopRequireDefault(isEmail_1);

var _isURL = _interopRequireDefault(isURL_1);

var _isMACAddress = _interopRequireDefault(isMACAddress_1);

var _isIP = _interopRequireDefault(isIP_1);

var _isIPRange = _interopRequireDefault(isIPRange_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isBoolean = _interopRequireDefault(isBoolean_1);

var _isAlpha = _interopRequireWildcard(isAlpha_1);

var _isAlphanumeric = _interopRequireWildcard(isAlphanumeric_1);

var _isNumeric = _interopRequireDefault(isNumeric_1);

var _isPort = _interopRequireDefault(isPort_1);

var _isLowercase = _interopRequireDefault(isLowercase_1);

var _isUppercase = _interopRequireDefault(isUppercase_1);

var _isAscii = _interopRequireDefault(isAscii_1);

var _isFullWidth = _interopRequireDefault(isFullWidth_1);

var _isHalfWidth = _interopRequireDefault(isHalfWidth_1);

var _isVariableWidth = _interopRequireDefault(isVariableWidth_1);

var _isMultibyte = _interopRequireDefault(isMultibyte_1);

var _isSurrogatePair = _interopRequireDefault(isSurrogatePair_1);

var _isInt = _interopRequireDefault(isInt_1);

var _isFloat = _interopRequireWildcard(isFloat_1);

var _isDecimal = _interopRequireDefault(isDecimal_1);

var _isHexadecimal = _interopRequireDefault(isHexadecimal_1);

var _isDivisibleBy = _interopRequireDefault(isDivisibleBy_1);

var _isHexColor = _interopRequireDefault(isHexColor_1);

var _isISRC = _interopRequireDefault(isISRC_1);

var _isMD = _interopRequireDefault(isMD5_1);

var _isHash = _interopRequireDefault(isHash_1);

var _isJWT = _interopRequireDefault(isJWT_1);

var _isJSON = _interopRequireDefault(isJSON_1);

var _isEmpty = _interopRequireDefault(isEmpty_1);

var _isLength = _interopRequireDefault(isLength_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isUUID = _interopRequireDefault(isUUID_1);

var _isMongoId = _interopRequireDefault(isMongoId_1);

var _isAfter = _interopRequireDefault(isAfter_1);

var _isBefore = _interopRequireDefault(isBefore_1);

var _isIn = _interopRequireDefault(isIn_1);

var _isCreditCard = _interopRequireDefault(isCreditCard_1);

var _isIdentityCard = _interopRequireDefault(isIdentityCard_1);

var _isISIN = _interopRequireDefault(isISIN_1);

var _isISBN = _interopRequireDefault(isISBN_1);

var _isISSN = _interopRequireDefault(isISSN_1);

var _isMobilePhone = _interopRequireWildcard(isMobilePhone_1);

var _isCurrency = _interopRequireDefault(isCurrency_1);

var _isISO = _interopRequireDefault(isISO8601_1);

var _isRFC = _interopRequireDefault(isRFC3339_1);

var _isISO31661Alpha = _interopRequireDefault(isISO31661Alpha2_1);

var _isISO31661Alpha2 = _interopRequireDefault(isISO31661Alpha3_1);

var _isBase = _interopRequireDefault(isBase64_1);

var _isDataURI = _interopRequireDefault(isDataURI_1);

var _isMagnetURI = _interopRequireDefault(isMagnetURI_1);

var _isMimeType = _interopRequireDefault(isMimeType_1);

var _isLatLong = _interopRequireDefault(isLatLong);

var _isPostalCode = _interopRequireWildcard(isPostalCode);

var _ltrim = _interopRequireDefault(ltrim_1);

var _rtrim = _interopRequireDefault(rtrim_1);

var _trim = _interopRequireDefault(trim_1);

var _escape$1 = _interopRequireDefault(_escape);

var _unescape$1 = _interopRequireDefault(_unescape);

var _stripLow = _interopRequireDefault(stripLow_1);

var _whitelist = _interopRequireDefault(whitelist_1);

var _blacklist = _interopRequireDefault(blacklist_1);

var _isWhitelisted = _interopRequireDefault(isWhitelisted_1);

var _normalizeEmail = _interopRequireDefault(normalizeEmail_1);

var _toString = _interopRequireDefault(toString_1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '10.11.0';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isBase64: _isBase.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape$1.default,
  unescape: _unescape$1.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: _toString.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
});

const check = unwrapExports(validator_1);

class Validator {
    constructor(element) {
        this.errors = [];
        this.element = element;
        this.prepare();
    }
    async validate(instance) {
        this.errors = [];
        this.element = instance;
        if (!this.element.novalidate) {
            await this.tests();
        }
        return this.results();
    }
    prepare() {
        this.methods = [];
        if (this.element.required) {
            this.methods.push("required");
        }
        if (this.element.match) {
            this.methods.push("match");
        }
        this.methods.push(this.element.type);
        if (this.element.validates) {
            const methods = this.element.validates.split(',');
            this.methods = [...this.methods, methods];
        }
    }
    results() {
        const valid = (this.errors.length === 0);
        return {
            name: this.element.name,
            value: this.element.value,
            valid: valid,
            errors: this.errors,
        };
    }
    async tests() {
        this.value = await this.element.val();
        this.strength = await this.element.getStrength();
        const result = await this.checkString();
        if (!result) {
            this.checkEmpty();
            this.checkEmail();
            this.checkColor();
            this.checkTelephone();
            this.checkIP();
            this.checkURL();
            this.checkPassword();
            this.checkMatches();
        }
    }
    addError(method, message) {
        this.errors.push({ method, message });
    }
    checkString() {
        const result = typeof this.value === "undefined";
        if (result) {
            this.addError("string", "This field is required.");
        }
        return result;
    }
    checkEmpty() {
        if (check.isIn("required", this.methods)) {
            const result = check.isEmpty(this.value);
            if (result) {
                this.addError("required", "This field is required.");
            }
        }
    }
    checkEmail() {
        if (check.isIn("email", this.methods)) {
            const result = check.isEmail(this.value);
            if (!result) {
                this.addError("email", "Please enter a valid email.");
            }
        }
    }
    checkColor() {
        if (check.isIn("color", this.methods)) {
            const result = check.isHexColor(this.value);
            if (!result) {
                this.addError("color", "Please enter a valid color.");
            }
        }
    }
    checkURL() {
        if (check.isIn("url", this.methods)) {
            const result = check.isURL(this.value);
            if (!result) {
                this.addError("url", "Please enter a valid URL.");
            }
        }
    }
    checkIP() {
        if (check.isIn("ipv4", this.methods)) {
            const result = check.isIP(this.value, 4);
            if (!result) {
                this.addError("ipv4", "Please enter a valid IP Address.");
            }
        }
        if (check.isIn("ipv6", this.methods)) {
            const result = check.isIP(this.value, 6);
            if (!result) {
                this.addError("ipv6", "Please enter a valid IP Address.");
            }
        }
    }
    checkTelephone() {
        if (check.isIn("tel", this.methods)) {
            const result = check.isMobilePhone(this.value, 'any');
            if (!result) {
                this.addError("tel", "Please enter a valid phone number.");
            }
        }
    }
    checkPassword() {
        if (check.isIn("password", this.methods)) {
            const result = this.strength;
            if (result.score < 3) {
                this.addError("password", "This password must be stonger.");
                if (result.feedback.warning) {
                    this.addError("password_warning", result.feedback.warning);
                }
            }
            if (check.isEmail(this.value)) {
                this.element.setStrength(0);
                this.addError("password_warning", "This password is an email.");
            }
        }
    }
    checkMatches() {
        if (check.isIn("match", this.methods)) {
            // @ts-ignore
            if (this.element.__match.value !== this.element.value) {
                this.addError("password_match_warning", "These passwords don't match");
            }
        }
    }
}

var Tokenfield =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _ajax = __webpack_require__(3);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input field with tagging/token/chip capabilities written in raw JavaScript
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Available under BSD-3-Clause license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _tokenfields = {};

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = RegExp(reRegExpChar.source);

var _factory = document.createElement('div');

var _templates = {
  containerTokenfield: '<div class="tokenfield tokenfield-mode-tokens">\n      <input class="tokenfield-copy-helper"\n        style="display:none;position:fixed;top:-1000px;right:1000px;"\n        tabindex="-1"\n        type="text"\n      />\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n    </div>',
  containerList: '<div class="tokenfield tokenfield-mode-list">\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n    </div>',
  suggestItem: '<li class="tokenfield-suggest-item"></li>',
  setItem: '<li class="tokenfield-set-item">\n      <span class="item-label"></span>\n      <a href="#" class="item-remove" tabindex="-1">\xD7</a>\n      <input class="item-input" type="hidden" />\n    </li>'
};

function guid() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16) + ((1 + Math.random()) * 0x10000 | 0).toString(16);
}

function includes(arr, item) {
  return arr.indexOf(item) >= 0;
}

function getPath(node) {
  var nodes = [node];
  while (node.parentNode) {
    node = node.parentNode;
    nodes.push(node);
  }
  return nodes;
}

function findElement(input) {
  if (input.nodeName) {
    return input;
  } else if (typeof input === 'string') {
    return document.querySelector(input);
  }
  return null;
}

function build(html, all) {
  if (html.nodeName) return html;
  html = html.replace(/(\t|\n$)/g, '');

  _factory.innerHTML = '';
  _factory.innerHTML = html;
  if (all === true) {
    return _factory.childNodes;
  } else {
    return _factory.childNodes[0];
  }
}

function toString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (value === null) {
    return '';
  }
  var result = value + '';
  return result === '0' && 1 / value === -Infinity ? '-0' : result;
}

function keyToChar(e) {
  if (e.key || e.keyIdentifier) {
    return e.key || String.fromCharCode(parseInt(e.keyIdentifier.substr(2), 16));
  }
  return null;
}

function escapeRegex(string) {
  string = toString(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
}

function makeDefaultsAndOptions() {
  var _defaults = {
    focusedItem: null,
    cache: {},
    timer: null,
    xhr: null,
    suggested: false,
    suggestedItems: [],
    setItems: [],
    events: {},
    delimiters: {}
  };

  var _options = {
    el: null,
    form: true, // Listens to reset event on the specifiedform. If set to true listens to
    // immediate parent form. Also accepts selectors or elements.
    mode: 'tokenfield', // Display mode: tokenfield or list.
    addItemOnBlur: false, // Add token if input field loses focus.
    addItemsOnPaste: false, // Add tokens using `delimiters` option below to tokenize given string.
    keepItemsOrder: true, // Items and New Items values will be set in input with a specific position
    // in the list so that you can retreive correct position on the backend.
    setItems: [], // List of set items.
    items: [], // List of available items to work with.
    // Example: [{id: 143, value: 'Hello World'}, {id: 144, value: 'Foo Bar'}].
    newItems: true, // Allow input (on delimiter key) of new items.
    multiple: true, // Accept multiple items.
    maxItems: 0, // Set maximum allowed number of items.
    minLength: 0, // Minimum length of the string to be converted into token.
    keys: { // Various action keys.
      17: 'ctrl',
      16: 'shift',
      91: 'meta',
      8: 'delete', // Backspace
      27: 'esc',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      46: 'delete',
      65: 'select', // A
      67: 'copy', // C
      88: 'cut', // X
      9: 'delimiter', // Tab
      13: 'delimiter', // Enter
      108: 'delimiter' // Numpad Enter
    },
    matchRegex: '{value}', // Match regex where {value} would be replaced by ecaped user input.
    matchFlags: 'i', // Flags used in regex matching.
    matchStart: false, // Set match regex to test from the beginning of the string.
    matchEnd: false, // Set match regex to test from the end of the string.
    delimiters: [], // Array of strings which act as delimiters during tokenization.
    copyProperty: 'name', // Property of the token used for copy event.
    copyDelimiter: ', ', // Delimiter used to populate clipboard with selected tokens.
    remote: {
      type: 'GET', // Ajax request type.
      url: null, // Full server url.
      queryParam: 'q', // What param to use when asking server for data.
      delay: 300, // Dealy between last keydown event and ajax request for data.
      timestampParam: 't',
      params: {},
      headers: {}
    },
    placeholder: null, // Hardcoded placeholder text. If not set, will use placeholder from the element itself.
    inputType: 'text', // HTML attribute for the input element which lets mobile browsers use various input modes.
    // Accepts text, email, url, and others.
    minChars: 2, // Number of characters before we start to look for similar items.
    maxSuggest: 10, // Max items in the suggest box.
    maxSuggestWindow: 10, // Limit height of the suggest box after given number of items.
    filterSetItems: true, // Filters already set items from the suggestions list.
    filterMatchCase: false, // Sets case-sensitivity for checking whether new item is already set in the list.

    singleInput: false, // Pushes all token values into a single. Accepts: true, 'selector', or an element.
    // When set to true - would use tokenfield target element as an input to fill.
    singleInputValue: 'id', // Which property of the item to use when using fillInput.
    singleInputDelimiter: ', ',

    itemLabel: 'name', // Property to use in order to render item label.
    itemName: 'items', // If set, for each tag/token there will be added
    // input field with array property name:
    // name="items[]".

    newItemName: 'items_new', // Suffix that will be added to the new tag in
    // case it was not available from the server:
    // name="items_new[]".

    itemValue: 'id', // Value that will be taken out of the results and inserted into itemAttr.
    newItemValue: 'name', // Value that will be taken out of the results and inserted into itemAttr.
    itemData: 'name' // Which property to search for.
  };
  return { _defaults: _defaults, _options: _options };
}

var Tokenfield = function (_EventEmitter) {
  _inherits(Tokenfield, _EventEmitter);

  function Tokenfield() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tokenfield);

    var _this = _possibleConstructorReturn(this, (Tokenfield.__proto__ || Object.getPrototypeOf(Tokenfield)).call(this));

    var _makeDefaultsAndOptio = makeDefaultsAndOptions(),
        _defaults = _makeDefaultsAndOptio._defaults,
        _options = _makeDefaultsAndOptio._options;

    _this.id = guid();
    _this.key = 'key_' + _this.id;
    _this._vars = _extends({}, _defaults);
    _this._options = _extends({}, _options, options);
    _this._options.keys = _extends({}, _options.keys, options.keys);
    _this._options.remote = _extends({}, _options.remote, options.remote);
    _this._templates = _extends({}, _templates, options.templates);
    _this._vars.setItems = _this._prepareData(_this.remapData(_this._options.setItems || []));
    _this._focused = false;
    _this._input = null;
    _this._form = false;
    _this._html = {};

    var o = _this._options;

    // Make a hash map to simplify filtering later.
    o.delimiters.forEach(function (delimiter) {
      _this._vars.delimiters[delimiter] = true;
    });

    var el = findElement(o.el);
    if (el) {
      _this.el = el;
    } else {
      throw new Error('Selector: DOM Element ' + o.el + ' not found.');
    }

    if (o.singleInput) {
      var _el = findElement(o.singleInput);
      if (_el) {
        _this._input = _el;
      } else {
        _this._input = _this.el;
      }
    }

    _this.el.tokenfield = _this;

    if (o.placeholder === null) {
      o.placeholder = o.el.placeholder || '';
    }

    if (o.form) {
      var form = false;
      if (o.form.nodeName) {
        form = o.form;
      } else if (o.form === true) {
        var node = _this.el;
        while (node.parentNode) {
          if (node.nodeName === 'FORM') {
            form = node;
            break;
          }
          node = node.parentNode;
        }
      } else if (typeof form == 'string') {
        form = document.querySelector(form);
        if (!form) {
          throw new Error('Selector: DOM Element ' + o.form + ' not found.');
        }
      }
      _this._form = form;
    } else {
      throw new Error('Cannot create tokenfield without DOM Element.');
    }

    _tokenfields[_this.id] = _this;

    _this._render();
    return _this;
  }

  _createClass(Tokenfield, [{
    key: '_render',
    value: function _render() {
      var o = this._options;
      var html = this._html;

      if (o.mode === 'tokenfield') {
        html.container = build(this._templates.containerTokenfield);
      } else {
        html.container = build(this._templates.containerList);
      }
      html.suggest = html.container.querySelector('.tokenfield-suggest');
      html.suggestList = html.container.querySelector('.tokenfield-suggest-list');
      html.items = html.container.querySelector('.tokenfield-set > ul');
      html.input = html.container.querySelector('.tokenfield-input');
      html.input.setAttribute('type', o.inputType);
      html.input.placeholder = this._vars.setItems.length ? '' : o.placeholder;
      html.copyHelper = html.container.querySelector('.tokenfield-copy-helper');

      o.el.style.display = 'none';
      html.suggest.style.display = 'none';
      this._renderSizer();

      // Set tokenfield in DOM.
      html.container.tokenfield = this;
      o.el.parentElement.insertBefore(html.container, o.el);
      html.container.insertBefore(o.el, html.container.firstChild);

      this._setEvents();
      this._renderItems();
      if (o.mode === 'tokenfield') {
        this._resizeInput();
      }

      return this;
    }
  }, {
    key: '_renderSizer',
    value: function _renderSizer() {
      var html = this._html;
      var b = this._getBounds();
      var style = window.getComputedStyle(html.container);
      var compensate = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);

      var styles = {
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
        whiteSpace: 'pre',
        maxWidth: b.width - compensate + 'px',
        position: 'fixed',
        top: -10000 + 'px',
        left: 10000 + 'px',
        fontSize: style.fontSize,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight
      };

      html.sizer = document.createElement('div');
      html.sizer.id = 'tokenfield-sizer-' + this.id;
      for (var key in styles) {
        html.sizer.style[key] = styles[key];
      }
      html.container.appendChild(html.sizer);
    }
  }, {
    key: '_refreshInput',
    value: function _refreshInput() {
      var empty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var v = this._vars;
      var html = this._html;

      if (empty) html.input.value = '';

      if (this._options.mode === 'tokenfield') {
        this._resizeInput();
        var placeholder = v.setItems.length ? '' : this._options.placeholder;
        html.input.setAttribute('placeholder', placeholder);
      }
      return this;
    }
  }, {
    key: '_resizeInput',
    value: function _resizeInput() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var html = this._html;
      var b = this._getBounds();
      var style = window.getComputedStyle(html.container);
      var compensate = parseInt(style.paddingRight, 10) + parseInt(style.borderRightWidth, 10);

      var fullCompensate = compensate + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10);

      html.sizer.innerHTML = val;
      html.sizer.style.maxWidth = b.width - compensate + 'px';

      if (b.width === 0) {
        html.input.style.width = '100%';
        return;
      } else {
        html.input.style.width = '20px';
      }

      var sb = html.sizer.getBoundingClientRect();
      var ib = html.input.getBoundingClientRect();
      var rw = b.width - (ib.left - b.left) - compensate;

      if (sb.width > rw) {
        html.input.style.width = b.width - fullCompensate + 'px';
      } else {
        html.input.style.width = rw + 'px';
      }
    }
  }, {
    key: '_fetchData',
    value: function _fetchData(val) {
      var _this2 = this;

      var v = this._vars;
      var o = this._options;
      var r = o.remote;
      var reqData = _extends({}, o.params);

      for (var key in r.params) {
        reqData[key] = r.params[key];
      }

      if (r.limit) {
        reqData[r.limit] = o.remote.limit;
      }

      reqData[r.queryParam] = val;
      reqData[r.timestampParam] = Math.round(new Date().getTime() / 1000);

      v.xhr = (0, _ajax2.default)(reqData, o.remote, function () {
        if (v.xhr && v.xhr.readyState == 4) {
          if (v.xhr.status == 200) {
            var response = JSON.parse(v.xhr.responseText);
            v.cache[val] = response;
            var data = _this2._prepareData(_this2.remapData(response));
            var items = _this2._filterData(val, data);
            v.suggestedItems = o.filterSetItems ? _this2._filterSetItems(items) : items;
            _this2.showSuggestions();
          } else if (v.xhr.status > 0) {
            throw new Error('Error while loading remote data.');
          }
          _this2._abortXhr();
        }
      });
    }

    // Overwriteable method where you can change given data to appropriate format.

  }, {
    key: 'remapData',
    value: function remapData(data) {
      return data;
    }
  }, {
    key: '_prepareData',
    value: function _prepareData(data) {
      var _this3 = this;

      return data.map(function (item) {
        return _extends({}, item, _defineProperty({}, _this3.key, guid()));
      });
    }
  }, {
    key: '_filterData',
    value: function _filterData(val, data) {
      var o = this._options;
      var regex = o.matchRegex.replace('{value}', escapeRegex(val));
      if (o.matchStart) {
        regex = '^' + regex;
      } else if (o.matchEnd) {
        regex = regex + '$';
      }
      var pattern = new RegExp(regex, o.matchFlags);
      return data.filter(function (item) {
        return pattern.test(item[o.itemData]);
      });
    }
  }, {
    key: '_abortXhr',
    value: function _abortXhr() {
      var v = this._vars;
      if (v.xhr !== null) {
        v.xhr.abort();
        v.xhr = null;
      }
    }
  }, {
    key: '_filterSetItems',
    value: function _filterSetItems(items) {
      var key = this._options.itemValue;
      var v = this._vars;
      if (!v.setItems.length) return items;

      var setKeys = v.setItems.map(function (item) {
        return item[key];
      });

      return items.filter(function (item) {
        if (setKeys.indexOf(item[key]) === -1) {
          return true;
        }
        return false;
      });
    }
  }, {
    key: '_setEvents',
    value: function _setEvents() {
      var v = this._vars;
      var html = this._html;
      v.events.onClick = this._onClick.bind(this);
      v.events.onMouseDown = this._onMouseDown.bind(this);
      v.events.onMouseOver = this._onMouseOver.bind(this);
      v.events.onFocus = this._onFocus.bind(this);
      v.events.onResize = this._onResize.bind(this);
      v.events.onReset = this._onReset.bind(this);
      v.events.onKeyDown = this._onKeyDown.bind(this);
      v.events.onFocusOut = this._onFocusOut.bind(this);

      html.container.addEventListener('click', v.events.onClick);

      // Attach document event only once.
      if (Object.keys(_tokenfields).length === 1) {
        document.addEventListener('mousedown', v.events.onMouseDown);
        window.addEventListener('resize', v.events.onResize);
      }

      if (this._form && this._form.nodeName) {
        this._form.addEventListener('reset', v.events.onReset);
      }

      html.suggestList.addEventListener('mouseover', v.events.onMouseOver);
      html.input.addEventListener('focus', v.events.onFocus);
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(e) {
      var target = e.target;
      if (target.classList.contains('tokenfield-suggest-item')) {
        var selected = [].slice.call(this._html.suggestList.querySelectorAll('.selected'));
        selected.forEach(function (item) {
          if (item !== target) item.classList.remove('selected');
        });
        target.classList.add('selected');
        this._selectItem(target.key, false);
        this._refreshItemsSelection();
      }
    }
  }, {
    key: '_onReset',
    value: function _onReset() {
      this.setItems(this._options.setItems);
    }
  }, {
    key: '_onFocus',
    value: function _onFocus() {
      var v = this._vars;
      var html = this._html;
      var o = this._options;

      html.input.removeEventListener('keydown', v.events.onKeyDown);
      html.input.addEventListener('keydown', v.events.onKeyDown);
      html.input.addEventListener('focusout', v.events.onFocusOut);

      if (o.addItemsOnPaste) {
        v.events.onPaste = this._onPaste.bind(this);
        html.input.addEventListener('paste', v.events.onPaste);
      }

      this._focused = true;
      this._html.container.classList.add('focused');
      this._resizeInput();

      if (html.input.value.trim().length >= o.minChars) {
        this.showSuggestions();
      }
    }
  }, {
    key: '_onFocusOut',
    value: function _onFocusOut(e) {
      var v = this._vars;
      var o = this._options;
      var html = this._html;
      html.input.removeEventListener('keydown', v.events.onKeyDown);
      html.input.removeEventListener('focusout', v.events.onFocusOut);

      if (typeof v.events.onPaste !== 'undefined') {
        html.input.removeEventListener('paste', v.events.onPaste);
      }

      if (e.relatedTarget && e.relatedTarget === html.copyHelper) {
        return;
      }

      var canAddItem = o.multiple && !o.maxItems || !o.multiple && !v.setItems.length || o.multiple && o.maxItems && v.setItems.length < o.maxItems;

      if (this._focused && o.addItemOnBlur && canAddItem && this._newItem(html.input.value)) {
        this._renderItems()._refreshInput();
      } else {
        this._defocusItems()._renderItems();
      }

      this._focused = false;
      this._html.container.classList.remove('focused');
    }
  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(e) {
      var tokenfield = null;
      for (var key in _tokenfields) {
        if (_tokenfields[key]._html.container.contains(e.target)) {
          tokenfield = _tokenfields[key];
          break;
        }
      }

      if (tokenfield) {
        for (var _key in _tokenfields) {
          if (_key !== tokenfield.id) {
            _tokenfields[_key].hideSuggestions();
            _tokenfields[_key].blur();
          }
        }

        // Prevent input blur.
        if (e.target !== tokenfield._html.input) {
          e.preventDefault();
        }
      } else {
        for (var _key2 in _tokenfields) {
          _tokenfields[_key2].hideSuggestions();
          _tokenfields[_key2].blur();
        }
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      for (var key in _tokenfields) {
        _tokenfields[key]._resizeInput(_tokenfields[key]._html.input.value);
      }
    }
  }, {
    key: '_onPaste',
    value: function _onPaste(e) {
      var _this4 = this;

      var v = this._vars;
      var o = this._options;
      var val = e.clipboardData.getData('text');
      var tokens = [val];

      // Break input using delimiters option.
      if (o.delimiters.length) {
        var search = o.delimiters.join('|');
        var splitRegex = new RegExp('(' + search + ')', 'ig');
        tokens = val.split(splitRegex);
      }

      var items = tokens.map(function (token) {
        return token.trim();
      }).filter(function (token) {
        return token.length > 0 && token.length >= o.minLength && typeof v.delimiters[token] === 'undefined';
      }).map(function (token) {
        return _this4._newItem(token);
      });

      if (items.length) {
        setTimeout(function () {
          _this4._renderItems()._refreshInput()._deselectItems().hideSuggestions();
        }, 1);

        e.preventDefault();
      }
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(e) {
      var _this5 = this;

      var v = this._vars;
      var o = this._options;
      var html = this._html;

      if (o.maxItems && v.setItems.length >= o.maxItems) {
        e.preventDefault();
      }

      if (o.mode === 'tokenfield') {
        setTimeout(function () {
          _this5._resizeInput(html.input.value);
        }, 1);
      }

      var key = keyToChar(e);
      if (typeof o.keys[e.keyCode] !== 'undefined' || includes(o.delimiters, key)) {
        if (this._keyAction(e)) return true;
      } else {
        this._defocusItems()._refreshItems();
      }

      clearTimeout(v.timer);
      this._abortXhr();

      if (!o.maxItems || v.setItems.length < o.maxItems) {
        setTimeout(function () {
          _this5._keyInput(e);
        }, 1);
      }
    }
  }, {
    key: '_keyAction',
    value: function _keyAction(e) {
      var _this6 = this;
      var item = null;
      var v = this._vars;
      var o = this._options;
      var html = this._html;
      var keyName = o.keys[e.keyCode];
      var val = html.input.value.trim();
      var keyChar = keyToChar(e);

      if (includes(o.delimiters, keyChar) && typeof keyName === 'undefined') {
        keyName = 'delimiter';
      }

      var selected = this._getSelectedItems();
      if (selected.length) {
        item = selected[0];
      }

      switch (keyName) {
        case 'esc':
          this._deselectItems()._defocusItems()._renderItems().hideSuggestions();
          break;
        case 'up':
          if (this._vars.suggested) {
            this._selectPrevItem()._refreshItemsSelection();
            e.preventDefault();
          }
          this._defocusItems()._renderItems();
          break;
        case 'down':
          if (this._vars.suggested) {
            this._selectNextItem()._refreshItemsSelection();
            e.preventDefault();
          }
          this._defocusItems()._renderItems();
          break;
        case 'left':
          if (this.getFocusedItems().length || !html.input.selectionStart && !html.input.selectionEnd) {
            this._focusPrevItem(e.shiftKey);
            e.preventDefault();
          }
          break;
        case 'right':
          if (this.getFocusedItems().length || html.input.selectionStart === val.length) {
            this._focusNextItem(e.shiftKey);
            e.preventDefault();
          }
          break;
        case 'delimiter':
          this._abortXhr();
          this._defocusItems();

          if (!o.multiple && v.setItems.length >= 1) {
            return false;
          }

          val = this.onInput(val, e);
          if (item) {
            this._addItem(item);
          } else if (val.length) {
            item = this._newItem(val);
          }

          if (item) {
            this._renderItems().focus()._refreshInput()._refreshSuggestions()._deselectItems();
          }
          e.preventDefault();
          break;
        case 'select':
          if (!val.length && (e.ctrlKey || e.metaKey)) {
            this._vars.setItems.forEach(function (item) {
              item.focused = true;
            });
            this._refreshItems();
          } else {
            return false;
          }
          break;
        case 'cut':
          {
            var focusedItems = this.getFocusedItems();
            if (focusedItems.length && (e.ctrlKey || e.metaKey)) {
              this._copy()._delete(e);
            } else {
              return false;
            }
            break;
          }
        case 'copy':
          {
            var _focusedItems = this.getFocusedItems();
            if (_focusedItems.length && (e.ctrlKey || e.metaKey)) {
              this._copy();
            } else {
              return false;
            }
            break;
          }
        case 'delete':
          {
            this._abortXhr();
            var _focusedItems2 = this.getFocusedItems();
            if (!html.input.selectionEnd && e.keyCode === 8 || html.input.selectionStart === val.length && e.keyCode === 46 || _focusedItems2.length) {
              this._delete(e);
            } else {
              v.timer = setTimeout(function () {
                _this6._keyInput(e);
              }, o.delay);
            }
            break;
          }
        default:
          break;
      }

      return true;
    }
  }, {
    key: '_copy',
    value: function _copy() {
      var o = this._options;
      var html = this._html;
      var copyString = this.getFocusedItems().map(function (item) {
        return item[o.copyProperty];
      }).join(o.copyDelimiter);

      html.copyHelper.style.display = 'block';
      html.copyHelper.value = copyString;
      html.copyHelper.focus();
      html.copyHelper.select();
      document.execCommand('copy');
      html.copyHelper.style.display = 'none';
      html.copyHelper.value = '';
      html.input.focus();

      return this;
    }
  }, {
    key: '_delete',
    value: function _delete(e) {
      var _this7 = this;

      var v = this._vars;
      var o = this._options;
      var key = this.key;
      var html = this._html;
      var focusedItems = this.getFocusedItems();

      if (o.mode === 'tokenfield' && v.setItems.length) {
        if (focusedItems.length) {
          focusedItems.forEach(function (item) {
            _this7._removeItem(item[key]);
          });
          this._refreshSuggestions()._keyInput(e);
        } else if (!html.input.selectionStart) {
          this._focusItem(v.setItems[v.setItems.length - 1][key]);
        }
      } else if (focusedItems.length) {
        focusedItems.forEach(function (item) {
          _this7._removeItem(item[key]);
        });
        this._refreshSuggestions()._keyInput(e);
      }
      this._renderItems()._refreshInput(false);

      return this;
    }
  }, {
    key: '_keyInput',
    value: function _keyInput(e) {
      var _this8 = this;

      var v = this._vars;
      var o = this._options;
      var html = this._html;

      this._defocusItems()._refreshItems();

      var val = this.onInput(html.input.value.trim(), e);

      if (e.type === 'keydown') {
        this.emit('input', this, val, e);
      }

      if (val.length < o.minChars) {
        this.hideSuggestions();
        return false;
      }

      if (!o.multiple && v.setItems.length >= 1) {
        return false;
      }

      // Check if we have cache with this val.
      if (typeof v.cache[val] === 'undefined') {
        // Get new data.
        if (o.remote.url) {
          v.timer = setTimeout(function () {
            _this8._fetchData(val);
          }, o.delay);
        } else if (!o.remote.url && o.items.length) {
          var data = this._prepareData(o.items);
          var items = this._filterData(val, data);
          v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;
          this.showSuggestions();
        }
      } else {
        // Work with cached data.
        var _data = this._prepareData(this.remapData(v.cache[val]));
        var _items = this._filterData(val, _data);
        v.suggestedItems = o.filterSetItems ? this._filterSetItems(_items) : _items;
        this.showSuggestions();
      }

      return this;
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      var target = e.target;

      if (target.classList.contains('item-remove')) {
        e.preventDefault();

        this._removeItem(target.key)._defocusItems()._renderItems()._refreshInput(false)._keyInput(e);
      } else if (target.classList.contains('tokenfield-suggest-item')) {
        var item = this._getSuggestedItem(target.key);
        this._addItem(item)._renderItems()._refreshInput()._refreshSuggestions();
      } else {
        var setItem = getPath(target).filter(function (node) {
          return node.classList && node.classList.contains('tokenfield-set-item');
        })[0];

        if (setItem) {
          this._focusItem(setItem.key, e.shiftKey, e.ctrlKey || e.metaKey, true);
          this._refreshItems();
        } else {
          this._keyInput(e);
        }
      }

      this.focus();
    }
  }, {
    key: '_selectPrevItem',
    value: function _selectPrevItem() {
      var key = this.key;
      var o = this._options;
      var items = this._vars.suggestedItems;
      var index = this._getSelectedItemIndex();

      if (!items.length) {
        return this;
      }

      if (index !== null) {
        if (index === 0) {
          if (o.newItems) {
            this._deselectItems();
          } else {
            this._selectItem(items[items.length - 1][key]);
          }
        } else {
          this._selectItem(items[index - 1][key]);
        }
      } else {
        this._selectItem(items[items.length - 1][key]);
      }

      return this;
    }
  }, {
    key: '_selectNextItem',
    value: function _selectNextItem() {
      var key = this.key;
      var o = this._options;
      var items = this._vars.suggestedItems;
      var index = this._getSelectedItemIndex();

      if (!items.length) {
        return this;
      }

      if (index !== null) {
        if (index === items.length - 1) {
          if (o.newItems) {
            this._deselectItems();
          } else {
            this._selectItem(items[0][key]);
          }
        } else {
          this._selectItem(items[index + 1][key]);
        }
      } else {
        this._selectItem(items[0][key]);
      }

      return this;
    }
  }, {
    key: '_focusPrevItem',
    value: function _focusPrevItem() {
      var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var key = this.key;
      var items = this._vars.setItems;
      var index = this._getFocusedItemIndex();

      if (!items.length) {
        return this;
      }

      if (index !== null) {
        if (index === 0 && !multiple) {
          this._defocusItems();
        } else if (index === 0 && multiple) {
          var lastFocused = this._getFocusedItemIndex(true);
          this._defocusItem(items[lastFocused][key]);
        } else {
          this._focusItem(items[index - 1][key], multiple, false, true);
        }
      } else {
        this._focusItem(items[items.length - 1][key], false, false, true);
      }
      this._refreshItems();

      return this;
    }
  }, {
    key: '_focusNextItem',
    value: function _focusNextItem() {
      var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var key = this.key;
      var items = this._vars.setItems;
      var index = this._getFocusedItemIndex(true);

      if (!items.length) {
        return this;
      }

      if (index !== null) {
        if (index === items.length - 1 && !multiple) {
          this._defocusItems();
        } else if (index === items.length - 1 && multiple) {
          this._focusItem(items[0][key], multiple);
        } else {
          this._focusItem(items[index + 1][key], multiple);
        }
      } else {
        this._focusItem(items[0][key], false);
      }
      this._refreshItems();

      return this;
    }
  }, {
    key: '_getSelectedItems',
    value: function _getSelectedItems() {
      var key = this.key;
      var setIds = this._vars.setItems.map(function (item) {
        return item[key];
      });
      return this._vars.suggestedItems.filter(function (v) {
        return v.selected && setIds.indexOf(v[key]) < 0;
      });
    }
  }, {
    key: '_selectItem',
    value: function _selectItem(key) {
      var _this9 = this;

      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._vars.suggestedItems.forEach(function (v) {
        v.selected = v[_this9.key] === key;
        if (v.selected && scroll) {
          var height = parseInt(_this9._html.suggest.style.maxHeight, 10);
          if (height) {
            var listBounds = _this9._html.suggestList.getBoundingClientRect();
            var elBounds = v.el.getBoundingClientRect();
            var top = elBounds.top - listBounds.top;
            var bottom = top + elBounds.height;

            if (bottom >= height + _this9._html.suggest.scrollTop) {
              _this9._html.suggest.scrollTop = bottom - height;
            } else if (top < _this9._html.suggest.scrollTop) {
              _this9._html.suggest.scrollTop = top;
            }
          }
        }
      });
    }
  }, {
    key: '_deselectItem',
    value: function _deselectItem(key) {
      var _this10 = this;

      this._vars.suggestedItems.every(function (v) {
        if (v[_this10.key] === key) {
          v.selected = false;
          return false;
        }
        return true;
      });
      return this;
    }
  }, {
    key: '_deselectItems',
    value: function _deselectItems() {
      this._vars.suggestedItems.forEach(function (v) {
        v.selected = false;
      });
      return this;
    }
  }, {
    key: '_refreshItemsSelection',
    value: function _refreshItemsSelection() {
      this._vars.suggestedItems.forEach(function (v) {
        if (v.selected && v.el) {
          v.el.classList.add('selected');
        } else if (v.el) {
          v.el.classList.remove('selected');
        }
      });
    }
  }, {
    key: '_getSelectedItemIndex',
    value: function _getSelectedItemIndex() {
      var index = null;
      this._vars.suggestedItems.every(function (v, k) {
        if (v.selected) {
          index = k;
          return false;
        }
        return true;
      });
      return index;
    }
  }, {
    key: '_getFocusedItemIndex',
    value: function _getFocusedItemIndex() {
      var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var index = null;
      this._vars.setItems.every(function (v, k) {
        if (v.focused) {
          index = k;
          if (!last) {
            return false;
          }
        }
        return true;
      });
      return index;
    }
  }, {
    key: '_getItem',
    value: function _getItem(val) {
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (prop === null) prop = this.key;
      var items = this._filterItems(this._vars.setItems, val, prop);
      return items.length ? items[0] : null;
    }
  }, {
    key: '_getSuggestedItem',
    value: function _getSuggestedItem(val) {
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (prop === null) prop = this.key;
      var items = this._filterItems(this._vars.suggestedItems, val, prop);
      return items.length ? items[0] : null;
    }
  }, {
    key: '_getAvailableItem',
    value: function _getAvailableItem(val) {
      var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (prop === null) prop = this.key;
      var items = this._filterItems(this._options.items, val, prop);
      return items.length ? items[0] : null;
    }
  }, {
    key: '_filterItems',
    value: function _filterItems(items, val, prop) {
      var matchCase = this._options.filterMatchCase;
      return items.filter(function (v) {
        if (typeof v[prop] === 'string' && typeof val === 'string') {
          if (matchCase) return v[prop] === val;
          return v[prop].toLowerCase() == val.toLowerCase();
        }
        return v[prop] == val;
      });
    }
  }, {
    key: '_removeItem',
    value: function _removeItem(key) {
      var _this11 = this;

      this._vars.setItems.every(function (item, k) {
        if (item[_this11.key] === key) {
          _this11.emit('removeToken', _this11, item);
          _this11._vars.setItems.splice(k, 1);
          _this11.emit('removedToken', _this11, item);
          _this11.emit('change', _this11);
          return false;
        }
        return true;
      });
      return this;
    }
  }, {
    key: '_addItem',
    value: function _addItem(item) {
      item.focused = false;
      var o = this._options;
      // Check if item already exists in a given list.
      if (item.isNew && !this._getItem(item[o.itemData], o.itemData) || !this._getItem(item[o.itemValue], o.itemValue)) {
        this.emit('addToken', this, item);
        if (!this._options.maxItems || this._options.maxItems && this._vars.setItems.length < this._options.maxItems) {
          item.selected = false;
          var clonedItem = _extends({}, item);
          this._vars.setItems.push(clonedItem);
          this.emit('addedToken', this, clonedItem);
          this.emit('change', this);
        }
      }
      return this;
    }
  }, {
    key: 'getFocusedItem',
    value: function getFocusedItem() {
      var items = this._vars.setItems.filter(function (item) {
        return item.focused;
      })[0];
      if (items.length) return items[0];
      return null;
    }
  }, {
    key: 'getFocusedItems',
    value: function getFocusedItems() {
      return this._vars.setItems.filter(function (item) {
        return item.focused;
      });
    }
  }, {
    key: '_focusItem',
    value: function _focusItem(key) {
      var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _this12 = this;

      var ctrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var add = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (shift) {
        var first = null;
        var last = null;
        var target = null;
        var length = this._vars.setItems.length;
        this._vars.setItems.forEach(function (item, k) {
          if (item[_this12.key] === key) {
            target = k;
          }
          if (first === null && item.focused) {
            first = k;
          }
          if (item.focused) {
            last = k;
          }
        });

        if ((target === 0 || target === length - 1) && first === null && last === null) {
          return;
        } else if (first === null && last === null) {
          this._vars.setItems[target].focused = true;
        } else if (target === 0 && last === length - 1 && !add) {
          this._vars.setItems[first].focused = false;
        } else {
          first = Math.min(target, first);
          last = Math.max(target, last);
          this._vars.setItems.forEach(function (item, k) {
            item.focused = target === k || k >= first && k <= last;
          });
        }
      } else {
        this._vars.setItems.forEach(function (item) {
          if (ctrl) {
            item.focused = item[_this12.key] === key ? !item.focused : item.focused;
          } else {
            item.focused = item[_this12.key] === key;
          }
        });
      }
      return this;
    }
  }, {
    key: '_defocusItem',
    value: function _defocusItem(key) {
      var _this13 = this;

      return this._vars.setItems.filter(function (item) {
        if (item[_this13.key] === key) {
          item.focused = false;
        }
      });
    }
  }, {
    key: '_defocusItems',
    value: function _defocusItems() {
      this._vars.setItems.forEach(function (item) {
        item.focused = false;
      });
      return this;
    }
  }, {
    key: '_newItem',
    value: function _newItem(value) {
      var o = this._options;

      if (typeof value === 'string' && (!value.length || value.length < o.minLength)) return null;

      var item = this._getItem(value, o.itemData) || this._getSuggestedItem(value, o.itemData) || this._getAvailableItem(value, o.itemData);

      if (!item && o.newItems) {
        var _item;

        item = (_item = {
          isNew: true
        }, _defineProperty(_item, this.key, guid()), _defineProperty(_item, o.itemData, value), _item);
        this.emit('newToken', this, item);
      }

      if (item) {
        this._addItem(item);
        return item;
      }

      return null;
    }

    // Wrapper for build function in case some of the functions are overwritten.

  }, {
    key: '_buildEl',
    value: function _buildEl(html) {
      return build(html);
    }
  }, {
    key: '_getBounds',
    value: function _getBounds() {
      return this._html.container.getBoundingClientRect();
    }
  }, {
    key: '_renderItems',
    value: function _renderItems() {
      var _this14 = this;

      var v = this._vars;
      var o = this._options;
      var html = this._html;

      html.items.innerHTML = '';
      v.setItems.forEach(function (item, k) {
        var itemEl = _this14._renderItem(item, k);
        html.items.appendChild(itemEl);
        item.el = itemEl;
        if (item.focused) {
          item.el.classList.add('focused');
        } else {
          item.el.classList.remove('focused');
        }
      });

      if (v.setItems.length > 1 && o.mode === 'tokenfield') {
        html.input.setAttribute('placeholder', '');
      }

      if (this._input) {
        this._input.value = v.setItems.map(function (item) {
          return item[o.singleInputValue];
        }).join(o.singleInputDelimiter);
      }

      return this;
    }
  }, {
    key: '_refreshItems',
    value: function _refreshItems() {
      var v = this._vars;

      v.setItems.forEach(function (item) {
        if (item.el) {
          if (item.focused) {
            item.el.classList.add('focused');
          } else {
            item.el.classList.remove('focused');
          }
        }
      });
    }
  }, {
    key: '_renderItem',
    value: function _renderItem(item, k) {
      var o = this._options;

      var itemHtml = this.renderSetItemHtml(item);
      var label = itemHtml.querySelector('.item-label');
      var input = itemHtml.querySelector('.item-input');
      var remove = itemHtml.querySelector('.item-remove');
      var position = o.keepItemsOrder ? '[' + k + ']' : '[]';

      itemHtml.key = item[this.key];
      remove.key = item[this.key];
      input.setAttribute('name', (item.isNew ? o.newItemName : o.itemName) + position);

      input.value = item[item.isNew ? o.newItemValue : o.itemValue] || null;
      label.textContent = this.renderSetItemLabel(item);
      if (item.focused) {
        itemHtml.classList.add('focused');
      }

      return itemHtml;
    }
  }, {
    key: 'onInput',
    value: function onInput(value, e) {
      return value;
    }
  }, {
    key: 'renderSetItemHtml',
    value: function renderSetItemHtml() {
      return this._buildEl(this._templates.setItem);
    }
  }, {
    key: 'renderSetItemLabel',
    value: function renderSetItemLabel(item) {
      return item[this._options.itemLabel];
    }
  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions(items) {
      var _this15 = this;

      var v = this._vars;
      var o = this._options;
      var html = this._html;
      var index = this._getSelectedItemIndex();

      if (!items.length) {
        return this;
      }

      if (o.maxSuggestWindow === 0) {
        html.suggest.style.maxHeight = null;
      }

      if (!v.suggestedItems.length) {
        return this;
      }

      if (!o.newItems && index === null) {
        items[0].selected = true;
      }

      var maxHeight = 0;

      items.every(function (item, k) {
        if (k >= o.maxSuggest) return false;
        var child = html.suggestList.childNodes[k];
        var el = item.el = _this15.renderSuggestedItem(item);

        if (child) {
          if (child.itemValue === item[o.itemValue]) {
            child.key = item[_this15.key];
            item.el = child;
          } else {
            html.suggestList.replaceChild(el, child);
          }
        } else if (!child) {
          html.suggestList.appendChild(el);
        }

        if (o.maxSuggestWindow > 0 && k < o.maxSuggestWindow) {
          maxHeight += html.suggestList.childNodes[k].getBoundingClientRect().height;
        }

        if (o.maxSuggestWindow > 0 && k === o.maxSuggestWindow) {
          html.suggest.style.maxHeight = maxHeight + 'px';
        }

        return true;
      });

      var overflow = html.suggestList.childElementCount - items.length;
      if (overflow > 0) {
        for (var i = overflow - 1; i >= 0; i--) {
          html.suggestList.removeChild(html.suggestList.childNodes[items.length + i]);
        }
      }

      return this;
    }
  }, {
    key: 'renderSuggestedItem',
    value: function renderSuggestedItem(item) {
      var o = this._options;
      var el = this._buildEl(this._templates.suggestItem);
      el.key = item[this.key];
      el.itemValue = item[o.itemValue];
      el.innerHTML = this.renderSuggestedItemContent(item);
      el.setAttribute('title', item[o.itemData]);
      if (item.selected) {
        el.classList.add('selected');
      }
      if (!o.filterSetItems) {
        var setItem = this._getItem(item[o.itemValue], o.itemValue) || this._getItem(item[o.itemData], o.itemData);

        if (setItem) {
          el.classList.add('set');
        }
      }
      return el;
    }
  }, {
    key: 'renderSuggestedItemContent',
    value: function renderSuggestedItemContent(item) {
      return item[this._options.itemData];
    }
  }, {
    key: '_refreshSuggestions',
    value: function _refreshSuggestions() {
      var v = this._vars;
      var o = this._options;

      if (this._html.input.value.length < o.minChars) {
        this.hideSuggestions();
        return this;
      }

      var data = this._prepareData(o.items);
      var items = this._filterData(this._html.input.value, data);
      v.suggestedItems = o.filterSetItems ? this._filterSetItems(items) : items;

      if (v.suggestedItems.length) {
        if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
          this.renderSuggestions(v.suggestedItems);
          return this;
        }
      }

      this.hideSuggestions();
      return this;
    }
  }, {
    key: 'showSuggestions',
    value: function showSuggestions() {
      var v = this._vars;
      var o = this._options;

      if (v.suggestedItems.length) {
        this.emit('showSuggestions', this);
        if (!o.maxItems || o.maxItems && v.setItems.length < o.maxItems) {
          this._html.suggest.style.display = 'block';
          v.suggested = true;
          this.renderSuggestions(v.suggestedItems);
        }
        this.emit('shownSuggestions', this);
      } else {
        this.hideSuggestions();
      }
      return this;
    }
  }, {
    key: 'hideSuggestions',
    value: function hideSuggestions() {
      this.emit('hideSuggestions', this);
      this._vars.suggested = false;
      this._html.suggest.style.display = 'none';
      this._html.suggestList.innerHTML = '';
      this.emit('hiddenSuggestions', this);
      return this;
    }
  }, {
    key: 'setSuggestedItems',
    value: function setSuggestedItems(items) {
      if (!Array.isArray(items)) {
        throw new Error('Argument must be an array of objects.');
      }

      this._options.items = items;
      this._refreshSuggestions();
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      return this._vars.setItems.map(function (item) {
        return _extends({}, item);
      });
    }
  }, {
    key: 'setItems',
    value: function setItems() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this._vars.setItems = [];
      this.addItems(items);
      return this;
    }
  }, {
    key: 'addItems',
    value: function addItems() {
      var _this16 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var key = this._options.itemValue;
      if (!Array.isArray(items)) {
        items = [items];
      }

      this._prepareData(items).forEach(function (item) {
        if (item.isNew || typeof item[key] !== 'undefined') {
          _this16._addItem(item);
        }
      });

      this._renderItems()._refreshInput().hideSuggestions();

      return this;
    }
  }, {
    key: 'sortItems',
    value: function sortItems() {
      var _this17 = this;

      var items = [];

      [].concat(_toConsumableArray(this._html.items.childNodes)).forEach(function (el) {
        var item = _this17._getItem(el.key);
        if (item) {
          items.push(item);
        }
      });

      this.setItems(items);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(value) {
      var o = this._options;
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value[o.itemValue] || value[o.newItemValue])) {
        value = value[o.itemValue] || value[o.newItemValue];
      }

      var item = this._getItem(value, o.itemValue) || this._getItem(value, o.newItemValue);

      if (!item) {
        return this;
      }

      this._removeItem(item[this.key])._renderItems();

      return this;
    }
  }, {
    key: 'emptyItems',
    value: function emptyItems() {
      this._vars.setItems = [];
      this._renderItems()._refreshInput().hideSuggestions();
      this.emit('change', this);
      return this;
    }
  }, {
    key: 'getSuggestedItems',
    value: function getSuggestedItems() {
      return this._vars.suggestedItems.map(function (item) {
        return _extends({}, item);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      this._html.container.classList.add('focused');
      if (!this._focused) this._html.input.focus();
      return this;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this._html.container.classList.remove('focused');
      if (this._focused) this._html.input.blur();
      return this;
    }
  }, {
    key: 'remove',
    value: function remove() {
      var html = this._html;

      html.container.parentElement.insertBefore(this.el, html.container);
      html.container.remove();
      this.el.style.display = 'block';

      if (Object.keys(_tokenfields).length === 1) {
        document.removeEventListener('mousedown', this._vars.events.onMouseDown);
        window.removeEventListener('resize', this._vars.events.onResize);
      }

      if (this._form && this._form.nodeName) {
        this._form.removeEventListener('reset', this._vars.events.onReset);
      }

      delete _tokenfields[this.id];
      delete this.el.tokenfield;
    }
  }]);

  return Tokenfield;
}(_events2.default);

exports.default = Tokenfield;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ajax;
/**
 * Simple AJAX handling module.
 * tokenfield 1.3.0 <https://github.com/KaneCohen/tokenfield>
 * Copyright 2018 Kane Cohen <https://github.com/KaneCohen>
 * Available under BSD-3-Clause license
 */
function ajax(params) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var xhr = new XMLHttpRequest();
  var url = options.url;
  var paramsArr = [];
  for (var key in params) {
    paramsArr.push(key + '=' + encodeURIComponent(params[key]));
  }

  var paramsString = paramsArr.join('&');

  if (options.type.toLowerCase() === 'get') {
    url += '?' + paramsString;
  }

  xhr.open(options.type, url, true);

  for (var header in options.headers) {
    var value = options.headers[header];
    if (typeof value === 'function') {
      value = value(params, options);
    }
    xhr.setRequestHeader(header, value);
  }

  if (callback) {
    xhr.onreadystatechange = callback;
  }

  xhr.send(params);

  return xhr;
}

/***/ })
/******/ ]);

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The kind of element that the Input should be rendered as
         */
        this.type = "text";
        /**
         * The pre-set value to pass to the input element
         */
        this.requirements = false;
        this.color = "theme";
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.placeholder = "Enter a value";
        this.readonly = false;
        this.autofocus = false;
        this.focused = false;
        this.spellcheck = true;
        this.maxlength = 1000;
        this.cols = 30;
        this.rows = 5;
        this.wrap = "soft";
        this.dateType = "month";
        this.step = 1;
        // Files
        this.multipleFileCaption = '{count} files';
        this.replace_placeholder = "Replace file";
        this.files = [];
        this.multiple = false;
        this.droppable = false;
        // Validation
        this.required = false;
        this.novalidate = false;
        this.icon = false;
        this.update = createEvent(this, "update", 7);
        this.focusing = createEvent(this, "focusing", 7);
        this.bluring = createEvent(this, "bluring", 7);
    }
    componentWillLoad() {
        if (this.default) {
            this.value = this.default;
        }
        if (this.match) {
            this.__match = document.querySelector(`stellar-input${this.match}`);
            if (!this.__match) {
                console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
            }
        }
        this.checkForIcon();
        if (this.type === "file") {
            this._prepareFileLabels();
        }
        this.validator = new Validator(this);
        if (this.type === "password" && this.value) {
            this.getStrongLevel();
        }
        this.generatedId = this.generateId();
    }
    componentDidLoad() {
        this.input = this.element.shadowRoot.querySelector('.input');
        if (this.type === "tags") {
            this.tokenField = new Tokenfield({
                el: this.input,
                delimiters: [","],
                addItemsOnPaste: true
            });
            this.tokenField.setItems(this.value);
        }
        if (this.is_date_type) {
            this.datepicker = TinyDatePicker(this.input, {
                type: this.dateType,
                mode: 'dp-below',
                format: (date) => { return moment(date).format(this.dateFormat); },
                parse: (date) => { return date ? moment(date).toDate() : moment().toDate(); }
            });
            this.datepicker.on('select', (_, dp) => {
                this.value = moment(dp.state.selectedDate).format(this.dateFormat);
            });
        }
    }
    get dateFormat() {
        if (this.dateType === "day") {
            return 'YYYY-MM-DD';
        }
        else if (this.dateType === "month") {
            return 'YYYY-MM';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    get visualDateFormat() {
        if (this.dateType === "day") {
            return 'MMMM D, YYYY';
        }
        else if (this.dateType === "month") {
            return 'MMMM, YYYY';
        }
        else if (this.dateType === "year") {
            return 'YYYY';
        }
    }
    async getDatePicker() {
        return this.datepicker;
    }
    get is_date_type() {
        return ["month", "date"].includes(this.type);
    }
    handleValueChange() {
        this.update.emit(this.value);
    }
    handleChange() {
        if (this.type === "file") {
            this.updateFilesArray();
            this.updateFileLabel();
        }
        this.update.emit(this.value);
    }
    handleFocus() {
        this.focused = true;
        this.focusing.emit({});
    }
    handleBlur() {
        this.focused = false;
        this.validate();
        this.bluring.emit({});
    }
    handleInput() {
        if (this.type === "textarea") {
            this.input.style.height = "1px";
            this.input.style.height = `${this.input.scrollHeight + 2}px`;
        }
        if (this.type !== "file") {
            if (this.type === "tags") {
                this.value = this.tokenField.getItems();
            }
            else {
                this.value = this.input.value;
            }
        }
        if (this.type === "password") {
            this.getStrongLevel();
        }
    }
    handleIncrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            this.input.stepUp();
            this.value = this.input.value;
        }
    }
    handleDecrement(event) {
        event.preventDefault();
        if (this.is_date_type) {
            // @ts-ignore
            this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
            this.datepicker.close();
        }
        else {
            this.input.stepDown();
            this.value = this.input.value;
        }
    }
    handleKeyDownIncrement(event) {
        if (event.keyCode === 13 || event.keyCode === 38) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                this.input.stepUp();
                this.value = this.input.value;
            }
        }
    }
    handleKeyDownDecrement(event) {
        if (event.keyCode === 13 || event.keyCode === 40) {
            event.preventDefault();
            if (this.is_date_type) {
                // @ts-ignore
                this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
                this.datepicker.close();
            }
            else {
                this.input.stepDown();
                this.value = this.input.value;
            }
        }
    }
    handleReset(event) {
        event.preventDefault();
        this.resetValue();
    }
    handleKeyDownEnter(event) {
        if (event.keyCode === 13) {
            const form = this.element.closest('stellar-form');
            form.submit_form();
        }
    }
    handleInputKeyDown(event) {
        this.handleKeyDownEnter(event);
    }
    handleKeyDownReset(event) {
        if (event.keyCode === 13) {
            this.resetValue();
        }
    }
    checkForIcon() {
        var element = this.element.querySelector('*[slot="icon"]');
        if (element) {
            this.icon = true;
        }
    }
    _prepareFileLabels() {
        if (this.type === "file" && this.multiple) {
            this.replace_placeholder = (this.replace_placeholder === "Replace file") ? "Replace files" : this.replace_placeholder;
        }
        this.placeholder = (!this.value) ? this.placeholder : this.replace_placeholder;
    }
    updateFileLabel() {
        var fileName = '';
        if (this.files && this.files.length > 1) {
            fileName = this.multipleFileCaption.replace('{count}', this.files.length.toString());
        }
        else {
            fileName = this.input.value.split('\\').pop();
        }
        if (fileName) {
            this._fileLabel = fileName;
        }
        else {
            this._fileLabel = undefined;
        }
        this.value = this.input.value;
        this._prepareFileLabels();
        this.validate();
    }
    updateFilesArray() {
        var files = [];
        if (this.type === "file" && this.multiple) {
            Array.from(this.input.files).forEach((file) => {
                var item = {
                    'name': file.name,
                    'size': file.size
                };
                files.push(item);
            });
        }
        else {
            files = this.input.files[0];
        }
        this.files = files;
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `input-${getRandomInt(0, 1000)}`;
    }
    async getId() {
        return this.generatedId;
    }
    async val() {
        return this.value;
    }
    async getStrength() {
        return this.strength;
    }
    async setStrength(value) {
        this.level = value;
    }
    async invalid(message, valid, level) {
        if (message) {
            this.status = { errors: [{ message: `${message}` }], valid: valid, level: level, value: this.value, name: this.name };
            this.level = level;
        }
        else {
            this.status = undefined;
        }
    }
    async validate() {
        if (this.novalidate) {
            return await this.validator.validate(this);
        }
        else {
            this.status = await this.validator.validate(this);
            return this.status;
        }
    }
    getStrongLevel() {
        const result = zxcvbn(this.value);
        this.strength = result;
        this.level = result.score;
        if (this.value.length === 0) {
            this.level = -1;
        }
    }
    resetValue() {
        this.__previousValue = this.value;
        this.value = undefined;
        this.input.focus();
    }
    handleKeyDown(event) {
        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            if (this.value === "") {
                this.value = this.__previousValue;
            }
        }
    }
    validateDarkColor() {
        const hexcolor = this.value;
        var r = parseInt(hexcolor.substr(1, 2), 16);
        var g = parseInt(hexcolor.substr(3, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        // Return new color if to dark, else return the original
        return (yiq > 150);
    }
    renderLabel() {
        if (this.label) {
            return (h("stellar-label", { for: this.generatedId, size: this.size }, this.label));
        }
    }
    renderColorPicker() {
        if (this.type === "color") {
            return (h("copy-wrap", { class: "color-picker", align: "center", "data-invert": this.validateDarkColor() }, h("stellar-label", { for: this.generatedId, size: this.size }, this.value)));
        }
    }
    renderSearch() {
        if (this.type === "search") {
            return (h("stellar-asset", { name: "search", class: "search", block: true }));
        }
    }
    renderIncrements() {
        if (hasIncrements(this.type)) {
            return (h("div", { class: "incrementing" }, h("a", { href: "#", onClick: (event) => this.handleIncrement(event), onKeyDown: (event) => this.handleKeyDownIncrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } }, h("stellar-asset", { name: "arrow-up", block: true })), h("a", { href: "#", onClick: (event) => this.handleDecrement(event), onKeyDown: (event) => this.handleKeyDownDecrement(event), onFocus: () => { this.handleFocus(); }, onBlur: () => { this.handleBlur(); } }, h("stellar-asset", { name: "arrow-down", block: true }))));
        }
    }
    renderPasswordStrength() {
        if (this.type === "password") {
            return this.renderPasswordStrengthSmile();
        }
    }
    renderPasswordStrengthSmile() {
        if (this.level === 5 || this.level === 4 || this.level === 3) {
            return h("stellar-asset", { class: "smile", name: "happy", "data-level": this.level });
        }
        else if (this.level === 2 || this.level === 1 || this.level === 0) {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": this.level });
        }
        else {
            return h("stellar-asset", { class: "smile", name: "sad", "data-level": "-1" });
        }
    }
    renderSearchClearButton() {
        if (this.type === "search" && hasValue(this.value)) {
            return (h("stellar-asset", { name: "close", class: "close", onClick: (event) => this.handleReset(event), onKeyDown: (event) => this.handleKeyDownReset(event), tabindex: "0", title: "Reset", block: true }));
        }
    }
    renderDatePicker() {
        if (isDatePicker(this.type)) {
            return (h("div", { class: "relative" }, h("div", { class: "fake-input absolute" }, moment(this.value).format(this.visualDateFormat)), h("input", { class: "input", id: this.generatedId, type: "text", value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleKeyDownIncrement(event); this.handleKeyDownDecrement(event); } })));
        }
    }
    renderInput() {
        if (shouldBeAnInput(this.type)) {
            return (h("input", { class: "input", id: this.generatedId, type: this.type, value: this.value, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, min: this.min, max: this.max, step: this.step, autocomplete: this.autocomplete || this.type, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: (event) => { this.handleInputKeyDown(event); } }));
        }
    }
    renderTextArea() {
        if (this.type === "textarea") {
            return (h("textarea", { class: "input", id: this.generatedId, placeholder: this.placeholder, name: this.name, cols: this.cols, maxlength: this.maxlength, rows: this.rows, disabled: this.disabled, readonly: this.readonly, autofocus: this.autofocus, spellcheck: this.spellcheck, required: this.required, onInput: () => this.handleInput(), onChange: () => this.handleChange(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }, this.value));
        }
    }
    renderFileUpload() {
        if (this.type === "file") {
            return (h("div", { class: "file-wrapper" }, h("div", { class: "upload-card" }, h("section", null, h("input", { class: "input", id: this.generatedId, type: this.type, name: this.name, placeholder: this.placeholder, required: this.required, maxlength: this.maxlength, autofocus: this.autofocus, readonly: this.readonly, disabled: this.disabled, onClick: (e) => { e.stopPropagation(); }, onInput: () => this.handleInput(), onChange: () => this.handleChange(), multiple: this.multiple, accept: this.accept, onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }), this._fileLabel && h("h3", null, this._fileLabel), h("h4", null, h("stellar-asset", { name: this._fileLabel ? "create" : "add-circle", class: "" }), this.placeholder), this.renderMultipleFileUploads()))));
        }
    }
    renderMultipleFileUploads() {
        if (this.multiple && this.files && this.files.length > 1) {
            return (h("ul", { class: "file-list" }, this.files.map((file) => h("li", null, h("p", null, file.name, " | ", h("stellar-unit", { value: file.size }))))));
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("stellar-label", { size: this.size, class: "validation" }, h("span", null, this.status.errors[this.status.errors.length - 1].message)));
        }
    }
    render() {
        return (h("div", { class: "wrapper" }, h("label", null, this.renderLabel(), h("div", { class: "content" }, h("div", { class: "icon" }, h("slot", { name: "icon" })), this.renderDatePicker(), this.renderColorPicker(), this.renderSearch(), this.renderInput(), this.renderTextArea(), this.renderFileUpload(), this.renderIncrements(), this.renderSearchClearButton(), this.renderPasswordStrength(), this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)), this.description && h("stellar-label", { size: "small", underneath: true }, this.description)), this.renderErrors()));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:auto;max-width:100%;--font-size:var(--ms0);--complementing-font-size:var(--ms-1);--height:3em;--padding:0 1em;--background:var(--white);--color:var(--black);--icon-color:var(--gray4);--border-color:var(--gray2);--border:1px solid var(--border-color);--line-height:var(--ms6);--border-radius:0.3rem;--validation-spacing:var(--ms-2)}:host([type=hidden]){display:none}:host([icon]){--padding:0 1em 0 3em}:host([size=tiny]){--font-size:var(--ms-2);--complementing-font-size:var(--ms-3);--line-height:var(--ms4);--padding:0 var(--ms-2);--validation-spacing:var(--ms-8)}:host([size=small]){--font-size:var(--ms-1);--complementing-font-size:var(--ms-2);--line-height:var(--ms5);--padding:0 var(--ms-1);--validation-spacing:var(--ms-5)}:host([size=medium]){--font-size:var(--ms1);--complementing-font-size:var(--ms0);--line-height:var(--ms7);--padding:0 var(--ms1);--validation-spacing:var(--ms-1)}:host([size=large]){--font-size:var(--ms2);--complementing-font-size:var(--ms1);--line-height:calc(var(--ms8) - 0.5em);--padding:0 var(--ms2);--validation-spacing:var(--ms0)}:host ::-moz-selection{background:var(--theme-base2)!important}:host ::selection{background:var(--theme-base2)!important}:host([type=textarea]) .wrapper{max-width:100%}:host .content{position:relative}:host stellar-tooltip{width:calc(100% - 1.5em)}:host .fake-input,:host .tags-input,:host input,:host textarea{appearance:none;-webkit-appearance:none;display:-ms-flexbox;display:flex;outline:0;border:var(--border);border-radius:var(--border-radius);width:100%;color:var(--color);font-weight:500;-moz-appearance:none}:host .fake-input{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);background:var(--background);border-radius:var(--border-radius);font-size:var(--font-size);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--padding);color:var(--color);font-weight:500;pointer-events:none;border:none}:host(.db) .fake-input,:host(.db) .tags-input,:host(.db) input,:host(.db) textarea,:host(.di) .fake-input,:host(.di) .tags-input,:host(.di) input,:host(.di) textarea,:host(.dib) .fake-input,:host(.dib) .tags-input,:host(.dib) input,:host(.dib) textarea{width:auto}:host .tags-input::-moz-focus-inner,:host input::-moz-focus-inner,:host textarea::-moz-focus-inner{border:0;padding:0}:host .tags-input::-webkit-inner-spin-button,:host .tags-input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host input::-webkit-outer-spin-button,:host textarea::-webkit-inner-spin-button,:host textarea::-webkit-outer-spin-button{-webkit-appearance:none}:host input{-webkit-box-sizing:inherit;box-sizing:inherit;background:var(--background);outline:0;padding:var(--padding);height:var(--height);overflow:hidden;line-height:calc(var(--line-height) - .2em);font-size:var(--font-size)}:host input[disabled]{background:var(--gray0)}:host input[type=file]{position:absolute;opacity:0;background:transparent;width:100%;height:100%;top:0;left:0}:host textarea{resize:vertical;outline:0;background:var(--background);padding:var(--padding);padding-top:.5em;padding-bottom:.5em;min-height:calc(var(--height) * 1.25);max-height:10em;line-height:1.47;font-size:var(--font-size)}:host label{display:block}:host([focused]) .input{--border:1px solid var(--theme-base5);-webkit-box-shadow:inset 0 0 0 1px var(--theme-base5);box-shadow:inset 0 0 0 1px var(--theme-base5)}:host .search{cursor:pointer;display:-ms-flexbox;display:flex;position:absolute;top:0;bottom:0;left:.25em;font-size:calc(var(--font-size) + var(--complementing-font-size))}:host .smile{position:absolute;top:50%;right:.5rem;-webkit-transition:background .1s ease 0s,-webkit-transform .5s ease 0s;transition:background .1s ease 0s,-webkit-transform .5s ease 0s;transition:background .1s ease 0s,transform .5s ease 0s;transition:background .1s ease 0s,transform .5s ease 0s,-webkit-transform .5s ease 0s;-webkit-transform:scale(0) translateY(-50%);transform:scale(0) translateY(-50%);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:0;color:var(--icon-color);font-size:calc(var(--font-size) * 2);line-height:0;background:var(--background)}:host([type=password]) input{padding-right:4rem}:host .icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-left:.5rem;color:var(--icon-color)}:host .icon,:host ::slotted(stellar-asset[slot=icon]){font-size:calc(var(--font-size) * 2);width:calc(var(--font-size) * 2);height:calc(var(--font-size) * 2)}:host .smile[data-level=\"0\"]{-webkit-transform:scale(.7) translateY(-50%);transform:scale(.7) translateY(-50%);opacity:1;color:var(--red5)}:host .smile[data-level=\"1\"]{-webkit-transform:scale(.85) translateY(-50%);transform:scale(.85) translateY(-50%);opacity:1;color:var(--orange5)}:host .smile[data-level=\"2\"]{-webkit-transform:scale(.9) translateY(-50%);transform:scale(.9) translateY(-50%);opacity:1;color:var(--yellow5)}:host .smile[data-level=\"3\"]{-webkit-transform:scale(.95) translateY(-50%);transform:scale(.95) translateY(-50%);opacity:1;color:var(--green5)}:host .smile[data-level=\"4\"]{-webkit-transform:scale(1) translateY(-50%);transform:scale(1) translateY(-50%);opacity:1;color:var(--blue5)}:host .validation{text-align:left;margin-bottom:0;color:var(--red5);font-weight:500}:host .validation span{display:block;padding:var(--validation-spacing) 0 0;line-height:1.4}:host .validation span+span{border-top:1px solid var(--theme-base1)}:host .incrementing{display:-ms-flexbox;display:flex;position:absolute;top:1px;right:1px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;border-radius:0 var(--border-radius) var(--border-radius) 0;overflow:hidden;background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(50%,var(--background)));background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--background) 50%);width:1.5rem;height:calc(100% - 2px);border-left:1px solid var(--border-color)}:host([focused]) .incrementing{border-left:2px solid var(--theme-base5)}:host([focused]) .incrementing a{border:1px solid var(--theme-base5);border-width:1px 1px 1px 0}:host .incrementing:after{content:\"\";background:var(--border-color);height:1px;width:100%;position:absolute;top:calc(50% - .5px)}:host([focused]) .incrementing:after{height:2px;top:calc(50% - 1px);background:var(--theme-base5)}:host .incrementing a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:50%;color:var(--theme-base5);outline:0}:host .incrementing a:focus,:host .incrementing a:hover{background:var(--theme-base1);color:var(--theme-base7)}:host([size=small]) :host .incrementing{width:1rem}:host([size=small]) :host .incrementing a:first-child{padding-top:.25rem}:host([size=small]) :host .incrementing a:last-child{padding-bottom:.25rem}:host([type=search]) .input{padding-left:3em!important}:host([size=small][type=search]) .input{padding-left:2.5em!important}:host([type=search]) .input::-webkit-search-cancel-button{display:none}:host([type=search]) stellar-asset{color:var(--theme-base5)}:host([type=search]) stellar-asset.search{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:calc(var(--font-size) * 2)}:host([size=small][type=search]) stellar-asset.search{top:calc(50% - .125em);left:.25em}:host([type=search]) stellar-asset.close{cursor:pointer;position:absolute;top:50%;right:.25em;-webkit-transform:translateY(-50%);transform:translateY(-50%);outline:0;color:var(--red5);font-size:calc(var(--font-size) * 2);width:calc(var(--font-size) * 2);height:calc(var(--font-size) * 2)}:host([type=search]) stellar-asset.close:focus,:host([type=search]) stellar-asset.close:hover{color:var(--red5)}:host([type=search]) label[focused=true] stellar-asset.search{color:var(--theme-base2)}:host([size=small][type=search]) input{padding-left:25px}:host .title{margin-top:10px}:host .tokenfield{position:relative}:host .tokenfield:after,:host .tokenfield:before{content:\" \";display:table}:host .tokenfield:after{clear:both}:host .tokenfield.tokenfield-mode-tokens{display:block;border:var(--border);border-radius:var(--border-radius);background-color:var(--background);background-image:none;padding:0 1rem;width:100%;min-height:var(--height);line-height:1.42857;color:var(--theme-base9);font-size:var(--complementing-font-size)}:host .tokenfield.tokenfield-mode-tokens[disabled],:host .tokenfield.tokenfield-mode-tokens[readonly],:host fieldset[disabled] .tokenfield.tokenfield-mode-tokens{opacity:1;background-color:var(--theme-base2)}:host .tokenfield.tokenfield-mode-tokens[disabled],:host fieldset[disabled] .tokenfield.tokenfield-mode-tokens{cursor:not-allowed}:host .tokenfield.tokenfield-mode-tokens .focused{background:var(--theme-base7);color:var(--background)}:host .tokenfield.tokenfield-mode-tokens .focused .item-remove{color:var(--background)}:host .tokenfield.tokenfield-mode-tokens .selected{background:rgba(0,0,0,.1)}:host .tokenfield .tokenfield-set>ul{margin:0;padding:0;list-style-type:none}:host .tokenfield .tokenfield-set>ul>li{cursor:pointer;float:left;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-right:.5em;margin-top:.5em;border-radius:100em;background:var(--theme-base5);padding:.125em 1em;height:1.75rem;line-height:1;color:var(--white)}:host .tokenfield .tokenfield-set>ul>li:hover{background:var(--theme-base7);color:var(--theme-base0)}:host .tokenfield .tokenfield-set>ul>li .item-remove{cursor:pointer;display:inline-block;margin-left:.4em;height:0;text-decoration:none;line-height:0;color:var(--white);font-size:var(--complementing-font-size);top:-2px;position:relative}:host .tokenfield .tokenfield-input{outline:none;border:none;padding:1rem 0;max-width:100%;width:100%!important;height:auto}:host .tokenfield .tokenfield-suggest{-webkit-box-sizing:content-box;box-sizing:content-box;position:absolute;top:100%;left:-1px;z-index:10;border:1px solid var(--theme-base0);border-radius:4px;-webkit-box-shadow:0 6px 12px var(--theme-base1);box-shadow:0 6px 12px var(--theme-base1);background-color:var(--background);width:100%;overflow:auto}:host .tokenfield .tokenfield-suggest>ul{margin:0;padding:0;list-style:none}:host .tokenfield .tokenfield-suggest>ul>li{cursor:pointer;padding:6px 10px}:host .file-wrapper,:host .file-wrapper input{cursor:pointer}:host .file-wrapper h3,:host .file-wrapper h4{margin:0;width:100%;text-align:center;max-width:100%;text-overflow:ellipsis;white-space:wrap;color:inherit;font-size:1.2rem;font-weight:500}:host .file-wrapper h3{font-size:1.6rem;margin-bottom:.4em}:host .file-wrapper h4 stellar-asset{display:inline-block;top:3px;left:-3px;position:relative}:host .file-wrapper .upload-card{background:var(--theme-base5);min-height:auto;color:var(--background);padding:2rem}:host .file-list{margin:3rem 0 0;padding:0;list-style-type:none}:host .file-list li{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .file-list li:nth-of-type(odd){background:var(--icon-color)}:host .file-list li a,:host .file-list li p{margin:0;padding:1rem;font-size:1.4rem;font-weight:400}:host .file-list li a{min-width:3.2rem;color:var(--black)}:host .file-list li a :focus,:host .file-list li a :hover{color:var(--theme-base5)}:host([dark]){--border-color:var(--gray9);--background:var(--black-alt);--color:var(--white);--icon-color:var(--gray6)}:host([dark]) .tokenfield.tokenfield-mode-tokens .focused{background:var(--theme-base7)}:host([dark]) .tokenfield .tokenfield-set>ul>li{background:var(--theme-base9)}"; }
};
Tunnel.injectProps(Input, ['dark']);

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

var lodash__objecttypes = objectTypes;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && lodash__objecttypes[typeof value]);
}

var lodash_isobject = isObject;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);

var lodash__renative = reNative;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used for native method references */
var objectProto$1 = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 */
var shimKeys = function(object) {
  var index, iterable = object, result = [];
  if (!iterable) return result;
  if (!(lodash__objecttypes[typeof object])) return result;
    for (index in iterable) {
      if (hasOwnProperty.call(iterable, index)) {
        result.push(index);
      }
    }
  return result
};

var lodash__shimkeys = shimKeys;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = lodash__renative.test(nativeKeys = Object.keys) && nativeKeys;

/**
 * Creates an array composed of the own enumerable property names of an object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? lodash__shimkeys : function(object) {
  if (!lodash_isobject(object)) {
    return [];
  }
  return nativeKeys(object);
};

var lodash_keys = keys;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // no operation performed
}

var lodash_noop = noop;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = lodash__renative.test(nativeCreate = Object.create) && nativeCreate;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(prototype, properties) {
  return lodash_isobject(prototype) ? nativeCreate(prototype) : {};
}
// fallback for browsers without `Object.create`
if (!nativeCreate) {
  baseCreate = (function() {
    function Object() {}
    return function(prototype) {
      if (lodash_isobject(prototype)) {
        Object.prototype = prototype;
        var result = new Object;
        Object.prototype = null;
      }
      return result || commonjsGlobal.Object();
    };
  }());
}

var lodash__basecreate = baseCreate;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used as the property descriptor for `__bindData__` */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Used to set meta data on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = lodash__renative.test(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {Array} value The data array to set.
 */
var setBindData = !defineProperty ? lodash_noop : function(func, value) {
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
};

var lodash__setbinddata = setBindData;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(bindData) {
  var func = bindData[0],
      partialArgs = bindData[2],
      thisArg = bindData[4];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      var args = partialArgs.slice();
      push.apply(args, arguments);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = lodash__basecreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return lodash_isobject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  lodash__setbinddata(bound, bindData);
  return bound;
}

var lodash__basebind = baseBind;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used instead of `Array#slice` to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|string} collection The collection to slice.
 * @param {number} start The start index.
 * @param {number} end The end index.
 * @returns {Array} Returns the new array.
 */
function slice(array, start, end) {
  start || (start = 0);
  if (typeof end == 'undefined') {
    end = array ? array.length : 0;
  }
  var index = -1,
      length = end - start || 0,
      result = Array(length < 0 ? 0 : length);

  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}

var lodash__slice = slice;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef$1 = [];

/** Native method shortcuts */
var push$1 = arrayRef$1.push;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(bindData) {
  var func = bindData[0],
      bitmask = bindData[1],
      partialArgs = bindData[2],
      partialRightArgs = bindData[3],
      thisArg = bindData[4],
      arity = bindData[5];

  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      key = func;

  function bound() {
    var thisBinding = isBind ? thisArg : this;
    if (partialArgs) {
      var args = partialArgs.slice();
      push$1.apply(args, arguments);
    }
    if (partialRightArgs || isCurry) {
      args || (args = lodash__slice(arguments));
      if (partialRightArgs) {
        push$1.apply(args, partialRightArgs);
      }
      if (isCurry && args.length < arity) {
        bitmask |= 16 & ~32;
        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
      }
    }
    args || (args = arguments);
    if (isBindKey) {
      func = thisBinding[key];
    }
    if (this instanceof bound) {
      thisBinding = lodash__basecreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return lodash_isobject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  lodash__setbinddata(bound, bindData);
  return bound;
}

var lodash__basecreatewrapper = baseCreateWrapper;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

var lodash_isfunction = isFunction;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef$2 = [];

/** Native method shortcuts */
var push$2 = arrayRef$2.push;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32;

  if (!isBindKey && !lodash_isfunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData && bindData !== true) {
    bindData = bindData.slice();

    // set `thisBinding` is not previously bound
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    // set if previously bound but not currently (subsequent curried functions)
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    // set curried arity if not yet set
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    // append partial left arguments
    if (isPartial) {
      push$2.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    // append partial right arguments
    if (isPartialRight) {
      push$2.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    // merge flags
    bindData[1] |= bitmask;
    return createWrapper.apply(null, bindData);
  }
  // fast path for `_.bind`
  var creater = (bitmask == 1 || bitmask === 17) ? lodash__basebind : lodash__basecreatewrapper;
  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
}

var lodash__createwrapper = createWrapper;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'fred' }, 'hi');
 * func();
 * // => 'hi fred'
 */
function bind(func, thisArg) {
  return arguments.length > 2
    ? lodash__createwrapper(func, 17, lodash__slice(arguments, 2), null, thisArg)
    : lodash__createwrapper(func, 1, null, null, thisArg);
}

var lodash_bind = bind;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

var lodash_identity = identity;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if functions can be decompiled by `Function#toString`
 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcDecomp = !lodash__renative.test(commonjsGlobal.WinRTError) && reThis.test(function() { return this; });

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

var lodash_support = support;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/** Used to detected named functions */
var reFuncName = /^\s*function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis$1 = /\bthis\b/;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return lodash_identity;
  }
  // exit early for no `thisArg` or already bound by `Function#bind`
  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
    return func;
  }
  var bindData = func.__bindData__;
  if (typeof bindData == 'undefined') {
    if (lodash_support.funcNames) {
      bindData = !func.name;
    }
    bindData = bindData || !lodash_support.funcDecomp;
    if (!bindData) {
      var source = fnToString.call(func);
      if (!lodash_support.funcNames) {
        bindData = !reFuncName.test(source);
      }
      if (!bindData) {
        // checks if `func` references the `this` keyword and stores the result
        bindData = reThis$1.test(source);
        lodash__setbinddata(func, bindData);
      }
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData === false || (bindData !== true && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return lodash_bind(func, thisArg);
}

var lodash__basecreatecallback = baseCreateCallback;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Iterates over own enumerable properties of an object, executing the callback
 * for each property. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, key, object). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
 *   console.log(key);
 * });
 * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
 */
var forOwn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!lodash__objecttypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : lodash__basecreatecallback(callback, thisArg, 3);
    var ownIndex = -1,
        ownProps = lodash__objecttypes[typeof iterable] && lodash_keys(iterable),
        length = ownProps ? ownProps.length : 0;

    while (++ownIndex < length) {
      index = ownProps[ownIndex];
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

var lodash_forown = forOwn;

/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */


/**
 * Iterates over elements of a collection, executing the callback for each
 * element. The callback is bound to `thisArg` and invoked with three arguments;
 * (value, index|key, collection). Callbacks may exit iteration early by
 * explicitly returning `false`.
 *
 * Note: As with other "Collections" methods, objects with a `length` property
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
 * may be used for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
 * // => logs each number and returns '1,2,3'
 *
 * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
 * // => logs each number and returns the object (property order is not guaranteed across environments)
 */
function forEach(collection, callback, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0;

  callback = callback && typeof thisArg == 'undefined' ? callback : lodash__basecreatecallback(callback, thisArg, 3);
  if (typeof length == 'number') {
    while (++index < length) {
      if (callback(collection[index], index, collection) === false) {
        break;
      }
    }
  } else {
    lodash_forown(collection, callback);
  }
  return collection;
}

var lodash_foreach = forEach;

var metric,
imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters'
    },
    to_anchor: 1/1000
  },
  cm: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters'
    },
    to_anchor: 1/100
  },
  m: {
    name: {
      singular: 'Meter',
      plural: 'Meters'
    },
    to_anchor: 1
  },
  km: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers'
    },
    to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch',
      plural: 'Inches'
    },
    to_anchor: 1/12
  },
  yd: {
    name: {
      singular: 'Yard',
      plural: 'Yards'
    },
    to_anchor: 3
  },
  'ft-us': {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet'
    },
    to_anchor: 1.000002
  },
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet'
    },
    to_anchor: 1
  },
  mi: {
    name: {
      singular: 'Mile',
      plural: 'Miles'
    },
    to_anchor: 5280
  }
};

var length = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'm',
      ratio: 3.28084
    },
    imperial: {
      unit: 'ft',
      ratio: 1/3.28084
    }
  }
};

var metric$1
  , imperial$1;

metric$1 = {
  mm2: {
    name: {
      singular: 'Square Millimeter'
    , plural: 'Square Millimeters'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Square Meter'
    , plural: 'Square Meters'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hectare'
    , plural: 'Hectares'
    }
  , to_anchor: 10000
  }
, km2: {
    name: {
      singular: 'Square Kilometer'
    , plural: 'Square Kilometers'
    }
  , to_anchor: 1000000
  }
};

imperial$1 = {
  'in2': {
    name: {
      singular: 'Square Inch'
    , plural: 'Square Inches'
    }
  , to_anchor: 1/144
  }
, yd2: {
    name: {
      singular: 'Square Yard'
    , plural: 'Square Yards'  
    }
  , to_anchor: 9
  }
, ft2: {
    name: {
      singular: 'Square Foot'
    , plural: 'Square Feet'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Acre'
    , plural: 'Acres'
    }
  , to_anchor: 43560
  }
, mi2: {
    name: {
      singular: 'Square Mile'
    , plural: 'Square Miles'
    }
  , to_anchor: 27878400
  }
};

var area = {
  metric: metric$1
, imperial: imperial$1
, _anchors: {
    metric: {
      unit: 'm2'
    , ratio: 10.7639
    }
  , imperial: {
      unit: 'ft2'
    , ratio: 1/10.7639
    }
  }
};

var metric$2
  , imperial$2;

metric$2 = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
}
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000000
  }
};

imperial$2 = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
}, t: {
  name: {
    singular: 'Ton',
    plural: 'Tons',
  },
    to_anchor: 2000,
  },
};

var mass = {
  metric: metric$2
, imperial: imperial$2
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};

var metric$3
  , imperial$3;

metric$3 = {
  mm3: {
      name: {
        singular: 'Cubic Millimeter'
      , plural: 'Cubic Millimeters'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Cubic Centimeter'
    , plural: 'Cubic Centimeters'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Centilitre'
    , plural: 'Centilitres'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Decilitre'
    , plural: 'Decilitres'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
, kl: {
    name: {
      singular: 'Kilolitre'
    , plural: 'Kilolitres'
    }
  , to_anchor: 1000
  }
, m3: {
    name: {
      singular: 'Cubic meter'
    , plural: 'Cubic meters'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Cubic kilometer'
    , plural: 'Cubic kilometers'
    }
  , to_anchor: 1000000000000
  }

// Swedish units
, krm: {
  name: {
    singular: 'Matsked'
    , plural: 'Matskedar'
  }
  , to_anchor: 1/1000
}
, tsk: {
    name: {
      singular: 'Tesked'
    , plural: 'Teskedar'
    }
  , to_anchor: 5/1000
  }
, msk: {
    name: {
      singular: 'Matsked'
      , plural: 'Matskedar'
    }
    , to_anchor: 15/1000
  }
, kkp: {
    name: {
      singular: 'Kaffekopp'
      , plural: 'Kaffekoppar'
    }
    , to_anchor: 150/1000
  }
, glas: {
    name: {
      singular: 'Glas'
      , plural: 'Glas'
    }
    , to_anchor: 200/1000
  }
, kanna: {
    name: {
      singular: 'Kanna'
    , plural: 'Kannor'
    }
  , to_anchor: 2.617
  }
};

imperial$3 = {
  tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Cubic inch'
    , plural: 'Cubic inches'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Cubic foot'
    , plural: 'Cubic feet'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Cubic yard'
    , plural: 'Cubic yards'
    }
  , to_anchor: 25852.7
  }
};

var volume = {
  metric: metric$3
, imperial: imperial$3
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};

var metric$4
  ;

metric$4 = {
  ea: {
    name: {
      singular: 'Each'
    , plural: 'Each'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Dozen'
    , plural: 'Dozens'
    }
  , to_anchor: 12
  }
};

var each = {
  metric: metric$4
, imperial: {}
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};

var metric$5
  , imperial$4;

metric$5 = {
  C: {
    name: {
      singular: 'degree Celsius'
    , plural: 'degrees Celsius'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'degree Kelvin'
    , plural: 'degrees Kelvin'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial$4 = {
  F: {
    name: {
      singular: 'degree Fahrenheit'
    , plural: 'degrees Fahrenheit'
    }
  , to_anchor: 1
  },
  R: {
    name: {
      singular: 'degree Rankine'
    , plural: 'degrees Rankine'
    }
  , to_anchor: 1
  , anchor_shift: 459.67
  }
};

var temperature = {
  metric: metric$5
, imperial: imperial$4
, _anchors: {
    metric: {
      unit: 'C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: 'F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};

var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'Nanosecond'
    , plural: 'Nanoseconds'
    }
  , to_anchor: 1/1000000000
  }
, mu: {
    name: {
      singular: 'Microsecond'
    , plural: 'Microseconds'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 60 * 60 
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear
  }
};


var time_1 = {
  metric: time 
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};

var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1024
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1048576
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1073741824
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1024
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1048576
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1073741824
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1099511627776
  }
};

var digital = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};

var metric$6
  ;

metric$6 = {
  ppm: {
    name: {
      singular: 'Part-per Million'
      , plural: 'Parts-per Million'
    }
    , to_anchor: 1
  }
  , ppb: {
    name: {
      singular: 'Part-per Billion'
      , plural: 'Parts-per Billion'
    }
    , to_anchor: .001
  }
  , ppt: {
    name: {
      singular: 'Part-per Trillion'
      , plural: 'Parts-per Trillion'
    }
    , to_anchor: .000001
  }
  , ppq: {
    name: {
      singular: 'Part-per Quadrillion'
      , plural: 'Parts-per Quadrillion'
    }
    , to_anchor: .000000001
  }
};

var partsPer = {
  metric: metric$6
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'ppm'
      , ratio: .000001
    }
  }
};

var metric$7
  , imperial$5;

metric$7 = {
  'm/s': {
    name: {
      singular: 'Metre per second'
    , plural: 'Metres per second'
    }
  , to_anchor: 3.6
  }
, 'km/h': {
    name: {
      singular: 'Kilometre per hour'
    , plural: 'Kilometres per hour'
    }
  , to_anchor: 1
  }
};

  imperial$5 = {
    'm/h': {
      name: {
        singular: 'Mile per hour'
      , plural: 'Miles per hour'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Knot'
      , plural: 'Knots'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Foot per second'
      , plural: 'Feet per second'
      }
    , to_anchor: 0.681818
      }
};

var speed = {
  metric: metric$7
, imperial: imperial$5
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'm/h'
    , ratio: 1.609344
    }
  }
};

var metric$8
  , imperial$6;

metric$8 = {
  'min/km': {
    name: {
      singular: 'Minute per kilometre'
    , plural: 'Minutes per kilometre'
    }
  , to_anchor: 0.06
  }
  ,'s/m': {
    name: {
      singular: 'Second per metre'
    , plural: 'Seconds per metre'
    }
  , to_anchor: 1
  }
};

imperial$6 = {
    'min/mi': {
      name: {
        singular: 'Minute per mile'
      , plural: 'Minutes per mile'
      }
    , to_anchor: 0.0113636
   }
   , 's/ft': {
      name: {
        singular: 'Second per foot'
      , plural: 'Seconds per foot'
      }
    , to_anchor: 1
   }
};

var pace = {
  metric: metric$8
, imperial: imperial$6
, _anchors: {
    metric: {
      unit: 's/m'
    , ratio: 0.3048
    }
  , imperial: {
      unit: 's/ft'
    , ratio: 1/0.3048
    }
  }
};

var metric$9
  , imperial$7;

metric$9 = {
  Pa: {
    name: {
      singular: 'pascal'
    , plural: 'pascals'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'kilopascal'
    , plural: 'kilopascals'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'megapascal'
    , plural: 'megapascals'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'hectopascal'
    , plural: 'hectopascals'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'bar'
    , plural: 'bar'
    }
  , to_anchor: 100
  }
, torr: {
    name: {
      singular: 'torr'
    , plural: 'torr'
    }
  , to_anchor: 101325/760000
  }
};

imperial$7 = {
  psi: {
    name: {
      singular: 'pound per square inch'
    , plural: 'pounds per square inch'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'kilopound per square inch'
    , plural: 'kilopound per square inch'
    }
  , to_anchor: 1
  }
};

var pressure = {
  metric: metric$9
, imperial: imperial$7
, _anchors: {
    metric: {
      unit: 'kPa'
    , ratio: 0.00014503768078
    }
  , imperial: {
      unit: 'psi'
    , ratio: 1/0.00014503768078
    }
  }
};

var current;

current = {
  A: {
    name: {
      singular: 'Ampere'
    , plural: 'Amperes'
    }
  , to_anchor: 1
  }
, mA: {
    name: {
      singular: 'Milliampere'
      , plural: 'Milliamperes'
    }
    , to_anchor: .001
  }
, kA: {
    name: {
      singular: 'Kiloampere'
    , plural: 'Kiloamperes'
    }
  , to_anchor: 1000
  }
};

var current_1 = {
  metric: current
, _anchors: {
    metric: {
      unit: 'A'
    , ratio: 1
    }
  }
};

var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt'
    , plural: 'Volts'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt'
      , plural: 'Millivolts'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt'
    , plural: 'Kilovolts'
    }
  , to_anchor: 1000
  }
};

var voltage_1 = {
  metric: voltage
, _anchors: {
    metric: {
      unit: 'V'
    , ratio: 1
    }
  }
};

var power;

power = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
};

var power_1 = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};

var reactivePower;

reactivePower = {
  VAR: {
    name: {
      singular: 'Volt-Ampere Reactive'
    , plural: 'Volt-Amperes Reactive'
    }
  , to_anchor: 1
  }
, mVAR: {
    name: {
      singular: 'Millivolt-Ampere Reactive'
      , plural: 'Millivolt-Amperes Reactive'
    }
    , to_anchor: .001
  }
, kVAR: {
    name: {
      singular: 'Kilovolt-Ampere Reactive'
    , plural: 'Kilovolt-Amperes Reactive'
    }
  , to_anchor: 1000
  }
, MVAR: {
    name: {
      singular: 'Megavolt-Ampere Reactive'
    , plural: 'Megavolt-Amperes Reactive'
    }
  , to_anchor: 1000000
  }
, GVAR: {
    name: {
      singular: 'Gigavolt-Ampere Reactive'
    , plural: 'Gigavolt-Amperes Reactive'
    }
  , to_anchor: 1000000000
  }
};

var reactivePower_1 = {
  metric: reactivePower
, _anchors: {
    metric: {
      unit: 'VAR'
    , ratio: 1
    }
  }
};

var apparentPower;

apparentPower = {
  VA: {
    name: {
      singular: 'Volt-Ampere'
    , plural: 'Volt-Amperes'
    }
  , to_anchor: 1
  }
, mVA: {
    name: {
      singular: 'Millivolt-Ampere'
      , plural: 'Millivolt-Amperes'
    }
    , to_anchor: .001
  }
, kVA: {
    name: {
      singular: 'Kilovolt-Ampere'
    , plural: 'Kilovolt-Amperes'
    }
  , to_anchor: 1000
  }
, MVA: {
    name: {
      singular: 'Megavolt-Ampere'
    , plural: 'Megavolt-Amperes'
    }
  , to_anchor: 1000000
  }
, GVA: {
    name: {
      singular: 'Gigavolt-Ampere'
    , plural: 'Gigavolt-Amperes'
    }
  , to_anchor: 1000000000
  }
};

var apparentPower_1 = {
  metric: apparentPower
, _anchors: {
    metric: {
      unit: 'VA'
    , ratio: 1
    }
  }
};

var energy;

energy = {
  Wh: {
    name: {
      singular: 'Watt-hour'
    , plural: 'Watt-hours'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Milliwatt-hour'
      , plural: 'Milliwatt-hours'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilowatt-hour'
    , plural: 'Kilowatt-hours'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megawatt-hour'
    , plural: 'Megawatt-hours'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigawatt-hour'
    , plural: 'Gigawatt-hours'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joules'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilojoule'
    , plural: 'Kilojoules'
    }
  , to_anchor: 1000
  }
};

var energy_1 = {
  metric: energy
, _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1
    }
  }
};

var reactiveEnergy;

reactiveEnergy = {
  VARh: {
    name: {
      singular: 'Volt-Ampere Reactive Hour'
    , plural: 'Volt-Amperes Reactive Hour'
    }
  , to_anchor: 1
  }
, mVARh: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour'
      , plural: 'Millivolt-Amperes Reactive Hour'
    }
    , to_anchor: .001
  }
, kVARh: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour'
    , plural: 'Kilovolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000
  }
, MVARh: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour'
    , plural: 'Megavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000
  }
, GVARh: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour'
    , plural: 'Gigavolt-Amperes Reactive Hour'
    }
  , to_anchor: 1000000000
  }
};

var reactiveEnergy_1 = {
  metric: reactiveEnergy
, _anchors: {
    metric: {
      unit: 'VARh'
    , ratio: 1
    }
  }
};

var metric$a
  , imperial$8;

metric$a = {
  'mm3/s': {
      name: {
        singular: 'Cubic Millimeter per second'
      , plural: 'Cubic Millimeters per second'
      }
    , to_anchor: 1/1000000
  }
, 'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second'
    , plural: 'Cubic Centimeters per second'
    }
  , to_anchor: 1/1000
  }
, 'ml/s': {
    name: {
      singular: 'Millilitre per second'
    , plural: 'Millilitres per second'
    }
  , to_anchor: 1/1000
  }
, 'cl/s': {
    name: {
      singular: 'Centilitre per second'
    , plural: 'Centilitres per second'
    }
  , to_anchor: 1/100
  }
, 'dl/s': {
    name: {
      singular: 'Decilitre per second'
    , plural: 'Decilitres per second'
    }
  , to_anchor: 1/10
  }
, 'l/s': {
    name: {
      singular: 'Litre per second'
    , plural: 'Litres per second'
    }
  , to_anchor: 1
  }
, 'l/min': {
    name: {
      singular: 'Litre per minute'
    , plural: 'Litres per minute'
    }
  , to_anchor: 1/60
  }
, 'l/h': {
    name: {
      singular: 'Litre per hour'
    , plural: 'Litres per hour'
    }
  , to_anchor: 1/3600
  }
, 'kl/s': {
    name: {
      singular: 'Kilolitre per second'
    , plural: 'Kilolitres per second'
    }
  , to_anchor: 1000
  }
, 'kl/min': {
    name: {
      singular: 'Kilolitre per minute'
    , plural: 'Kilolitres per minute'
    }
  , to_anchor: 50/3
  }
, 'kl/h': {
    name: {
      singular: 'Kilolitre per hour'
    , plural: 'Kilolitres per hour'
    }
  , to_anchor: 5/18
  }
, 'm3/s': {
    name: {
      singular: 'Cubic meter per second'
    , plural: 'Cubic meters per second'
    }
  , to_anchor: 1000
  }
, 'm3/min': {
    name: {
      singular: 'Cubic meter per minute'
    , plural: 'Cubic meters per minute'
    }
  , to_anchor: 50/3
  }
, 'm3/h': {
    name: {
      singular: 'Cubic meter per hour'
    , plural: 'Cubic meters per hour'
    }
  , to_anchor: 5/18
  }
, 'km3/s': {
    name: {
      singular: 'Cubic kilometer per second'
    , plural: 'Cubic kilometers per second'
    }
  , to_anchor: 1000000000000
  }
};

imperial$8 = {
  'tsp/s': {
    name: {
      singular: 'Teaspoon per second'
    , plural: 'Teaspoons per second'
    }
  , to_anchor: 1/6
  }
, 'Tbs/s': {
    name: {
      singular: 'Tablespoon per second'
    , plural: 'Tablespoons per second'
    }
  , to_anchor: 1/2
  }
, 'in3/s': {
    name: {
      singular: 'Cubic inch per second'
    , plural: 'Cubic inches per second'
    }
  , to_anchor: 0.55411
  }
, 'in3/min': {
    name: {
      singular: 'Cubic inch per minute'
    , plural: 'Cubic inches per minute'
    }
  , to_anchor: 0.55411/60
  }
, 'in3/h': {
    name: {
      singular: 'Cubic inch per hour'
    , plural: 'Cubic inches per hour'
    }
  , to_anchor: 0.55411/3600
  }
, 'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second'
    , plural: 'Fluid Ounces per second'
    }
  , to_anchor: 1
  }
, 'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute'
    , plural: 'Fluid Ounces per minute'
    }
  , to_anchor: 1/60
  }
, 'fl-oz/h': {
    name: {
      singular: 'Fluid Ounce per hour'
    , plural: 'Fluid Ounces per hour'
    }
  , to_anchor: 1/3600
  }
, 'cup/s': {
    name: {
      singular: 'Cup per second'
    , plural: 'Cups per second'
    }
  , to_anchor: 8
  }
, 'pnt/s': {
    name: {
      singular: 'Pint per second'
    , plural: 'Pints per second'
    }
  , to_anchor: 16
  }
, 'pnt/min': {
    name: {
      singular: 'Pint per minute'
    , plural: 'Pints per minute'
    }
  , to_anchor: 4/15
  }
, 'pnt/h': {
    name: {
      singular: 'Pint per hour'
    , plural: 'Pints per hour'
    }
  , to_anchor: 1/225
  }
, 'qt/s': {
    name: {
      singular: 'Quart per second'
    , plural: 'Quarts per second'
    }
  , to_anchor: 32
  }
, 'gal/s': {
    name: {
      singular: 'Gallon per second'
    , plural: 'Gallons per second'
    }
  , to_anchor: 128
  }
, 'gal/min': {
    name: {
      singular: 'Gallon per minute'
    , plural: 'Gallons per minute'
    }
  , to_anchor: 32/15
  }
, 'gal/h': {
    name: {
      singular: 'Gallon per hour'
    , plural: 'Gallons per hour'
    }
  , to_anchor: 8/225
  }
, 'ft3/s': {
    name: {
      singular: 'Cubic foot per second'
    , plural: 'Cubic feet per second'
    }
  , to_anchor: 957.506
  }
, 'ft3/min': {
    name: {
      singular: 'Cubic foot per minute'
    , plural: 'Cubic feet per minute'
    }
  , to_anchor: 957.506/60
  }
, 'ft3/h': {
    name: {
      singular: 'Cubic foot per hour'
    , plural: 'Cubic feet per hour'
    }
  , to_anchor: 957.506/3600
  }
, 'yd3/s': {
    name: {
      singular: 'Cubic yard per second'
    , plural: 'Cubic yards per second'
    }
  , to_anchor: 25852.7
  }
, 'yd3/min': {
    name: {
      singular: 'Cubic yard per minute'
    , plural: 'Cubic yards per minute'
    }
  , to_anchor: 25852.7/60
  }
, 'yd3/h': {
    name: {
      singular: 'Cubic yard per hour'
    , plural: 'Cubic yards per hour'
    }
  , to_anchor: 25852.7/3600
  }
};

var volumeFlowRate = {
  metric: metric$a
, imperial: imperial$8
, _anchors: {
    metric: {
      unit: 'l/s'
    , ratio: 33.8140227
    }
  , imperial: {
      unit: 'fl-oz/s'
    , ratio: 1/33.8140227
    }
  }
};

var metric$b,
imperial$9;

metric$b = {
  'lx': {
    name: {
      singular: 'Lux',
      plural: 'Lux'
    },
    to_anchor: 1
  }
};

imperial$9 = {
  'ft-cd': {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles'
    },
    to_anchor: 1
  }
};

var illuminance = {
  metric: metric$b,
  imperial: imperial$9,
  _anchors: {
    metric: {
      unit: 'lx',
      ratio: 1/10.76391
    },
    imperial: {
      unit: 'ft-cd',      
	  ratio: 10.76391
    }
  }
};

var frequency;

frequency = {
  mHz: {
    name: {
      singular: 'millihertz'
    , plural: 'millihertz'
    }
  , to_anchor: 1/1000
  }
, Hz: {
    name: {
      singular: 'hertz'
    , plural: 'hertz'
    }
  , to_anchor: 1
  }
, kHz: {
    name: {
      singular: 'kilohertz'
    , plural: 'kilohertz'
    }
  , to_anchor: 1000
  }
, MHz: {
    name: {
      singular: 'megahertz'
    , plural: 'megahertz'
    }
  , to_anchor: 1000 * 1000
  }
, GHz: {
    name: {
      singular: 'gigahertz'
    , plural: 'gigahertz'
    }
  , to_anchor: 1000 * 1000 * 1000
  }
, THz: {
    name: {
      singular: 'terahertz'
    , plural: 'terahertz'
    }
  , to_anchor: 1000 * 1000 * 1000 * 1000
  }
, rpm: {
    name: {
      singular: 'rotation per minute'
    , plural: 'rotations per minute'
    }
  , to_anchor: 1/60
  }
, "deg/s": {
    name: {
      singular: 'degree per second'
    , plural: 'degrees per second'
    }
  , to_anchor: 1/360
  }
, "rad/s": {
    name: {
      singular: 'radian per second'
    , plural: 'radians per second'
    }
  , to_anchor: 1/(Math.PI * 2)
  }
};


var frequency_1 = {
  metric: frequency
, _anchors: {
    frequency: {
      unit: 'hz'
    , ratio: 1
    }
  }
};

var angle;

angle = {
  rad: {
    name: {
      singular: 'radian'
    , plural: 'radians'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: 'degree'
    , plural: 'degrees'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'gradian'
    , plural: 'gradians'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: 'arcminute'
    , plural: 'arcminutes'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: 'arcsecond'
    , plural: 'arcseconds'
    }
  , to_anchor: 1/3600
  }
};

var angle_1 = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};

var convert
  , measures = {
      length: length
    , area: area
    , mass: mass
    , volume: volume
    , each: each
    , temperature: temperature
    , time: time_1
    , digital: digital
    , partsPer: partsPer
    , speed: speed
    , pace: pace
    , pressure: pressure
    , current: current_1
    , voltage: voltage_1
    , power: power_1
    , reactivePower: reactivePower_1
    , apparentPower: apparentPower_1
    , energy: energy_1
    , reactiveEnergy: reactiveEnergy_1
    , volumeFlowRate: volumeFlowRate
    , illuminance: illuminance
    , frequency: frequency_1
    , angle : angle_1
    }
  , Converter;

Converter = function (numerator, denominator) {
  if(denominator)
    this.val = numerator / denominator;
  else
    this.val = numerator;
};

/**
* Lets the converter know the source unit abbreviation
*/
Converter.prototype.from = function (from) {
  if(this.destination)
    throw new Error('.from must be called before .to');

  this.origin = this.getUnit(from);

  if(!this.origin) {
    this.throwUnsupportedUnitError(from);
  }

  return this;
};

/**
* Converts the unit and returns the value
*/
Converter.prototype.to = function (to) {
  if(!this.origin)
    throw new Error('.to must be called after .from');

  this.destination = this.getUnit(to);

  var result
    , transform;

  if(!this.destination) {
    this.throwUnsupportedUnitError(to);
  }

  // Don't change the value if origin and destination are the same
  if (this.origin.abbr === this.destination.abbr) {
    return this.val;
  }

  // You can't go from liquid to mass, for example
  if(this.destination.measure != this.origin.measure) {
    throw new Error('Cannot convert incompatible measures of '
      + this.destination.measure + ' and ' + this.origin.measure);
  }

  /**
  * Convert from the source value to its anchor inside the system
  */
  result = this.val * this.origin.unit.to_anchor;

  /**
  * For some changes it's a simple shift (C to K)
  * So we'll add it when convering into the unit (later)
  * and subtract it when converting from the unit
  */
  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift;
  }

  /**
  * Convert from one system to another through the anchor ratio. Some conversions
  * aren't ratio based or require more than a simple shift. We can provide a custom
  * transform here to provide the direct result
  */
  if(this.origin.system != this.destination.system) {
    transform = measures[this.origin.measure]._anchors[this.origin.system].transform;
    if (typeof transform === 'function') {
      result = transform(result);
    }
    else {
      result *= measures[this.origin.measure]._anchors[this.origin.system].ratio;
    }
  }

  /**
  * This shift has to be done after the system conversion business
  */
  if (this.destination.unit.anchor_shift) {
    result += this.destination.unit.anchor_shift;
  }

  /**
  * Convert to another unit inside the destination system
  */
  return result / this.destination.unit.to_anchor;
};

/**
* Converts the unit to the best available unit.
*/
Converter.prototype.toBest = function(options) {
  if(!this.origin)
    throw new Error('.toBest must be called after .from');

  var options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
  }, options);

  var best;
  /**
    Looks through every possibility for the 'best' available unit.
    i.e. Where the value has the fewest numbers before the decimal point,
    but is still higher than 1.
  */
  lodash_foreach(this.possibilities(), function(possibility) {
    var unit = this.describe(possibility);
    var isIncluded = options.exclude.indexOf(possibility) === -1;

    if (isIncluded && unit.system === this.origin.system) {
      var result = this.to(possibility);
      if (!best || (result >= options.cutOffNumber && result < best.val)) {
        best = {
          val: result,
          unit: possibility,
          singular: unit.singular,
          plural: unit.plural
        };
      }
    }
  }.bind(this));

  return best;
};

/**
* Finds the unit
*/
Converter.prototype.getUnit = function (abbr) {
  var found;

  lodash_foreach(measures, function (systems, measure) {
    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      lodash_foreach(units, function (unit, testAbbr) {
        if(testAbbr == abbr) {
          found = {
            abbr: abbr
          , measure: measure
          , system: system
          , unit: unit
          };
          return false;
        }
      });

      if(found)
        return false;
    });

    if(found)
      return false;
  });

  return found;
};

var describe = function(resp) {
  return {
    abbr: resp.abbr
  , measure: resp.measure
  , system: resp.system
  , singular: resp.unit.name.singular
  , plural: resp.unit.name.plural
  };
};

/**
* An alias for getUnit
*/
Converter.prototype.describe = function (abbr) {
  var resp = Converter.prototype.getUnit(abbr);
  var desc = null;

  try {
    desc = describe(resp);
  } catch(err) {
    this.throwUnsupportedUnitError(abbr);
  }

  return desc;
};

/**
* Detailed list of all supported units
*/
Converter.prototype.list = function (measure) {
  var list = [];

  lodash_foreach(measures, function (systems, testMeasure) {
    if(measure && measure !== testMeasure)
      return;

    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      lodash_foreach(units, function (unit, abbr) {
        list = list.concat(describe({
          abbr: abbr,
          measure: testMeasure
        , system: system
        , unit: unit
        }));
      });
    });
  });

  return list;
};

Converter.prototype.throwUnsupportedUnitError = function (what) {
  var validUnits = [];

  lodash_foreach(measures, function (systems, measure) {
    lodash_foreach(systems, function (units, system) {
      if(system == '_anchors')
        return false;

      validUnits = validUnits.concat(lodash_keys(units));
    });
  });

  throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '));
};

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.possibilities = function (measure) {
  var possibilities = [];
  if(!this.origin && !measure) {
	  lodash_foreach(lodash_keys(measures), function (measure){
		  lodash_foreach(measures[measure], function (units, system) {
		    if(system == '_anchors')
		      return false;

		    possibilities = possibilities.concat(lodash_keys(units));
		  });
	  });
  } else {
	  measure = measure || this.origin.measure;
	  lodash_foreach(measures[measure], function (units, system) {
	    if(system == '_anchors')
	      return false;

	    possibilities = possibilities.concat(lodash_keys(units));
	  });
  }

  return possibilities;
};

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.measures = function () {
  return lodash_keys(measures);
};

convert = function (value) {
  return new Converter(value);
};

var lib = convert;

function round(method, input, precision) {
	if (typeof input !== 'number') {
		throw new TypeError('Expected value to be a number');
	}

	if (!Number.isInteger(precision)) {
		throw new TypeError('Expected precision to be an integer');
	}

	const isRoundingAndNegative = method === 'round' && input < 0;
	if (isRoundingAndNegative) {
		input = Math.abs(input);
	}

	let [number, exponent] = `${input}e`.split('e');
	let ret = Math[method](`${number}e${Number(exponent) + precision}`);

	[number, exponent] = `${ret}e`.split('e');
	ret = Number(`${number}e${Number(exponent) - precision}`);

	if (isRoundingAndNegative) {
		ret = -ret;
	}

	return ret;
}

var roundTo = round.bind(null, 'round');
var up = round.bind(null, 'ceil');
var down = round.bind(null, 'floor');
roundTo.up = up;
roundTo.down = down;

const Unit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = 1000;
        this.from = "B";
        this.to = "KB";
        this.money = false;
        this.round = false;
        this.decimals = 2;
    }
    render() {
        if (!this.money) {
            return roundTo(lib(this.value).from(this.from).to(this.to), this.decimals) + " " + this.to;
        }
        else {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.to }).format(this.value);
        }
    }
    static get style() { return "stellar-unit{display:inline-block}"; }
};

export { Input as stellar_input, Unit as stellar_unit };
