const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Mongoose-Movies-Lab");

const Celebrity = require("../models/Celebrity.js ");

let celebrity = [
  {
    name: "Tom Hardy",
    occupation: "actor",
    catchPhrase: "Being alone for a while is dangerous.",
  },
  {
    name: "Tilda Swinton",
    occupation: "Actress",
    catchPhrase:
      "I do like not knowing where I'm going, wandering in strange woods, whistling and following bread crumbs.",
  },
  {
    name: "Bill Murray",
    occupation: "actor",
    catchPhrase: "I'm a nut, but not just a nut.",
  },
];

Celebrity.create(celebrity)
  .then((celebrities) => {
    console.log(`Success - added ${celebrity.length} celebrity to the db`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
