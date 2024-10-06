document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
    showPopup(); // Show the popup on form submission
});

function showPopup() {
    document.getElementById("popup").style.display = "flex"; // Make sure display is set to 'flex'
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup when closed
}
window.addEventListener('scroll', function() {
    var chironHeader = document.querySelector('header h1');
    var headerContainer = document.querySelector('.header-container');
    var scrollValue = window.scrollY;

    // Scale down and fade the header text
    if (scrollValue > 0) {
        chironHeader.style.transform = `scale(${1 - scrollValue / 1000})`; // Scale down the text
        chironHeader.style.opacity = `${1 - scrollValue / 300}`; // Fade out the text as you scroll
    } else {
        chironHeader.style.transform = 'scale(1)'; // Reset scale
        chironHeader.style.opacity = '1'; // Reset opacity
    }
});
