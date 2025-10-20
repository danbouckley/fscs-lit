import { readdir } from 'fs';

import { convertCss } from './css-ts.js';

const componentPath = './components';

readdir(componentPath, (error, files) => {
  if (error) throw error;

  files.forEach(file => {
    const filePath = `${componentPath}/${file}/lib/${file}.css`;

    convertCss(filePath);
    console.log(`File created: ${filePath}.ts`);
  });
});