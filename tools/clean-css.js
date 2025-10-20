import { existsSync, readdir, unlink } from 'fs';

const componentPath = './components';

readdir(componentPath, (error, files) => {
  if (error) throw error;

  files.forEach(file => {
    const filePath = `${componentPath}/${file}/lib/${file}.css.ts`;

    if (existsSync(filePath)) {
      unlink(filePath, (error) => {
        if (error) throw error;
        console.log(`File deleted: ${filePath}`);
      });
    }
  });
});