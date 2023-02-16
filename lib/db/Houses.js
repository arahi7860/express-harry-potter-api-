import mongoose from "./connection.js";

const housesSchema = new mongoose.Schema({
  _id: String,
  name: String,
  mascot: String,
  headOfHouse: String,
  houseGhost: String,
  founder: String,
  __v: Number,
  school: String,
  members: [String],
  values: [String],
  colors: [String],
});

export default mongoose.model("Houses", housesSchema);
