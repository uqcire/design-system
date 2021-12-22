<script lang="ts" setup>
'Color'

import PageBlock from '@c/Layout/PageBlock.vue'
import { NButton, NCard, NTabPane, NTabs } from 'naive-ui'
import { ref } from 'vue'

const brand = ref([
  {
    id: '1',
    bg: 'bg-fgl-primary',
    text: 'text-white',
    title: 'Downriver',
    hex: '#092147',
    css: 'fgl-primary',
    ctrs: [
      {
        id: '1-1',
        val: 'White (15.91 AAA)',
        state: 'Pass',
        text: 'text-white',
      },
      {
        id: '1-2',
        val: 'Black (1.32 Fail)',
        state: 'Fail',
        text: 'text-black',
      },
    ],
  },
  {
    id: '2',
    bg: 'bg-fgl-lime',
    text: 'text-black',
    title: 'Lime',
    hex: '#c2d730',
    css: 'fgl-lime',
    ctrs: [
      {
        id: '2-1',
        val: 'White (1.61 Fail)',
        state: 'Fail',
        text: 'text-white',
      },
      {
        id: '2-2',
        val: 'Black (13.06 AAA)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '3',
    bg: 'bg-fgl-coconut',
    text: 'text-black',
    title: 'Coconut Cream',
    hex: '#f2f7d5',
    css: 'fgl-coconut',
    ctrs: [
      {
        id: '1-1',
        val: 'White (1.10 Fail)',
        state: 'Fail',
        text: 'text-white',
      },
      {
        id: '1-2',
        val: 'Black (19.04 AAA)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '4',
    bg: 'bg-fgl-valencia',
    text: 'text-white',
    title: 'Valencia',
    hex: '#db3e4d',
    css: 'fgl-valencia',
    ctrs: [
      {
        id: '1-1',
        val: 'White (4.37 AA Large)',
        state: 'Pass',
        text: 'text-white',
      },
      { id: '1-2', val: 'Black (4.81 AA)', state: 'Pass', text: 'text-black' },
    ],
  },
])

const status = ref([
  {
    id: '1',
    bg: 'bg-fgl-success',
    text: 'text-white',
    title: 'Eucalyptus',
    hex: '#207f4c',
    css: 'fgl-success',
    ctrs: [
      { id: '1-1', val: 'White (5.00 AA)', state: 'Pass', text: 'text-white' },
      {
        id: '1-2',
        val: 'Black (4.20 Large)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '2',
    bg: 'bg-fgl-info',
    text: 'text-black',
    title: 'Pumice',
    hex: '#d1d2d1',
    css: 'fgl-info',
    ctrs: [
      {
        id: '2-1',
        val: 'White (1.52 Fail)',
        state: 'Fail',
        text: 'text-white',
      },
      {
        id: '2-2',
        val: 'Black (13.85 AAA)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '3',
    bg: 'bg-fgl-warning',
    text: 'text-black',
    title: 'Candlelight',
    hex: '#ffd111',
    css: 'fgl-warning',
    ctrs: [
      {
        id: '3-1',
        val: 'White (1.46 Fail)',
        state: 'Fail',
        text: 'text-white',
      },
      {
        id: '3-2',
        val: 'Black (14.38 AAA)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '4',
    bg: 'bg-fgl-error',
    text: 'text-white',
    title: 'Milano',
    hex: '#cc2200',
    css: 'fgl-error',
    ctrs: [
      {
        id: '4-1',
        val: 'White (5.53 Pass)',
        state: 'Pass',
        text: 'text-white',
      },
      {
        id: '4-2',
        val: 'Black (3.80 AA Large)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '5',
    bg: 'bg-fgl-text-color-1',
    text: 'text-white',
    title: 'Charade',
    hex: '#2d2e36',
    css: 'fgl-text-color-1',
    ctrs: [
      {
        id: '5-1',
        val: 'White (13.50 AAA)',
        state: 'Pass',
        text: 'text-white',
      },
      {
        id: '5-2',
        val: 'Black (1.56 Fail)',
        state: 'Fail',
        text: 'text-black',
      },
    ],
  },
  {
    id: '6',
    bg: 'bg-fgl-text-color-2',
    text: 'text-white',
    title: 'Ebony Clay',
    hex: '#2b333e',
    css: 'fgl-text-color-2',
    ctrs: [
      {
        id: '6-1',
        val: 'White (12.76 AAA)',
        state: 'Pass',
        text: 'text-white',
      },
      {
        id: '6-2',
        val: 'Black (1.65 Fail)',
        state: 'Fail',
        text: 'text-black',
      },
    ],
  },
  {
    id: '7',
    bg: 'bg-fgl-text-color-3',
    text: 'text-black',
    title: 'Kangaroo',
    hex: '#c8c9c7',
    css: 'fgl-text-color-3',
    ctrs: [
      {
        id: '7-1',
        val: 'White (1.66 Fail)',
        state: 'Fail',
        text: 'text-white',
      },
      {
        id: '7-2',
        val: 'Black (12.64 AAA)',
        state: 'Pass',
        text: 'text-black',
      },
    ],
  },
  {
    id: '8',
    bg: 'bg-fgl-border-color',
    text: 'text-black',
    title: 'Oslo Gray',
    hex: '#939597',
    css: 'fgl-border-color',
    ctrs: [
      {
        id: '8-1',
        val: 'White (3.01 AA Large)',
        state: 'Pass',
        text: 'text-white',
      },
      { id: '8-2', val: 'Black (6.99 AA)', state: 'Pass', text: 'text-black' },
    ],
  },
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
      <h1>Color</h1>
      <h3>The color foundation of FGL.</h3>
    </div>

    <n-tabs class="col-span-8 pb-8" type="line">
      <n-tab-pane name="brand" tab="Brand Colors">
        <!-- card -->
        <div class="grid grid-cols-8 gap-2">
          <div v-for="color in brand" :key="color.id" class="col-span-4">
            <n-card :class="color.bg" hoverable>
              <ul :class="color.text" class="text-sm">
                <li class="grid grid-cols-3 items-baseline mb-3 border-b border-solid">
                  <span class="col-span-2">
                    <h4>{{ color.title }}</h4>
                  </span>
                  <span class="col-span-1 col-start-3 justify-self-end">{{ color.hex }}</span>
                </li>
                <li class="grid grid-cols-3 items-baseline mb-1">
                  <span class="col-span-2">CSS custom property</span>
                  <span class="justify-self-end">{{ color.css }}</span>
                </li>
                <li class="grid grid-cols-3 items-baseline mb-1">
                  <span class="col-span-1">Text size</span>
                  <span class="col-span-1 justify-self-end text-xl">Large</span>
                  <span class="col-span-1 justify-self-end">Small</span>
                </li>
                <li
                  v-for="ctrs in color.ctrs"
                  :key="ctrs.id"
                  class="grid grid-cols-3 items-baseline mb-1"
                  :class="ctrs.text"
                >
                  <span class="col-span-1">{{ ctrs.val }}</span>
                  <span class="col-span-1 justify-self-end">{{ ctrs.state }}</span>
                  <span class="col-span-1 justify-self-end">{{ ctrs.state }}</span>
                </li>
              </ul>
            </n-card>
          </div>
        </div>
      </n-tab-pane>
      <n-tab-pane name="status" tab="Status Colors">
        <div class="grid grid-cols-8 gap-2">
          <div v-for="color in status" :key="color.id" class="col-span-4">
            <n-card :class="color.bg" hoverable>
              <ul :class="color.text" class="text-sm">
                <li class="grid grid-cols-3 items-baseline mb-3 border-b border-solid">
                  <span class="col-span-2">
                    <h4>{{ color.title }}</h4>
                  </span>
                  <span class="col-span-1 col-start-3 justify-self-end">{{ color.hex }}</span>
                </li>
                <li class="grid grid-cols-3 items-baseline mb-1">
                  <span class="col-span-2">CSS custom property</span>
                  <span class="justify-self-end">{{ color.css }}</span>
                </li>
                <li class="grid grid-cols-3 items-baseline mb-1">
                  <span class="col-span-1">Text size</span>
                  <span class="col-span-1 justify-self-end text-xl">Large</span>
                  <span class="col-span-1 justify-self-end">Small</span>
                </li>
                <li
                  v-for="ctrs in color.ctrs"
                  :key="ctrs.id"
                  class="grid grid-cols-3 items-baseline mb-1"
                  :class="ctrs.text"
                >
                  <span class="col-span-1">{{ ctrs.val }}</span>
                  <span class="col-span-1 justify-self-end">{{ ctrs.state }}</span>
                  <span class="col-span-1 justify-self-end">{{ ctrs.state }}</span>
                </li>
              </ul>
            </n-card>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>
  </page-block>
</template>
