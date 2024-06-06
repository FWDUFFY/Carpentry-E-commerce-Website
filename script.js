// EventListener to change background imahe when hovering over nav links

// Function that changes the background image, paras = image and img class

let changeBackground = function(eventTarget, imageSrc) {
    eventTarget.style.backgroundImage = "url('" + imageSrc + "')";
};

//  Get the first-tab section for which we will change background
let eventTarget = document.querySelector('.first-tab');

// Original background image
let originalBackground = eventTarget.style.backgroundImage;

// Buy link hover event
let actionTargetBuy = document.querySelector('.buy-link');

actionTargetBuy.addEventListener('mouseover', function () {
    changeBackground(eventTarget,'buy_image.jpg')
});

actionTargetBuy.addEventListener('mouseout', function() {
    eventTarget.style.backgroundImage = originalBackground;
});

// Commission link hover event
let actionTargetComm = document.querySelector('.commission-link');
actionTargetComm.addEventListener('mouseover', function() {
    changeBackground(eventTarget,'comm_image.jpg')
});


actionTargetComm.addEventListener('mouseout', function() {
    eventTarget.style.backgroundImage = originalBackground;
});

// Collabrate link hover event
let actionTargetCollab = document.querySelector('.collaborate-link');
actionTargetCollab.addEventListener('mouseover', function() {
    changeBackground(eventTarget,'collab_image.jpg')
});


actionTargetCollab.addEventListener('mouseout', function() {
    eventTarget.style.backgroundImage = originalBackground;
});


// --------------------------------------------------------------------
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header a").style.fontSize = "2rem";
        document.querySelector("header a").style.opacity = ".5";
        document.querySelector("header .slogan").style.fontSize = ".83rem";
        document.querySelector("header .slogan").style.opacity = ".5";
        document.querySelector(".header-logo img").style.width = "83px";
        document.querySelector(".header-logo img").style.opacity = ".5";

    }
    else {
        document.querySelector("header a").style.fontSize = "2.4rem";
        document.querySelector("header a").style.opacity = "1"
        document.querySelector("header .slogan").style.fontSize = "1rem";
        document.querySelector("header .slogan").style.opacity = "1";
        document.querySelector(".header-logo img").style.width = "100px";
        document.querySelector(".header-logo img").style.opacity = "1";
    }
}


// Email sign up form 
// Make placeholder text dissapear when user clicks on it

// _______________________________________________________________
// Create function to change photo as the mouse hovers over the image container

function galleryImage(className) {
    // Set current class name to be that used as a parameter in the function 
    this.className = className;

    // Set each of the 4 images using the className and common class definitions 
    this.imageFront = $("." + this.className + ">.imageFront")[0];
    this.imageLeft = $("." + this.className + ">.imageLeft")[0];
    this.imageCenter = $("." + this.className + ">.imageCenter")[0];
    this.imageRight = $("." + this.className + ">.imageRight")[0];

    this.changeImage = function(event) {
        var container = document.querySelector('.' + this.className);
        var containerWidth = container.offsetWidth;
        var mouseX = event.clientX - container.getBoundingClientRect().left;

        // Calculate the positions for the left, center and right thirds of the container
        var leftThird = containerWidth / 3;
        var rightThird = (containerWidth / 3) * 2;

        // If mouse is outside the container boundary, show imageFront
        if (mouseX < 0 || mouseX > containerWidth) {
            this.imageFront.style.zIndex = 'block';
            this.imageLeft.style.display = 'none';
            this.imageCenter.style.display = 'none';
            this.imageRight.style.display = 'none';
        } else {
            // Show/hide images based on cursor position
            this.imageFront.style.display = 'none';
            if (mouseX < leftThird) {
                this.imageLeft.style.display = 'block';
                this.imageCenter.style.display = 'none';
                this.imageRight.style.display = 'none';
            } else if (mouseX < rightThird) {
                this.imageLeft.style.display = 'none';
                this.imageCenter.style.display = 'block';
                this.imageRight.style.display = 'none';
            } else {
                this.imageLeft.style.display = 'none';
                this.imageCenter.style.display = 'none';
                this.imageRight.style.display = 'block';
            }
        }
    };
}

// Define a function to apply the gallery functionality to containers
function applyGalleryToContainers(containerClass) {
    // Select all containers with the specified class
    var thirdTabContainers = document.querySelectorAll(containerClass);

    // Loop through each container
    thirdTabContainers.forEach(function(container) {
        // Create a new instance of galleryImage for the current container
        var gallery = new galleryImage(container.className);

        // Add event listener to track mouse movement within each container
        container.addEventListener('mousemove', function(event) {
            gallery.changeImage(event);
        });
    });
}

// Call the function for each container class
applyGalleryToContainers('.third-tab-container-1');
applyGalleryToContainers('.third-tab-container-2');
applyGalleryToContainers('.third-tab-container-3');