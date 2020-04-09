
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/real-name-mobile.min.js');
} else {
  module.exports = require('./dist/real-name-mobile.js');
}