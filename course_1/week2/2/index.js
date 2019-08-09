/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    res = '';
    let seen = new Set();
    for (i = 0; i < hashtags.length; i++) {
        var str = hashtags[i].toLocaleLowerCase();
        if (!seen.has(str)) {
            if (i != 0) {
                res = res + ', ';
            }
            res = res + str;
            seen.add(str);
        }
    }
    //console.log(res)
    return res;
};
