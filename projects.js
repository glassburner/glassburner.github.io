const projects = [
  {
    title: "Sample Data Pipeline Project",
    roleSignal: "Data Engineering",
    description:
      "Built a Python and SQL workflow to clean, transform, and validate structured data for analysis.",
    tools: ["Python", "SQL", "Data Validation", "Documentation"],
    outcome:
      "Created repeatable transformation steps and documented validation checks.",
    github: "#",
    demo: "#"
  },
  {
    title: "Sample Web Application Project",
    roleSignal: "Software Engineering",
    description:
      "Built a responsive front-end interface with clean HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript", "Accessibility"],
    outcome:
      "Focused on usability, semantic structure, and clear presentation of data.",
    github: "#",
    demo: "#"
  }
];

const projectList = document.querySelector("#project-list");

projectList.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p><strong>Role signal:</strong> ${project.roleSignal}</p>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
        </div>
        <p><strong>Outcome:</strong> ${project.outcome}</p>
        <div class="project-links">
          <a href="${project.github}">GitHub</a>
          <a href="${project.demo}">Demo or write-up</a>
        </div>
      </article>
    `
  )
  .join("");
