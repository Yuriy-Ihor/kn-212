
function CheckForm(){
    if(CheckFirstName() && CheckLastName() && CheckMail())
    {
        alert("Thank you for subscribing! :)");
    }
}

function CheckFirstName()
{
    let fnameValue = document.forms["section-form"]["fname"].value;
    if(!IsLetter(fnameValue))
    {
        alert("First name must be string!");
        return false;
    }
    return true;
}

function CheckLastName(){
    let lnameValue = document.forms["section-form"]["lname"].value;
    if(!IsLetter(lnameValue))
    {
        alert("Last name must be string!");
        return false;
    }
    return true;
}

function CheckNumber(){
    let numberValue = document.forms["section-form"]["user-phone"].value;
    if(!IsNumber(numberValue)){
        alert("Incorrect number!");
        return false;
    }
    return true;
}

function CheckMail(){
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let mail = document.forms["section-form"]["email"].value;
    if (mail.match(regex))
    {
        return true;
    }
    else
    {
        alert("Incorrect email!");
        return false;
    }
}

function IsLetter(value){
    var regex=/^[a-zA-Z]+$/;
    if (value.match(regex))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function IsNumber(value){
    return !isNaN(value);
}


var selectElement = document.getElementById('section-form-subscribe-type');

selectElement.addEventListener('change', (event) =>
{
    if(event.target.value == "Trial"){
        alert("Warning: trial period is available only for 2 weeks!")
    }
});

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});