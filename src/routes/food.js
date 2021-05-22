'use strict';
///////access express/////////////
const express = require('express');

//////// accssing the model of the class food from the js file /////////
const Food = require('../models/food.js');


///////// creating a new object from the class in js file ////////
const food = new Food();

const router = express.Router();


///////////////////////////
//////// ROUTES  /////////
/////////////////////////

///// route get method for read /////
router.get('/',getFood);
router.get('/:id',getFoodWithId);

///// route post method for create ////   
router.post('/',createFood);

////// route put method for update ////
router.put('/:id',updateFood);

////// route delete method for delete /////
router.delete('/:id',deleteFood);



//////////////////////////////
//// middleware functions////
////////////////////////////
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