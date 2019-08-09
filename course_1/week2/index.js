// Телефонная книга
var phoneBook = {};

function addContact(s) {
    
}

function removePhone(s) {

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
        return phoneBook;
    } else if (c === 'REMOVE_PHONE') {
        return removePhone(s)
    }

};
