//Oscar functions
function addSugary(){
	for(var i=0;i<sugary.length;i++){
		var element=document.getElementById("sugary"+i);
		element.innerHTML=sugary[i].product;
	}
}

function addPricesSugary(){
	for(var i=0;i<sugary.length;i++){
		var element=document.getElementById("sugaryPrice"+i);
		element.innerHTML=sugary[i].price;
	}
}

//drink functions
function addDrinks(){
	for(var i=0;i<drinks.length;i++){
		var element=document.getElementById("product"+i);
		element.innerHTML=drinks[i].product;
	}
}
addDrinks()
function addPricesDrinks(){
	for(var i=0;i<drinks.length;i++){
		var element=document.getElementById("price"+i);
		element.innerHTML=drinks[i].price;
	}
}
addPricesDrinks()


 $('#submit').click(function(){
 addPricesDrinks();
 })
 $('#submit').click(function(){
 addDrinks();
 })

