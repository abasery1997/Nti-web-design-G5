// Html Dom Objects

console.log(document.getElementById("myDiv"))
var div = document.getElementById("myDiv") // return element

// console.log(div.innerText) // get value
// div.innerText = "Bootstrap"  // set value

// console.log(div.innerHTML)
// div.innerHTML = "<a href='#'>Javascript</a> ";

var classDiv = document.getElementsByClassName('myDivClass') // return array
// classDiv[1].innerText = "bootstrap"
// for(var i = 0 ; i < classDiv.length ; i++){
//     classDiv[i].innerText = "hello" ;
// }

var tagName = document.getElementsByTagName('p'); // return array
// console.log(tagName[2].id)
// tagName[2].id = "test"
// console.log(tagName)


var a = document.querySelector("[href='#top']")
a.innerText = "heeeeeeeehhhhhhh"

document.querySelector('#paragraph').innerText = "Javascriiiiiiiiiiiiipt";

document.querySelector('.myDivClass').innerText = "Booooooootstrap"

// var divs = document.querySelectorAll('.myDivClass') // return array
// console.log(divs)

// console.log(document.scripts)



//////////////////////// Dom Style

// div.style.color = "red"
// div.style.backgroundColor = "#e8e8e8"
// div.style.border ="2px solid yellow";
// div.style.fontSize = "40px"
// div.style.borderRadius ="10px"
// div.style.width ="500px"
// div.style.margin ="auto"

// div.className = "myDivClass2"
var div = document.getElementById("myDiv") // return element
div.classList.add("myDivClass2" , "testClass" ,"ggg")
div.classList.remove("ggg" , "myDivClass2")
div.classList.toggle("hhhhhhhhh")

//////////////////////////////////////////



function changeMouseEnter(img2){
    // var img = document.querySelector('#myImg')
    img2.src = "images/bg2.jpg"
}
function changeMouseLeave(img2){
    // var img = document.querySelector('#myImg')
    img2.src = "images/bg1.jpg" 
}

function changeImg(img , type){
    (type == "mouseenter") ? img.src = "images/bg2.jpg" : img.src = "images/bg1.jpg"
}
