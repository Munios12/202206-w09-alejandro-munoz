export class HttpPokemons {
  url!: string;
  constructor() {
    this.url = "http://localhost:3542/pokemons";
  }
  getAllPokemons() {
    return fetch(this.url).then((resp) => resp.json());
  }
  setPokemon() {}
  updatePokemon() {}
}
