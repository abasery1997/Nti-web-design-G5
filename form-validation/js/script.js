var form = document.getElementById('form')
// var username = document.getElementById('username')



function nameValidation(input){
    console.log(input)
    var inputText = input.value.trim()
    // console.log(input.length)

    if(inputText.length >= 3){
       removeError(input)
    }
    else{
       showError(input , "username must be at least 3 characters")
    }
}

function emailValidation(input){
    // var d = new Date()
    var inputText = input.value.trim()
    // debugger
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(reg.test(inputText))
    if(reg.test(inputText) == false){
        showError(input , "enter valid email")
    }
    else{
        removeError(input)
    }
}
function passwordValidation(input){
    var inputText = input.value.trim()
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
   if( reg.test(inputText) == false) {
       showError(input , "password must be container at least 1 lowercase character , 1 uppercase character , 1 letter ")
   }
   else{
       removeError(input)
   }
}


function showError(element , msg){
    element.nextElementSibling.innerText = msg;
    element.classList.add("border-danger")
    element.nextElementSibling.classList.add('text-danger')
}

function removeError(element){
    element.nextElementSibling.innerText =""
    element.classList.remove("border-danger")
}


form.addEventListener('input' , function(e){
    console.log(e.target.id)
    switch(e.target.id){
        case "username":  nameValidation(e.target) ; break
        case "email":  emailValidation(e.target) ; break
        case "password":  passwordValidation(e.target) ; break

    }
    

})


