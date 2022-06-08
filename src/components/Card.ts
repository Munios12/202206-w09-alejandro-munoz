import { iComponent } from "../interfaces/icomponent.js";
import { pokemonAPI } from "../services/http-pokeApi.js";
import { Component } from "./Component.js";

export class Card extends Component implements iComponent {
  template: string = "";
  pokeList: pokemonAPI;
  pokeListState: any;
  constructor(public selector: string) {
    super();
    this.pokeList = new pokemonAPI();
    this.pokeList.getAllPokemons().then((res) => {
      this.pokeListState = res.results;
      this.template = this.createTemplate();
      this.addRender(this.selector);
    });
  }

  render(): void {
    super.addRender(this.selector);
  }

  createPokemonsHTMLElements() {
    let httpList = "";
    let httpPokeData = "";
    let promisesList: any = [];
    this.pokeListState.forEach((pokemon: any) => {
      promisesList.push(pokemon.url);
      httpList += `<li class="card-item"><a href="#">${pokemon.name}</a></li>`;
    });
    promisesList.forEach((url: any) => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          httpPokeData += `<p class="card-item__number">Nº:${data.types[0].type.name}</p>
                              <p class="card-item__type">Tipo: tipo</p>`;
          console.log(httpPokeData);
        });
    });

    // console.log(promisesList);
    return httpList;
  }

  createTemplate() {
    return `
      <ul>${this.createPokemonsHTMLElements()}</ul>
    `;
  }
}

// <li class="card-item">
//
// </li>;
