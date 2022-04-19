import { createDir, readDir } from "@tauri-apps/api/fs";
import { platform } from "@tauri-apps/api/os";
import { getInstallDirectories, setInstallDirectory } from "../settings";

const installRust = async (installDir: string, version) => {
  let dir;
  // create directory if it doesn't already exist
  try {
    dir = await readDir(installDir);
  } catch (e) {
    if (e.includes("The system cannot find the path specified.")) {
      await createDir(installDir, {
        recursive: true,
      });
    }
  }

  await setInstallDirectory(version, installDir);
};

export default installRust;
