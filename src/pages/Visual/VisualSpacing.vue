<script lang="ts" setup>
'Spacing';

import PageBlock from '@c/Layout/PageBlock.vue';
import { NButton, NTable, NTabPane, NTabs } from 'naive-ui';
import { ref } from 'vue';

const spaces = ref([
  {
    id: '1',
    hor: [
      {
        id: '1-1',
        width: 'w-1',
        title: '0.5rem',
      },
      {
        id: '1-2',
        width: 'w-2',
        title: '1.0rem',
      },
      {
        id: '1-3',
        width: 'w-3',
        title: '1.5rem',
      },
      {
        id: '1-4',
        width: 'w-4',
        title: '2.0rem',
      },
      {
        id: '1-5',
        width: 'w-5',
        title: '2.5rem',
      },
      {
        id: '1-6',
        width: 'w-6',
        title: '3.0rem',
      },
      {
        id: '1-7',
        width: 'w-7',
        title: '3.5rem',
      },
      {
        id: '1-8',
        width: 'w-8',
        title: '4.0rem',
      },
      {
        id: '1-9',
        width: 'w-9',
        title: '4.5rem',
      },
      {
        id: '1-10',
        width: 'w-10',
        title: '5.0rem',
      },
      {
        id: '1-11',
        width: 'w-11',
        title: '5.5rem',
      },
      {
        id: '1-12',
        width: 'w-12',
        title: '6.0rem',
      },
      {
        id: '1-13',
        width: 'w-13',
        title: '12.0rem',
      },
      {
        id: '1-14',
        width: 'w-14',
        title: '24.0rem',
      },
    ],
  },
  {
    id: '2',
    ver: [
      {
        id: '2-1',
        width: 'h-1',
        title: '0.5rem',
      },
      {
        id: '2-2',
        width: 'h-2',
        title: '1.0rem',
      },
      {
        id: '2-3',
        width: 'h-3',
        title: '1.5rem',
      },
      {
        id: '2-4',
        width: 'h-4',
        title: '2.0rem',
      },
      {
        id: '2-5',
        width: 'h-5',
        title: '2.5rem',
      },
      {
        id: '2-6',
        width: 'h-6',
        title: '3.0rem',
      },
      {
        id: '2-7',
        width: 'h-7',
        title: '3.5rem',
      },
      {
        id: '2-8',
        width: 'h-8',
        title: '4.0rem',
      },
      {
        id: '2-9',
        width: 'h-9',
        title: '4.5rem',
      },
      {
        id: '2-10',
        width: 'h-10',
        title: '5.0rem',
      },
      {
        id: '2-11',
        width: 'h-11',
        title: '5.5rem',
      },
      {
        id: '2-12',
        width: 'h-12',
        title: '6.0rem',
      },
      {
        id: '2-13',
        width: 'h-13',
        title: '12.0rem',
      },
      {
        id: '2-14',
        width: 'h-14',
        title: '24.0rem',
      },
    ],
  },
]);

const tables = ref([
  {
    id: '1',
    title: '1',
    rem: '0.5 rem',
    px: '8 px',
  },
  {
    id: '2',
    title: '2',
    rem: '1.0 rem',
    px: '16 px',
  },
  {
    id: '3',
    title: '3',
    rem: '1.5 rem',
    px: '24 px',
  },
  {
    id: '4',
    title: '4',
    rem: '2.0 rem',
    px: '32 px',
  },
  {
    id: '5',
    title: '5',
    rem: '2.5 rem',
    px: '40 px',
  },
  {
    id: '6',
    title: '6',
    rem: '3.0 rem',
    px: '48 px',
  },
  {
    id: '7',
    title: '7',
    rem: '3.5 rem',
    px: '56 px',
  },
  {
    id: '8',
    title: '8',
    rem: '4.0 rem',
    px: '64 px',
  },
  {
    id: '9',
    title: '9',
    rem: '4.5 rem',
    px: '72 px',
  },
  {
    id: '10',
    title: '10',
    rem: '5.0 rem',
    px: '80 px',
  },
  {
    id: '11',
    title: '11',
    rem: '5.5 rem',
    px: '88 px',
  },
  {
    id: '12',
    title: '12',
    rem: '6.0 rem',
    px: '96 px',
  },
  {
    id: '13',
    title: '12',
    rem: '12.0 rem',
    px: '192 px',
  },
  {
    id: '14',
    title: '14',
    rem: '24.0 rem',
    px: '384 px',
  },
]);
</script>

<template>
  <div class="container pt-8">
    <n-button type="primary">
      <router-link class="uppercase" to="/">Home</router-link>
    </n-button>
  </div>

  <page-block>
    <div class="col-span-8">
      <h1>Spacing</h1>
      <h3 class="sub">The spacing foundation of FGL.</h3>
    </div>

    <n-tabs class="col-span-8" type="line">
      <!-- horizontal -->
      <n-tab-pane name="horizontal" tab="Horizontal">
        <ul v-for="dir in spaces" :key="dir.id" class="flex flex-col">
          <li v-for="val in dir.hor" :key="val.id" class="flex flex-row mb-4">
            <div :class="val.width" class="bg-fgl-primary h-4 my-auto mr-2"></div>
            <span>{{ val.title }}</span>
          </li>
        </ul>
      </n-tab-pane>

      <!-- vertical -->
      <n-tab-pane name="vertical" tab="Vertical">
        <ul v-for="dir in spaces" :key="dir.id" class="flex flex-row">
          <li v-for="val in dir.ver" :key="val.id" class="flex flex-col mr-4">
            <div :class="val.width" class="bg-fgl-primary w-4 mx-auto mb-2"></div>
            <span>{{ val.title }}</span>
          </li>
        </ul>
      </n-tab-pane>
    </n-tabs>

    <!-- SPACING TOKENS -->
    <div class="col-span-8">
      <h1>Spacing Tokens</h1>
      <h3 class="sub">Design tokens for FGL's spacing system.</h3>
    </div>

    <n-table class="col-span-8" :single-line="false">
      <thead>
        <tr>
          <th></th>
          <th class="font-bold text-xl">Value in rem</th>
          <th class="font-bold text-xl">Value in px</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="val in tables" :key="val.id">
          <td class="font-bold">{{ val.title }}</td>
          <td>{{ val.rem }}</td>
          <td>{{ val.px }}</td>
        </tr>
      </tbody>
    </n-table>
  </page-block>
</template>
