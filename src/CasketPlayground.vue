<template>
    <header class="header">
        <h2 class="title">
            Casket of Star / 星之器
        </h2>
        <p class="subtitle">
            使用 Codemirror 6 和 Vue3，基于 Remark & Rehype 生态构建的最新一代 Markdown 编译器。<br>
            <i>version: @lfe/0.0.35</i>
        </p>

        <div class="fixed-button config" @click="showConfig = true">
            <img src="./assets/fa-gear.svg" width="48px" height="48px" />
        </div>

        <div class="fixed-button github">
            <a href="https://github.com/DWaveletT/casket-star">
                <img src="./assets/fa-github.svg" width="48px" height="48px" />
            </a>
        </div>
    </header>
    <div class="demo-container">
        <div class="demo">
            <casket-star
                v-model="data" :plugins="plugins" :key="updateTime"
                :upload="upload"
                :lang="lang === 'zh_CN' ? zhCN : enUS"
                :hideHeader="configSwitch.hideHeader.value"
                :hideFooter="configSwitch.hideFooter.value"
                :disabled="configSwitch.editDisable.value"
                />
        </div>
    </div>
    
    <div class="config-modal" :class="{ hidden: !showConfig }" @click=" showConfig = false">
        <div class="dashboard" :class="{ hidden: !showConfig }" @click.stop>

            <div class="option-group">
                <h2 class="title">语言设置</h2>
                <div class="dropdown">
                    <div class="item">选择语言</div>
                    <div class="content">
                        <div class="item" :class="{ selected: lang === 'zh_CN'}" @click="lang = 'zh_CN'">
                            简体中文
                        </div>
                        <div class="item" :class="{ selected: lang === 'en_US'}" @click="lang = 'en_US'">
                            English
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="option-group">
                <h2 class="title">插件选项</h2>
                <div class="item rounded" @click=" clearPlugin">默认</div>
                <div class="item rounded"
                    v-for="[key, status] in Object.entries(configPlugin)" :key="key"
                    :class="{ selected: status.value }"
                    @click="status.value = !status.value"
                >{{ status.name }}</div>
            </div>
            
            <div class="option-group">
                <h2 class="title">其他设置</h2>
                <div class="item rounded"
                    v-for="[key, status] in Object.entries(configSwitch)" :key="key"
                    :class="{ selected: status.value }"
                    @click="status.value = !status.value"
                >{{ status.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    CasketStar,
    ToolLink,
    ToolTable,
    getDefaultToolbarL,
    getDefaultToolbarR,
    markdown,
    markdownLanguage,
    zhCN,
    enUS,
    type Plugins,
    type Uploader,
    type Toolbar
} from '@lfe/casket-star';

import '@lfe/casket-star/themes/markdown/light.css';
import '@lfe/casket-star/themes/luogu/light.css';

import { onBeforeMount, ref, watch } from 'vue';

import {
    remarkMath,
    remarkNoHtml,
    remarkVideo,
    remarkCallouts,
    ToolBlock,
    ToolMergeTable,
    ToolVideoLink,
    LuoguMath,
    RemoveHTML
} from './plugins';

import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkExtendedTable, { extendedTableHandlers } from 'remark-extended-table';

import type { MarkdownExtension } from '@lezer/markdown';
import type { Options } from 'remark-rehype';
import type { PluggableList } from 'unified';
import type { Extension } from '@codemirror/state';

const data = ref('');

const showConfig = ref(false);
const updateTime = ref(0);

const configPlugin = ref({
    'html' : { value: false, name: '内嵌 HTML'  },
    'math' : { value: false, name: '数学公式'   },
    'code' : { value: false, name: '代码高亮'   },
    'video': { value: false, name: '插入视频'   },
    'table': { value: false, name: '合并单元格' },
    'block': { value: false, name: '样式化块体' },
});

const configSwitch = ref({
    hideHeader: { value: false, name: '隐藏顶栏' },
    hideFooter: { value: false, name: '隐藏底栏' },
    editDisable: { value: false, name: '禁用编辑' },
});
function clearPlugin(){
    const config = configPlugin.value;
    for(const [, status] of Object.entries(config)){
        status.value = false;
    }
}
const lang = ref('zh_CN');
watch(lang, () => {
    updateTime.value = new Date().getTime();
});

const upload: Uploader = (data: FileList) => {
    const info: {
        alt: string,
        url: string
    }[] = [];
    for(let i = 0;i < data.length;i ++){
        info.push({
            alt: data[i].name,
            url: 'fakeURL'
        });
    }
    alert('Uploaded Images: ' + JSON.stringify(info));
    return info;
}

const remarks: PluggableList = [];
const rehypes: PluggableList = [];
const codemirrors: Extension[] = [];
const remarkRehypeOptions: Options = {};

let toolbarL: Toolbar = getDefaultToolbarL();
let toolbarR: Toolbar = getDefaultToolbarR();

const plugins: Plugins = {
    remark: remarks,
    rehype: rehypes,
    remarkRehypeOptions: remarkRehypeOptions,
    toolbarL: toolbarL,
    toolbarR: toolbarR,
    codemirror: codemirrors,
};

function initPlugins(){
    const config = configPlugin.value;

    while(remarks.length) remarks.pop();
    while(rehypes.length) rehypes.pop();
    while(codemirrors.length) codemirrors.pop();

    remarks.push(remarkGfm);
    const markdownConfig: Record<string, unknown> = {};
    markdownConfig.extensions = [];
    markdownConfig.base = markdownLanguage;
    if(config.html.value){
        remarkRehypeOptions.allowDangerousHtml = true;
    } else {
        remarks.push(remarkNoHtml);
        (markdownConfig.extensions as MarkdownExtension[]).push(RemoveHTML);
        markdownConfig.completeHTMLTags = false;
        remarkRehypeOptions.allowDangerousHtml = false;
    }
    if(config.math.value){
        const macros = {};
        remarks.push(remarkMath);
        rehypes.push([rehypeKatex, { macros: macros }]);
        (markdownConfig.extensions as MarkdownExtension[]).push(LuoguMath);
    }
    if(config.code.value){
        rehypes.push([rehypeHighlight, { detect: true }]);
    }
    if(config.table.value){
        remarks.push(remarkExtendedTable);
        remarkRehypeOptions.handlers = {
            ...(remarkRehypeOptions.handlers as object),
            ...extendedTableHandlers
        }
    }
    if(config.video.value || config.block.value){
        remarks.push(remarkDirective);
        if(config.video.value)
            remarks.push(remarkVideo);
        if(config.block.value)
            remarks.push(remarkCallouts);
    }
    codemirrors.push(markdown(markdownConfig));

    if(config.table.value){
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'table');
            if(i !== -1)
                toolgroup[i] = ToolMergeTable;
        }
    } else {
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'merge-table');
            if(i !== -1)
                toolgroup[i] = ToolTable;
        }
    }
    if(config.video.value){
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'link');
            if(i !== -1)
                toolgroup[i] = ToolVideoLink;
        }
    } else {
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'video-link');
            if(i !== -1)
                toolgroup[i] = ToolLink;
        }
    }
    if(config.block.value){
        let exist = false;
        for(let toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'block');
            if(i !== -1)
                exist = true;
        }
        if(exist === false){
            for(let toolgroup of toolbarL){
                const i = toolgroup.findIndex((t) => t.name === 'link');
                if(i !== -1)
                    toolgroup.push(ToolBlock);
            }
        }
    } else {
        for(let toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'block');
            if(i !== -1)
                toolgroup = toolgroup.splice(i, 1);
        }
    }
}

