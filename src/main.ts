import 'highlight.js/styles/stackoverflow-light.css';
import '@/assets/base.scss';

import { createApp } from 'vue'
import CasketPlayground from './CasketPlayground.vue';

import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(CasketPlayground);

app.use(hljsVuePlugin)

app.mount('#app')
