//get the loder and display it
var loaders = document.getElementsByClassName('loader-wrapper');
loaders[0].style.display = "inherit";


/*
* This function will be called when the window is loaded
**/
window.onload = function () {

    // loader will disappear after 1 second when the window is loaded
    setTimeout(function() { 
    loaders[0].style.display = "none"; 
    }, 1000);

};