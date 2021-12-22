<script lang="ts" setup>
'Typography'

import PageBlock from '@c/Layout/PageBlock.vue'
import { NButton, NDivider, NTable, NTag } from 'naive-ui'
import { ref } from 'vue'

const bodyScales = ref([
  { id: 1, title: 'Large', class: 'text-xl' },
  { id: 2, title: 'Base', class: 'text-base' },
  { id: 3, title: 'Small', class: 'text-sm' },
  { id: 4, title: 'Caption', class: 'text-caption' },
])

const typoTokens = ref([
  {
    id: 1 - 1,
    title: 'headline',
    code: 'h1, h2, h3, h4, h5, h6',
    valueA: 'font-family: "Work Sans", sans-serif',
    valueB: 'font-weight: 700',
    valueC: '',
    valueD: '',
    valueE: '',
  },
  {
    id: 1 - 2,
    title: 'h1',
    code: 'h1',
    valueA: 'margin-top: 0',
    valueB: 'font-size: 4.209rem',
    valueC: 'line-height: 6.3135rem',
    valueD: 'margin-top: 1.5rem',
    valueE: 'margin-bottom: 2rem',
  },
  {
    id: 1 - 3,
    title: 'h2',
    code: 'h2',
    valueA: 'font-size: 3.157rem',
    valueB: 'line-height: 4.7355rem',
    valueC: 'margin-top: 1.5rem',
    valueD: 'margin-bottom: 1.5rem',
    valueE: '',
  },
  {
    id: 1 - 4,
    title: 'h3',
    code: 'h3',
    valueA: 'font-size: 2.369rem',
    valueB: 'line-height: 3.5535rem',
    valueC: 'margin-top: 1.5rem',
    valueD: 'margin-bottom: 1.0rem',
    valueE: '',
  },
  {
    id: 1 - 5,
    title: 'h4',
    code: 'h4',
    valueA: 'font-size: 1.777rem',
    valueB: 'line-height: 2.6655rem',
    valueC: 'margin-top: 1.5rem',
    valueD: 'margin-bottom: 1.0rem',
    valueE: '',
  },
  {
    id: 1 - 6,
    title: 'h5',
    code: 'h5',
    valueA: 'font-size: 1.333rem',
    valueB: 'line-height: 1.9995rem',
    valueC: 'margin-top: 1.5rem',
    valueD: 'margin-bottom: 1.0rem',
    valueE: '',
  },
  {
    id: 1 - 7,
    title: 'h6',
    code: 'h6',
    valueA: 'font-size: 1.25rem',
    valueB: 'line-height: 1.875rem',
    valueC: 'margin-top: 1.5rem',
    valueD: 'margin-bottom: 1.0rem',
    valueE: '',
  },
  {
    id: 2 - 1,
    title: 'subheadline',
    code: '.sub',
    valueA: 'font-family: "Raleway", sans-serif',
    valueB: 'font-weight: 500',
    valueC: '',
    valueD: '',
    valueE: '',
  },
  {
    id: 3 - 1,
    title: 'html',
    code: 'html, .root',
    valueA: 'font-size: 16px',
    valueB: 'line-height: 1.5rem',
    valueC: '',
    valueD: '',
    valueE: '',
  },
  {
    id: 3 - 2,
    title: 'body',
    code: 'body',
    valueA: 'font-family: "Lato", sans-serif',
    valueB: 'font-weight: 500',
    valueC: 'font-size: 1rem',
    valueD: 'margin: auto',
    valueE: '',
  },
  {
    id: 3 - 2,
    title: 'p, ul, ol, pre, table, blockquote',
    code: 'p, ul, ol, pre, table, blockquote',
    valueA: 'margin-top: 0rem',
    valueB: 'margin-bottom: 1.5rem',
    valueC: '',
    valueD: '',
    valueE: '',
  },
  {
    id: 4 - 1,
    title: 'code',
    code: '.code',
    valueA: 'font-family: "Fira Code", monospace',
    valueB: 'font-weight: 400',
    valueC: 'font-style: italic',
    valueD: '',
    valueE: '',
  },
])
</script>

