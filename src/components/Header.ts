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
          <header>
            <h1>PokeAPI - Alejandro Muñoz</h1>
          </header>
    `;
  }
}
