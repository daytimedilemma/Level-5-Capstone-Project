const mongoose = require("mongoose")
const Schema = mongoose.Schema

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const nonCustodialParentSchema = new Schema({

    childName: {
        type: String,
        required: true
    },
    childBeginningSchoolTime: {
        type: String,
        required: true
    },
    childEndingSchoolTime: {
        type: String,
        required: true
    },
    childBirthday: {
        type: String,
        required: true
    },

    nonCustodialWeekDayInput : {
        startTime: String,
        endTime: String,
        dayOfWeek: String
    }, 

    winterBreakFirstHalfStartDate: String,
    winterBreakFirstHalfEndDate: String,
   
    winterBreakSecondHalfStartDate: String,
    winterBreakSecondHalfEndDate: String,
    
    fallBreakStartDate: String,
    fallBreakEndDate: String,
    
    springBreakStartDate: String,
    springBreakEndDate: String
})


module.exports = mongoose.model("NonCustodial", nonCustodialParentSchema)