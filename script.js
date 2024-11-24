// Add interactivity to the carousel (optional)
console.log("Script loaded!");

// Example: Log carousel images
const images = document.querySelectorAll('.carousel img');
images.forEach((img, index) => {
  console.log(`Image ${index + 1}: ${img.src}`);
});
