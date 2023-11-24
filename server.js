const express = require("express");
const cors = require("cors");
const app = express(); //execute express
const projectsRoutes = require("./routes/projectsRouter");

app.use(express.static("public")); // images folder
app.use(express.json());

const port = process.env.PORT || process.argv[2] || 5050;

//Routes
app.use(cors());
app.use("/projects", projectsRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to DIY");
});

//listen to port
app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
