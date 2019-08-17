<<<<<<< HEAD
// function Cat (name) {
//   this.name = null;
  
//   return {
//     name: name
//   }
// }

// var barsik = new Cat('Barsik');
// console.log(barsik)
// console.log(barsik.name);

// function Animal() {}

// Animal.prototype.sleep = function () {console.log("sleep")};

// function Cat() {}

// Cat.prototype = Animal.prototype;
// Cat.prototype.meow = function () {console.log("meow")};

// function Dog() {}

// Dog.prototype = Animal.prototype;
// Dog.prototype.woof = function () {console.log("woof")};

// var sharik = new Dog();
// sharik.woof()
// sharik.meow()
// sharik.sleep()

// var obj = Object.create(null);
// console.log(obj)

function Animal(name) {
    this.name = name;
}

function Cat(name) {
    return new Animal(name);
}
// Добавляет возможность мурлыкать
Cat.prototype.purr = function() {console.log("purr")}; 

var murzik = new Cat('Murzik');

console.log(murzik.name);
murzik.purr()

var animal = animal(test)
=======
var lecturer = {};

console.log(typeof Object.getPrototypeOf(lecturer))

var lecturer2 = Object.create(Object)
console.log(Object.getPrototypeOf(lecturer2))

var students = [];
console.log(typeof Object.getPrototypeOf(students))

var sleep = function () {};
console.log(typeof Object.getPrototypeOf(sleep))

var person = {
    type: 'person'
  }
  var danny = {
    name: 'Danny',
    type: undefined
  }
  Object.setPrototypeOf(danny, person);

  console.log(person.toString())
  console.log(danny.toString())
  console.log(danny.name)
  console.log(danny.type)
  console.log(person.name)

  var person = { type: 'person' };
var danny = {};

danny.type = 'danny';
Object.setPrototypeOf(danny, person);

console.log("...." + person.type);
console.log(danny.type);

var student = {};
Object.prototype.serialize = function () {};

console.log('serialize' in student);
console.log('serialize' in []);
console.log('serialize' in new Date());
console.log('serialize' in Object);
console.log('serialize' in Object.prototype); 


console.log(Object.prototype.toString()); // Тут будет "[object Object]"

var student = {};
var lecturer = {};
console.log('---------------')
lecturer.toString = function () { return 'Woohoo!' }

// Что выведут эти console.log 
console.log(student.toString());
console.log(lecturer.toString());
console.log(lecturer.toString.call(student));

Object.prototype.serialize = function () {};
var student = {
  name: 'Ivan',
  getName: function () { return this.name; }
};

Object.defineProperty(student, 'type', {
  enumerable: false,
  value: 'student'
});

for (var key in student) {
  console.log(key);
}
>>>>>>> origin/master
