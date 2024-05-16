import { projects } from "./projects.js";

document.addEventListener("DOMContentLoaded", function () {
	const urlParams = new URLSearchParams(window.location.search);
	const projectName = urlParams.get("name");
	const project = projects.find((proj) => proj.name === projectName);

	if (project) {
		document.getElementById("projectName").textContent = project.name;
		document.getElementById("projectAbout").textContent = project.about;
		document.getElementById(
			"projectTools"
		).innerHTML = `<strong>Tools:</strong> ${project.tools}`;
		document.getElementById(
			"projectProcess"
		).innerHTML = `<strong>Process:</strong> ${project.process}`;
		document.getElementById(
			"projectOutcome"
		).innerHTML = `<strong>Outcome:</strong> ${project.outcome}`;
		document.getElementById("projectImg").src = project.img;
		document.getElementById("projectImg").alt = project.name;
		document.getElementById("projectLink").href = project.link;
		document.getElementById("projectLink").textContent = "View Project";
		document.getElementById(
			"projectDate"
		).textContent = `Date: ${project.date}`;
	} else {
		document.body.innerHTML = "<p>Project not found</p>";
	}
});
