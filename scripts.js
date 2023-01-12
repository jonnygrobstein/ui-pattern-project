

// Get the Modal

const modal = document.getElementById('myModal');

// click on an image and a popup displays with image pic and description to the right side

const img = document.getElementById('image01')
const modalImg = document.getElementById('img01')
const description = document.getElementsByClassName('popupData')

img.onclick = function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"
}

// Array to hold the following data - [Image URL, Artwork Title, Artist Name, Year]



// Function to randomly place art with images into the above Array


// Function to iterate through the array and assign them to the images and the modal