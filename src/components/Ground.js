import { TilingSprite } from "@pixi/sprite-tiling";
import { TextureCache } from "@pixi/utils";
export default class Ground extends TilingSprite {
  constructor() {
    const texture = TextureCache["ground"];
    super(texture, 1, texture.height);
  }

  onResize(width, height) {
    this.width = width;
    this.y = height - this.height;
  }

  onUpdate(delta) {
    this.tilePosition.x -= delta * 2;
  }
}
