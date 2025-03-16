import { JsonFile, typescript } from "projen";

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "TaskManagementApp",
  projenrcTs: true,
  deps: ["express", "nodemon", "prettier"],
  description: "Backend solution for TaskManagementApp",
  devDeps: ["@types/node"],
  packageName: "TaskManagementApp",
});

project.addTask("nodemon", {
  exec: "nodemon --watch src src/index.ts",
});

new JsonFile(project, "nodemon.json", {
  obj: {
    watch: ["src"],
    ext: "ts,json",
    ignore: ["src/**/*.spec.ts"],
    exec: "ts-node ./src/index.ts",
  },
});

project.synth();
