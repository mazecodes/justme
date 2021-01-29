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

/**
 * Log an up message
 *
 * @param {String} website - Website domain to log
 * @returns {void}
 *
 * @example
 *   up('example.com')
 */
const up = website => {
  console.log(`${chalk.greenBright('[UP]')} It's just you, ${website} is up.`);
};

/**
 * Log a down message
 *
 * @param {String} website - Website domain to log
 * @returns {void}
 *
 * @example
 *   down('example.com')
 */
const down = website => {
  console.log(
    `${chalk.redBright('[DOWN]')} It's not just you, ${website} is down.`
  );
};

module.exports = {
  error,
  up,
  down,
};
