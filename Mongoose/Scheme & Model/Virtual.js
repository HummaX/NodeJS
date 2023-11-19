let schemaClass = new mongoose.Schema(
  {
    pass: {
      select: false, // to hide this in reponse instead os uding - or seletc('-password') we can give it  in default in model
    },
    duration: Number,
  },
  {
    // here comes schema option after schema object
    toJSON: { virtuals: true }, //each time mongoDb returns data as json we want virtuls to be true/work
    toObject: { virtuals: true },
  }
);

// Virtual are not part of DB these are like aggregation they return as new object in resposne after getting calcualtions on them.
// we either define them in model or call them, in model tehse auto get executed when Schema options are given

schemaClass.virtual("gettingDuration").get(function () { //virtual name in string
  // Schema name then virtual .get is like getter, .set is like setter
return this.duration / 10;
});

// Another Exmaple
tourSchema.virtual("formattedDates").get(function () { //virtual name in string
  // Schema name then virtual .get is like getter, .set is like setter
return this.startDates.map((date) => date.toISOString().split("T")[0]);
});
