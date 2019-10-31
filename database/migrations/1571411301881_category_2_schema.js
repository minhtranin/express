'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Category2Schema extends Schema {
  up () {
    this.create('category_2_s', (table) => {
      table.increments('idcategory').primary()
      
      table.string('idname').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('category_2_s')
  }
}

module.exports = Category2Schema
