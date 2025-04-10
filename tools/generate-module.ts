import fs from 'fs';
import path from 'path';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('❌ Nom du module requis. Usage : npm run generate:module <nom>');
  process.exit(1);
}

const folders = [
  `src/domain/${moduleName}`,
  `src/core/${moduleName}`,
  `src/infrastructure/repositories`,
  `src/infrastructure/web/controllers`,
  `src/infrastructure/web/routes`,
];

folders.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const files = [
  [`src/domain/${moduleName}/I${capitalize(moduleName)}.ts`, `export interface I${capitalize(moduleName)} {}`],
  [`src/core/${moduleName}/${capitalize(moduleName)}Service.ts`, `export const ${capitalize(moduleName)}Service = () => ({})`],
  [`src/infrastructure/web/controllers/${capitalize(moduleName)}Controller.ts`, `export class ${capitalize(moduleName)}Controller {}`],
  [`src/infrastructure/web/routes/${moduleName}.routes.ts`, `import { Router } from 'express'; const router = Router(); export default router;`],
];

files.forEach(([file, content]) => {
  fs.writeFileSync(file, content);
});

console.log(`✅ Module "${moduleName}" généré avec succès !`);

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

