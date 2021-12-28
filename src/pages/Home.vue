<script lang="ts" setup>
'Home'

import PageBlock from '@/components/Layout/PageBlock.vue'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const links = ref([
  {
    id: '1',
    visual: [
      { id: '1', link: 'visual-color', title: 'color' },
      { id: '2', link: 'visual-typography', title: 'typography' },
      { id: '3', link: 'visual-spacing', title: 'spacing' },
      { id: '4', link: 'visual-breakpoints', title: 'breakpoints' },
    ],
  },
  {
    id: '2',
    element: [
      { id: '1', link: 'element-articles', title: 'articles' },
      { id: '2', link: 'element-text-link', title: 'text link' },
    ],
  },
])
</script>

<template>
  <page-block>
    <div class="container pt-8">
      <div v-for="val in links" :key="val.id" class="grid grid-cols-8 gap-4">
        <n-button v-for="item in val.visual" :key="item.id" type="primary" class="mb-2">
          <router-link :to="'/' + item.link" class="uppercase">{{ item.title }}</router-link>
        </n-button>

        <n-button v-for="item in val.element" :key="item.id" type="success" class="mb-2">
          <router-link :to="'/' + item.link" class="uppercase">{{ item.title }}</router-link>
        </n-button>
      </div>
    </div>

    <h1>Home</h1>

    <div>
      <div class="bg-gray-100 mb-4">
        <div class="flex flex-row ml-4">
          <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--dark.svg" alt="logo" />
          <h1 class="self-baseline text-fgl-primary">FGL <span class="span-color">.</span></h1>
        </div>
      </div>

      <div class="bg-fgl-primary mb-4">
        <div class="flex flex-row ml-4">
          <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--white.svg" alt="logo" />
          <h1 class="self-baseline text-white">
            FGL
            <span class="span-color">.</span>
          </h1>
        </div>
      </div>

      <div class="bg-gray-100 mb-4">
        <div class="flex flex-row ml-4">
          <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--3-light.svg" alt="logo" />
          <h1 class="self-baseline text-fgl-primary">FGL <span class="span-color">.</span></h1>
        </div>
      </div>

      <div class="bg-fgl-primary mb-4">
        <div class="flex flex-row ml-4">
          <img class="h-8 w-auto mr-4 self-baseline" src="../assets/logo--3-dark.svg" alt="logo" />
          <h1 class="self-baseline text-white">
            FGL
            <span class="span-color">.</span>
          </h1>
        </div>
      </div>
    </div>
  </page-block>
</template>

<style lang="scss">
.span-color {
  @apply text-fgl-valencia;
}
</style>
