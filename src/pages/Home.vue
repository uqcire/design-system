<script lang="ts" setup>
'Home'

import PageBlock from '@/components/Layout/PageBlock.vue'
import { NButton } from 'naive-ui'
</script>

<template>
  <div class="container pt-8">
    <div class="grid grid-cols-8 gap-4">
      <n-button type="primary">
        <router-link to="/color">Color</router-link>
      </n-button>

      <n-button type="success">
        <router-link to="/typography">Typography</router-link>
      </n-button>

      <n-button type="warning">
        <router-link to="/spacing">Spacing</router-link>
      </n-button>
    </div>
  </div>

  <page-block>
    <div class="col-span-8">
      <h1>Home</h1>
    </div>

    <div class="col-span-8 bg-gray-100 p-4">
      <div class="flex flex-row">
        <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--dark.svg" alt="logo" />
        <h1 class="self-baseline text-fgl-primary">FGL <span class="span-color">.</span></h1>
      </div>
    </div>

    <div class="col-span-8 bg-fgl-primary p-4">
      <div class="flex flex-row">
        <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--white.svg" alt="logo" />
        <h1 class="self-baseline text-white">
          FGL
          <span class="span-color">.</span>
        </h1>
      </div>
    </div>

    <div class="col-span-8 bg-gray-100 p-4">
      <div class="flex flex-row">
        <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--3-light.svg" alt="logo" />
        <h1 class="self-baseline text-fgl-primary">FGL <span class="span-color">.</span></h1>
      </div>
    </div>

    <div class="col-span-8 bg-fgl-primary p-4">
      <div class="flex flex-row">
        <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--3-dark.svg" alt="logo" />
        <h1 class="self-baseline text-white">
          FGL
          <span class="span-color">.</span>
        </h1>
      </div>
    </div>
  </page-block>
</template>

<style lang="scss">
.span-color {
  color: #db3e4d;
}
</style>
