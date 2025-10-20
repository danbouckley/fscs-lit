import { customElement } from 'lit/decorators.js';

import { App } from './lib/app.js';
import { styles } from './lib/app.css.js';

@customElement('fscs-app')
export class FscsApp extends App {
  static override styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fscs-app': FscsApp
  }
}