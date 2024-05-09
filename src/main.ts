import { createApp } from 'vue'

import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import CasketPlayground from './CasketPlayground.vue';

const app = createApp(CasketPlayground);

app.use(hljsVuePlugin)

app.mount('#app')
