 
// Defining schema
let schemaClass = new mongoose.Schema({
    name: {
        type: String, 
        required:[true,'A data is requires here must'],// Either true or false ,['This is Err we want to give']
        default: 'John Doe', // if no value is given
        unique: true, // if its true and there must be no other entry similar to this, this case applies in email
        index: true,
        sparse: true,
        validate: (value) => value.length > 3,
        alias: 'full_name',
        get: (value) => value.toUpperCase(),
        set: (value) => value.toLowerCase()
    }
});
