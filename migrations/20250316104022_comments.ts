import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("comments", function (table) {
    table.increments("id").primary();
    table.string("content", 255).notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();

    table.integer("userId").unsigned();
    table
      .foreign("userId")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.integer("taskId").unsigned();
    table
      .foreign("taskId")
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("comments");
}
