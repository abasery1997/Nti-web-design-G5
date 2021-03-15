// Array

var arr = ["marwa", "mohamed", 567, true]
var lastName = arr[1] // get value 
arr[4] = "instructor" // set value
arr[3] = false // update value
// console.log(lastName)
// console.log(arr)


/////// Array Methods (functions)
// function pushing(item , array){
//     array[array.length] = item
//     console.log(array)
// }
// pushing("html" , arr)

// console.log(arr.length) 

arr.push("bootstrap", "js", 3, true) // add at the last of array
arr.unshift(0, 1) // add at the first of array
arr.shift()
arr.shift() // remove the first item of array
arr.pop() // remove the last item of array

var arr2 = ["nada", "ahmed", false]
var arr4 = [2, 4, 5, 6]
var arr3 = arr.concat(arr2, arr4) // merge of arrays

/////////// splice ==> remove element , add element , add/remove element
// splice ==> startIndex , deletedCount , item....(optional)

// remove element
arr3.splice(5, 1)

// add element
arr3.splice(7, 0, "html", "bootstrap", "js")

// add/ remove element
arr3.splice(4, 1, "teacher", "doctor")
// console.log(arr3)
/////////////////////////////////

// console.log(arr.toString()) // return string
// console.log(arr.join("/")) // return string

// console.log(arr.includes("teacher")) // return true or false

if (arr.includes("teacher")) {
    console.log('founded')
}
else {
    arr.push("teacher")
}
// console.log(arr)

var numbers = [2, 1, 6, 3, 7, 4, 8, 5]
var letters = ["b", "l", "a", "f", "c", "z", "x"]
// console.log(letters.sort()) 
// console.log(arr.reverse())

var words = ["html", "css", "php", "bootstrap", "js"]
// console.log(words)
// for(var i = 1 ; i <=10 ; i++){

// }
// console.log(words[0])
// console.log(words[1])
// console.log(words[2])
// console.log(words[3])
// console.log(words[4])

// for(var i = 0 ; i < words.length ; i++  ){
//     console.log(words[i])
// }


////////////////////////// ForEach

// words.forEach(arrlooping) 

// function arrlooping( x , y , arr ){
//     console.log(x)
//     console.log(arr)
// }
// arrlooping(3 , 4,5 )

// var x = ()=>{

// }
words.forEach((item, index, arr) => {
    // console.log(item)
    // console.log(index)
    // console.log(arr)
})

////////////// filter ==> return array

// var x = "hello";
// console.log(x.length)
var nums = [3, 5, 8, 1, 2, 9, 2, 100, 200, 34]
var items = ["hello", "bye", "js"];
var result = nums.filter(x => x > 5) // return array
var res = items.filter(item => item.length > 3) // return array
// console.log(res)


/////////////// find  ==> return value (first value match the condition)

var a = nums.find(item => item > 9)
var b = nums.find(item => item > 400)
// console.log(b)

//////////// findIndex ==> return index (first index match the condition)

var ind = nums.findIndex(ind => ind > 9)
var ind2 = nums.findIndex(ind => ind > 400) // return -1
// console.log(ind2)
if (ind2 == -1) {

} else {

}


////////////// map ==> return new array

var nums2 = [2, 3, 4, 5, 6, 7, "marwa", false]

var res2 = nums2.map(item => item + 20)
console.log(res2)




/////////////////////////////////////////////////

///////// objects

var birthYear = 1950;

var user = {
    firstName: "marwa",
    lastName: "mohamed",
    id: "3444",
    isMarried: true,
    birthYear: 1990,
    ///////// // function inside object
    age: function (currentYear) {
        return currentYear - this.birthYear
    }
}
var userAge = user.age(2021)
console.log(userAge)
// user.age = 10 // set property
// console.log(user.age)
user.isMarried = false
console.log(user)


// send object to function
var Bio = (userInfo) => {
    console.log(userInfo.id)
    userInfo.lastName = "ahmed"
    userInfo.address = "nasr city"
}

function information(obj) {
    console.log(obj.lastName)
}

Bio(user)
information(user)
// console.log(user)

// return object from function 

var tempConverter = (val) => {
    return {
        f: val,
        c: (val - 32) * (5 / 9),
        k: (val + 459) * (5 / 9)
    }
}
console.log(tempConverter(70))

//////////////////////////////////

var user1 = {
    firstName: "marwa",
    lastName: "mohamed",
    id: "3444",
    isMarried: true,
    birthYear: 1980,
    ///////// // function inside object
    age: function (currentYear) {
        return currentYear - this.birthYear
    }
}
var user2 = {
    firstName: "nada",
    lastName: "mohamed",
    id: "222",
    isMarried: true,
    birthYear: 1970,
    ///////// // function inside object
    age: function (currentYear) {
        return currentYear - this.birthYear
    }
}
var user3 = {
    firstName: "mai",
    lastName: "mohamed",
    id: "777",
    isMarried: true,
    birthYear: 1945,
    ///////// // function inside object
    age: function (currentYear) {
        return currentYear - this.birthYear
    }
}
var user4 = {
    firstName: "hazem",
    lastName: "mohamed",
    id: "99999",
    isMarried: true,
    birthYear: 1996,
    ///////// // function inside object
    age: function (currentYear) {
        return currentYear - this.birthYear
    }
}


var users = [
    {
        firstName: "marwa",
        lastName: "mohamed",
        id: "3444",
        isMarried: true,
        birthYear: 1980,
        ///////// // function inside object
        age: function (currentYear) {
            return currentYear - this.birthYear
        }
    },
    {
        firstName: "hazem",
        lastName: "mohamed",
        id: "99999",
        isMarried: true,
        birthYear: 1996,
        ///////// // function inside object
        age: function (currentYear) {
            return currentYear - this.birthYear
        }
    },

    {
        firstName: "mai",
        lastName: "mohamed",
        id: "777",
        isMarried: true,
        birthYear: 1945,
        ///////// // function inside object
        age: function (currentYear) {
            return currentYear - this.birthYear
        }
    }
]

var obj = {
    firstName : "test" ,
    lastName : "test" , 
    familyName : "test" 
}

console.log(users)
users.forEach(item=>{
    console.log(item.firstName)
})
users.push(obj)
console.log(users)
console.table(users)


// function ==> addUser(userName , id , balance)
//         ==> editUserBalanceById(id , newBalance)
//         ==> deleteUserById(id)
//         ==> showUsers()

