// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/addikart');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//-->With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.
const kittySchema = new mongoose.Schema({
    name: String
  });

//-->We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
const Kitten = mongoose.model('Kitten', kittySchema);


const silence = new Kitten({ name: 'Silence' });
//console.log(silence.name);


// kittySchema.methods.speak = function speak() {
//     const greeting = 'Meow name is ' + this.name;
//     console.log(greeting);
//   };

//-->we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.
silence.save();
// silence.speak();


Kitten.find({name: "silence"})
// Kitten.find({ name: /^fluff/ });