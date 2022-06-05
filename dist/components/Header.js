import { Component } from "./Component.js";
export class Header extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=Header.js.map