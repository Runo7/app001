window.addEventListener('DOMContentLoaded', (event) => {
    var canvas = document.getElementById("signature-canvas");
    var context = canvas.getContext("2d");
    var resetButton = document.getElementById("reset-button");
  
    // Canvasgröße festlegen
    canvas.width = 300;
    canvas.height = 150;
  
    // Variablen zur Speicherung der Mausposition
    var isMouseDown = false;
    var lastPosition = { x: 0, y: 0 };
  
    // Mausereignisse abfangen
    canvas.addEventListener("mousedown", function (event) {
      isMouseDown = true;
      lastPosition = getMousePosition(event.canvasX, event.canvasY);
    });
  
    canvas.addEventListener("mousemove", function (event) {
      if (isMouseDown) {
        var currentPosition = getMousePosition(event.canvasX, event.canvasY);
        drawLine(lastPosition, currentPosition);
        lastPosition = currentPosition;
      }
    });
  
    canvas.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  
    // Funktion zur Zeichnung einer Linie
    function drawLine(start, end) {
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.strokeStyle = "#000";
      context.lineWidth = 2;
      context.stroke();
    }
  
    // Funktion zur Berechnung der Mausposition im Canvas
    function getMousePosition(x, y) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: x - rect.left,
        y: y - rect.top
      };
    }
  
    // Reset-Button
    resetButton.addEventListener("click", function (event) {
      event.preventDefault();
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  });
  