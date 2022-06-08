export class pokemonAPI {
  url!: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/";
  }

  getAllPokemons() {
    return fetch(this.url + `pokemon/?limit=5&offset=0`).then((resp) =>
      resp.json()
    );
  }
}

//151
