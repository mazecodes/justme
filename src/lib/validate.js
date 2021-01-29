const isValidDomain = require('is-valid-domain');

/**
 * Check if the domain is valid
 *
 * @param {String} domain - Domain to check
 * @returns {Boolean} - Returns true if the domain was valid
 *
 * @example
 *   isDomainValid('example.com') // true
 *   isDomainValid('example') // false
 */
const isDomainValid = domain => isValidDomain(domain, { wildcard: false });

module.exports = {
  isDomainValid,
};
