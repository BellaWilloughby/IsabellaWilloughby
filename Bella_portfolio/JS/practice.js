document.addEventListener("DOMContentLoaded", () => {
    // Get all carousels on the page
    const carousels = document.querySelectorAll(".carousel");

    // Loop through each carousel
    carousels.forEach((carousel, index) => {
        // Get the main display image in the current carousel
        const displayImage = carousel.querySelector(".display-image");

        // Get all thumbnails in the current carousel
        const thumbnails = carousel.querySelectorAll(".thumbnail");

        // Add click event listeners to each thumbnail in this carousel
        thumbnails.forEach((thumbnail, thumbIndex) => {
            thumbnail.addEventListener("click", () => {
                // Update the main display image source for this carousel
                displayImage.src = thumbnail.src;

                // Remove active class from all thumbnails in this carousel
                thumbnails.forEach(thumb => thumb.classList.remove("active"));

                // Add active class to the clicked thumbnail
                thumbnail.classList.add("active");

                console.log(
                    `Carousel ${index + 1}, Thumbnail ${thumbIndex + 1} clicked.`
                );
            });
        });
    });
});
