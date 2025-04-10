<!DOCTYPE html>
<html>
<head>
  <title>Change Background</title>
</head>
<body>
  <h1>Change Background Color</h1>
  <button onclick="changeBackgroundColor()">Change Color</button>

  <script>
    function changeBackgroundColor() {
      const colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFD1DC", "#E0C1FF"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
  </script>
</body>
</html>
