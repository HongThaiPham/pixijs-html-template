import { TextureCache } from "@pixi/utils";
import { Sprite } from "@pixi/sprite";

export default class Background extends Sprite {
  constructor() {
    super(TextureCache["bg"]);
  }

  onResize(width, height) {
    this.width = width;
    this.height = height;
  }
}
