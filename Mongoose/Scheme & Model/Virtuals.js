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

// Virtual are not part of DB these are like aggregation they return as object in resposne after getting calcualtions on them.
// we either define them in model or call them, in model tehse auto get executed when Schema options are given
schemaClass.virtuals("gettingDuration").get(function () {
  return this.duration / 10;
});

// Another Exmaple
tourSchema.virtual("formattedDates").get(function () {
  return this.startDates.map((date) => date.toISOString().split("T")[0]);
});
