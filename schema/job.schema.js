
const mongoose = require("mongoose");
const { link } = require("../routes/user");
const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required:true,
    },
    jobPosition: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
        enum: ["full-time", "part-time", "contract", "internship", "freelance"],
    },
    remoteOffice: {
        type: String,
        required: true,
        enum: ["remote", "office", "work from home"],
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
        enum: ["html", "javascript", "css", "react", "nodejs", "mongodb"],
    },
    information: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Job", jobSchema);

