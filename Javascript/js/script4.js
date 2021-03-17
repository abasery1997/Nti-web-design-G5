/////////////// String Methods

// var arr = []
// console.log(arr)
// arr.reverse()
// arr.length
var text = "     javascript , Html , Bootstrap , Html      ";

console.log(text.length)
console.log(text[0])
console.log(text.indexOf("Html"))
console.log(text.lastIndexOf("Html"))
console.log(text[13])
console.log(text.toLocaleUpperCase())
console.log(text.toLocaleLowerCase())
console.log(text.trim())
console.log(text.replace("Html" , "Node"))
console.log(text.replaceAll("Html" , "Node"))
// Slice ==> Start , end

var str = "My Name is Nouran";
console.log(str.slice(0 , 3))

//////////// numbers Methods

var x = 10 / "apple"
var y = 3
// console.log(isNaN(y)) 
// console.log(x)

// console.log(Math.abs(-40))
// console.log(Math.round(3.6))
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))
// console.log(Math.min( 5 , 2 , 8 , 0 , 10))
// console.log(Math.max( 5 , 2 , 8 , 0 , 10))
// console.log(Math.trunc(8.45))
// console.log(Math.random()) // 0 ==> 1
// console.log(Math.random()*10) // 0 ==> 1

// console.log(Math.round(Math.random()*10))


//////////////// Date

var d = new Date()
console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) /// 0 ==> 11
var month = d.getMonth()
switch(month){
    case 0 : console.log("jan") ; break
    case 1 : console.log("feb") ; break
    case 2 : console.log("mar") ; break
}
console.log(d.getDate())
console.log(d.getDay()) // 0 ==> 6 ==> start from Sunday)
var today = d.getDay()
switch (today){
    case 0 : console.log('sunday')
    case 1 : console.log('monday')
    case 2 : console.log('tuesday')
}

console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())

///////////////////////////////////////

 var promp = prompt("enter your Name?" , "nouran")

console.log(promp)
// if(promp == null){
//     promp = prompt("enter your Name?" , "nouran")
// }
var arr  = ["marwa" , "nada"]
arr.push(promp)
console.log(arr)
alert("error message")