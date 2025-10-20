import { html, LitElement, type HTMLTemplateResult } from 'lit';
import { query, state } from 'lit/decorators.js';

export class CharacterSearch extends LitElement {
  @state() inputValue = '';
  @query('input') inputElement!: HTMLInputElement;

  onInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value;
  }

  onInputKeyup(e: KeyboardEvent) {
    if( e.key === 'Enter') this.onSearch();
  }

  onClear() {
    this.inputValue = '';
    this.inputElement.focus();
  }

  onSearch() {
    if(this.inputValue.length > 0) {
      this.dispatchEvent(new CustomEvent('character-search', {
        detail: {
          name: this.inputValue
        },
        bubbles: true,
        composed: true
      }));
    }
  }

  renderClearButton(): HTMLTemplateResult | undefined {
    if( this.inputValue.length > 0) {
     return html`
      <button class="character-search__clear" aria-label="Clear search input" @click=${this.onClear}>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L7.29289 8L4.64645 10.6464C4.45118 10.8417 4.45118 11.1583 4.64645 11.3536C4.84171 11.5488 5.15829 11.5488 5.35355 11.3536L8 8.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.70711 8L11.3536 5.35355C11.5488 5.15829 11.5488 4.84171 11.3536 4.64645C11.1583 4.45118 10.8417 4.45118 10.6464 4.64645L8 7.29289L5.35355 4.64645Z" fill="currentColor"/>
        </svg>
      </button>
    `;
    }
  }

  override render() {
    return html`
      <div class="character-search">
        <button class="character-search__submit" @click=${this.onSearch}>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" fill="currentColor"/>
          </svg>
        </button>
        <input class="character-search__input" placeholder="Search for Star Wars characters" @input=${this.onInput} @keyup=${this.onInputKeyup} .value=${this.inputValue}>
        ${this.renderClearButton()}
      </div>
    `;
  }
}