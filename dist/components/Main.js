import { Component } from "./Component.js";
import { PokeList } from "./PokeList.js";
export class Main extends Component {
    selector;
    template = "";
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.render();
        this.createPokemonListInMain();
    }
    render() {
        super.outRender(this.selector);
    }
    createPokemonListInMain() {
        new PokeList("ul.main-app__list");
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