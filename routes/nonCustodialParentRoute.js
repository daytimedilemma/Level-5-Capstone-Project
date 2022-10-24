const express = require("express")
const NonCustodial = require("../models/nonCustodialParent")
const nonCustodialParentRoute = express.Router()

//get all NonCustodial Parent Schema
nonCustodialParentRoute.get("/", (req, res, next) => {
    NonCustodial.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(data)
    })
})

//get one NonCustodial Parent Schema

nonCustodialParentRoute.get("/:dataId", (req, res, next) => {
    NonCustodial.findById({ _id: req.params.dataId }, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//Post one NonCustodial Parent Schema
nonCustodialParentRoute.post("/", (req, res, next) => {
    const newCustodialParentInfo = new NonCustodial(req.body)
    newCustodialParentInfo.save((err, newData) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newData)
    })
})

//Delete one NonCustodial Parent Schema
nonCustodialParentRoute.delete("/:dataId", (req, res, next) => {
    NonCustodial.findByIdAndDelete({ _id: req.params.dataId }, (err, deletedData) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedData.child.name} from the data`)
    })
})

//Update one NonCustodial Parent Schema
nonCustodialParentRoute.put("/:dataId", (req, res, next) => {
    NonCustodial.findByIdAndUpdate(
        { _id: req.params.dataId },
        req.body,
        { new: true },
        (err, updatedData) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedData)
        })
})

module.exports = nonCustodialParentRoute