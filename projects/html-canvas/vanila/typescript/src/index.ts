import addWindowEvents from "./ts/addWindowEvents";
import windowOnLoad from "./ts/windowOnLoad";
import "./css/index.css";

window.addEventListener("load", (): void => {
  windowOnLoad();
  addWindowEvents();
});
