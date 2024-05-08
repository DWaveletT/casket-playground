import useageVue3 from './usage-vue3.txt';

export const codes: Record<string, string> = {
    'useage-vue3':
`<template>
<casket-star v-model="text" />

<!--
<casket-star v-model="text" lang="zh_CN" /> // for Simplified Chinese users
-->
</template>

<script setup>

import { CasketStar } from 'casket-star';

import 'casket-star/themes/markdown/light.css'; // Default Markdown theme
import 'casket-star/themes/casket/light.css';   // Default Casket theme

import { onMounted, ref } from 'vue';

const text = ref('');

</script>`
}