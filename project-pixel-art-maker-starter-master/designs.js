// Select color input (by using id of element in html)
const color = document.getElementById("#colorPicker");

// Select size input
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");
const picker = document.getElementById("sizePicker")

// When width and height is submitted by the user, call makeGrid()
picker.onsubmit = function makeGrid(event) {
	event.preventDefault();

 // Remove existing rows
	while(canvas.rows.length > 0) {
	  canvas.deleteRow(0);
	}

// create table rows and cell
  for ( let x = 0; x < inputHeight.value; x++){
    	let row = canvas.insertRow(0);
    	for ( let y = 0; y < inputWidth.value; y++){
    		let cell = row.insertCell(0);

// Used EventListener to fill color in the cells that were clicked by users and change the color
    		cell.addEventListener("click",function(){
  			    this.bgColor = colorPicker.value;
  			});
  	}
   }
 };
