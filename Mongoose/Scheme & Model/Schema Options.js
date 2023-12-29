// Defining schema

// In mongoDB schamne validation only work until we give thme input they does not work to add those fields in DB
// we give some value in pre hook undefined it will not go to DB instead we just wanted it for validation we can undefine it 

let schemaClass = new mongoose.Schema(
  {
    pass: {
      select: false, // to hide this in reponse instead os uding - or seletc('-password') we can give it  in default in model
    },
    name: {
      lowercase:true,
      type: String,
      required: [true, "A data is requires here must"], // Either true or false ,['This is Err we want to give']
      // Required is also called validator
      default: "John Doe", // if no value is given
      unique: true, // if its true and there must be no other entry similar to this, this case applies in email
      trim: true, // to remove space from string (only works for strings)
      index: true,
      sparse: true,
      min: [4, "Too less eggs"],
      max: 10, // used for numbers
      maxLength:[40,'A tour name must have less or equal to 40 characters'], // used for string arrya of 10 string length
      minLength:[10,'A tour name must have higher or equal to 10 characters'], // used for string arrya of 10 string length
      // validate only works on save and create, not on updatye specailly for password use .save on them
      validate: (value) => value.length > 3,
      validate:{validator:{function(val){this.val < 10 },message:`Value of this is greater than 10`}, // validation function could use regex here as well for text (check validation npm package)
      validate:[ validator.isEmail,'Email should br valid'], // NPM package validator
      alias: "full_name",
      enum:['easy', 'medium', 'difficult'], // values which are only allowed or options
      enum: { // values which are only allowed or options
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficult is either easy, medium, difficult.'
    },
      get: (value) => value.toUpperCase(),
      set: (value) => value.toLowerCase(),
    },
    images: [String], // images contains string of array
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startingDates: [Date], // mongodb will automatically parse these string dates into date
    startDates: [String], // enter date as string not new Date
  },
  {'These are schema options'}
    {
      // here comes schema option after schema object
      toJSON: { virtual: true }, //each time mongoDb returns data as json we want virtuls to be true/work
      toObject: { virtual: true },
      {timestamps:true} // will show ceraetdAt and updatedAt
    }
);

// Virtual (check virtual file)
// Virtual are not part of DB these are like aggregation they return as new object in resposne after getting calcualtions on them.
// we either define them in model or call them, in model these auto get executed when Schema options are given

schemaClass.virtual("gettingDuration").get(function () { //virtual name in string
    // Schema name then virtual .get is like getter, .set is like setter
  return this.duration / 10;
});

// Another Exmaple
tourSchema.virtual("formattedDates").get(function () { //virtual name in string
    // Schema name then virtual .get is like getter, .set is like setter
  return this.startDates.map((date) => date.toISOString().split("T")[0]);
});
