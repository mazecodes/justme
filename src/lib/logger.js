const chalk = require('chalk');

/**
 * Log an error
 *
 * @param {String} message - Error message to log
 * @returns {void}
 *
 * @example
 *   error('Something went wrong')
 */
const error = message => {
  console.log(`${chalk.redBright('[ERROR]')} ${message}`);
};

module.exports = {
  error,
};
