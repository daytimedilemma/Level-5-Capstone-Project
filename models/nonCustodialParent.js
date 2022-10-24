const mongoose = require("mongoose")
const Schema = mongoose.Schema

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const nonCustodialParentSchema = new Schema({

    child: {
        name: {
            type: String,
            required: true
        },
        schoolTime: {
            beginningTime: {
                type: Number,
                required: true
            },
            endingTime: {
                type: Number,
                required: true
            }
        },
        dayOfChildsBirthday: {
            month: {
                type: String,
                enum: months,
                required: true
            },
            day: Number
        }

    },

    winterBreakFirstHalf: {
        month: {
            type: String,
            enum: months,
            required: true
        },
        startDate:
        {
            type: Number,
            required: true
        },
        endDate: {
            type: Number,
            required: true
        }
    },

    winterBreakSecondHalf: {
        startMonth: {
            type: String,
            enum: months,
            required: true
        },
        endMonth: {
            type: String,
            enum: months,
            required: true
        },
        startDate:
        {
            type: Number,
            required: true
        },
        endDate: {
            type: String,
            required: true
        }
    },

    fallBreak: {
        month: {
            type: String,
            enum: months,
            required: true
        },
        startDate:
        {
            type: Number,
            required: true
        },
        endDate: {
            type: Number,
            required: true
        }
    },

    springBreak: {
        month: {
            type: String,
            enum: months,
            required: true
        },
        startDate:
        {
            type: Number,
            required: true
        },
        endDate: {
            type: Number,
            required: true
        }
    },

    oneWeekDayEvening: {
        type: String,
        default: "Wednesday"
    },

    workAvailabilityEndTime: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model("NonCustodial", nonCustodialParentSchema)