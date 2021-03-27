'use strict';
const moment = require('moment');
let _arr = ['string', 'number', 'boolean'];
let _dt = '';
let _console = (function(_log) {
  return {
    dtFormat: (dtFormat) => {
      if (!dtFormat) { dtFormat = 'YYYY-MM-DD HH:mm:ss'; }
      _dt = moment().format(dtFormat);
    },
    log: (str) => {
      if (_dt === '') { _console.dtFormat(); }
      str = _dt + ' - ' + ((_arr.indexOf(typeof str) !== -1) ? str : JSON.stringify(str));
      _log.log(str);
    },
    info: (str) => {
      if (_dt === '') { _console.dtFormat(); }
      str = _dt + ' - ' + ((_arr.indexOf(typeof str) !== -1) ? str : JSON.stringify(str));
      _log.info(str);
    },
    warn: (str) => {
      if (_dt === '') { _console.dtFormat(); }
      str = _dt + ' - ' + ((_arr.indexOf(typeof str) !== -1) ? str : JSON.stringify(str));
      _log.warn(str);
    },
    error: (str) => {
      if (_dt === '') { _console.dtFormat(); }
      str = _dt + ' - ' + ((_arr.indexOf(typeof str) !== -1) ? str : JSON.stringify(str));
      _log.error(str);
    }
  };
}(console));
module.exports.log = _console.log;
module.exports.info = _console.info;
module.exports.warn = _console.warn;
module.exports.error = _console.error;
module.exports.dtFormat = _console.dtFormat;