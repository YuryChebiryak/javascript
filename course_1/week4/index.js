


/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var copy = JSON.parse(JSON.stringify(collection))
    var args = [].slice.call(arguments)
    var commands = args.slice(1);
    for (let op of commands) {
        if (op.name === 'filterIn') {
            copy = op(copy)
        }
    }
    for (let op of commands) {
        if (op.name !== 'filterIn') {
            copy = op(copy)
        }
    }
//    for (let op in commands) {
    //first apply all the filters, then non-filters?
    // for (let i = 1; i < args.length; i++) {
    //     if (args[i].name === 'filterIn') {
    //         copy = args[i](copy)
    //     }
    // }
    // for (let i = 1; i < args.length; i++) {
    //     if (args[i].name !== 'filterIn') {
    //         copy = args[i](copy)
    //     }
    // }
    return copy
}

/**
 * @params {String[]}
 */
function select() {
    var args = [].slice.call(arguments)
    return function selection(collection) {
        var res = []
        for (let item of collection) {
            var newObj = {}
            for (let key of args) {
                if (item.hasOwnProperty(key)) {
                    newObj[key] = item[key] 
                }
            }
            res.push(newObj)
        }
        //console.log("select=", res)
        return res;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var args = [].slice.call(arguments)
    var key = property
    var allowedValues = values
    return function filterIn(collection) {
        var res = []
        for (let item of collection) {
            if (item.hasOwnProperty(key)) {
                let value = item[key]
                if (allowedValues.indexOf(value) !== -1) {
                    res.push(item)
                }
                // for (let allowedValue of allowedValues) {
                //     if (value === allowedValue) {
                //         res.push(item)
                //     }
                // }
            }
        }
        //console.log("filterIn=", res)
        return res
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
