var person=["Lawrence","Jordan","Abdul","Catherine"];
var salary=[110000, 45000, 89000, 91000];
var $ = function(id) { return document.getElementById(id); };

var inBox = document.getElementById("name");
    inBoxfocus;
    inBox.setActive;
    inBox.select();

    function addSalary(){
   var name = document.getElementById("name").value;
   var wage = document.getElementById("salary").value;

   if(name == "" || wage < 0 || isNaN(wage) || !isNaN(name) ){ //alerts user with error if name is empty,
       alert("Entry is invalid, please try again"); //wage is less than 0 wage is not a number, or if
   }                                                // name is a number
   else{
       person.push(name);   //pushes name into person array
       salary.push(wage);   //pushes wage into salary array
       document.getElementById("name").focus();
   }
}

function displayResults(){
  
    var average = 0.0;
    var highest = 0;

    for(var x = 0; x < salary.length; x++){
        average += parseFloat(salary[x]); // allows average to be converted into number
        if(salary[highest] < salary[x])  //tracks down highest wage with itteration of x
            highest = x; 
         }
         average = average / salary.length;
    $("results1").innerHTML = "Average Salary =" + average + "<br />";
    $("results2").innerHTML = "Highest Salary =" + person[highest] + "'s salary is " + salary[highest];
}

function displaySalary(){
    var resTable = "<table>";
    
    resTable += "<tr align='left'><th>Person</th><th>Salary</th></tr>"; // defines rows and headers
    
    for (var x = 0; x < salary.length; x++) {
    
        resTable += "<tr><td>" + person[x] + "</td><td>" + salary[x] + "</td></tr>";
    
                                            }
    resTable += "</table>";
    
    $("results_table").innerHTML = resTable;
                        }
