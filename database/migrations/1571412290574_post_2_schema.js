'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Post2Schema extends Schema {
  up () {
    this.create('post_2_s', (table) => {
      table.increments('idpost').primary()
      table.string('namepost')
      table.string('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('post_2_s')
  }
}

module.exports = Post2Schema
