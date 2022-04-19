<script lang="ts">
  import { open } from "@tauri-apps/api/dialog";
  import Titlebar from "./lib/Titlebar.svelte";
  import installRust from "./lib/installRust";
  import { getInstallDirectories } from "./settings";
  import { defaultInstallDir } from "./lib/constants";

  let installDir = defaultInstallDir;
  let version = "legacy";
  let isPlayable = false;

  $: if (version) {
    (async () => {
      const installDirs = await getInstallDirectories();
      if (Object.hasOwn(installDirs, version)) {
        isPlayable = true;
      } else {
        isPlayable = false;
      }
    })();
  }

  const selectInstallDir = async () => {
    const selectDirectory = await open({
      title: "Select installation directory",
      defaultPath: "C:\\",
      directory: true,
      multiple: false,
    });
    installDir = selectDirectory ? (selectDirectory as string) : installDir;
  };
</script>

<main class="w-full h-screen flex items-center justify-center font-quicksand">
  <div class="w-full h-full bg-black bg-opacity-10">
    <Titlebar />
    <div class="h-full flex flex-col items-center justify-center">
      <img src="logo.webp" alt="Flourish Rust Logo" width="128" />
      <form
        action="#"
        class="flex flex-col w-1/2"
        on:submit|preventDefault={() => installRust(installDir, version)}
      >
        <label for="version" class="text-white mt-4">Version</label>
        <select name="version" class="p-2 rounded-md" bind:value={version}>
          <option value="legacy">Legacy</option>
          <option value="devblog116">Blueprints (Devblog 116)</option>
          <option value="devblog133">XP (Devblog 133)</option>
        </select>

        {#if !isPlayable}
          <label for="install-directory" class="text-white mt-4"
            >Install Directory</label
          >
          <div class="flex w-full">
            <span
              name="install-directory"
              class="rounded-l-md w-full bg-white p-2 overflow-hidden flex items-center"
              >{installDir}</span
            >
            <button
              class="bg-white rounded-r-md pl-4 pr-1"
              on:click={selectInstallDir}
              ><i class="bx bx-dots-horizontal-rounded" /></button
            >
          </div>
          <button
            type="submit"
            class="bg-[#B7410E] hover:bg-[#94340b] transition-all px-6 py-2 text-white rounded-2xl font-bold text-lg mt-8"
            >Install</button
          >
        {:else}
          <button
            class="bg-[#B7410E] hover:bg-[#94340b] transition-all px-6 py-2 text-white rounded-2xl font-bold text-lg mt-8"
            >Play</button
          >
        {/if}
      </form>
    </div>
  </div>
</main>

<style>
  main {
    background-image: url("bg.webp");
    background-size: cover;
    background-position: center;
  }
</style>
