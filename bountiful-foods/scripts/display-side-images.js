var images = [
    "images/fruit2.webp",
    "images/fruit3.webp",
    "images/fruit4.webp",
    "images/fruit5.webp",
    "images/fruit6.webp",
    "images/fruit7.webp",
    "images/fruit8.webp",
    "images/fruit9.webp",
    "images/fruit10.webp",
    "images/fruit11.webp",
    
    
  ];
  
  var textOverlays = [,
    "Text Overlay 2",
    "Text Overlay 3",
    "Text Overlay 4",
    "Text Overlay 5",
    "Text Overlay 6",
    "Text Overlay 7",
    "Text Overlay 8",
    "Text Overlay 9",
    "Text Overlay 10",
    "Text Overlay 11",
    
  ];
  
  var currentImageIndex = 0;
  var sidebarImage = document.getElementById("sidebar-image");
  var overlayText = document.getElementById("overlay-text");
  
  function changeImage() {
    sidebarImage.src = images[currentImageIndex];
    overlayText.textContent = textOverlays[currentImageIndex];
  
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(changeImage, 10000); // Call changeImage every 10 seconds
  