const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const animalRoutes = require("./routes/animalRoutes");
const donationRoutes = require("./routes/donationRoutes");
const rescueCenterRoutes = require("./routes/rescueCenterRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({}));
app.use("/uploads", express.static("uploads"));

app.use("/user", userRoutes);
app.use("/adoption", adoptionRoutes);
app.use("/animal", animalRoutes);
app.use("/donation", donationRoutes);
app.use("/rescue-center", rescueCenterRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const PORT = process.env.PORT || 5400;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
