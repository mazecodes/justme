const { isDown } = require('./lib/check');
const { isDomainValid } = require('./lib/validate');
const logger = require('./lib/logger');

/**
 * Check if a website is down
 *
 * @param {String} website - Website to check
 * @returns {void}
 *
 * @example
 *   checkWebsite('google.com')
 */
const checkWebsite = async website => {
  if (!website) {
    return logger.error('You should provide a website to check.');
  }

  if (!isDomainValid(website)) {
    return logger.error('The domain should be valid.');
  }

  const down = await isDown(website);

  if (down) {
    logger.down(website);
  } else {
    logger.up(website);
  }
};

module.exports = checkWebsite;
