<script lang="ts" setup>
'Home'

import PageBlock from '@/components/Layout/PageBlock.vue'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const links = ref([
  { id: '1', link: 'color' },
  { id: '2', link: 'typography' },
  { id: '3', link: 'spacing' },
  { id: '4', link: 'breakpoints' },
])
</script>

<template>
  <div class="container pt-8">
    <div class="grid grid-cols-8 gap-4">
      <n-button v-for="val in links" :key="val.id" type="primary">
        <router-link :to="'/' + val.link" class="uppercase">{{ val.link }}</router-link>
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
  @apply text-fgl-valencia;
}
</style>
