const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        foodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",  // 🔗 References the Food model
            required: true
        },
        buyerName: {
            type: String,
            required: true,
            trim: true
        },
        buyerEmail: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        buyerAddress: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["Pending", "Confirmed", "Delivered"],
            default: "Pending"  // 🟡 Default status: Pending
        }
    },
    { timestamps: true }  // ⏳ Adds `createdAt` and `updatedAt`
);

module.exports = mongoose.model("Order", OrderSchema);
