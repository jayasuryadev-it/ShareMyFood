const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// Get all available foods
router.get("/foods", async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json(foods);
    } catch (error) {
        console.error("Error fetching foods:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Donate food (Save food details to database)
router.post("/donate", async (req, res) => {
    try {
        const { foodName, donorName, address, email, phone } = req.body;
        const newFood = new Food({ foodName, donorName, address, email, phone, available: true });
        await newFood.save();
        res.status(201).json({ message: "Food donated successfully!" });
    } catch (error) {
        console.error("Error donating food:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
