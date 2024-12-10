document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
  
    carousels.forEach((carousel) => {
      const mainImage = carousel.querySelector(".displayed-img");
      const thumbnails = carousel.querySelectorAll(".thumbnail");
  
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          // Update the main image
          mainImage.src = thumbnail.src;
  
          // Update the active class for thumbnails
          thumbnails.forEach((thumb) => thumb.classList.remove("active"));
          thumbnail.classList.add("active");
        });
      });
    });
  });
  