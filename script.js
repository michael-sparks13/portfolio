import { projects } from "./projects.js";

// JavaScript to detect user agent and toggle navigation menu
window.onload = function () {
	var userAgent = navigator.userAgent || window.opera;

	if (
		/android/i.test(userAgent) ||
		(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
	) {
		// If user is on an Android device or iPhone/iPad/iPod, show hamburger menu
		document.getElementById("navMenu").style.display = "none"; // Hide regular navigation menu
		document.getElementById("hamburgerMenu").style.display = "block"; // Show hamburger menu

		// Toggle navigation menu on click of hamburger menu
		document
			.getElementById("hamburgerMenu")
			.addEventListener("click", function () {
				var navMenu = document.getElementById("navMenu");
				navMenu.style.display =
					navMenu.style.display === "block" ? "none" : "block";
			});
	}
};

// Function to create project cards dynamically
function createProjectCards(filterType) {
	var projectCardsContainer = document.getElementById("projectCards");
	projectCardsContainer.innerHTML = "";

	var filteredProjects;
	if (filterType === "all") {
		filteredProjects = projects;
	} else {
		filteredProjects = projects.filter(
			(project) => project.type === filterType
		);
	}

	var numCardsPerRow =
		window.innerWidth < 768
			? 1
			: Math.min(3, Math.floor(window.innerWidth / 300));

	for (let i = 0; i < filteredProjects.length; i++) {
		let project = filteredProjects[i];
		let card = document.createElement("div");
		card.classList.add("project-card");
		card.style.width = `calc(${100 / numCardsPerRow}% - 20px)`;
		card.innerHTML = `
            <h3 class="project-name">${project.name}</h3>
            <img src="${project.img}" alt="${project.name}">
        `;
		card.addEventListener("click", function () {
			if (project.type === "journalism") {
				window.location.href = project.link;
			} else {
				window.location.href = `project.html?name=${encodeURIComponent(
					project.name
				)}`;
			}
		});
		projectCardsContainer.appendChild(card);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Add event listeners to filter buttons
	document
		.getElementById("allProjectsButton")
		.addEventListener("click", function () {
			createProjectCards("all");
		});

	document
		.getElementById("interactiveButton")
		.addEventListener("click", function () {
			createProjectCards("interactive");
		});

	document
		.getElementById("staticButton")
		.addEventListener("click", function () {
			createProjectCards("static");
		});

	document
		.getElementById("journalismButton")
		.addEventListener("click", function () {
			createProjectCards("journalism");
		});

	// Initialize project cards on page load
	createProjectCards("all");
});
