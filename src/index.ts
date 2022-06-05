import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";

(() => {
  document.addEventListener("DOMContentLoaded", app);
})();

function app() {
  new Header("slot.header");
  new Main("slot.main");
}
