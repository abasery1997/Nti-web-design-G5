var pass = document.getElementById('password')
var btn = document.querySelector('#btn')

console.log(pass.getAttribute('class'))

pass.setAttribute('placeholder' , 'enter your password')
pass.toggleAttribute('disabled')

btn.addEventListener('click' , function(){
  (pass.getAttribute('type') == 'text') ? pass.setAttribute('type' , 'password') :  pass.setAttribute('type' , 'text')
})

var links = document.getElementsByClassName('nav-item')
console.log(links)

function changeColor(li){
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('custom-li')
        li.classList.add('custom-li') 
    }
}


/// relationship Between Nodes

var myLi = document.getElementById('myLi')
var myUl = document.querySelector('#myUl')

var text = myLi.nextElementSibling.innerText
var text2 = myLi.nextSibling.innerText
var parent = myLi.parentElement
var firstChild = myUl.firstElementChild.innerText
var mylastChild = myUl.lastElementChild.innerText
console.log(text)
console.log(text2)
console.log(parent)
console.log(mylastChild)

