const express = require("express")
const Custodial = require("../models/custodialParent")
const custodialParentRoute = express.Router()

//get all Custodial Parent Schema
custodialParentRoute.get("/", (req, res, next) => {
    Custodial.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(data)
    })
})

//get one Custodial Parent Schema

custodialParentRoute.get("/:dataId", (req, res, next) => {
    Custodial.findById({ _id: req.params.dataId }, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//Post one Custodial Parent Schema
custodialParentRoute.post("/", (req, res, next) => {
    console.log(req.body)
    const newCustodialParentInfo = new Custodial(req.body)
    newCustodialParentInfo.save((err, newData) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newData)
    })
})

//Delete one Custodial Parent Schema
custodialParentRoute.delete("/:dataId", (req, res, next) => {
    Custodial.findByIdAndDelete({ _id: req.params.dataId }, (err, deletedData) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedData.childName} from the data`)
    })
})

//Update one Custodial Parent Schema
custodialParentRoute.put("/:dataId", (req, res, next) => {
    Custodial.findByIdAndUpdate(
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






module.exports = custodialParentRoute