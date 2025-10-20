import { html, LitElement, type HTMLTemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

import { type CHARACTER } from '../../../services/character-service.js';

export class CharacterDetail extends LitElement {
  @property({ type: Object })
  character?: CHARACTER;

  renderBio(): HTMLTemplateResult {
    return html`
      <div class="character-detail__bio">
        <h2 class="character-detail__name">${this.character?.name}</h2>
        <p class="character-detail__description">Character description</p>
      </div>
    `;
  }

  renderSummary(): HTMLTemplateResult {
    return html`
      <ul class="character-detail__summary">
        <li>
          <span class="character-detail__label">Name:</span>
          <span class="character-detail__labelled-item">${this.character?.name}</span>
        </li>
        <li>
          <span class="character-detail__label">Gender:</span>
          <span class="character-detail__labelled-item">${this.character?.gender}</span>
        </li>
        <li>
          <span class="character-detail__label">Homeworld:</span>
          <span class="character-detail__labelled-item">${this.character?.homeworld}</span>
        </li>
        <li>
          <span class="character-detail__label">Films:</span>
          ${this.character?.films?.map((film) => {
            return html`<span class="character-detail__labelled-item">${film}</span>`;
          })}
        </li>
      </ul>
    `;
  }

  override render() {
    return html`
      <div class="character-detail">
        ${this.renderSummary()}
        ${this.renderBio()}
      </div>  
    `;
  }
}