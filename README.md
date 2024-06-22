# three-raytracing-renderer
pure headless JS renderer based off the original THREE.RaytracingRenderer

## Features
- RaytracingRenderer ES module
- Runs with up to date threejs version
- Runs pure JS, headless without canvas, weblgl or other GPU dependencies

## Background

One of the strengths of Three.js is its design simplicity, which allows for new renderers and add-ons to be easily developed. In its early days, I found many of the "extras" [renderers](https://x.com/BlurSpline/status/1801695203541324270) fun and interesting. However, it's understandable that these get removed when they become less maintainable or less relevant to modern web trends.

In this package I wanted to bring back RaytracingRenderer that was [removed in 2020](https://github.com/mrdoob/three.js/pull/18283) similar to what [three-software-renderer](https://www.npmjs.com/package/three-software-renderer) did for THREE.SoftwareRenderer.

One reason why I recently wanted to use RaytracingRenderer over SoftwareRenderer was to have richer tones compared to the flat shadding in SoftwareRenderer, which I noticed after migrating [threejs-term](https://www.npmjs.com/package/threejs-term) away from it's canvas dependency.

## Variants
- `RaytracingRenderer` - the current non-browser, UIntArray implementation
- `RaytracingRendererClassic` - the original single threaded raytracing renderer that writese out to a canvas
- `RaytracingRendererWorkers` - the changes I added to allow [Web Workers](https://github.com/mrdoob/three.js/pull/7671) to speed up rendering (To be added)

## Usage
![browser-test](https://github.com/zz85/three-raytracing-renderer/raw/main/screenshots/browser-test.png)

![terminal-test](https://github.com/zz85/three-raytracing-renderer/raw/main/screenshots/terminal-test.png)


## Other renderers
- https://github.com/avgp/three-software-renderer - SoftwareRenderer in npm
- https://www.npmjs.com/package/three-canvas-renderer  - Canvas Renderer in npm
- https://github.com/gkjohnson/three-gpu-pathtracer?tab=readme-ov-file - GPU Pathtracing renderer (requires WebGL)
- https://github.com/erichlof/THREE.js-PathTracing-Renderer - Another path-tracing renderer
