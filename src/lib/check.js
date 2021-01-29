const fetch = require('node-fetch');

/**
 * Check if a website is down
 *
 * @param {String} website - Website to check
 * @returns {Boolean} - Returns true if it was down
 *
 * @example
 *   isDown('google.com') // false
 *   isDown('github.com') // true
 */
const isDown = async website => {
  const url = `https://isitup.org/${website}.json`;
  const res = await fetch(url);
  const data = await res.json();

  return data.response_code === null;
};

module.exports = {
  isDown,
};
