

var btn = document.querySelector('#btn')
var div = document.getElementById('myDiv')
var input = document.querySelector('#input')
var form = document.getElementById('myForm')
var scrollDiv = document.querySelector('#scrollDiv')
var topBtn = document.getElementById('topBtn')
var newDiv = document.querySelector('#newDiv')
// addEventListiner

// btn.addEventListener("click" , changeStyle )

function changeStyle(){
    div.classList.add('myDivClass2')
}
// changeStyle()

// input.addEventListener('input' , function(){
//     console.log(input.value)
//     if(input.value == ""){
//         console.log('hello')
//     }
// } )

// input.addEventListener('change' , function(){
//     console.log(input.value)
// })


// form.addEventListener('submit' , function(e){
//     e.preventDefault()
//     console.log(e.target.elements.username.value)
//     console.log(input.value)
//     console.log("hellllllo")
// } )

// scrollDiv.addEventListener('scroll' , function(e){
//     console.log(e)
//     console.log(scrollDiv.scrollTop);
//     (scrollDiv.scrollTop > 50)?scrollDiv.style.background = "red" : scrollDiv.style.background = "white"

// })

// scrollDiv.onscroll =  function(e){
//     console.log(e);
//     (scrollDiv.scrollTop > 50)?scrollDiv.style.background = "red" : scrollDiv.style.background = "white"
// }

// window.onscroll = function(){
//     myWindowScroll()
// }
// function myWindowScroll(){
//     if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
//         topBtn.style.display="block"
//     }
//     else topBtn.style.display="none"
// }



var p = document.createElement("p");
// p.innerText = "lorem ipsum";
// p.textContent = "lorem ipsum"; 
var text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");

p.appendChild(text)

newDiv.append(p)

