const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/food-donation", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api", foodRoutes);
app.use("/api", orderRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
