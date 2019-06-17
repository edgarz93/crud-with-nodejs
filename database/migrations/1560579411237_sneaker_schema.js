"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SneakerSchema extends Schema {
  up() {
    this.create("sneakers", table => {
      table
        .string("title", 240)
        .unique()
        .notNullable();
      table
        .string("image", 240)
        .unique()
        .notNullable();
      table.text("description", "longtext").notNullable();
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("sneakers");
  }
}

module.exports = SneakerSchema;
