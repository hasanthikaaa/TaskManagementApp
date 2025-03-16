import { JsonFile, typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'TaskManagementApp',
  projenrcTs: true,
  deps: [
    'express',
    'nodemon',
    'prettier',
    'dotenv',
    'knex',
    'pg',
    'body-parser',
    'express-validator',
    'husky',
  ],
  description: 'Backend solution for TaskManagementApp',
  devDeps: ['@types/node', '@types/express', '@types/knex', 'eslint'],
  packageName: 'TaskManagementApp',
  gitignore: ['.env.*'],
  disableTsconfig: true,
});

project.addTask('nodemon', {
  exec: 'nodemon --watch src src/index.ts',
});

new JsonFile(project, 'nodemon.json', {
  obj: {
    watch: ['src'],
    ext: 'ts,json',
    ignore: ['src/**/*.spec.ts'],
    exec: 'ts-node ./src/index.ts',
  },
});

project.addTask('pre-commit', {
  steps: [{ exec: 'npm run test' }],
});

project.addTask('lint', {
  steps: [{ exec: 'eslint . --ext .js,.ts' }],
});

new JsonFile(project, 'tsconfig.json', {
  obj: {
    compilerOptions: {
      target: 'ES2020', // Set the ECMAScript target version
      module: 'CommonJS', // Use CommonJS module system for Node.js
      outDir: './dist', // Output directory for compiled files
      rootDir: './src', // Root directory of your source code
      esModuleInterop: true, // Enable compatibility for CommonJS modules
      skipLibCheck: true, // Skip checking of declaration files for performance
      strict: true, // Enable strict type-checking options
      forceConsistentCasingInFileNames: true, // Ensure consistent casing in filenames
      moduleResolution: 'node', // Use Node.js-style module resolution
      resolveJsonModule: true, // Allow importing JSON files
      noEmitOnError: true, // Prevent emitting files if there are errors
      allowJs: true, // Allow JavaScript files to be included in the project
      lib: ['ES2020'], // Specify the library files to be included
      baseUrl: '.', // Base directory for module resolution
      paths: {
        // Path mapping for imports
        '*': ['node_modules/*'],
      },
    },
    include: [
      'src/**/*.ts', // Include all .ts files in the src folder
    ],
    exclude: [
      'node_modules', // Exclude node_modules directory
      'dist', // Exclude the dist directory (compiled files)
    ],
  },
});

project.synth();
