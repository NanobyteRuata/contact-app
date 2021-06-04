const db = require("./db.json");

module.exports = function (req, res, next) {
  if (
    (req.method === "POST" && req.originalUrl == "/contacts") ||
    (req.method === "PUT" && req.originalUrl.startsWith("/contacts/"))
  ) {
    if (
      db["contacts"].find(
        (c) => c.id != req.body.id && c.email.trim() == req.body.email.trim()
      )
    ) {
      res.status(400).send("Duplicate Email");
      return;
    } else if (
      db["contacts"].find(
        (c) =>
          c.id != req.body.id &&
          c.phone.split(" ").join("").split("+9").join("") ==
            req.body.phone.split(" ").join("").split("+9").join("")
      )
    ) {
      res.status(400).send("Duplicate Phone Numbers");
      return;
    } else {
      next();
    }
  } else {
    next();
  }
};
