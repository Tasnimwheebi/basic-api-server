'use strict';

///// requiring the Universally Unique Identifiers //////
const uuid = require('uuid').v4;

////////////////////////////////////
/// Class clothes with methods  ///
/// read , create , update and ///
/// delete the RECORDS        ///
////////////////////////////////
class Clothes {
    constructor() {
        this.db = [];
        
    }
    read(id) {
        if (id) {
            return this.db.find((val) => val.id === id);
        } else {
            return this.db;
        }
    }
    create(obj) {
        const clothes = {
            id: uuid(),
            data: obj,
        };
        this.db.push(clothes);
        return clothes;
    }
    delete(id) {

        this.db = this.db.filter((val) => val.id !== id);
        return this.db;
    }
    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            let item = this.db[i];
            if(item.id === id) {
                this.db[i].data = obj;
                return this.db[i];
            } 
        }
    }
}

module.exports = Clothes;