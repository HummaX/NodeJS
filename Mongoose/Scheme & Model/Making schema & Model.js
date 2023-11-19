let mongoose = require("mongoose");

let schema = mongoose.schema();

let tourSchema = new schema({
  pass: {
    select: false, // to hide this in reponse instead os uding - or seletc('-password') we can give it  in default in model
  },
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

// we define database in link of mongobd then collections in model and push out details in that collectiom/model

// is just programming convetion to use model name/variable with Capital letter
let Tour = mongoose.model("tour", tourSchema); // it will automatically make collections with name tours, model makes colelctions name in plural
// Name of model, then schema which o use with this model/collection

// To Enter data in Model/Collection
let newTour = new Tour({});

// sd it returns a promise we can either use it in the async function or use .then on them
newTour
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Another Method

// if we want to create new model or add to existing model to avoid .save() etc direct method
let newTour = await Tour.create(req.body);
