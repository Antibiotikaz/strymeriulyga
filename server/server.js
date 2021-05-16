const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");
require("dotenv").config();

const app = express();
app.use(helmet());
const port = process.env.PORT || 9000;
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
app.use(express.json());
// enable files upload

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(morgan("dev"));

app.use(express.json({ limit: "2mb" }));
app.use(
  express.urlencoded({
    limit: "2mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRoutes = require("./routes/usersRoute");
const adminRoutes = require("./routes/adminRoute");

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/assets/images", express.static((__dirname, "assets", "images")));

module.exports = router;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
