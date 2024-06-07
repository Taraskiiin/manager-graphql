const express = require("express");
require("dotenv").config();
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 3001;

const app = express();

connectDB();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
    })
);

app.listen(
    port,
    console.log(`Server has started on port: ${port}`.green.underline.bold)
);
