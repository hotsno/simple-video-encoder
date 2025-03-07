import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      compressVideo(options: {
        inputPath: string;
        outputPath: string;
        resolution: string;
        targetSize: number;
        format: string;
        fps: number;
      }): Promise<{ success: boolean }>;
      getPathForFile(file: File): string;
    };
  }
}
