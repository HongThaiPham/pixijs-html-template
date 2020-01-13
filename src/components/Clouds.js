import { TilingSprite } from "@pixi/sprite-tiling";
import { TextureCache } from "@pixi/utils";

export default class Clouds extends TilingSprite {
  constructor() {
    const texture = TextureCache["clouds"];
    super(texture, 1, texture.height);
  }

  onResize(width, height) {
    this.width = width;
  }

  onUpdate(delta) {
    this.tilePosition.x -= delta * 4;
  }
}
