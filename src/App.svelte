<script lang="ts">
  import { open } from "@tauri-apps/api/dialog";
  import Titlebar from "./lib/Titlebar.svelte";

  let installDir = "C:/Users/jordan/Desktop/Rust/116";
  let version = "";

  const selectInstallDir = async () => {
    await open();
  };

  const installRust = () => {};
</script>

<main class="w-full h-screen flex items-center justify-center font-quicksand">
  <div class="w-full h-full bg-black bg-opacity-10">
    <Titlebar />
    <div class="h-full flex flex-col items-center justify-center">
      <img src="logo.webp" alt="Flourish Rust Logo" width="128" />
      <form
        action="#"
        class="flex flex-col w-1/2"
        on:submit|preventDefault={installRust}
      >
        <label for="version" class="text-white mt-4">Version</label>
        <select name="version" class="p-1" bind:value={version}>
          <option value="legacy">Legacy</option>
          <option value="devblog-116">Blueprints (Devblog 133)</option>
          <option value="devblog-133">XP (Devblog 133)</option>
        </select>
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
      </form>
    </div>
  </div>
</main>

<style>
  main {
    background-image: url("assets/bg.webp");
    background-size: cover;
    background-position: center;
  }
</style>
