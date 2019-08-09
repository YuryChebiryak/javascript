/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    //indexOf
    //slice
    //Number
    //parseInt(i, 10)
    //return hashtags
    var s = tweet.split(' ');
    res = [];
    for (i = 0; i < s.length; i++) {
        if (s[i][0] === '#') {
            res.push(s[i].slice(1,s[i].length));
        }
    }
    return res;
};
