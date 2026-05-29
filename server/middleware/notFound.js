const { NotFoundError } = require("../errors/customError");

const routeNotFound = (req, res) => {
  throw new NotFoundError("This route does not exist");
};

module.exports = routeNotFound;
