import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tasks").del();

  // Inserts seed entries
  await knex("tasks").insert([
    {
      id: 1,
      name: "Task1",
      status: "todo",
      userId: 1,
      projectId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Task2",
      status: "todo",
      userId: 2,
      projectId: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Task3",
      status: "inprogress",
      userId: 2,
      projectId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Task4",
      status: "done",
      userId: 1,
      projectId: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
}
