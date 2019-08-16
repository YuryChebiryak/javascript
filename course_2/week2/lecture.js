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
