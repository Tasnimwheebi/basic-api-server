'use strict';

const express = require('express');
const Food = require('../models/food.js');

const food = new Food();
const router = express.Router();

router.get('/',getFood);
router.get('/:id',getFoodWithId);
router.post('/',createFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

function getFood (req,res){
    const resObj = food.read();
    res.json(resObj);
}

function getFoodWithId (req,res){
    const resObj = food.read(req.params.id);
    res.json(resObj);
}

function createFood (req,res){
    const objFood = req.body;
    const resObj = food.create(objFood);
    res.status(201).json(resObj);
}

function updateFood (req,res){
    const objFood = req.body;
    const resObj = food.update(req.params.id,objFood);
    res.json(resObj);
}
function deleteFood(req, res) {
    const objFood = food.delete(req.params.id);
    res.json(objFood);
}

module.exports=router;