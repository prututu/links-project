window.arenaCallback = () => {

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

}

//from class
let highlightClass = 'highlight'; // Set up variables.
let textBlock = document.querySelector('li'); // Any selector.
let switchButton = document.querySelector('#example');

switchButton.onclick = () => { // Attach the event.
	textBlock.classList.toggle(highlightClass); // Toggle the class!
};

// Get all of my images blocks
let imageBlocks = document.querySelectorAll('li.image-block')

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	// document.body.scrollTop = 0; // For Safari
	// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo({top: 0, behavior: 'smooth'});
  }


  function openOverlay(imageElement) {
    // Create the overlay element
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    
    // Create the image element for the overlay
    var overlayImage = document.createElement("img");
    overlayImage.src = imageElement.src;
    
    // Append the overlay image to the overlay element
    overlay.appendChild(overlayImage);
    
    // Append the overlay to the document body
    document.body.appendChild(overlay);
    
    // Add a click event listener to the overlay to close it when clicked
    overlay.addEventListener("click", function() {
      document.body.removeChild(overlay);
    });
  }