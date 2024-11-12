// // Arithmatic operators(+ - * / % **)
// let a:number = 5;
// let b:number = 2;
// console.log("a = ", a , "& b = ", b);
// console.log("a + b = ", a+b);
// console.log("a + b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a ** b);//5^2

// // unary operators(incremet and decremetn with post and pre)
// a = a + 1;
// console.log(a);//6

// console.log(a++);// the print value of a is 6 becuase its a post increment 
// console.log(a);
// a = a - 1;
// console.log(a);//6

// a = ++a;
// console.log(a);// the print value of a is 7 becuase its a pre increment

// a = a++; // value of a is again 7 bc a++ first do assign so thats why a value is agian 7
// console.log(a);// the print value of a is 7 becuase post increment just assigning

// a++; // this senario is total different according to (a = a++) this bc its not diectly assingn
// // in this process increment is necessarey
// console.log(a); // the print value of a is 8

// a = --a;
// console.log(a);// the print value of a is 7 becuase its a pre degrement

// a = a * 1;
// console.log(a);// 7

// a = a / 5;
// console.log(a);// 1.4

// a = a % 2;
// console.log(a);// 1.4


// // Assingment Operators(= += -= *= %= **=)
// a += 1; // a = a + 1; its a same one
// console.log(a); 

// a -= 1; // a = a - 1; its a same one
// console.log(a); 

// a *= 1; // a = a * 1; its a same one
// console.log(a); 

// a /= 1; // a = a / 1; its a same one
// console.log(a);

// a %= 1; // a = a % 1; its a same one
// console.log(a); 

// a **= 1; // a = a ** 1; its a same one
// console.log(a); 



// // comparison Operators

// // 1. equal to (==)
// // 2. not equal to (!=)
// // 3. equal to & type ===
// // 4. not equal to & type !==
// // 5. greater than >
// // 6. less than <
// // 7. greater than and equal to >=
// // 8. less than and equal to <=

// let x = 5;
// let y = 2;
// console.log("5 == 2", x == y); // output false
// y = 5;
// console.log("5 == 5", x == y); // output true
// console.log("5 != 5", x != y); // output false

// let z = "5"; // we can't make this condition in typescript but in javascript no problem 
// console.log("5 == 5", x == z); // output true according to javascript
// console.log("5 == 5", x == z); // output true according to javascript
// console.log("5 === 5", x === z); // output true according to javascript
// console.log("5 !== 5", x !== z); // output false according to javascript
// y = 2;
// console.log("5 > 2", x > y); // output true
// console.log("2 < 5", y > x); // output true
// console.log("2 <= 5", y <= x); // output true
// console.log("5 >= 2", x >= y); // output true


// // Logical Operators
// // 1. AND (&&)
// // 2. OR (||)
// // 3. NOT (!)

// console.log("2 < 5 , 5 > 2", y < x && x > y); // both condition should be true
// console.log("2 > 5 , 5 > 2", y > x || x > y); // one condition should be true
// console.log("2 < 5",  !(y > x)); // this operator give me a opposite answer which is fase



// // Conditional Operator
// // 1. if
// // 2. if and else
// // 3. if elseif... and else
// // 4. Ternary operator 



// let age = 16;

// if(age >= 18) console.log("you can vote"); // no need brackets{} for single if statement


let x:number = 5;
let z:string = "5"; // we can't make this condition in typescript but in javascript no problem 
console.log("5 == 5", x == z); // output true according to javascript
console.log("5 == 5", x == z); // output true according to javascript
console.log("5 === 5", x === z); // output true according to javascript
console.log("5 !== 5", x !== z); // output false according to javascript