var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image

	// for click event add item to order and update total

	// display order and total
	var orderTotal = 0;
		
		document.getElementById("cappuccino").onclick=function(){
			
			document.getElementById("order").append('\n $3.45 - Cappuccino - Delicious Cappuccino!');
			
			orderTotal = (parseFloat(orderTotal) + parseFloat(3.45)).toFixed(2);
			
			document.getElementById("total").innerHTML="<em>Total:" + orderTotal + " </em>";
		};
		
		document.getElementById("espresso").onclick=function(){
			
			document.getElementById("order").append('$1.95 - Espresso - Delicious espresso. Wanna try it?');
			
			orderTotal = (parseFloat(orderTotal) + parseFloat(1.95)).toFixed(2);
			
			
			document.getElementById("total").innerHTML="<em>Total:" + orderTotal+" </em>";
			};
	
		
}; // end onload