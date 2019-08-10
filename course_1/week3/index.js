// var tweet = {
//     likes: 16,
//     getLikes: function() {
//         return this.likes;
//     }
// }

// Object.freeze(tweet) // configurable -> false, writable -> false
// Object.isFrozen(tweet) // true
// tweet.likes = 17; // tweet.likes === 16
// delete tweet.likes; // false
// new Date();
// new Date(tweet.createdAt); //string
// new Date(1475323268000);
// new Date(2016, 9, 1, 17, 1, 8)
// //().valueOf() // timestamp
// Date.now()
// Math.random();
// Math.min(1,2);
// Math.max(1,3,4);
// Math.round(2.3)
// Math.floor(2.7)
// Math.ceil(2.22)
// Math.log(10)
// Math.pow(2, 5)
// Math.sin(2)
// tweet.text
// /#[a-z0-9]+/gi.test("has #hashtags"); // case insensitive, g: global
// return this.text.replace(
//     /(#([a-z0-9а-я]+))/gi,
//     '<a href="$2">$1</a>'
// ); 
// tweet.linkify

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return { 
        _d : new Date(),
        get_mult : function(units) {
            var mult = 0;
            if (units === 'minutes') {
                mult = 1;
            } else if (units === 'hours') {
                mult = 60;
            } else if (units === 'days') {
                mult = 60 * 24;
            } else if (units === 'months') {
                mult = 30 * 60 * 24;
            } else if (units === 'years') {
                mult = 365 * 60 * 24;
            }
            return mult;
        },
        date : function(str_date) {
            var regex = '/(\d\d\d\d)-(\d\d)-(\d\d)\ (\d\d):(\d\d)/'
            var parsed = str_date.match(regex)
            this._d = new Date(parsed[1], parsed[2] - 1, parsed[3], parsed[4], parsed[5])
            return this
        },
        add : function(n, units) {
            //this._d.setMinutes(this.get_mult(units) * n)
            if (units === 'minutes') {
                this._d.setMinutes(n);
            } else if (units === 'hours') {
                this._d.setHours(n);
            } else if (units === 'days') {
                this._d.setMinutes(n * 24 * 60);
            } else if (units === 'months') {
                this._d.setMonth(n)
            }
            return this;
        },
        subtract : function(n, units) {
            if (units === 'minutes') {
                this._d.setMinutes(-n);
            } else if (units === 'hours') {
                this._d.setHours(-n);
            } else if (units === 'days') {
                this._d.setMinutes(-n * 24 * 60);
            } else if (units === 'months') {
                this._d.setMonth(-n)
            }
            //this._d.setMinutes(- this.get_mult(units) * n)
            return this;
        }
    }
};
