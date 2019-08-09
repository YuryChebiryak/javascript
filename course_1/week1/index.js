/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  var newminutes = minutes + interval;
  var newhours = Math.floor(newminutes / 60) + hours
  newminutes = newminutes - Math.floor(newminutes / 60) * 60
  newhours = newhours - Math.floor(newhours / 24) * 24
    //num.toString
  var res =  newhours.toString().padStart(2, '0') + ':' + newminutes.toString().padStart(2, '0')
  //console.log("res=" + res)
  return res
};
