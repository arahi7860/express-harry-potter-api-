import express from "express";
import Houses from "./Houses.js";
import "./seed.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => response.redirect("/houses"));

app.get("/houses", async (request, response) => {
  const allHouse = await Houses.find({});
  response.json(allHouse);
});

app.get("/houses/:id", async (request, response) => {
  const id = request.params.id;
  const house = await Houses.findById(id);
  if (house) {
    response.json(house);
    return;
  }
});

app.post("/houses", async (request, response) => {
  const createdHouse = await Houses.create(request.body);
  response.json(createdHouse);
  return;
});

app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});
