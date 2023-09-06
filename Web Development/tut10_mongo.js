// Searching for data in mongo db
//use addiKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})    //it says rating which has value greater than or equal to 3.5
db.items.find({rating: {$gt: 3.5}})     //it says rating which has value greater than 3.5
// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})        //it says rating which has value lesser than 3.5 and price greater than 114000

//Or operator
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})

//projection -->it gives values which has rating greater than 3.5 only
db.items.find({rating: {$gt: 3.5}}, {rating: 1})



//Deleting in mongodb

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})



//creating collections

db.anotherCollection.insertOne({a:89})
// now if you type "show collections" it will show you two collections




//updating in mongodb

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})

