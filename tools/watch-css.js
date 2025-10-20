import chokidar from 'chokidar'; 

import { convertCss } from './css-ts.js';

const componentPath = './components';

const watcher = chokidar.watch(componentPath, {
  ignored: (path, stats) => stats?.isFile() && !path.endsWith('.css')
});

watcher
  .on('change', (path) => convertCss(path))
  .on('add', (path) => convertCss(path));

process.on('SIGINT', async () => await watcher.close().then(() => console.log('Watch stopped: CSS')));