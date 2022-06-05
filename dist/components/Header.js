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
//# sourceMappingURL=Header.js.map