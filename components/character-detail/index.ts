import { customElement } from 'lit/decorators.js';

import { CharacterDetail } from './lib/character-detail.js';
import { styles } from './lib/character-detail.css.js';

@customElement('fscs-character-detail')
export class FscsCharacterDetail extends CharacterDetail {
  static override styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fscs-character-detail': FscsCharacterDetail
  }
}