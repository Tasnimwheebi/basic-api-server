'use strict';

const express = require('express');
const Clothes = require('../models/clothes.js');

const clothes = new Clothes();
const router = express.Router();

router.get('/',getClothes);
router.get('/:id',getClohesWithId);
router.post('/',createClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

function getClothes (req,res){
    const resObj = clothes.read();
    res.json(resObj);
}

function getClohesWithId (req,res){
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function createClothes (req,res){
    const objClothes = req.body;
    const resObj = clothes.create(objClothes);
    res.status(201).json(resObj);
}

function updateClothes (req,res){
    const objClothes = req.body;
    const resObj = clothes.update(req.params.id,objClothes);
    res.json(resObj);
}
function deleteClothes(req, res) {
    const objClothes = clothes.delete(req.params.id);
    res.json(objClothes);
}

module.exports=router;