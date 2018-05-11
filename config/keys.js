if (process.env.NODE_ENV === 'production') {
  // Live version
  module.exports = require('./prod');
} else {
  // Dev version
  module.exports = require('./dev');
}
