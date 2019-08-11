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

class MyDate {
    //    value : new Date,
        constructor(date) {
            this.date = this.str_to_date(date)
            this.updateValue();
            return this
        };
        str_to_date(str_date) {
            var parsed = str_date.match(/(\d\d\d\d)-(\d\d)-(\d\d)\ (\d\d):(\d\d)/)
            return new Date(parsed[1], parsed[2] - 1, parsed[3], parsed[4], parsed[5])
        };
        toString() {
            return 'bublic';
        };
        updateValue() {
            //this.value = this.date.toLocaleFormat('%Y-%m-%d %h:%m');
            var year = this.date.getFullYear();
            var month = this.date.getMonth() + 1;
            var day = this.date.getDate();
            var hours = this.date.getHours();
            var minutes = this.date.getMinutes();           
            this.value = year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0')
             + " " + hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');            
        };
       // value = new Date;
        get_mult(units) {
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
            } else {
                throw new TypeError;
            }
            return mult;
        };
        add(n, units) {
            //this.value.setMinutes(this.get_mult(units) * n)
            if (units === 'minutes') {
                this.date.setMinutes(this.date.getMinutes() + n);
            } else if (units === 'hours') {
                this.date.setHours(this.date.getHours() + n);
            } else if (units === 'days') {
                this.date.setDate(n + this.date.getDate());
            } else if (units === 'months') {
                this.date.setMonth(this.date.getMonth() + n)
            } else {
                throw new TypeError;
            }
            this.updateValue()
            return this;
        };
        subtract(n, units) {
            if (n < 0) {
                throw new TypeError;
            }
            if (units === 'minutes') {
                this.date.setMinutes(this.date.getMinutes()-n);
            } else if (units === 'hours') {
                this.date.setHours(this.date.getHours() -n);
            } else if (units === 'days') {
                this.date.setDate(this.date.getDate() -n );
            } else if (units === 'months') {
                this.date.setMonth(this.date.getMonth() - n)
            } else {
                throw new TypeError;
            }
            //this.value.setMinutes(- this.get_mult(units) * n)
            this.updateValue()
            return this;
        };
};


/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    // str_to_date : function(str_date) {
    //     var regex = '/(\d\d\d\d)-(\d\d)-(\d\d)\ (\d\d):(\d\d)/'
    //     var parsed = str_date.match(regex)
    //     return new Date(parsed[1], parsed[2] - 1, parsed[3], parsed[4], parsed[5])
    // };
    //var str_date = date;
    //var value = new Date();

    return new MyDate(date);
};
