// JWT is stateless token JSON WEB TOKEN whihc means it does not get stored on server

// we can use pre-middleware to hash password check hashing password folder

let token = jwt.sign({ token: 'Token123' }, 'hummas',);
// when you sue 256 algorith you jave to generate sha kay via perm or anything then it will pickit up
// 1st Payload
// 2nd Secret KEy
// 3rd algorithm