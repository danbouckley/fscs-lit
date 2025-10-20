import { readFileSync, writeFileSync } from 'fs';

export const convertCss = (path) => {
  const content = readFileSync(path, { encoding: 'utf-8'});

  writeFileSync(
    path.replace('.css', '.css.ts'), 
    `import { css } from 'lit'; export const styles = css\`${content}\`;`
  );
}