
exports.handle = (error, req, res, next) => {
  if (error && error.statusCode) {
    res.status(error.statusCode);
  }
  return res.send({ error: error.message });
};