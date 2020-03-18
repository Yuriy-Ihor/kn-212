
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

var sectionTableItems = document.getElementsByClassName('section-table-item');
var sectionTopNames = document.getElementsByClassName('section-top-name');
var sectionPostTexts = document.getElementsByClassName('section-top-post-text');
var navbarElements = document.getElementsByClassName('navbar-ul-element');
var formTexts = document.getElementsByClassName('form-text');

function SwitchPageToLightMode(){
    document.body.style.backgroundColor = 'white';
    ToggleDarkMode();
    ToggleForModeSwitchingButtons();
}

function SwitchPageToDarkMode(){
    document.body.style.backgroundColor = 'black';
    ToggleDarkMode();
    ToggleForModeSwitchingButtons();
}

function ToggleForModeSwitchingButtons(){
    document.getElementById('navbar-light-button').classList.toggle('hide');
    document.getElementById('navbar-dark-button').classList.toggle('hide');
}

function ToggleDarkMode(){
    ToggleDarkModeForIds();
    ToggleDarkModeClasses();    
}

function ToggleDarkModeForIds(){
    document.getElementById('navbar').classList.toggle('dark-mode');
    document.getElementById('navbar-logo').classList.toggle('dark-mode');
    document.getElementById('navbar-ul-dropdown-button').classList.toggle('dark-mode');
    document.getElementById('navbar-ul-dropdown-content').classList.toggle('dark-mode');
    document.getElementById('section-top-post-name').classList.toggle('dark-mode');
    document.getElementById("section-quotes").classList.toggle('dark-mode');
    document.getElementById("footer-ul").classList.toggle('dark-mode');
    document.getElementById("footer-text").classList.toggle('dark-mode');
    document.getElementById("section-table").classList.toggle('dark-mode');
}

function ToggleDarkModeClasses(){
    for(let i = 0; i < navbarElements.length; i++){
        navbarElements[i].classList.toggle('dark-mode');
    }
    for(let i = 0; i < sectionPostTexts.length; i++){
        sectionPostTexts[i].classList.toggle('dark-mode');
    }
    for(let i = 0; i < sectionTopNames.length; i++){
        sectionTopNames[i].classList.toggle('dark-mode');
    }
    for(let i = 0; i < sectionTableItems.length; i++){
        sectionTableItems[i].classList.toggle('dark-mode');
    }
    for(let i = 0; i < formTexts.length; i++){
        formTexts[i].classList.toggle('dark-mode');
    }
}