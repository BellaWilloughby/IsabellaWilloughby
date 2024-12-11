document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
      const mainImage = carousel.querySelector(".main-image img");
      const thumbnails = carousel.querySelectorAll(".thumbnails img");

      thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => {
              // Update main image
              mainImage.src = thumbnail.src;

              // Highlight active thumbnail
              thumbnails.forEach((thumb) => thumb.classList.remove("active"));
              thumbnail.classList.add("active");
          });
      });
  });
});
