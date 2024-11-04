// script.js

// JavaScript to hide the loader and show the content once the page is fully loaded
window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

//function that displays the dropdown menu when the screen is reduced
function toggleMenu() {
    const navList = document.querySelector('.navlist');
    // navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    navList.classList.toggle('active');
}

function hideMenu(){
    const navList = document.querySelector('.navlist');
    navList.classList.remove('active');
}

function setActiveLink(event) {
    // Hide the navmenu
    hideMenu();
}

// Attach event listeners to navmenu links
document.querySelectorAll('.navlist ul li a').forEach(link =>{
    link.addEventListener('click', hideMenu);
});

// Hide menu when clicking outside of it
document.addEventListener('click', function(event){
    const navList = document.querySelector('.navlist');
    const hamburger = document.querySelector('.hamburger');
    if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
        hideMenu();
    }
});