export abstract class Component {
  template: string = "";
  render(selector: string) {
    if (selector && document.querySelector(selector)) {
      (<HTMLElement>document.querySelector(selector)).innerHTML = <string>(
        this.template
      );
    }
  }

  outRender(selector: string) {
    if (selector && document.querySelector(selector)) {
      (<HTMLElement>document.querySelector(selector)).outerHTML = <string>(
        this.template
      );
    }
  }

  addRender(selector: string) {
    if (selector && document.querySelector(selector)) {
      (<HTMLElement>document.querySelector(selector)).innerHTML += <string>(
        this.template
      );
    }
  }
}
