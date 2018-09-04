const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");

const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("client/build"));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

require("./routes/productRoutes")(app);
require("./routes/woodRoutes")(app);
require("./routes/brandRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);

const port = process.env.PORT || 3002;

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});
