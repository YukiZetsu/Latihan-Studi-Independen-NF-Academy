function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;

    Person.prototype.greet = function(){
        return `Hello, My Name is ${this.name}`;
    };
}

//dan dipanggil didalam object menggunakan keyword new
let person1 = new Person("Alice", 25,"Jakarta");
let person2 = new Person("Bob", 30, "Bandung");

console.log(person1.greet());
console.log(person2);