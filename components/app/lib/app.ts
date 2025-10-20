import { html, LitElement, type HTMLTemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

import '../../character-detail/index.js';
import '../../character-list/index.js';
import '../../character-search/index.js';
import '../../top-bar/index.js';

import { characterService, type CHARACTER } from '../../../services/character-service.js';

export class App extends LitElement {
  @state() activeCharacter?: CHARACTER | undefined;
  @state() characters?: CHARACTER[] | undefined;
  @state() loading: boolean = false;

  constructor() {
    super();

    this.addEventListener('character-search', this.onCharacterSearch);
    this.addEventListener('character-detail', this.onCharacterDetail);
  }

  async onCharacterSearch(e: CustomEventInit) {
    this.activeCharacter = undefined;
    this.loading = true;
    this.characters = await characterService.getCharacters(e.detail.name);
    this.loading = false;
  }

  async onCharacterDetail(e: CustomEventInit) {
    this.loading = true;
    this.activeCharacter = await characterService.getCharacter(e.detail.id);
    this.loading = false;
  }

  renderListOrDetail(): HTMLTemplateResult {
    if (this.activeCharacter) {
      return html`<fscs-character-detail .character=${this.activeCharacter}><fscs-character-detail>`;
    } else {
      return html`<fscs-character-list .characters=${this.characters}></fscs-character-list>`;
    } 
  }

  override render() {
    return html`
      <div class="app">
        <fscs-top-bar>
          <fscs-character-search></fscs-character-search>
        </fscs-top-bar>
        <div class="app__page">
          <div class="app__sidebar"></div>
          <div class="app__content">
            ${this.loading ? html`Loading...` : html`${this.renderListOrDetail()}`}
          </div>
        </div>
      </div>
    `;
  }
}