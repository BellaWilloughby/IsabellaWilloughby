document.addEventListener("DOMContentLoaded", () => {
    // Project data
    const projects = [
        {
            title: "Social Media Work for I Do Prenups",
            link: "Project1.html",
            description: "Explore social media strategies and content creation for I Do Prenups.",
            img: "/image/IDP.png",
            category: "marketing internship",
        },
        {
            title: "Marketing Brochures & Renderings for BeaconCrest Homes",
            link: "Project2.html",
            description: "Showcasing marketing materials and renderings for BeaconCrest Homes.",
            img: "/image/BeaconCrestHomes.png",
            category: "marketing internship",
        },
        {
            title: "Kappa Alpha Theta Recruitment & Bid Day 2022-2024",
            link: "Project3.html",
            description: "Highlights from Kappa Alpha Theta's recruitment and bid day events.",
            img: "/image/Theta.png",
            category: "event",
        },
    ];

    // Reference to the project container and filter dropdown
    const projectContainer = document.querySelector(".projects-container");
    const filterDropdown = document.getElementById("filter-dropdown");

    // Function to create and display project cards
    const displayProjects = (filter = "all") => {
        // Clear previous projects
        projectContainer.innerHTML = "";

        // Filter projects based on the selected category
        const filteredProjects = filter === "all" 
            ? projects 
            : projects.filter(project => project.category.includes(filter));

        // Create and append project cards
        filteredProjects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.setAttribute("data-category", project.category);

            projectCard.innerHTML = `
                <img src="${project.img}" alt="${project.title}" class="project-img">
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" class="btn">View Project</a>
                </div>
            `;

            projectContainer.appendChild(projectCard);
        });
    };

    // Display all projects initially
    displayProjects();

    // Filter projects when the dropdown changes
    filterDropdown.addEventListener("change", (e) => {
        const filterValue = e.target.value;
        displayProjects(filterValue);
    });
});
