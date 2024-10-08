const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/courses", require("./routes/courseRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
