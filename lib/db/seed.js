import mongoose from "./connection.js";
import characterData from "/Users/ahmedrahi/dev/unit-2/express-harry-potter-api/lib/db/characters.json" assert { type: "json" };
import housesData from "/Users/ahmedrahi/dev/unit-2/express-harry-potter-api/lib/db/houses.json" assert { type: "json" };
import Character from "/Users/ahmedrahi/dev/unit-2/express-harry-potter-api/lib/db/Character.js";
import Houses from "/Users/ahmedrahi/dev/unit-2/express-harry-potter-api/lib/db/Houses.js";

await Character.deleteMany({});
await Character.create(characterData);

await Houses.deleteMany({});
await Houses.create(housesData);
