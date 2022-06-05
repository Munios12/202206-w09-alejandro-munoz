import { Component } from "./Component.js";
export class Card extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
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
//# sourceMappingURL=Card.js.map