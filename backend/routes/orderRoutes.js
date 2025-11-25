require("dotenv").config();
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Food = require("../models/Food");
const { sendOrderConfirmation } = require("../mailer"); // Import mailer function

router.post("/orders", async (req, res) => {
    console.log("🛠 Received Order Data:", req.body);

    try {
        const { foodId, buyerName, buyerEmail, buyerAddress } = req.body;

        if (!foodId || !buyerName || !buyerEmail || !buyerAddress) {
            console.error("❌ Missing Fields:", { foodId, buyerName, buyerEmail, buyerAddress });
            return res.status(400).json({ error: "All fields are required." });
        }

        const food = await Food.findById(foodId);
        if (!food) {
            console.error("❌ Food not found:", foodId);
            return res.status(404).json({ error: "Food item not found." });
        }

        if (!food.available) {
            console.error("🚫 Food is unavailable:", food.foodName);
            return res.status(400).json({ error: "Food is no longer available." });
        }

        const newOrder = new Order({ foodId, buyerName, buyerEmail, buyerAddress, createdAt: new Date() });
        await newOrder.save();

        food.available = false;
        await food.save();

        // Send confirmation email
        await sendOrderConfirmation(buyerEmail, buyerName, food.foodName, buyerAddress);

        res.status(201).json({ message: "Order placed successfully!" });

    } catch (error) {
        console.error("🔥 Backend Error:", error);
        res.status(500).json({ error: "Internal Server Error. Check backend logs." });
    }
});

module.exports = router;
