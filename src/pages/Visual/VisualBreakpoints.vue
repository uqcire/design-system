<script lang="ts" setup>
'Breakpoints'
import PageBlock from '@c/Layout/PageBlock.vue'
import { NButton, NScrollbar, NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'

const breakpoints = ref([
  { id: '1', width: 'w-[767px]', title: 'sm: 375px - 767px' },
  { id: '1', width: 'w-[1023px]', title: 'md: 768px - 1023px' },
  { id: '1', width: 'w-[1339px]', title: 'lg: 1024px - 1339px' },
  { id: '1', width: 'w-[1919px]', title: 'xl: 1440px - 1919px' },
  { id: '1', width: 'w-[1920px]', title: '2xl: 1920px & beyond' },
])
</script>

<template>
  <div class="container pt-8">
    <n-button type="primary">
      <router-link class="uppercase" to="/">Home</router-link>
    </n-button>
  </div>

  <page-block>
    <div class="col-span-8">
      <h1>Breakpoint System</h1>
      <h3>The responsive breakpoint foundation of FGL.</h3>
    </div>

    <n-tabs class="col-span-8" type="line">
      <n-tab-pane name="overview" tab="Overview">
        <ul>
          <n-scrollbar x-scrollable>
            <li v-for="val in breakpoints" :key="val.id" class="mb-4">
              <div :class="val.width" class="bg-fgl-primary h-4">
                <span class="ml-2 text-white">{{ val.title }}</span>
              </div>
            </li>
          </n-scrollbar>
        </ul>
      </n-tab-pane>
    </n-tabs>
  </page-block>
</template>
