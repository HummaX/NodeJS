 
// Defining schema
let schemaClass = new mongoose.Schema({
    pass:{
        select:false // to hide this in reponse instead os uding - or seletc('-password') we can give it  in default in model
    },
    name: {
        type: String, 
        required:[true,'A data is requires here must'],// Either true or false ,['This is Err we want to give']
        // Required is also called validator
        default: 'John Doe', // if no value is given
        unique: true, // if its true and there must be no other entry similar to this, this case applies in email
        trim:true, // to remove space from string (only works for strings)
        index: true,
        sparse: true,
        min:[4,'Too less eggs'],
        max:10,
        validate: (value) => value.length > 3,
        alias: 'full_name',
        get: (value) => value.toUpperCase(),
        set: (value) => value.toLowerCase(),
    },
    images:[String], // images contains string of array
    createdAt:
    {
        type:Date,
        default:Date.now()
    },
    startingDates:[Date] // mongodb will automatically parse these string dates into date
});
