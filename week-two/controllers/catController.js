'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const getCats = (req, res) => {
    res.json(cats);
};
const getCat = (req, res) => {
//choose onlu one object with matching id
    const cat = cats.filter(cat => req.params.catId == cat.id)[0];
    if (cat) {
        res.json(cat);
    }else {
        res.sendStatus(404);
    }
    };

const modilfyCat = (req, res) => {};
const createCat = (req, res) => {};
const deleteCat = (req, res) => {};

module.exports = {
    getCat,
    getCats,
    modilfyCat,
    createCat,
    deleteCat
};