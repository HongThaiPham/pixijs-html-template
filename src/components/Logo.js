import { TextureCache } from "@pixi/utils";
import { Sprite } from "@pixi/sprite";

export default class Logo extends Sprite {
  constructor() {
    super(TextureCache["logo"]);
    this.anchor.set(0.5);
  }

  onResize(width, height) {
    this.position.set(width / 2, height / 2);
  }

  onUpdate(delta) {
    this.rotation += 0.02;
  }
}
