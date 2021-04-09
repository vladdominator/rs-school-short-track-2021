/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  let count;
  arr.forEach((element, index) => {
    if (element === '@') {
      count = index;
    }
  });
  return arr.join('').substr(count + 1, arr.length);
}

module.exports = getEmailDomain;
