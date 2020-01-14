import { Application } from "@pixi/app";
import Logo from "./components/Logo";
import { Text, TextStyle } from "@pixi/text";
import { Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";

export default class App extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      resolution: 1
    });
    document.body.appendChild(this.view); // Create Canvas tag in the body

    window.addEventListener("resize", this.onResize.bind(this));
  }

  init(onProgress) {
    this.loader.add("logo", "./assets/logo.jpeg");

    // pass progress to facebook instant game loader
    const binding = this.loader.onProgress.add(loader =>
      onProgress(loader.progress)
    );

    return new Promise(resolve => {
      this.loader.load(() => {
        this.loader.onProgress.detach(binding); // remove the listener handler
        resolve(); // The loading is done!"
      });
    });
    // this.loader.load(this.draw.bind(this));
  }

  draw() {
    this.logo = new Logo();
    this.stage.addChild(this.logo);

    let style = new TextStyle({
      fontSize: 20,
      fill: "white",
      strokeThickness: 4
    });

    var contextId = new Text(`contextId: ${FBInstant.context.getID()}`, style);

    var contextType = new Text(
      `contextType: ${FBInstant.context.getType()}`,
      style
    );
    contextType.position.set(0, 40);

    var playerName = new Text(
      `playerName: ${FBInstant.player.getName()}`,
      style
    );
    playerName.position.set(0, 80);

    let playerPic = Texture.from(FBInstant.player.getPhoto());
    let pic = new Sprite(playerPic);
    // this.loader.add("player", playerPic).load(() => {
    this.stage.addChild(pic);
    // });

    var playerId = new Text(`playerId: ${FBInstant.player.getID()}`, style);
    playerId.position.set(0, 160);

    this.stage.addChild(contextId, contextType, playerName, playerId);

    // this.stage.addChild(name);

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
