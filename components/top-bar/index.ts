import { customElement } from 'lit/decorators.js';

import { TopBar } from './lib/top-bar.js';
import { styles } from './lib/top-bar.css.js';

@customElement('fscs-top-bar')
export class FscsTopBar extends TopBar {
  static override styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fscs-top-bar': FscsTopBar
  }
}