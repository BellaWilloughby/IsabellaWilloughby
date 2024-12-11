document.addEventListener("DOMContentLoaded", () => {
  // Activate carousel functionality
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
      const mainImage = carousel.querySelector(".main-image img");
      const thumbnails = carousel.querySelectorAll(".thumbnail");

      thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => {
              // Update the main image
              mainImage.src = thumbnail.src;
              mainImage.alt = thumbnail.alt;

              // Update active class
              thumbnails.forEach((thumb) => thumb.classList.remove("active"));
              thumbnail.classList.add("active");
          });
      });
  });
});
