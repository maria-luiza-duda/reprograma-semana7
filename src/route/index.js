const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Espécies de Cirripedia",
        data: "26/09/2020",
        autora: "Maria Luiza Duda"
    })
});

module.exports = router;