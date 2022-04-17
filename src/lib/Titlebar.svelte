<script>
  import { appWindow } from "@tauri-apps/api/window";

  const closeWindow = async () => {
    await appWindow.close();
  };

  const minimizeWindow = async () => {
    await appWindow.minimize();
  };
</script>

<div
  data-tauri-drag-region
  class="titlebar flex absolute justify-end items-center w-full"
>
  <div class="titlebar-button" id="titlebar-minimize">
    <button on:click={minimizeWindow}
      ><i
        class="bx bx-sm bx-minus text-white hover:bg-black bg-opacity-5 p-2 transition-all"
      /></button
    >
    <button on:click={closeWindow}
      ><i class="bx bx-sm bx-x text-white hover:bg-red-400 p-2" /></button
    >
  </div>
</div>
