'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crud extends Model {
    static get table(){
        return 'cruds'
    }
}

module.exports = Crud
