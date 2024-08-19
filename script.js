//----------------------------------------art---------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery .image img");
    const fullImageView = document.getElementById("FullImageView");
    const fullImage = document.getElementById("FullImage");
    const closeButton = document.querySelector("#FullImageView .close");

    images.forEach(image => {
        image.addEventListener('click', function() {
            fullImage.src = this.src; 
            fullImageView.style.display = 'flex'; 
        });
    });

    closeButton.addEventListener('click', function() {
        fullImageView.style.display = 'none'; 
    });
});
//------------------------------------entries---------------------------------------------------------//
let currentIndex = 0;

function showFullPost(postId) {
    
    const allPosts = document.querySelectorAll('.full-post');
    allPosts.forEach(post => post.classList.add('hidden'));

    
    const post = document.getElementById(postId);
    post.classList.remove('hidden');

    
    initializeCarousel(post);
}

function hideFullPost() {
    const allPosts = document.querySelectorAll('.full-post');
    allPosts.forEach(post => post.classList.add('hidden'));
}

function initializeCarousel(post) {
    const images = post.querySelectorAll('.carousel img');
    const totalImages = images.length;
    
    post.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel(post);
    });

    post.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel(post);
    });

    function updateCarousel(post) {
        const offset = -currentIndex * 100; 
        post.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    updateCarousel(post); 
}
//------------------------------------clicks---------------------------------------------------------//
document.addEventListener('DOMContentLoaded', function() {
    const cimages = document.querySelectorAll(".cgallery .cimage img");
    const cfullImageView = document.getElementById("cFullImageView");
    const cfullImage = document.getElementById("cFullImage");
    const ccloseButton = document.querySelector("#cFullImageView .close");

    function cFullView(src) {
        cfullImage.src = src;
        cfullImageView.style.display = 'flex'; 
    }

    function ccloseFullView() {
        cfullImageView.style.display = 'none'; 
    }

    cimages.forEach(cimage => {
        cimage.addEventListener('click', function() {
            cFullView(this.src);
        });
    });

    ccloseButton.addEventListener('click', ccloseFullView);
});
