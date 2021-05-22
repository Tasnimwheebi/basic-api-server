'use strict';

//////////////////////////////////////////
//Export the error 404 "page not found"//
/////////////////////////////////////////
module.exports=(req,res)=>{
  res.status(404).json({
    message:'Page Not Found',
  });
};