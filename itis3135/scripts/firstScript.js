var yourName = window.prompt("What is your name?");
    var feels = window.prompt("How are you doing?");
        var today = new Date();

        document.write("Today is " + today.toDateString() + " and the time is " + today.getHours() + ":" + today.getMinutes());

        document.write("The Diabolical Gorillas LLC. welcomes you, " + yourName + " to the Gorilla Gang!");

        document.write("We're glad you are doing " + feels + "!");

function addGorillas(){
    var ape1, ape2;
    document.write("<h1>Sum of Gorillas App</h1>")
    document.write("You have 4 gorillas in danger and 9 rescued gorillas, what is the total number of rescued gorillas when you save the 4?")
    ape1 = 4;
    ape2 = 9;
    apeTotal = ape1 + ape2;
    document.write("<br>There are " + apeTotal + " rescued gorillas now");
}

function salesTax(){
    document.write("<h1>Donation Tax App</h1>")
    document.write("If you donate $25 to save the gorillas and the tax is 7.25% what is your subtotal?");

    var subtotal = 25;
    var taxPercent = 0.0725;
    var taxAmount = subtotal * taxPercent;
    var total = subtotal + taxAmount;
    document.write("<br>The total is $" + total); 
}

function lastLetter(){
    document.write("<h1>Last Letter Generator</h1>")
    document.write("Want to see a last letter generator for any gorilla name?")
    var gorName = window.prompt("Type a gorilla name");
    document.write("<br>The last letter of " + gorName + " is " + gorName[gorName.length - 1]);
}

function perimeter(){
    document.write("<h1>Gorilla Fence Generator App</h1>")
    document.write("What will the perimter of a fence for our gorillas thats 16 x 21.5 feet?");
    var width = 16.0;
    var length = 21.5;
    var perimeter = (2 * width) + (2 * length);
    return document.write("<br>The perimeter is " + perimeter + " feet")
}
function fToCel(){
    document.write("<h1>Fahrenheit to Celsius App</h1>")
    document.write("Gorillas usually live in 73.4 degrees Fahrenheit, what would that be in Celsius?");
    var far = 73.4
    var cel = (far - 32) * (5/9);
    document.write("<br> The temperature " + far + " degrees Fahrenheit is equal to " + cel + " degrees Celsius");

}
