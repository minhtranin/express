'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post2 extends Model {
    static get primaryKey(){
        return 'idpost'
    }   


    mng(){
        return this.hasOne('App/Models/Manager2','idpost','idpost2')
    }
}

module.exports = Post2
