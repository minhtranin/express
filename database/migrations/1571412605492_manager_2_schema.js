'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Manager2Schema extends Schema {
  up () {
    this.create('manager_2_s', (table) => {
      table.increments('idmanager').primary()
      table.integer('idcategory2').references('idcategory')
      table.integer('idpost2').references('idpost')
      table.timestamps()
    })
  }

  down () {
    this.drop('manager_2_s')
  }
}

module.exports = Manager2Schema
