const { Wood } = require("../models/wood");
const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

module.exports = app => {
  app.post("/api/product/wood", auth, admin, (req, res) => {
    const wood = new Wood(req.body);

    wood.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({
        success: true,
        wood: doc
      });
    });
  });

  app.get("/api/product/woods", (req, res) => {
    Wood.find({}, (err, woods) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(woods);
    });
  });
};
