document.addEventListener("DOMContentLoaded", () => {
    // Get all carousels on the page
    const carousels = document.querySelectorAll(".carousel");
  
    // Loop through each carousel and add interactivity
    carousels.forEach((carousel) => {
      const mainImage = carousel.querySelector(".displayed-img");
      const thumbnails = carousel.querySelectorAll(".thumbnail");
  
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          // Update the main image
          mainImage.src = thumbnail.src;
  
          // Remove active class from all thumbnails
          thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  
          // Add active class to the clicked thumbnail
          thumbnail.classList.add("active");
        });
      });
    });
  });
  