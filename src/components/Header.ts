import { iComponent } from "../interfaces/icomponent.js";
import { Component } from "./Component.js";

export class Header extends Component implements iComponent {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.outRender(this.selector);
  }

  createTemplate() {
    return `
          <header class='header-app'>
            <img class='header-app__title' src='./pokemon-logo.svg'/>
            <ul class='header-app__list'>
              <li><a href='#'>Home</a></li>
              <li><a href='/favs'>Pokémons Favoritos</a></li>
            </ul>
          </header>
    `;
  }
}
