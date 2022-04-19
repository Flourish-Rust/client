import { forage } from "@tauri-apps/tauri-forage";

export const getInstallDirectories = async () => {
  const keyExists = await forage.hasKey({
    key: "installDirectories",
  })();

  if (!keyExists) {
    await forage.setItem({
      key: "installDirectories",
      value: "{}",
    })();
    return {};
  }

  const installDirectories = await forage.getItem({
    key: "installDirectories",
  })();

  return JSON.parse(installDirectories);
};

export const setInstallDirectory = async (version, installDir) => {
  const installDirectories = await getInstallDirectories();
  if (!Object.hasOwn(installDirectories, version)) {
    installDirectories[version] = installDir;
    await forage.setItem({
      key: "installDirectories",
      value: JSON.stringify(installDirectories),
    })();
  }
};

export const reset = async () => {
  await forage.setItem({
    key: "installDirectories",
    value: "{}",
  })();
};
