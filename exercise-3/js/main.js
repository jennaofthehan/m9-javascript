// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
document.addEventListener("DOMContentLoaded", function(event) {
  // Create a new input element
  var input = document.createElement("input");
	// Append the new input element to you DOM in the desired location
	document.getElementById("input-p").appendChild(input);
	// Assign a click event to your button that:
		// Creates a new paragraph of text from your input element, and:
		// Clears the text of the input element
		document.getElementById("my-btn").onclick = function(){
			var p = document.createElement("p");
			p.innerHTML= document.getElementsByTagName("input")[0].value;
			document.getElementById("input-p").appendChild(p);
			document.getElementsByTagName("input")[0].value="";
		}
});
