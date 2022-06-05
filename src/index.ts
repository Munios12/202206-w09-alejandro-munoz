import { Header } from "./components/Header.js";

(() => {
  document.addEventListener("DOMContentLoaded", app);
})();

function app() {
  new Header("slot.header");
}
