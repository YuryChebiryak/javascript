module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this._values = [];
    //return new Collection();
}


// Методы коллекции
Collection.prototype.values = function () {
    return this._values;
};
// другие методы
Collection.prototype.at = function(index) {
    if (index > this._values.length || index < 1) {
        return null;
    }
    return this._values[index - 1];
}

Collection.prototype.count = function() {
    return this._values.length;
}

Collection.prototype.removeAt = function(index) {
    if (index > this._values.length || index < 1) {
        return false;
    }
    this._values.splice(index - 1, 1);
    return true;
}

Collection.prototype.append = function(elem) {
    if (!(elem instanceof Collection)) {
        this._values.push(elem);
    } else {
        var values = elem.values();
        for (value of values) {
            this.append(value);
        }
    }
}
/**
 * Создание коллекции из массива значений
 */
Collection.from = function (other) {
    var res = new Collection();
    for (elem of other) {
        res.append(elem);
    }
    return res;
};
