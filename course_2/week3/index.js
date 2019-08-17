/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    if (operations.length === 0) {
        return [];
    }
    Promise.all(operations)
        .then(function(data) {
                callback(null, data)
            }, function() {
                callback(new Error("error"));
            });
        
};