watch(configPlugin.value, () => {
    initPlugins();
    updateTime.value = new Date().getTime();
});

onBeforeMount(() => {
    initPlugins();
});

</script>

<style scoped lang="scss">
@use "sass:color";

$casket-color: #FFE300;

$casket-color-l1: color.adjust($casket-color, $lightness: 10%);
$casket-color-l2: color.adjust($casket-color, $lightness: 20%);
$casket-color-l3: color.adjust($casket-color, $lightness: 30%);
$casket-color-l4: color.adjust($casket-color, $lightness: 40%);
$casket-color-l5: color.adjust($casket-color, $lightness: 45%);

$casket-color-d1: color.adjust($casket-color, $lightness: -10%);
$casket-color-d2: color.adjust($casket-color, $lightness: -20%);
$casket-color-d3: color.adjust($casket-color, $lightness: -30%);
$casket-color-d4: color.adjust($casket-color, $lightness: -35%);
$casket-color-d5: color.adjust($casket-color, $lightness: -40%);

code {
    font-family: consolas;
}

.header {
    padding: 1em 2em;
    background-color: $casket-color-l5;
    .title {
        color: $casket-color-d1;
        font-weight: normal;
        margin-bottom: 0;
        position: relative;
    }
    .subtitle {
        color: $casket-color-d3;
        font-weight: lighter;
        font-size: small;
    }
}

.demo-container {
    flex: 1;
    justify-content: center;
    background-color: $casket-color-l5;
}

.demo {
    box-sizing: border-box;
    padding: 1em;
    width: min(90%, 1080px);
    margin: 0 auto;
}

.fixed-button {
    width: 24x;
    height: 24px;
    position: absolute;
    color: black;
    opacity: 0.4;
    cursor: pointer;
    transition: 0.2s ease-in-out opacity;
    &:hover {
        opacity: 1;
    }
    &.config {
        right: 1.5em;
        top: 1.5em;
    }
    &.github {
        right: 1.5em;
        top: 6em;
    }
}

.config-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgb(0 0 0 / 0.2);
    transition: 0.2s ease-in-out background;
    &.hidden {
        background-color: transparent;
        pointer-events: none;
    }
}

.dropdown {
    position: relative;
    .content {
        opacity: 0;
        display: none;
        position: absolute;
    }
    &:hover .content {
        opacity: 1;
        display: block;
    }
}

.dashboard {
    position: fixed;
    width: min(80%, 360px);
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: $casket-color-l5;
    transition: 0.2s ease-in-out transform;

    &.hidden {
        transform: translateX(100%);
    }
    .title {
        text-align: center;
        color: $casket-color-d1;
        margin: 0.7em 0;
    }
    .option-group {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: $casket-color-d4;
        > :not(:last-child) {
            margin-bottom: 0.5em;
        }
    }
    .item {
        width: 8em;
        padding: 0.5em 1em;
        background-color: white;
        cursor: pointer;
        &.selected {
            background-color: $casket-color-l4;
        }
        &:not(:last-child){
            border-bottom: 1px solid $casket-color-l1;
        }
    }

    .rounded {
        border-radius: 1em;
    }
}
</style>
