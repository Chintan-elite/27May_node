//console.log("javascript running....")

//variables
//primitive and reference
//primitive : String, number, boolean
// reference : object and array

var a = 20;
var name = "Tops"
var avaible = true;
//console.log(a);

// var person = {
//     Name: "Tops",
//     Email: "tops@g mail.com",
//     Dept: "Node"
// }


// console.log(person.Name)
// console.log(person.Dept)
// console.log(person.Email)

//var a = [10, 20, 30, 40, 50, "Node", "Java", 56.33];
//console.log(a);


//oprators :
// arithmatic
var a = 10;
var b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b)
// console.log(a % b);

//relational
// console.log(a > b);
// console.log(a < b);

//assignment
n1 = 10;

//n1 = n1 - 2;
n1 += 2;
//console.log(n1);

//logical
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(!true)

//conditional
var x = 10;
var y = 20;

// if (x > y) {
//     console.log("X is greater");
// }
// else {
//     console.log("Y is greater");
// }

//loping ;

// for (var i = 1; i < 10; i++) {
//     console.log(i);
// }

var ar = [10, 20, 30, 40, 50];

// for (var i = 0; i < ar.length; i++) {
//     console.log(ar[i]);
// }

// var i = 25;
// while (i < 25) {

//     i++;
//     console.log(i);
// }

// var i = 25;
// do {

//     i++;
//     console.log(i);
// } while (i < 25);


var subject = ["Java", "Php", "Node", "React"];

//subject.pop();
//console.log(subject.length)
//subject.shift();
//subject.shift();
//subject.unshift("Android");
//subject.push("ios");
// subject.forEach(function (i) {
//     console.log(i);
// })
//console.log(subject)

var str = "sun rises in east";

// console.log(str.length)
// console.log(str.charAt(5))
// console.log(str.indexOf('u'))
// console.log(str)
// console.log(str.trim());
// console.log(str.toLowerCase().trim())
// console.log(str.toUpperCase())
// console.log(str.slice(4, 8))

// function myfunc() {
//     console.log("function calling....")
// }

// function square(num) {
//     //console.log("square of " + num + " is " + (num * num));
//     console.log(`Square of ${num} is ${num * num}`);
// }

var avg = (a, b) => {
    console.log(`avg is ${(a + b) / 2}`)
}

// myfunc();
// square(10);
// square(20)
// avg(10, 20);


// class Animal {
//     eat() {
//         console.log("animal eating grass")
//     }
// }
// var myDemo = new Animal();
// myDemo.eat();


// class Calc {

//     constructor(val) {
//         console.log("constructor calling..." + val);
//     }

//     add(a, b) {
//         console.log(a + b);
//     }

//     static display() {
//         console.log("running display method....")
//     }
// }

// var myCalc = new Calc(10);
// myCalc.add(10, 20);

//Calc.display();


// var myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())
// console.log(myDate.getTime())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())


var person = {
    fullname: function (country, state) {
        return this.fname + " " + this.lname + " " + country + " " + state
    }
}


var p1 = {
    fname: "Tops",
    lname: "Technologies"
}


console.log(person.fullname.call(p1, "India", "Gujarat"))
console.log(person.fullname.apply(p1, ["India", "MH"]));