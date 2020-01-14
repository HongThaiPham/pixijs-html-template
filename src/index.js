import { Application } from "@pixi/app";

import { Renderer, BatchRenderer } from "@pixi/core";
Renderer.registerPlugin("batch", BatchRenderer);

// import { TilingSpriteRenderer } from "@pixi/sprite-tiling";
// Renderer.registerPlugin("tilingSprite", TilingSpriteRenderer);

import { TickerPlugin } from "@pixi/ticker";
Application.registerPlugin(TickerPlugin);

import { AppLoaderPlugin } from "@pixi/loaders";
Application.registerPlugin(AppLoaderPlugin);

import App from "./App";

window.onload = async () => {
  try {
    await FBInstant.initializeAsync();

    const app = new App();
    await app.init(FBInstant.setLoadingProgress);
    await FBInstant.startGameAsync();

    app.draw();
  } catch (error) {
    console.log(error);
  }
};
