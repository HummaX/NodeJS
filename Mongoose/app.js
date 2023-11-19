let mongoose = require("mongoose");
let dotenv = require("dotenv");
let express = require("express");
let app = express();

dotenv.config({ path: "./config.env" });

let database = process.env.DATABASE;
mongoose
  .connect(database)
  .then(() => {
    console.log("mongoose connected 2");
  })
  .catch((err) => {
    console.log(err);
  });

let tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Tour Must Have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "a Tour Must Have a Price"],
  },
});

let Tour = mongoose.model("tour", tourSchema);

let newTour = new Tour({
  name: "Forest Hiker",
  rating: 10,
  price: 10,
});

newTour
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
