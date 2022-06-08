import { Card } from "./Card.js";
import { Component } from "./Component.js";
export class PokeList extends Component {
    selector;
    template = "";
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=PokeList.js.map