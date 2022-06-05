import { iComponent } from "../interfaces/icomponent.js";
import { Component } from "./Component.js";

export class Card extends Component implements iComponent {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.addRender(this.selector);
  }
  createTemplate() {
    return `
      <li class='card-item'>
        <h3 class='card-item__name'>Nombre: Bulbasaur</h3>
        <p class='card-item__number'>Nº: 001</p>
        <p class='card-item__type'>Tipo: Planta/Veneno</p>
      </li>
    `;
  }
}
