export type CHARACTER = {
  id: number;
  name: string;
  dob: string;
  gender: string;
  homeworld: string;
  films: string[];
};

export const MOCK_CHARACTERS: CHARACTER[] = [{
  id: 1,
  name: "Lando Calrissian",
  dob: "43BBY",
  gender: "Male",
  homeworld: "Socorro",
  films: [
    'A New Hope',
    'The Empire Strikes Back',
    'The Return of the Jedi'
  ]
}, {
  id: 2,
  name: "Leia Organa",
  dob: "19BBY",
  gender: "Female",
  homeworld: "Tatooine",
  films: [
    'A New Hope',
    'The Empire Strikes Back',
    'The Return of the Jedi'
  ]
}, {
  id: 3,
  name: "Luke Skywalker",
  dob: "19BBY",
  gender: "Male",
  homeworld: "Tatooine",
  films: [
    'A New Hope',
    'The Empire Strikes Back',
    'The Return of the Jedi'
  ]
}];

export const characterService = {
  
  async fetchCharacters(): Promise<CHARACTER[]> {
    const response = await fetch('/app/data/characters.json');
    if (!response.ok) throw new Error(`${response.status}`);
    const characters = await response.json();
    return characters;
  },

  async getCharacters(searchTerm: string = ''): Promise<CHARACTER[]> {
    const characters = await this.fetchCharacters();
    return characters.filter(character => character.name.toLowerCase().includes(searchTerm));
  },

  async getCharacter(id: number): Promise<CHARACTER> {
    const characters = await this.fetchCharacters();
    return characters.find(character => character.id === id) as CHARACTER;
  }
}