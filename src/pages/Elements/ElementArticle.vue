<script lang="ts" setup>
'Articles'

import PageBlock from '@c/Layout/PageBlock.vue'
import { NButton, NCollapse, NCollapseItem, NDivider, NTag } from 'naive-ui'
import { ref } from 'vue'

const list = ref([
  { id: 1, name: 'p' },
  { id: 2, name: 'dl' },
  { id: 3, name: 'ol' },
  { id: 4, name: 'ul' },
  { id: 5, name: 'header' },
  { id: 6, name: 'section' },
  { id: 7, name: 'h1 ~ h6' },
  { id: 8, name: 'blockquote' },
  { id: 9, name: 'details' },
  { id: 10, name: 'figure' },
  { id: 11, name: 'small' },
  { id: 12, name: 'table' },
  { id: 13, name: 'code' },
  { id: 14, name: 'kbd' },
  { id: 15, name: 'pre' },
  { id: 16, name: 'hr' },
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
      <h1>Articles</h1>
      <h3 class="sub">An editorial container that styles children HTML elements.</h3>
      <n-divider />
    </div>

    <div class="col-span-8">
      <h4>Basic Article</h4>
      <p class="text-xl">
        An Article element can be used for any free-form content areas where a WYSIWYG editor is enabled. Basic HTML
        elements are styled within the Article element.
      </p>
      <h4>Demo</h4>
      <p class="text-xl">The is a list of all supported plain HTML elements:</p>
      <ul>
        <li v-for="val in list" :key="val.id" class="mb-2 ml-2 list-disc">
          <span class="code">{{ val.name }}</span>
        </li>
      </ul>
      <n-divider />
    </div>

    <div class="col-span-8">
      <p class="text-xl">The following is a kitchen sink of all supported plain HTML elements:</p>

      <!-- HEADINGS -->
      <n-tag size="large" class="uppercase" :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >Headings</n-tag
      >
      <h1>H1 heading text</h1>
      <h2>H2 heading text</h2>
      <h3>H3 heading text</h3>
      <h4>H4 heading text</h4>
      <h5>H5 heading text</h5>
      <h6>H6 heading text</h6>
      <n-divider />

      <!-- TEXT -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >text</n-tag
      >
      <ul>
        <li class="font-bold mr-2 inline">bold</li>
        <li class="italic inline mr-2">italic</li>
        <li class="inline mr-2 text-fgl-info"><a href="#!">linked</a></li>
        <li class="underline inline mr-2">underline</li>
        <li class="code inline mr-2">code</li>
        <li class="inline mr-2">
          <kbd>kbd</kbd>
        </li>
        <li class="font-caption inline mr-2">small</li>
        <li class="inline mr-2">
          super
          <sup>script</sup>
        </li>
        <li class="inline mr-2">
          sub
          <sub>script</sub>
        </li>
      </ul>
      <n-divider />

      <!-- LIST -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >list</n-tag
      >
      <ul>
        <li class="list-disc mb-2">First level unordered item</li>
        <li class="list-decimal">Second level ordered item</li>
      </ul>
      <n-divider />

      <!-- DETAILS & SUMMARY -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >DETAILS & Summary</n-tag
      >
      <details open>
        <summary>Summary sums up the details</summary>
        <p>Details elaborate on the summary.</p>
      </details>
      <p>This can also archived by using <code class="code">n-collapse</code></p>
      <n-collapse>
        <n-collapse-item title="Summary sums up the details">
          <div>Details elaborate on the summary.</div>
        </n-collapse-item>
      </n-collapse>
      <n-divider />

      <!-- DEFINITION LIST -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >definition list</n-tag
      >
      <dl>
        <dt>Definition list</dt>
        <dd>A list of text and description</dd>
        <dt>Morgawr</dt>
        <dd>A sea serpent.</dd>
        <dt>Owlman</dt>
        <dd>A giant owl-like creature.</dd>
      </dl>
      <n-divider />

      <!-- PRE & CODE -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >pre & code</n-tag
      >
      <pre>
          <code class="code">pre&nbsp;{<br>&nbsp;&nbsp;padding: .5em 1em; color: black; border-left: 5px solid; background-color: white;<br>}</code>
      </pre>
      <n-divider />

      <!-- BLOCKQUOTE -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >blockquote</n-tag
      >
      <blockquote>
        <p>
          <q
            >Pull Quote. Darkness cannot drive out darkness; only
            <q>light</q>
            can do that. Hate cannot drive out hate; only <q>love</q> can do that.
          </q>
        </p>
        <p>
          <q>The time is always right to do what is right.</q>
        </p>
      </blockquote>
      <n-divider />

      <!-- FIGURE -->
      <n-tag
        size="large"
        class="uppercase mb-4"
        :color="{ color: '#f2f7d5', textColor: '#092147', borderColor: '#f2f7d5' }"
        >figure</n-tag
      >

      <figure>
        <img src="https://picsum.photos/400/300?blur=1?random=1" alt="" />
        <figcaption>Figure caption</figcaption>
      </figure>
    </div>
  </page-block>
</template>
