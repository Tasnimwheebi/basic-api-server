'use strict';
//////////////////////////////////
//// require the enviroment /////
////////////////////////////////
require('dotenv').config();

/////////////////////////////////////
// App setup and start accssing the app 
////////////////////////////////////
const server = require('./src/server.js');
server.start(process.env.PORT);