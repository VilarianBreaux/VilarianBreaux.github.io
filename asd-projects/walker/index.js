/Global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ///////
  /////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
var KEY = { 
  LEFT: 37, 
  UP: 38, 
  RIGHT: 39,
  DOWN: 40, 
  A: 65,
  W: 87,
  S: 83,
  D: 68
};
var walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0
};
$(document).on('keyup', handleKeyUp);
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  function handleKeyDown(event) { 
    console.log(event.keyCode);
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
    } else if (event.which === KEY.UP) {
      console.log("up pressed");
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
    } else if (event.which === KEY.DOWN) {
      console.log("down pressed");
    }
  }
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      walker.speedY = 0;
    } else if (event.which === KEY.UP) {
      walker.speedX = 0;
      walker.speedY = -5;
    } else if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
      walker.speedY = 0;
    } else if (event.which === KEY.DOWN) {
      walker.speedX = 0;
      walker.speedY = 5;
    }
  }
  function handleKeyUp(event) {
    if (event.which >= KEY.LEFT && event.which <= KEY.DOWN) {
      walker.speedX = 0;
      walker.speedY = 0;
    }
  }
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
    wallCollision(); 
  }
  
  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }
  
  function endGame() {
    clearInterval(interval);

 
    $(document).off();
  }
  function wallCollision() {
    if (walker.x < 0) {
      walker.x = 0;
    }
    if (walker.y < 0) {
      walker.y = 0;
    }
    if (walker.x + $("#walker").width() > $("#board").width()) {
      walker.x = $("#board").width() - $("#walker").width();
    }
    if (walker.y + $("#walker").height() > $("#board").height()) {
      walker.y = $("#board").height() - $("#walker").height();
    }
  }

  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision();
  }
  
  setInterval(newFrame, 16);
}


