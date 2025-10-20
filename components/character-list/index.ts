import { customElement } from 'lit/decorators.js';

import { CharacterList } from './lib/character-list.js';
import { styles } from './lib/character-list.css.js';

@customElement('fscs-character-list')
export class FscsCharacterList extends CharacterList {
  static override styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fscs-character-list': FscsCharacterList
  }
}