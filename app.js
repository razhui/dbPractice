const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "No name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// creating a document from Fruit model
const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "I love peaches."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great for alcohol"
// });

// pineapple.save();

const cherry = new Fruit({
  name: "Cherry",
  score: 8,
  review: "Yea"  
});

const person = new Person ({
    name: "John",
    age: 23,
    favoriteFruit: cherry
});

Person.updateOne({name: "John"}, {favoriteFruit: cherry}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated John.");
    }
});

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Best fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "It's okay."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Solid fruit."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Saved fruits to DB.");
//     }
// });

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: ""}, {name: "Peach"}, function (err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated document.");
//     }
// });

// Fruit.deleteOne({name: "Peach"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted a fruit.")
//     }
// });

// Person.deleteMany({name: "John"}, function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Deleted persons")
//     }
// });