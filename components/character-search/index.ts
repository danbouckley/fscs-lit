import { customElement } from 'lit/decorators.js';

import { CharacterSearch } from './lib/character-search.js';
import { styles } from './lib/character-search.css.js';

@customElement('fscs-character-search')
export class FscsCharacterSearch extends CharacterSearch {
  static override styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fscs-character-search': FscsCharacterSearch
  }
}