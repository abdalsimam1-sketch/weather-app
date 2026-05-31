const axios = require("axios");
const { NotFoundError } = require("../errors/customError");

const cityToCoordinates = async (city) => {
  const response = await axios.get(process.env.GEOCODING_URI, {
    params: {
      name: `${city}`,
    },
  });
  if (!response.data.results) {
    throw new NotFoundError("City was not found");
  }
  const { name, country, longitude, latitude } = response.data.results[0];

  return { name, country, longitude, latitude };
};

module.exports = cityToCoordinates;
