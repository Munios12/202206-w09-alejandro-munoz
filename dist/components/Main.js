import { Card } from "./Card.js";
import { Component } from "./Component.js";
export class Main extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=Main.js.map