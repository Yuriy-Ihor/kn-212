
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

/*--- events ---*/

var sectionSelect = document.getElementById('section-form-subscribe-type');

sectionSelect.addEventListener('change', (event) => {
    if(event.target.value == "Trial"){
        alert("Warning: trial period is available only for 2 weeks!")
    }
});

window.addEventListener('scroll', ControlArrowTop());
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
  };

function ControlArrowTop(){
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
}

var logo = document.getElementById('navbar-logo');
logo.addEventListener('click', function() {
    RandomizeColor(logo);
} );
function RandomizeColor(element){
    element.style.color = GetRandomColor();
}

function GetRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*--- dark/light mode ---*/

function SwitchPageToLightMode(){
    document.getElementById('navbar-light-button').classList.toggle('hide');
    document.getElementById('navbar-dark-button').classList.toggle('hide');
    document.body.style.backgroundColor = 'white';

    document.getElementById('navbar').classList.toggle('dark-mode');
    document.getElementById('navbar-logo').classList.toggle('dark-mode');
    var navbarElements = document.getElementsByClassName('navbar-ul-element');
    for(let i = 0; i < navbarElements.length; i++){
        navbarElements[i].classList.toggle('dark-mode');
    }
    document.getElementById('navbar-ul-dropdown-button').classList.toggle('dark-mode');
    document.getElementById('navbar-ul-dropdown-content').classList.toggle('dark-mode');

    document.getElementById('section-top-post-name').classList.toggle('dark-mode');

    var sectionPostTexts = document.getElementsByClassName('section-top-post-text');
    for(let i = 0; i < sectionPostTexts.length; i++){
        sectionPostTexts[i].classList.toggle('dark-mode');
    }

    var sectionTopNames = document.getElementsByClassName('section-top-name');
    for(let i = 0; i < sectionTopNames.length; i++){
        sectionTopNames[i].classList.toggle('dark-mode');
    }
}

function SwitchPageToDarkMode(){
    document.getElementById('navbar-light-button').classList.toggle('hide');
    document.getElementById('navbar-dark-button').classList.toggle('hide');
    document.body.style.backgroundColor = 'black';

    document.getElementById('navbar').classList.toggle('dark-mode');
    document.getElementById('navbar-logo').classList.toggle('dark-mode');
    var navbarElements = document.getElementsByClassName('navbar-ul-element');
    for(let i = 0; i < navbarElements.length; i++){
        navbarElements[i].classList.toggle('dark-mode');
    }
    document.getElementById('navbar-ul-dropdown-button').classList.toggle('dark-mode');
    document.getElementById('navbar-ul-dropdown-content').classList.toggle('dark-mode');

    document.getElementById('section-top-post-name').classList.toggle('dark-mode');

    var sectionPostTexts = document.getElementsByClassName('section-top-post-text');
    for(let i = 0; i < sectionPostTexts.length; i++){
        sectionPostTexts[i].classList.toggle('dark-mode');
    }

    var sectionTopNames = document.getElementsByClassName('section-top-name');
    for(let i = 0; i < sectionTopNames.length; i++){
        sectionTopNames[i].classList.toggle('dark-mode');
    }
}
