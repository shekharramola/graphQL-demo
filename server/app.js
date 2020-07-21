const express = require('express');
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

mongoose
 .connect(
    "mongodb+srv://shekhar:9958075951@cluster0.qtjsk.mongodb.net/grphQL-demo?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
 )
 .then(() => console.log("Connected to MongoDB Atlas"))
 .catch(err => console.log("Error: ", err.message));


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(4000,()=>{
    console.log('now listning on port 4000')
})
