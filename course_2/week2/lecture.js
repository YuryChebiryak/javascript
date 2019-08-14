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