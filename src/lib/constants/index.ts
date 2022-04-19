import { platform } from "@tauri-apps/api/os";
import { homeDir, join } from "@tauri-apps/api/path";

const os = await platform();
const home = await homeDir();
export const defaultInstallDir =
  os === "win32" ? "C:\\FlourishRust" : await join(home, "FlourishRust");
