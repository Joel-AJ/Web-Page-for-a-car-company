window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const homeSection = document.querySelector('.home-section');

    if (window.scrollY > 0) {
        header.classList.add('shrink');
        homeSection.style.opacity = '0';
    } else {
        header.classList.remove('shrink');
        homeSection.style.opacity = '1';
    }
});
window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about-section');
    var carSection = document.querySelector('.cars-section');

    if (window.scrollY >= aboutSection.offsetTop - window.innerHeight + 100) {
        aboutSection.classList.add('show');
    }

    if (window.scrollY >= carSection.offsetTop - window.innerHeight + 100) {
        carSection.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - window.innerHeight + 100 && window.scrollY < sectionTop + sectionHeight) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionPosition = section.offsetTop;
        if (scrollPosition >= sectionPosition) {
            section.style.opacity = 1; // Show the section
        } else {
            section.style.opacity = 0; // Hide the section
        }
    });
});
