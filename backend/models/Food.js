const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    foodName: String,
    donorName: String,
    address: String,
    email: String,
    phone: String,
    available: { type: Boolean, default: true },
    expiryTime: { type: Date }, // 🕒 Expiry Time Field
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
