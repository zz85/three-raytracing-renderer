import { RaytracingRenderer as Classic } from "./src/RaytracingRendererClassic.js";
import { RaytracingRenderer as Headless } from "./src/RaytracingRenderer.js";

export const RaytracingRendererClassic = Classic;
export const RaytracingRenderer = Headless;

export default {
    RaytracingRenderer,
    RaytracingRendererClassic
}
