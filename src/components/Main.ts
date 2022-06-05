import { iComponent } from "../interfaces/icomponent.js";
import { Card } from "./Card.js";
import { Component } from "./Component.js";

export class Main extends Component implements iComponent {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.outRender(this.selector);
    new Card(".main-app__list");
    new Card(".main-app__list");
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
