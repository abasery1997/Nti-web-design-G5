// points ==> switch statment , loops (while , for) , break , continue


// switch Statment ==> equality (===)
/*
switch(variable){
    case 1 : code
    case 1 : code
    case 1 : code
    case 1 : code
    case 1 : code
    default : code
}

*/


// var job = "instructor";
// var x ;

// if(job == "doctor") console.log('doctor')
// else if(job =="teacher") console.log('teacher')
// else if(job =="instructor") console.log('instructor')
// else console.log('wrong')

// switch(job){
//     case "doctor" : console.log('doctor'); break
//     case "teacher" :
//     case "instructor" :    
//          console.log('teacher or instructor') ; break
//     // case "instructor" : console.log('instructor') ; break
//     case undefined : console.log(2) ; break
//     default : console.log('wrong')

// }
////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)

// loops ==> while , for 

// while

/*
variable
while(condition){
    code ........
 increment;
}
*/

// var i = 1;
//     while(i<=10){
//         console.log(i)
//        i++; 
//     }

//////////////////////////////////////////////
/* 
    for(variable; condition ; increment){
        code ......
    }
*/
var a = 2 
// console.log(++a)
// console.log(a++)
// console.log(a)
    // for(var i = 1 ; i<= 10 ; i++){
    //     // if (i == 5) break;
    //     if(i == 5) continue;
    //     console.log(i)

    // }

////////////////////////////////////////////////////

// function ==> block of code 

/*
function ==> name , arguments(optional) , return value , call()


*/
var c ;

// function sum(){
//     var x = 5 + 6
//     // var c = 15;
//     c = 10;
//     // console.log(c)
//     return x  
//     console.log('hhhhhhhhhh')  
// }
 
// // sum()
// var y = sum()
// console.log(c) 
// console.log(y)


// function sum(){
//     return 4+5
// }

// function sum2(){
//     return 10+5
// }

// function sum3(){
//     return 20+10
// }

//////////// function statment
function add(x  , num3 = 6 , y = 5 ){
    // console.log(num3)
    return x + y + num3
}

var s = add(3 , 20)
// console.log(s)
// console.log(add(4,20))
// var r = add(4,7)
// var w = add(4,10)


/////////// function expression 

var add = function (x , y ){
    return x+y
}

// console.log(add(4, 13))


///////// Arrow Function
// function add(){
//     return 4 + 5
// }
// var x = add()

var add = (x , y) => {
    return x + y
}
var add2 = ()=>{
    return 4+9
}

var x = 6;
var y = 10;

// console.log(add(x , y))

// function ==> looping (startNum , endNum , breakNum , continueNum) 


    