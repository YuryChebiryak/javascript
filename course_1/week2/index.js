// Телефонная книга
var phoneBook = new Map();//{};

function showBook() {
    var res = []
    var keys = Array.from(phoneBook.keys()).sort()
    for (i = 0; i < keys.length; i++) {
        var numbers = phoneBook.get(keys[i])
        if (numbers.length != 0) {
            res.push(keys[i] + ': ' + numbers.join(', '))
        }
    }
    return res
    // var res = phoneBook.sort().filter(function(s) {
    //     //s.indexOf(':')
    //     return s.indexOf('-', s.indexOf(':')) != -1
    // })
    // return res
}

function searchName(array, name) {
    //console.log("searching for " + name)

    // let i = 0;
    // while (i < array.length) {
    //     if (array[i].startsWith(name + ':')) {
    //         return i 
    //     }
    //     i++
    // }
    // return -1
}

function addContact(s) {
    //console.log("adding contact: " + s)
    var name = s[1]
    if (!phoneBook.has(name)) {
        phoneBook.set(name, s[2].trim().split(','))
//        phoneBook[name] = s[2].trim().split(',') //assign to an array
    } else {
        //phoneBook[name] = phoneBook[name].concat(s[2].trim().split(','))
        phoneBook.set(name, phoneBook.get(name).concat(s[2].trim().split(',')))
    }
    //var c = searchName(phoneBook, name)
    //var c = phoneBook.indexOf(s[1])
    // if (c === -1) {
    //     //console.log('adding ' + name)
    //     phoneBook.push(name + ': ' + s[2].split(',').join(', ').trim()
    //     )
    // } else { //entry already exists
    //     //phoneBook[c] = phoneBook[c] + ', ' + s[2].split(',').join(', ')
    //     phoneBook[c] = name + ": " + phoneBook[c].slice(name.length+ 2,).split(', ')
    //         .concat(s[2].split(',')).join(', ').trim()
    //     // console.log("new=" + phoneBook[c])
    // }
}

function removePhone(s) {
    var tel_no = s[1].trim()
    var keys = Array.from(phoneBook.keys()).sort()
    for (i = 0; i < keys.length; i++) {
        var numbers = phoneBook.get(keys[i])
        var tel_ind = numbers.indexOf(tel_no)
        if (tel_ind != -1) {
            numbers.splice(tel_ind, 1)
            phoneBook.set(keys[i], numbers)
            return true
        }
    }
    return false

    // for(i = 0; i < phoneBook.length; i++) {
    //     var name = phoneBook[i].slice(0, phoneBook[i].indexOf(':'))
    //     var numbers = phoneBook[i].slice(phoneBook[i].indexOf(':') + 1, )
    //         .split(',').forEach(function(e) { 
    //             e = e.trim()}
    //             )
    //     console.log("numbers=" + numbers + " tel_no=" + tel_no)
    //     var ind = numbers.indexOf(tel_no)
    //     if (ind != -1) {
    //         console.log("found number under index" + ind)
    //         phoneBook[i] = name + ': ' + numbers.filter(function(number) {
    //             return number != tel_no
    //         }).join(', ').trim()
    //         return true
    //     }
    // }
    // return false
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    // console.log('watermelon'.slice(2, 7))
    // var arr = [1, 2, 3, 4];
    // arr.splice(1, 2, 5);
    // console.log(arr)
    // var message = { text: 'hello' };
    // var note = message;
    // note.text = 'world';
    // console.log(message.text)
    // var arr = [];
    // arr[100] = 2;
    // console.log(arr.length)

    var s = command.split(' ')
    var c = s[0]
    if (c === 'ADD') {
        return addContact(s);
    } else if (c === 'SHOW') {
        return showBook();
    } else if (c === 'REMOVE_PHONE') {
        return removePhone(s)
    }

};
