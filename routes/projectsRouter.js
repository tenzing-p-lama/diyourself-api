const express = require("express");
const router = express.Router();

const { v4: uuid4 } = require("uuid");

const fs = require("fs");

router.get("/", (_req, res) => {
  const projectsJSON = fs.readFileSync("./data/projects.json");
  const projects = JSON.parse(projectsJSON);

  res.send(projects);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const projectsJSON = fs.readFileSync("./data/projects.json");
  const projects = JSON.parse(projectsJSON);

  const foundProject = projects.find((project) => project.id === id);

  if (foundProject) {
    res.send(foundProject);
  } else {
    res.status(400).send("No project with that id exists");
  }
});

module.exports = router;
