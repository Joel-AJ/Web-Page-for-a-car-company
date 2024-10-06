/* JavaScript for Smooth Scrolling and Transitions */
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


/* JavaScript for Scroll Effects */
window.addEventListener('scroll', function() {
    var aboutHeader = document.querySelector('.about-header h1');
    var scrollValue = window.scrollY;

    // Scale down and fade the header text
    if (scrollValue > 0) {
        aboutHeader.style.transform = `scale(${1 - scrollValue / 1000})`; // Scale down the text
        aboutHeader.style.opacity = `${1 - scrollValue / 300}`; // Fade out the text as you scroll
    } else {
        aboutHeader.style.transform = 'scale(1)'; // Reset scale
        aboutHeader.style.opacity = '1'; // Reset opacity
    }
});
