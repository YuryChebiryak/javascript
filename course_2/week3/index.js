/**
 * @param {Function[]} operations
 * @param {Function} callback
 */

module.exports = function(operations, callback) {
    if (operations.length === 0) {
        return [];
    }
    var index = 0
    error = null
    results = []
    var called = false
    next = function(e, r) {    //task with index is done
        if (e != null) {// && !called) {
            callback(e, null)
            // called = true
        } else {
            results.push(r)
            index++;
            if (index === operations.length) { // && !called) { // all tasks are done
                callback(null, results)
            // called = true
            }
            operations[index](this.next)
        }
    }
    operations[0](next)
}


// module.exports = function (operations, callback) {
//     next = function() {
//         var finished = 0;
//         function oneMoreFinished() {
//             finished++;
//         }
//         function final(err, res) {
//             if (!err) {
//                 results.push(res)
//             } else {
//                 if (!error) {
//                     error = err;
//                 }
//             }
//             oneMoreFinished();
//             if (results.length === finished) {
//                 return error ? callback(error) : callback(error, results);
//             }
//         }
//         return final
//     }
//     if (operations.length === 0) {
//         return [];
//     }
//     var results = new Array(operations.length)   
//     var error = null;
//     var n = next();
//     operations.map(op => op(n))



    // var results=new Array(operations.length)
    // var finished = 0;
    // next = function(e, r) {
    //     console.log("next e=", e, ", r=", r);
    //     if (e === null) {
    //         results[operations.indexOf(next.caller)] = r
    //         //results.push(r)
    //         finished += 1;
    //         if (finished === operations.length) {
    //             callback(null, results)
    //         }
    //     } else {
    //         callback(e, null)
    //     }
    // }
    // for (let op of operations) {
    //     (async () => {
    //         const res = await op(next)
    //         console.log("res=", res)
    //     })();
    // }
    //callback(null, result);
    // var promises = [];
    //  for (let op of operations) {
    //     promises.push(new Promise( function(resolve, reject) {
    //         var err;
    //         var res;
    //         console.log("promise")
    //         var next = function(e, r) {
    //             console.log("next e=", e, ", r=", r)
    //             if (err === null) {
    //                 resolve(res);
    //             } else {
    //                 reject(err);
    //             }
    //         }
    //         op(next);
    //     }));
    // };
    // var results = [];
    // for (let p of promises) {
    //     console.log("processing promise res=", p)
    //     p.then(result => results.push(result), 
    //         error => callback(error, []))
    //         .catch(error => 
    //             console.log("error: ", error)
    //             )
    //         .finally(() => "done with promise")
    // }
    // await setTimeout(function(){alert(5)}, 5000);
    // callback(null, results)  
    
    
    
    // for (let op of operations) {
    //     promises.push(new Promise((resolve, reject) => {
    //         var err;
    //         var res;
    //         op(function(e, r) {
    //             err = e;
    //             res = r;
    //         })
    //         if (err === null) {
    //             resolve(res);
    //         } else {
    //             reject(err);
    //         }
    //     }));
    // };

    // var p = Promise.all(promises)
    //     .then(values => callback(null, values))
    //     .catch(err => callback(err, []));
    // console.log(p)
//     var result = []
//     var err;
//     var res;
//     var next = function(e, r) {
//         console.log("next e=", e, ", r=", r)
//         if (e != null) {
//             callback(e, null);
//             return;
//         } else {
//             result.push(r);
//         }
//     }
//     var logger = function() {
//         console.log("logger")
//     }
//     // operations.forEach(item => 
//     //     item(next),
//     // )
//     for (const op of operations) {
//         var p = new Promise(function(resolve, reject) {
//             op(next)
//         });
//         p.then(function(res) { console.log("worked")}, function(err) { console.log("err")})
// //        op(next);
//     }


//    console.log("after for loop");
//      callback(null, result);




    // for (let op of operations) {
    //     op(logger);
    //     if (err != null) {
    //         callback(err, [])
    //     } else {
    //         result.push(res)
    //     }
    // }

    // Promise.all(operations)
    //     .then(function(data) {
    //             callback(null, data)
    //         }, function() {
    //             callback(new Error("error"));
    //         })
    //         .catch(function(err) {
    //             callback(err, []);
    //         });
        
// };