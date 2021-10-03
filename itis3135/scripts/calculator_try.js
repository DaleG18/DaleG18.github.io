var x = window.prompt("Enter first number?");
var y = window.prompt("Enter second number?");
validateEntry(x,y);
function add()    {
    addNum = +x + +y;
    alert(addNum);}


function subtract(){
    subNum = x - y; 
    alert(subNum); }


function multiply(){
    mulNum = x * y;
    alert(mulNum); }

function divide() {
    divNum = x / y;
    alert(divNum);}

function validateEntry(x,y) {
    if (isNaN(x) || isNaN(y))  // if x or y are not numbers return a error message
    {alert("These values do not work, please refresh to try again :)");}
                            }