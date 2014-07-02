function myFunction(){
	var text = "<ul>";
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  
 // for case testing 
 for (var index = 0; index < fruits.length; ++index) {
        text += "<li>" + fruits[index] + "</li>";
     //console.log("javascript");
    }
 text += "</ul>";
 document.getElementById("demo").innerHTML = text;
 var c = 90;
 var d = 89;
 var e = 90;  
 // if loop 
 if (c===659) {
    console.log("true case");
  }
  else {
 	 alert("nothing is going to matching");
 }
  // switch case 
	 var foo = 0;
		switch (foo) {
		    case -1:
		        alert('negative 1');
		        break;
		    case 0: 
		        alert("zero based value");
		        break;
		        
		    case 1: 
		        alert(1);
		        break; 
		    case 2:
		        alert(2);
		        break;
		    default:
		        alert('default');
		}
		// while looop
  var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("demo").innerHTML = text;


}

