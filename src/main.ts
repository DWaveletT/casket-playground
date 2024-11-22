import './assets/main.scss';

import { createApp } from 'vue'
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import latex from 'highlight.js/lib/languages/latex';
import hljs from 'highlight.js';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import CasketPlayground from './CasketPlayground.vue';
hljs.registerLanguage('latex', latex);
const app = createApp(CasketPlayground);

app.use(hljsVuePlugin)
app.mount('#app')
