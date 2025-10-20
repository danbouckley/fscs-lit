import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { CHARACTER } from '../../../services/character-service.js';

export class CharacterList extends LitElement {
  @property({type: Array})
  characters?: CHARACTER[];

  onClick(id: number) {
    this.dispatchEvent(new CustomEvent('character-detail', {
      detail: {
        id: id
      },
      bubbles: true,
      composed: true
    }))
  }

  onKeyUp(e: KeyboardEvent, id: number) {
    if (e.key === 'Enter') this.onClick(id);
  }

  override render() {
    return html`
      <ul class="character-list">
      ${this.characters?.map((character) => 
        html`
          <li class="character-list__item">
            <a class="character-list__action" aria-label="Learn more about ${character.name}" @click=${() => this.onClick(character.id)} @keyup=${(e: KeyboardEvent) => this.onKeyUp(e, character.id)} tabindex="0">
              <div class="character-list__name">${character.name}</div>
              <div class="character-list__dob">
                <span class="character-list__label">Born in</span> ${character.dob}
              </div>
            </a>
          </li>
        `
      )}
      </ul>
    `;
  }
}