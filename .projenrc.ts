import { typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'TaskManagementApp',
  projenrcTs: true,
  deps: ["express"],
  description:"Backend solution for TaskManagementApp",
  devDeps: ["@types/node"],
  packageName: "TaskManagementApp"
});
project.synth();