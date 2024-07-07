<script setup lang="ts">
import { onMounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <nav>
    <div class="flex font-bold">
      <router-link to="/" class="p-8 space-x-4 w-4/5"
        >Todo List App</router-link
      >
      <div class="flex p-8 justify-center space-x-4 w-1/5">
        <div class="">
          <select data-choose-theme tabindex="0" class="select select-primary">
            <option value="">Default</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="cupcake">cupcake</option>
            <option value="bumblebee">bumblebee</option>
            <option value="emerald">emerald</option>
            <option value="corporate">corporate</option>
            <option value="synthwave">synthwave</option>
            <option value="retro">retro</option>
            <option value="cyberpunk">cyberpunk</option>
            <option value="valentine">valentine</option>
            <option value="halloween">halloween</option>
            <option value="garden">garden</option>
            <option value="forest">forest</option>
            <option value="aqua">aqua</option>
            <option value="lofi">lofi</option>
            <option value="pastel">pastel</option>
            <option value="fantasy">fantasy</option>
            <option value="wireframe">wireframe</option>
            <option value="black">black</option>
            <option value="luxury">luxury</option>
            <option value="dracula">dracula</option>
            <option value="cmyk">cmyk</option>
            <option value="autumn">autumn</option>
            <option value="business">business</option>
            <option value="acid">acid</option>
            <option value="lemonade">lemonade</option>
            <option value="night">night</option>
            <option value="coffee">coffee</option>
            <option value="winter">winter</option>
            <option value="dim">dim</option>
            <option value="nord">nord</option>
            <option value="sunset">sunset</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
  <div class="h-screen items-center justify-center">
    <router-view></router-view>
  </div>
</template>
