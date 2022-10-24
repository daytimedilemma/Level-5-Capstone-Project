const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config()


app.use(express.json())

app.use("/custodialParent", require("./routes/custodialParentRoute"))
app.use("/nonCustodialParent", require("./routes/nonCustodialParentRoute"))

app.use(morgan("dev"))

mongoose.connect(`mongodb+srv://nickaminer94:${process.env.ATLAS_PASSWORD}@cluster0.oagvemx.mongodb.net/?retryWrites=true&w=majority`, () => console.log("connected to database"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(6000, () => {
    console.log("The server is running on port 6000")
})