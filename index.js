'use strict';

/**
 * Replaces all urls in `str` with anchor `<a>` tags.
 *
 * @param {String} str - The input String
 * @return {String} - The autolinked string
 */
module.exports = function(str) {
  if (!str && str !== 0 && str !== false) {
    return false;
  }

  str = str + '';
  
  return str.replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    function(match) {
      return '<a href="' + match + '">' + match + '</a>';
    }
  );
};
