import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';

import '../index.js';
import { CharacterList } from "../lib/character-list.js";

import { MOCK_CHARACTERS } from '../../../services/character-service.js';

describe('Character List', () => { 
  
  it('Loads empty', async () => {
    const el = await fixture<CharacterList>(
      html`<fscs-character-list>ABC</fscs-character-list>`
    );

    await elementUpdated(el);
    expect(el).not.to.be.undefined;
    expect(el.shadowRoot?.querySelector('li')).to.be.null;
  });

  it('Renders list of characters', async () => {
    const el = await fixture<CharacterList>(
      html`<fscs-character-list .characters=${MOCK_CHARACTERS}></fscs-character-list>`
    );

    await elementUpdated(el);
    expect(el.shadowRoot?.querySelectorAll('li').length).to.equal(3);
    expect(el.shadowRoot?.querySelector('.character-list__name')?.innerHTML).contains(MOCK_CHARACTERS[0]?.name);
    expect(el.shadowRoot?.querySelector('.character-list__dob')?.innerHTML).contains(MOCK_CHARACTERS[0]?.dob);
  });

  it('List item should send event on click', async () => {
    const el = await fixture<CharacterList>(
      html`<fscs-character-list .characters=${MOCK_CHARACTERS}></fscs-character-list>`
    );

    await elementUpdated(el);
    const listener = oneEvent(el, 'character-detail');
    el.shadowRoot?.querySelector('a')?.click();
    const { detail } = await listener;
    expect(detail.id).to.equal(1);
  
  });
});