<template>
  <div class="container pt-8">
    <n-button type="primary">
      <router-link to="/">Home</router-link>
    </n-button>
  </div>

  <page-block>
    <div class="col-span-8">
      <h1>Typography System</h1>
      <h3 class="sub">The typograpic foundation of FGL</h3>
      <n-divider />

      <!-- headline scale -->
      <div id="headline-scale">
        <h3>Headline Scale</h3>
        <n-divider />

        <!-- headline -->
        <article id="headline">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            HEADLINE
          </n-tag>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </article>
        <n-divider />

        <!-- subheadline -->
        <article id="subheadline">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            SUBHEADLINE
          </n-tag>
          <h3 class="sub">Lorem ipsum dolor sit amet.</h3>
          <h4 class="sub">Lorem ipsum dolor sit amet.</h4>
          <h5 class="sub">Lorem ipsum dolor sit amet.</h5>
        </article>
        <n-divider />

        <!-- eyebrow -->
        <article id="eyebrow">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            EYEBROW
          </n-tag>
          <h5 class="sub">ONLY OPTION: Lorem ipsum dolor sit amet.</h5>
        </article>
      </div>
      <n-divider />

      <!-- body scale -->
      <div id="#body-scale">
        <h3>Body Scale</h3>
        <n-divider />
        <p v-for="val in bodyScales" :key="val.id" :class="val.class">
          {{ val.title }}: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, assumenda?
        </p>
      </div>
      <n-divider />

      <!-- common-pairings -->
      <div id="#common-pairings">
        <h3>Common Pairings</h3>
        <n-divider />

        <!-- article -->
        <article id="article">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            ARTICLE TITLE
          </n-tag>
          <span class="text-center">
            <h2>Headline - Lorem ipsum dolor sit</h2>
            <h4 class="sub">Subheadline - Lorem ipsum dolor sit.</h4>
          </span>
        </article>
        <n-divider />

        <!-- page -->
        <article id="page">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            PAGE TITLE
          </n-tag>
          <h2>Headline - Lorem ipsum dolor sit.</h2>
          <h3 class="sub">Subheadline - Lorem ipsum dolor sit.</h3>
        </article>
        <n-divider />

        <!-- teaser -->
        <article id="teaser">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            TEASER
          </n-tag>
          <h6>THIS IS AN EYEBROW</h6>
          <h2>Headline - Lorem ipsum dolor sit.</h2>
          <h3 class="sub">Subheadline - Lorem ipsum dolor sit.</h3>
          <p class="base">
            This is regular text, and some lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in
            nihil perferendis sequi modi atque soluta odio possimus, aliquid, beatae dolore ipsam amet officia nobis
            molestiae laborum porro aspernatur. Repellendus.
          </p>
        </article>
        <n-divider />

        <!-- mini teaser -->
        <article id="mini-teaser">
          <n-tag
            size="large"
            :color="{
              color: '#f2f7d5',
              textColor: '#092147',
              borderColor: '#f2f7d5',
            }"
          >
            MINI TEASER
          </n-tag>
          <h6>Lorem ipsum dolor sit.</h6>
          <h4>Lorem ipsum dolor sit.</h4>
        </article>
      </div>
      <n-divider />

      <!-- typography tokens -->
      <div id="typography-tokens">
        <n-tag
          size="large"
          :color="{
            color: '#f2f7d5',
            textColor: '#092147',
            borderColor: '#f2f7d5',
          }"
        >
          TYPOGRAPHY TOKENS
        </n-tag>
        <h1>Typography Tokens</h1>
        <h3 class="sub">Design tokens for FGL's typography system, available as CSS custom properties.</h3>
        <n-table :single-line="false">
          <!-- headline scacles -->
          <thead>
            <tr>
              <th>Scales</th>
              <th>CSS custom property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="val in typoTokens" :key="val.id">
              <td>{{ val.title }}</td>
              <td class="code">{{ val.code }}</td>
              <td>
                {{ val.valueA }}
                <br />
                {{ val.valueB }}
                <br />
                {{ val.valueC }}
                <br />
                {{ val.valueD }}
                <br />
                {{ val.valueE }}
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
  </page-block>
</template>
