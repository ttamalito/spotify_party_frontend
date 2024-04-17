/**
 * Returns a UTC date, so that the browser knows when the cookie expires
 * @param  {number} toAdd
 * @returns {string} The UTC date
 */
export default function getUtcDate(toAdd) {
    let date = new Date();
    date.setTime(date.getTime()+ toAdd);
    return date.toUTCString();
}