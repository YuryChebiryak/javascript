function getNumbers() {
    return arguments.slice(1, 3);
  }
//var numbers = getNumbers(1, 2, 3, 4, 5);
//console.log(numbers)

function setText(message) {
    text = message;
  }
  var text = 'Текст';
  setText('Сообщение');
console.log(text)


function getFruitsCost() {
    var cost = 7;
    return function(count) {
      return cost * count;
    };
  }
  var getCost = getFruitsCost();
  var price = getCost(10);
  
  console.log(price);
  

function MyMin(a, b) {
    b = b || Infinity;
    return a < b ? a : b;
}

function getCost(price, count) {
    if (count === undefined) {
        count = 1;
    }
    return price * count;
}

//named params: arbitrary order, unlimited number of params, easy to refactor, but unclear itnerface, hard to work with args
function BMI(params) {
    var height = params.height;
    return params.weight / (height * height);
}

function MySum() {
    var a = arguments[0] || 0;
    var b = arguments[1] || 0;
    return a + b;
}

function MySum2() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function MySum3() {
    var args = [].slice.call(arguments);
    return args.reduce(function(sum, item) {
        return sum + item;
    });
}

// ^^ function declaration
// below: function expression
var euclidian_dist = function(a, b) {
    return Math.sqrt(a * 2 + b * 2);
}

//named function expression
var factorial = function inner(n) {
    return n === 1 ? 
        1 : n * inner(n - 1);
}

var add = new Function('a', 'b', 'return a + b'); //interpreter won't be able to optimize this code!
add(2,3);

// no block-wide variable visibility
//shadowing of visibility
//1. init
    // function declaration
    // var
//2. execution

// works with function declaration and not function expression

// pointer counting: garbage collector
//closure?
//IIFE in javascript
//https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

(function addTogether() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
    });

(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
}); 

(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
    })();
