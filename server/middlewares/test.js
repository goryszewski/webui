module.exports = (req, res, next) => {
  console.log("test");
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.updatedAt = null;
  }

  if (req.method === "PATCH") {
    req.body.updatedAt = Date.now();
  }
  next();
};
