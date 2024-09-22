import express from "express";
import mongoose from "mongoose";
import Job from "../models/job.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(200).json({ success: true, data: jobs });
	} catch (error) {
		console.log("error in fetching jobs:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
	try {
		const job = await Job.findById(id);
		res.status(200).json({ success: true, data: job });
	} catch (error) {
		console.log("error in fetching job:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

router.post("/", async (req, res) => {
	const job = req.body; // user will send this data

	if (!job.title || !job.description|| !job.company || !job.location || !job.type) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newJob = new Job(job);

	try {
		await newJob.save();
		res.status(201).json({ success: true, data: newJob });
	} catch (error) {
		console.error("Error in posting job:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

router.patch("/:id", async (req, res) => {
	const { id } = req.params;

	const job = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Job Id" });
	}

	try {
		const updatedJob = await Job.findByIdAndUpdate(id, job, { new: true });
		res.status(200).json({ success: true, data: updatedJob });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Job Id" });
	}

	try {
		await Job.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Job deleted" });
	} catch (error) {
		console.log("error in deleting job:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
});

export default router;