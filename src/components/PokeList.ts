import { iComponent } from "../interfaces/icomponent.js";
import { Card } from "./Card.js";
import { Component } from "./Component.js";

export class PokeList extends Component implements iComponent {
  template: string = "";
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.outRender(this.selector);
    new Card("section.pokelist");
  }

  createTemplate() {
    return `
      <section class='pokelist'>
      </section>
    `;
  }
}
