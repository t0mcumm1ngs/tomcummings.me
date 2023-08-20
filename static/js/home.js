// This file is for the JS code related to the home.html page only

// This script is used to resize the welcome text on the home page to fit the screen
window.addEventListener('resize', function(event){
    var welcomeTextContainer = document.getElementsByClassName('welcome-text-container')[0];

    var width = welcomeTextContainer.offsetWidth;
    var SF = 350 / width;

    document.getElementById('welcome-text-title').style.fontSize = ((3 / SF) + 'em');
    document.getElementById('welcome-text-body').style.fontSize = ((1 / SF) + 'em');
});