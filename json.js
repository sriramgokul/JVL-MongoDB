//  To create a Database --> use DatabaseName
// To show the list of database --> show dbs
// db.databasename.collection("name")--> To create a collection

// To insert only one document in the collection
db.products.insertOne({
    name:"Harry Potter",
    prie: 30.00
})
db.products.insertOne({
    name:"Red T-Shirt",
    price:100.00,
    description:"High Quality T-Shirt"
})

db.products.insertOne({
    name:"i7 Laptop",
    price:800.00,
    description:"Laptop for Software Developers",
    details:{
        brand:"Acer",
        processor:"i7",
        memory:"16GB"
    }
})

db.employee.insertOne({
    name:"Sriram Gokul",
    details: {
        position:"Full Stack Developer",
        salary: 50000
    }
})

// To find all data in the collections
db.products.find()

// To find the only one inserted document in collection
db.products.findOne()

// To insert Multiple document in collection

db.employee.insertMany([
    {
     name:"Rajesh",
     details:{
        position:"Python Developer",
        salary:60000,
     }   
    },
       {
        name:"Federer",
        details:{
           position:"Ui Developer",
           salary:50000,
        }   
       },
])

// To find a specific data in the document

db.employee.findOne({name:"Nizith"})
// To find a specific data in the document,which is nested

db.employee.find({"details.position":"PHP Developer"})

// To update a specific value in the document

db.employee.updateOne({name:"Nizith"},{$set:{"details.position":"Java Developer"}})

// To update multiple document at a time

db.employee.updateMany({"details.position":"PHP Developer"},{$set:{"details.salary":60000}})

// To delete one document

db.employee.deleteOne({name:"Nizith"})

// To delete multiple document
db.employee.deleteMany({"details.position":"Java Developer"})

// Greater then

db.employee.find({"details.salary":{$gt:50000}})

// Lesser then

db.employee.find({"details.salary":{$lt:50000}})

// forEach in MongoDB

db.employee.find().forEach((data)=>print(data)) // curly braces not needed when using single line arrow function

// Projection
db.employee.find({},{name:1,_id:0}) // The first culry braces is used for filtering purpose.So we just leave it.

// Limit--> will limit the number of results as per out input value we give.

db.employee.find().limit(2)

// skip 
db.employee.find().skip(2) 

// Sort-- will sort it in ascending order and descending order

db.employee.find().sort({name:1})
db.employee.find().sort({name:-1})

// Query Operators

// There are three type of operators

// 1) Comparison operator
// 2) Logical operator
// 3) Evaluation operators

// New data--new Collection

db.createCollection("customers")

db.customers.insertMany([
    {
        name:"Tracy",
        age:32,
        email:"Tracystrong@gmail.com",
        phone:989483937,
    },
    {
        name:"Raj",
        age:37,
        email:"Rajstrong@gmail.com",
        phone:56464699464,
    },
    {
        name:"Gokul",
        age:3,
        email:"Gokulstrong@gmail.com",
        phone:8876655623,
    },
    {
        name:"Rajkapoor",
        age:33,
        email:"Rajkapoor@gmail.com",
        phone:563497976,
    },
    {
        name:"Swetha",
        age:28,
        email:"Swetha@gmail.com",
        phone:4799321555,
    },
    {
        name:"Gandhi",
        age:45,
        email:"gandhi@gmail.com",
        phone:32456987,
    },
    {
        name:"Rani",
        age:26,
        email:"rani@gmail.com",
        phone:47896321465,
    },
    {
        name:"Deepa",
        age:38,
        email:"Deepa@gmail.com",
        phone:6354789,
    },
    {
        name:"Gopi",
        age:39,
        email:"Gopi@gmail.com",
        phone:14563248,
    },
    {
        name:"Yuvan",
        age:34,
        email:"Yuvan@gmail.com",
        phone:7896345213,
    },
])

// $eq--> Eqaul Operator(Values are equal)

db.customers.find({email:{$eq:"Yuvan@gmail.com"}})

// $ne--> Not Eqaul Operator(Values are not equal)--> will show other than the given input

db.customers.find({email:{$ne:"Yuvan@gmail.com"}})

// Using greater than operator to get result

db.customers.find({age:{$gt:30}})

// Using greater than equal operator to get result
db.customers.find({age:{$gte:30}})


// Using less than operator to get result

db.customers.find({age:{$lt:35}})

// Using less than or equal operator to get result
db.customers.find({age:{$lte:35}})

// $in--> values is matched within an array

db.customers.find({age:{$in:[25,35,28,37,31]}})

// $and --> Returns document where both queries match
// {
// name:"Gokul",
// age:3,
// email:"Gokulstrong@gmail.com",
// phone:8876655623,
// }

db.customers.find({$and:[{email:{$eq:"Gokulstrong@gmail.com"}},{phone:{$eq:8876655623}}]})

// $or --> Returns document where either query matches

// {
//     name:"Yuvan",
//     age:34,
//     email:"Yuvan@gmail.com",
//     phone:7896345213,
// },



// $not--> Returns document where both queries fail to match
// $nor --> Returns documents where the query does not match


// $regex --> allow the use of regular expression 

db.customers.find({name:{$regex:"^G"}}) //--> case Senstive

db.customers.find({name:{$regex:"^g",$options:"i"}}) //--> case insensitive

// $where --> Allows the use javascript expressions
// $text --> Performs a text search on the content

