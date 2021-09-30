yourNum = window.prompt("The Diabolical Gorilla wants you to enter a number 0-10");

validateEntry(yourNum);

getShape(yourNum);

function getShape(yourNum){
    if(yourNum == 0)
        {document.write("This is not a polygon");}
    else if(yourNum == 1) 
        {document.write("This is a monogon");}
    else if(yourNum == 2)
        {document.write("This is a digon");}
    else if(yourNum == 3)
        {document.write("This is a triangle");}
    else if(yourNum == 4)
        {document.write("This is a quadrilateral or a square");}
    else if(yourNum ==5)
        {document.write("This is a pentagon");}
    else if(yourNum == 6)
        {document.write("This is a hexagon");}
    else if(yourNum == 7)
        {document.write("This is a heptagon");}
    else if(yourNum == 8)
        {document.write("This is a octagon");}
    else if(Math.abs(Math.round(yourNum)) == 9)
        {document.write("This is a nonagon");}
    else if(yourNum == 10)
        {document.write("This is a decagon");}
    else{ document.write("This number is out of range");}           
                            }
function validateEntry(x) {
    if (isNaN(x))  // if x is not a number return a error message
        {document.write("This number is out of range");}

    return yourNum = Math.abs(Math.round(yourNum)); // finds absolute value of yourNum and rounds to closest num
                          }


