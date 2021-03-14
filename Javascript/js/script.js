// Points ==> variables , operators , if/else statment ,  truthy/falsy values

// console.log('gggggggg') 
// console.log(2) 
// console.log("2") 

//  single line comment
/*
 multi line comment
*/

// variables ==> containers of data
// Data Types ==> string , number , boolean , undefined , null 
// camel case 
// sensitive case
var firstName = "ahmed";
var lastName = 'mohamed' // string (text)
var full_name = firstName + " " + lastName 
// ahmed mohamed 
var age = 10 // number
var num1 = 2 
var num2 = 3 
var num3 = num1 + num2
var isMarried = "true" // string
// console.log(isMarried)
var isMarried = false // boolean
// console.log(isMarried)
var isMarried = "hhhhhhhhh";  // string
// console.log(isMarried)

var y ; // undefined
var x = null; // null
// console.log(x)
/////////////////////////////////////////////////////////////

// operators 
// Mathematical Operators (Arithematic Operators) ==> (+ , - , / , * , ** ,  % , ++ (increment) , -- (decrement))

var a = 4 ;
var b = 2 ;
var c = a - b;
var c = a**b;
// var c = a / b;
// var c = a * b;
var x = "a"
// NaN ==> Not a number
// console.log(c/x)

var z = 2;
// z = z + 1;
// console.log(z++)
// console.log(z)
// console.log(++z)
// console.log(--z)
// console.log(z--)
// console.log(z)
/////////////////////////////////////////////

// Assignment Operator (shortcut Operator) ==> (+= , -= , *= , /=  , %=)

var x = 3 ;
// x = x + 3;
// console.log(x+=3)
// console.log(x-=3)
// console.log(x*=3)

////////////////////////////////////////////
// unary Operator ==>  typeof()

var name2 = "marwa";
var age = 10;
var t = true
var d ;
// console.log(typeof(d))

///////////////////////////////////////
// Comparison operators ==> return  boolean data type (true / false)
// (> , < , >= , <= , == , === , != , !== )

var n = 10;
var m = 20; // number
// var b = 20;
// console.log( b >= m )
// var returnValue = m > n
// console.log(returnValue)

var b = "20" // string
// console.log(b == m )  // value ==> true
// console.log(b === m ) // value , data type ==> false

// console.log(b != m) // value 
// console.log(b !== m) // value , data type

/////////////////////////////////////////////////////////
// logical Operator 
// (&& , || , !)

var age = 20 ;

// console.log( age > 10 )
// console.log(age < 30)
// console.log(age < 15 )
// console.log(age > 10 && age < 15 && age == 10 && age <=20)
// && ==> true , false ==> false 
// && ==> true , true ==> true

// console.log(age > 10 || age < 15)
// || ==> true , false , false ==> true
// || ==> false , false , false ==> false


// console.log(!age > 10)

////////////////////////////////////////////////////////////////
// ternary Operator 
// (condition) ? true : false 

var age = 30
var result ;
// console.log(result)
// (age < 20) ? result = "correct" : result = "wrong"
// console.log(typeof(age));

(typeof(age) == "number") ? result = "correct" : result = "wrong";
(typeof(age) == "number") ? result = "correct" : null ; 
// console.log(result)


/////////////////////////////////////////////////////////
// if Statment
/* if(condition){

}
else {

}
*/

// if(age > 20 || age > 40){
//     var res = "correct"
//     console.log(res)
// }
// else {
//     var  res = "wrong"
//     console.log(res)
// }

// if( typeof(age) == "number"){
//     console.log('right')
// }
// else{
//     console.log('wrong')
// }

var  y = "hello" // string
// console.log(y)


// falsey Values ==> undifiend , 0 , null , NaN , "" , -0
// truthy values ==> any other
y = 0
y = null
y = ""
var f ;
y = " " // true
y = false // 
// if (y) console.log('javascript')
// else console.log('html')



var job = "hhhh";

if(job == "doctor") console.log('doctor')
else if(job =="teacher") console.log('teacher')
else if(job =="instructor") console.log('instructor')
else console.log('wrong')


// var degree = 90
// 90 ==> 100 = A
// 80 ==> 90 = B
// 70 ==> 80 = c
// ==> F



