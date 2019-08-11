// this : keyword, can't be overwritten, points to the current object

function User() {
    return {
        age: 24,
        showAge: function() {
            console.log(this.age)
        }
    }
}

var mike = new User
mike.showAge()

// this: global, window, module.exports
//console.log(this.innerWidth)

console.log(this)
// how we got to the code. simple invocation:
function getSelf() {
    return this;
}
//method invocation
var block = {
    innerHeight : 300,
    getHeight : function() {
        return this.innerHeight;
    }
}
var getHeight = block.getHeight
console.log(getHeight)

// call(context, args)
// fun.call(this, arg1, arg2, ...)
// fun.apply(thisArg, [arg1, arg2, ...])

var arr = [4, 7, 2, 9]
Math.min(arr) // returns NaN because it brings it to an Int
Math.min.apply(Math, arr);
Math.min.apply(null, arr)

//invoked as a callback
// save context into some var _this = this
var person = {
    name: 'Sergey',
    items: ['banana', 'phone'],
    showItems : function() {
        //var _this = this;
        this.items.map(function (item) {
            return this.name + ' has ' + item;
        }, this);
    }
}
var show = person.showItems()
//console.log(show)
function getSum(a, b, c) {
    return a + b + c;
   }

var v = getSum.apply(this, [1, 2, 3])
console.log(v)

var fruit = 'Apple';
function getFruit() {
  return {
    fruit: 'Watermelon',
    name: this.fruit
  };
}

var n = getFruit().name
console.log(n)