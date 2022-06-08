import { iComponent } from "../interfaces/icomponent.js";
import { pokemonAPI } from "../services/http-pokeApi.js";
import { Card } from "./Card.js";
import { Component } from "./Component.js";
import { PokeList } from "./PokeList.js";

export class Main extends Component implements iComponent {
  template: string = "";

  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render();
    this.createPokemonListInMain();
  }

  render(): void {
    super.outRender(this.selector);
  }

  createPokemonListInMain() {
    new PokeList("ul.main-app__list");
  }

  createTemplate() {
    return `
      <main class='main-app'>
        <ul class='main-app__list'>
        </ul>
      </main>
    `;
  }
}
