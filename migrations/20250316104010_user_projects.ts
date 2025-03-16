import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_projects", function (table) {
    table.increments("id").primary();
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();

    table.integer("userId").unsigned();
    table
      .foreign("userId")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.integer("projectId").unsigned();
    table
      .foreign("projectId")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_projects");
}
