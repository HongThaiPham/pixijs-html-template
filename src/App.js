import { Application } from "@pixi/app";
import Logo from "./components/Logo";

export default class App extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      resolution: 1
    });
    document.body.appendChild(this.view); // Create Canvas tag in the body

    this.init();

    window.addEventListener("resize", this.onResize.bind(this));
  }

  init() {
    this.loader.add("logo", "./assets/logo.jpeg");

    this.loader.load(this.draw.bind(this));
  }

  draw() {
    this.logo = new Logo();

    this.stage.addChild(this.logo);

    this.onResize();

    // Create an update loop
    this.ticker.add(this.onUpdate.bind(this));
  }

  onUpdate(delta) {
    this.logo.onUpdate(delta);
  }

  onResize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    const width = this.renderer.width,
      height = this.renderer.height;
    this.logo.onResize(width, height);
  }
}
