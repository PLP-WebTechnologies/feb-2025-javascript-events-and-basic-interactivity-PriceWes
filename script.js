// Event Handling - Button Click
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Hover Effect
const hoverElement = document.getElementById('hoverElement');
hoverElement.addEventListener('mouseover', function() {
  hoverElement.style.backgroundColor = 'lightblue';
});
hoverElement.addEventListener('mouseout', function() {
  hoverElement.style.backgroundColor = '';
});

// Image Gallery - Next Image Button
let currentIndex = 0;
const images = document.querySelectorAll('.imageGallery img');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', function() {
  images[currentIndex].style.display = 'none'; // Hide current image
  currentIndex = (currentIndex + 1) % images.length; // Move to next image
  images[currentIndex].style.display = 'block'; // Show new image
});

// Form Validation - Required Field Check
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  const input = document.getElementById('requiredField');
  if (!input.value.trim()) {
    event.preventDefault(); // Prevent form submission
    alert('This field is required!');
  }
});
