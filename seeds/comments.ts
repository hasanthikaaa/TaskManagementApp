import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("comments").del();

  // Inserts seed entries
  await knex("comments").insert([
    {
      id: 1,
      content: "Test User 1",
      userId: 1,
      taskId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      content: "Test User 2",
      userId: 2,
      taskId: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      content: "Test User 3",
      userId: 2,
      taskId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      content: "Test User 4",
      userId: 1,
      taskId: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
}
