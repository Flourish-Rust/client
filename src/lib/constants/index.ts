import { platform } from "@tauri-apps/api/os";

const os = await platform();
export const defaultInstallDir =
  os === "win32" ? "C:\\FlourishRust" : "~/FlourishRust";
