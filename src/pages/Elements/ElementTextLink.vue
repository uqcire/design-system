<script lang="ts" setup>
'TextLink';

import PageBlock from '@c/Layout/PageBlock.vue';
import { NButton, NDivider, NTag } from 'naive-ui';
</script>

<template>
  <div class="container pt-8">
    <n-button type="primary">
      <router-link class="uppercase" to="/">Home</router-link>
    </n-button>
  </div>

  <page-block>
    <article class="col-span-8">
      <h1>Text Link</h1>
      <h3 class="sub">Underlined text that indicates interactivity.</h3>
      <n-divider />
      <h4>Basic Text Link</h4>
      <p>
        A text link is generally an inline interactive element that is styled as underlined text.
        Its main purpose is to help the user navigate (sometimes perform a function).
      </p>

      <!-- BASIC TEXT LINK -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >demo</n-tag
      >
      <div class="col-span-8 p-2 pt-0 bg-fgl-coconut">
        <h6>LIGHT</h6>
        <a href="https://google.com" target="_blank" class="fgl-text-link"
          >Click me to go to google.com</a
        >
      </div>

      <div class="col-span-8 bg-fgl-primary p-2 pt-0">
        <h6 class="text-white">DARK</h6>
        <a href="https://google.com" target="_blank" class="fgl-text-link decoration-white"
          ><span class="text-white"> Click me to go to google.com </span></a
        >
      </div>
    </article>
  </page-block>
</template>
