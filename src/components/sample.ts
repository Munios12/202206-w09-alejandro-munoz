import { iComponent } from "../interfaces/icomponent.js";
import { Component } from "./Component.js";

export class Sample extends Component implements iComponent {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render(this.selector);
  }
  createTemplate() {
    return ``;
  }
}
