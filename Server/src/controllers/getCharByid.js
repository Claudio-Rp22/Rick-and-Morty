const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/${id}`)
    .then((result) => result.data)
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };

      res.status(200).json(character);
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById,
};
