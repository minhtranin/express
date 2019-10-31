'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrudSchema extends Schema {
  up () {
    this.create('cruds', (table) => {
      table.increments('id').primary()
      table.string('name',80)
      table.string('old')
      table.timestamps()
    })
  }

  down () {
    this.drop('cruds')
  }
}

module.exports = CrudSchema
