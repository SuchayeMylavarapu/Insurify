// Create a button element
const button = document.createElement('button');
button.textContent = 'Go to YouTube';

// Set the URL to navigate to
const url = 'https://www.youtube.com/watch?v=FazgJVnrVuI';

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Navigate to the URL when the button is clicked
  window.location.href = url;
});

// Append the button to the body element
document.body.appendChild(button);
