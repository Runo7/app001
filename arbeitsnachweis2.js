

  // Get the canvas element
  var canvas = document.getElementById("signature-canvas");

  // Set the canvas size
  canvas.width = 400;
  canvas.height = 200;

  // Get the drawing context
  var context = canvas.getContext("2d");

  // Variables to store mouse coordinates
  var mouseX = 0;
  var mouseY = 0;
  var isDrawing = false;

  // Event listeners for mouse events
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // Start drawing
  function startDrawing(event) {
    isDrawing = true;
    mouseX = event.pageX - canvas.offsetLeft;
    mouseY = event.pageY - canvas.offsetTop;
  }

  // Draw
  function draw(event) {
    if (!isDrawing) return;

    var newMouseX = event.pageX - canvas.offsetLeft;
    var newMouseY = event.pageY - canvas.offsetTop;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
    context.lineTo(newMouseX, newMouseY);
    context.stroke();

    mouseX = newMouseX;
    mouseY = newMouseY;
  }

  // Stop drawing
  function stopDrawing() {
    isDrawing = false;
  }


  // ...

window.addEventListener('load', function() {
    var canvas = document.getElementById('signature-canvas');
    var context = canvas.getContext('2d');
    
    // ... Hier kommt der vorhandene Code zum Zeichnen hin ...
    
    // Funktion zum Zurücksetzen des gezeichneten Inhalts
    function resetDrawing() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    var resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetDrawing);
  });
  
  // ...
  