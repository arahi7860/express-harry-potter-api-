import mongoose from "./connection.js";

const characterSchema = new mongoose.Schema({
  _id: String,
  name: String,
  role: String,
  house: String,
  school: String,
  __v: Number,
  ministryOfMagic: Boolean,
  orderOfThePhoenix: Boolean,
  dumbledoresArmy: Boolean,
  deathEater: Boolean,
  bloodStatus: String,
  species: String,
});

export default mongoose.model("Character", characterSchema);
