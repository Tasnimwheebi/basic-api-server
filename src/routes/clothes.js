'use strict';

///////access express/////////////
const express = require('express');

//////// accssing the model of the class clothes from the js file /////////
const Clothes = require('../models/clothes.js');

///////// creating a new object from the class in js file ////////
const clothes = new Clothes();

const router = express.Router();

///////////////////////////
//////// ROUTES  /////////
/////////////////////////

///// route get method for read /////
router.get('/',getClothes);
router.get('/:id',getClohesWithId);

///// route post method for create ////   
router.post('/',createClothes);

////// route put method for update ////
router.put('/:id',updateClothes);

////// route delete method for delete /////
router.delete('/:id',deleteClothes);


//////////////////////////////
//// middleware functions////
////////////////////////////
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