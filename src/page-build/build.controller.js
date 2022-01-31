function read(req, res, next) {
    res.json({ data: races });
  };

module.exports = {
    read,
}