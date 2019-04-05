const new_image = 'https://pbs.twimg.com/profile_images/1065873857024798720/HWc2dqgb_400x400.jpg'

// add an onload to define a function that runs when the current tab has loaded
window.onload = function() {
    // find all the images on the current page
    let images = document.querySelectorAll('img');
    for (let image of images) { // loop through the images
        // change their src
        image.src = new_image
    }
}


