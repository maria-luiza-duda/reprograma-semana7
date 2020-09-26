const sppCirripedia = require("../model/sppCirripedia.json");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(sppCirripedia);
};

module.exports = { getAll };