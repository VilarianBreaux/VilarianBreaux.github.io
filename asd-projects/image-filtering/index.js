// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);

  $("#apply").on("click", function () {
 
    applyAndRender();
  });

  $("#reset").on("click", function () {
    resetAndRender();
  });
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(function (pixel) {
    pixel = reddify(pixel);
    pixel = decreaseBlue(pixel);
    pixel = increaseGreenByBlue(pixel);
    return pixel;
  });
  
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      image[r][c] = filterFunction(image[r][c]);
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground() {
  const backgroundColor = image[0][0];
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      if (image[r][c] !== backgroundColor) {
        image[r][c] = reddify(image[r][c]); 
      }
    }
  }
}



// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  return number < 0 ? 0 : number > 255 ? 255 : number;
}
console.log(keepInBounds(-30)); 
console.log(keepInBounds(300)); 
console.log(keepInBounds(127));  

// TODO 3: Create reddify function
function reddify(rgbString) {
  var rgbNumbers = rgbStringToArray(rgbString);
  rgbNumbers[RED] = 200;
  return rgbArrayToString(rgbNumbers);
}
// TODO 6: Create more filter functions
function decreaseBlue(rgbString) {
  var rgbNumbers = rgbStringToArray(rgbString);
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50);
  return rgbArrayToString(rgbNumbers);
}
function increaseGreenByBlue(rgbString) {
  var rgbNumbers = rgbStringToArray(rgbString);
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[GREEN] + rgbNumbers[BLUE]);
  return rgbArrayToString(rgbNumbers);
}
