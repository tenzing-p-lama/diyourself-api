const express = require("express");
const cors = require("cors");
const app = express();
const projectsRoutes = require("./routes/projectsRouter");

app.use(express.static("public")); // images folder
app.use(express.json());

const PORT = process.env.PORT || 5050;

//Routes
app.use(cors());
app.use("/projects", projectsRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to DIY");
});

//listen to port
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
