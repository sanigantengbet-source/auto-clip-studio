import type { FFmpeg } from "@ffmpeg/ffmpeg";

const CORE_BASE = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd";

let enginePromise: Promise<FFmpeg> | null = null;

export type LogHandler = (message: string) => void;

/**
 * Lazily loads ffmpeg.wasm in the browser. The engine runs entirely client side —
 * no video bytes ever leave the device.
 */
export async function getEngine(onLog?: LogHandler): Promise<FFmpeg> {
  if (typeof window === "undefined") {
    throw new Error("ffmpeg.wasm can only run in the browser");
  }
  if (!enginePromise) {
    enginePromise = (async () => {
      const [{ FFmpeg: FFmpegClass }, { toBlobURL }] = await Promise.all([
        import("@ffmpeg/ffmpeg"),
        import("@ffmpeg/util"),
      ]);
      const engine = new FFmpegClass();
      await engine.load({
        coreURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.wasm`, "application/wasm"),
      });
      return engine;
    })().catch((error: unknown) => {
      enginePromise = null;
      throw error;
    });
  }
  const engine = await enginePromise;
  if (onLog) {
    engine.on("log", ({ message }) => onLog(message));
  }
  return engine;
}

export function isEngineLoaded(): boolean {
  return enginePromise !== null;
}
