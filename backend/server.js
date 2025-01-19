const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();

// Middlewares
app.use(cors()); 
app.use(bodyParser.json()); 

const port = process.env.PORT || 5000; 

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const bookingRouter = require("./routes/booking");
app.use("/api/bookings", bookingRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
