<script lang="ts" setup>
'Typography'

import PageBlock from '@c/Layout/PageBlock.vue'
import { NButton, NDivider, NTable, NTag } from 'naive-ui'
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
        <p class="text-xl">Large: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, assumenda?</p>
        <p class="text-base">Base: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, animi.</p>
        <p class="text-sm">Small: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, animi.</p>
        <p class="text-caption">Caption: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, aliquid.</p>
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
              <th>Headline scales</th>
              <th>CSS custom property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>preset</td>
              <td></td>
              <td>
                font-family: 'Chivo', sans-serif
                <br />
                font-weight: 900
                <br />
                margin-bottom: 1rem
              </td>
            </tr>
            <tr>
              <td>h1</td>
              <td class="code">h1</td>
              <td>font-size: 4.209rem</td>
            </tr>
            <tr>
              <td>h2</td>
              <td class="code">h2</td>
              <td>font-size: 3.157rem</td>
            </tr>
            <tr>
              <td>h3</td>
              <td class="code">h3</td>
              <td>font-size: 2.369rem</td>
            </tr>
            <tr>
              <td>h4</td>
              <td class="code">h4</td>
              <td>font-size: 1.777rem</td>
            </tr>
            <tr>
              <td>h5</td>
              <td class="code">h5</td>
              <td>font-size: 1.333rem</td>
            </tr>
            <tr>
              <td>h6</td>
              <td class="code">h6</td>
              <td>font-size: 1.25rem</td>
            </tr>
          </tbody>

          <!-- subheadline scales -->
          <thead>
            <tr>
              <th>Subheadline scales</th>
              <th>CSS custom property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>h3, h4, h5</td>
              <td class="code">sub</td>
              <td>font-weight: 400</td>
            </tr>
          </tbody>

          <!-- body scales -->
          <thead>
            <tr>
              <th>Body scales</th>
              <th>CSS custom property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>preset</td>
              <td></td>
              <td>
                font-family: 'Mada', sans-serif
                <br />
                font-weight: 500
                <br />
                font-size: 16px
                <br />
                margin-bottom: 1rem
              </td>
            </tr>
            <tr>
              <td>large</td>
              <td class="code">text-lg</td>
              <td>font-size: 1.125rem</td>
            </tr>
            <tr>
              <td>small</td>
              <td class="code">text-sm</td>
              <td>font-size: 0.875rem</td>
            </tr>
            <tr>
              <td>caption</td>
              <td class="code">text-caption</td>
              <td>font-size: 0.64rem</td>
            </tr>
          </tbody>

          <!-- code -->
          <thead>
            <tr>
              <th>Code</th>
              <th>CSS custom property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>code</td>
              <td class="code">code</td>
              <td>
                font-family: 'Fira Code', monospace
                <br />
                font-weight: 400
                <br />
                margin-bottom: 1rem
                <br />
                italic
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
  </page-block>
</template>
