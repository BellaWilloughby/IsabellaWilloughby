document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
      const mainImage = carousel.querySelector(".main-image img");
      const thumbnails = carousel.querySelectorAll(".thumbnails img");

      thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => {
              // Change main image source
              mainImage.src = thumbnail.src;

              // Remove active class from all thumbnails
              thumbnails.forEach((thumb) => thumb.classList.remove("active"));

              // Add active class to the clicked thumbnail
              thumbnail.classList.add("active");
          });
      });
  });
});
