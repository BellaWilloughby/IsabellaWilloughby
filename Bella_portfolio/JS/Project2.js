document.addEventListener("DOMContentLoaded", () => {
    const carouselData = [
      {
        title: "9846 Jerry Lane",
        mainImage: "/img/9846.jpg",
        thumbnails: [
          "/img/9846.jpg", // Including the displayed image
          "/img/9846.png",
          "/img/9846R1.png",
          "/img/9846R2.png",
          "/img/9846R3.png",
          "/img/9846HS1.png",
          "/img/9846HS2.png",
        ],
      },
      {
        title: "9844 Jerry Lane",
        mainImage: "/img/9844.jpg",
        thumbnails: [
          "/img/9844.jpg", // Including the displayed image
          "/img/9844.png",
          "/img/9844R1.png",
          "/img/9844R2.png",
          "/img/9844R3.png",
          "/img/9844HS1.png",
          "/img/9844HS2.png",
        ],
      },
      {
        title: "2628 N Potomac Street",
        mainImage: "/img/2628.jpg",
        thumbnails: [
          "/img/2628.jpg", // Including the displayed image
          "/img/2628.png",
          "/img/2628R1.png",
          "/img/2628R2.png",
          "/img/2628R3.png",
          "/img/2628HS1.png",
        ],
      },
      {
        title: "2728 N Edison Street",
        mainImage: "/img/2728.jpg",
        thumbnails: [
          "/img/2728.jpg", // Including the displayed image
          "/img/2728.png",
          "/img/2728R1.png",
          "/img/2728R2.png",
          "/img/2728HS1.png",
        ],
      },
      {
        title: "5120 25th Place",
        mainImage: "/img/5120.jpg",
        thumbnails: [
          "/img/5120.jpg", // Including the displayed image
          "/img/5120.png",
          "/img/5120R1.png",
          "/img/5120R2.png",
          "/img/5120R3.png",
          "/img/5120HS1.png",
        ],
      },
      {
        title: "4912 17th Street",
        mainImage: "/img/4912.jpg",
        thumbnails: [
          "/img/4912.jpg", // Including the displayed image
          "/img/4912.png",
          "/img/4912R1.png",
          "/img/4912R2.png",
          "/img/4912R3.png",
          "/img/4912HS1.png",
        ],
      },
      {
        title: "1244 N Utah Street",
        mainImage: "/img/1244.jpg",
        thumbnails: [
          "/img/1244.jpg", // Including the displayed image
          "/img/1244.png",
          "/img/1244R1.png",
          "/img/1244R2.png",
          "/img/1244R3.png",
        ],
      },
    ];
  
    const carouselContainer = document.querySelector(".carousel-container");
  
    carouselData.forEach((carousel, index) => {
      // Create carousel elements
      const section = document.createElement("section");
      section.classList.add("carousel");
      section.id = `carousel${index + 1}`;
  
      section.innerHTML = `
        <h2>${carousel.title}</h2>
        <div class="main-image">
          <img src="${carousel.mainImage}" alt="${carousel.title} Main Image" class="displayed-img" />
        </div>
        <div class="thumbnails">
          ${carousel.thumbnails
            .map(
              (thumb) => `
            <img src="${thumb}" alt="${carousel.title} Thumbnail" class="thumbnail" />
          `
            )
            .join("")}
        </div>
      `;
  
      carouselContainer.appendChild(section);
  
      // Add interactivity to the carousel
      const displayedImage = section.querySelector(".displayed-img");
      const thumbnails = section.querySelectorAll(".thumbnail");
  
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          displayedImage.src = thumbnail.src;
  
          thumbnails.forEach((thumb) => thumb.classList.remove("active"));
          thumbnail.classList.add("active");
        });
      });
    });
  });
  