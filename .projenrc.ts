import { JsonFile, typescript } from "projen";

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "TaskManagementApp",
  projenrcTs: true,
  deps: ["express", "nodemon", "prettier", "dotenv", "knex", "pg"],
  description: "Backend solution for TaskManagementApp",
  devDeps: ["@types/node", "@types/express", "@types/knex"],
  packageName: "TaskManagementApp",
  gitignore: [".env.*"],
});

project.addTask("nodemon", {
  exec: "nodemon --watch src src/index.ts",
});

project.addFields({ type: "module" });

new JsonFile(project, "nodemon.json", {
  obj: {
    watch: ["src"],
    ext: "ts,json",
    ignore: ["src/**/*.spec.ts"],
    exec: "ts-node ./src/index.ts",
  },
});

project.synth();
