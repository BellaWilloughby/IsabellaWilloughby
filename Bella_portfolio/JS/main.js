document.addEventListener("DOMContentLoaded", () => {
    // Project data
    const projects = [
        {
            title: "Social Media Work for I Do Prenups",
            link: "Project1.html",
            description: "Explore social media strategies and content creation for I Do Prenups.",
            img: "/IDP.png",
        },
        {
            title: "Marketing Brochures & Renderings for BeaconCrest Homes",
            link: "Project2.html",
            description: "Showcasing marketing materials and renderings for BeaconCrest Homes.",
            img: "/BeaconCrestHones.png",
        },
        {
            title: "Kappa Alpha Theta Recruitment & Bid Day 2022-2024",
            link: "Project3.html",
            description: "Highlights from Kappa Alpha Theta's recruitment and bid day events.",
            img: "/Theta.png",
        },
    ];

    // Reference to the project list container
    const projectList = document.querySelector(".project-list");

    // Dynamically create project cards
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.title}" class="project-img">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn">View Project</a>
        `;

        projectList.appendChild(projectCard);
    });
});
