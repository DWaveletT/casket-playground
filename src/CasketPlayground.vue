<template>
    <div class="demo-container">
        <div class="demo">
            <h2 class="title">Casket of Star / 星之器</h2>
            <p class="subtitle">使用 Codemirror 6 和 Vue3，基于 Remark & Rehype 生态构建的最新一代 Markdown 编译器。</p>

            <div style="margin-bottom: 2em" />

            <casket-star v-model="value" lang="zh_CN" />
        </div>
    </div>

    <div class="main-container">
        <div class="nav-container">
            <h2 class="nav-title">快速导航</h2>

            <div class="nav">
                <div class="item">
                    <div class="level1">主要特性</div>
                </div>
                <div class="item">
                    <div class="level1">主要特性</div>
                </div>
                <div class="item">
                    <div class="level1">主要特性</div>
                </div>
                <div class="item">
                    <div class="level1">参考接口</div>
                    <div class="level2">Plugins</div>
                    <div class="level2">CasterViewer</div>
                    <div class="level2">CasterEditor</div>
                    <div class="level2">CasterStar</div>
                </div>
            </div>
        </div>
        <div class="main">
            <h2 id="feature" class="section-title">主要特性<div class="decoration" /></h2>

            <div class="feature-container">
                <div class="feature">
                    <h3 class="title">运行速度快<div class="decoration" /></h3>

                    <p>星之器基于 Vue 进行构建，使用 Vite 进行打包。项目并未使用任何外部 UI 库，使得打包生成的文件轻巧快速。</p>

                    <p>星之器使用 Codemirror 作为编辑器，Micromark 用于渲染，对较长的文章仍然表现出优秀的性能。</p>
                </div>

                <div class="feature">
                    <h3 class="title">扩展性能强<div class="decoration" /></h3>
                    
                    <p>星之器基于 Codemirror、Remark 和 Rehype 生态，拥有庞大的社区资源。同时星之器保留了工具栏、编辑器、预览器的扩展接口，用户可以根据自己的喜好选择相应的插件。</p>

                    <p>星之器将所有 css 样式打包整理，用户可以自行选择/定制编辑器的外观。</p>

                </div>

                <div class="feature">
                    <h3 class="title">编辑体验优<div class="decoration" /></h3>

                    <p>星之器提供了若干编辑按钮用于快速编辑文档，同时支持快捷方式进行快速编辑。</p>
                    <p>星之器提供了精确同步滚动功能用于快速预览，用户可以选择是否开启编辑/预览/全屏功能。</p>
                    <p>星之器针对移动便携设备提供了支持。</p>
                </div>
            </div>

            <p>除此之外，星之器还具有完整的 Typescript 类型系统支持。</p>

            <h2 class="section-title">快速开始<div class="decoration" /></h2>

            <p>安装 Casket of Star：</p>

            <highlightjs language="bash" code="$ npm install casket-star" />

            <h3>Vue 3</h3>

            <highlightjs language="bash" :code="codes['useage-vue3']" />

            <h2 class="section-title">插件定制<div class="decoration" /></h2>

            <p>星之器主要由三部分组成：工具栏、编辑区、预览区。工具栏由星之器内部组件实现，提供了增加、移除、修改默认工具栏的接口；编辑区由 Codemirror 6 实现，提供了 Codemirror 的扩展接入的接口；预览区由 Remark 和 Rehype 实现（具体过程可看<a href="#detail">技术细节</a>一章），提供了接入 Remark、Rehype 插件的接口以及由 mdast 转换生成 hast 的 RemarkRehype 的配置接口。</p>

            <p>在这个章节的末尾，提供了一些常见扩展需求的配置方法，以供参考。</p>

            <h3>工具栏</h3>

            <h3>编辑区</h3>

            <h3>预览区</h3>

            <h2 id="theme" class="section-title">外观定制<div class="decoration" /></h2>

            <h2 id="detail" class="section-title">技术细节<div class="decoration" /></h2>

            <h2 id="api" class="section-title">参考接口<div class="decoration" /></h2>

            <h3 id="api-plugins">Plugins</h3>
            
            <table class="interface">
                
                <colgroup>
                    <col style="width: 200px;">
                    <col style="width: 200px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th>键值</th>
                        <th>类型</th>
                        <th>描述</th>
                    </tr>
                    <tr>
                        <td>remark</td>
                        <td>(Plugin | [Plugin, object])[]</td>
                        <td>Remark 插件，将会在渲染 Markdown 的过程中被使用。</td>
                    </tr>
                    <tr>
                        <td>rehype</td>
                        <td>(Plugin | [Plugin, object])[]</td>
                        <td>Rehype 插件，将会在渲染 Markdown 的过程中被使用。</td>
                    </tr>
                    <tr>
                        <td>remarkRehypeOptions</td>
                        <td>Options</td>
                        <td>Remark 插件，将会在渲染 Markdown 的过程中，作为 remarkRehype 的设置选项被使用。</td>
                    </tr>
                    <tr>
                        <td>codemirror</td>
                        <td>Extension[]</td>
                        <td>Codemirror 扩展，将会被应用在编辑器中。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-editor">CasketEditor</h3>
            
            <table class="interface">
                
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th>键值</th>
                        <th>类型</th>
                        <th>描述</th>
                    </tr>
                    <tr>
                        <td>plugins</td>
                        <td>Plugins</td>
                        <td>编辑器使用的插件包，默认为预设插件包。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-viewer">CasketViewer</h3>
            
            <table class="interface">
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th>键值</th>
                        <th>类型</th>
                        <th>描述</th>
                    </tr>
                    <tr>
                        <td>plugins</td>
                        <td>Plugins</td>
                        <td>预览器使用的插件包，默认为预设插件包。</td>
                    </tr>
                    <tr>
                        <td>interval</td>
                        <td>number</td>
                        <td>预览区两次刷新之间间隔的最小时间长度，单位为毫秒，默认为 0，即每当用户修改编辑区的一个字符后预览区会立即进行刷新。值越大，刷新间隔越长，用于编辑较长文本时降低预览卡顿。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-viewer">CasketStar</h3>
            
            <table class="interface">
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 100px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th>键值</th>
                        <th>类型</th>
                        <th>描述</th>
                    </tr>
                    <tr>
                        <td>plugins</td>
                        <td>Plugins</td>
                        <td>编辑器和预览器使用的插件包，默认为预设插件包。</td>
                    </tr>
                    <tr>
                        <td>toolbarl</td>
                        <td>Toolbar</td>
                        <td>放置在工具栏左侧的工具按钮。默认为预设左侧工具。</td>
                    </tr>
                    <tr>
                        <td>toolbarr</td>
                        <td>Toolbar</td>
                        <td>放置在工具栏右侧的工具按钮。默认为预设右侧工具。</td>
                    </tr>
                    <tr>
                        <td>lang</td>
                        <td>string</td>
                        <td>国际化选项，用于设置星之器的语言环境，会被提供给所有插件，默认为英语。</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">

import { codes } from './codes';

import { CasketStar, CasketViewer } from 'casket-star';

import 'casket-star/themes/markdown/light.css';
import 'casket-star/themes/casket/light.css';

import { onMounted, ref } from 'vue';

const value = ref('');

</script>

<style scoped lang="scss">

:global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", "Noto Sans CJK SC", "Noto Sans CJK", "Source Han Sans", "PingFang SC", "Microsoft YaHei", sans-serif;

    min-height: 100vh;

    margin: 0;
}

:global(code) {
    font-family: consolas;
}

$casket-color: #FFE300;

$casket-bg-color: lighten($casket-color, 45%);
$casket-sd-color: lighten($casket-color, 30%);

$text-h-color: darken($casket-color, 10%);
$text-p-color: darken($casket-color, 32%);
$text-a-color: darken($casket-color, 5%);

p {
    text-align: justify;
    line-height: 1.5;
}

a {
    color: $text-a-color;

    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: normal;

}

.section-title {
    font-weight: normal;
    text-align: center;

    > .decoration {
        height: 3px;
        width: 5em;
        background-color: $casket-color;
        margin: 0 auto;

        transition:
            0.2s ease-in-out width;
    }

    &:hover {
        > .decoration {
            width: 10em;
        }
    }
}

.demo-container {
    display: flex;

    justify-content: center;
    background-color: $casket-bg-color;

    > .main {
        margin: 1em 0;
        padding: 1em;

        width: min(90%, 1080px);
    }
}

.main-container {
    display: flex;

    justify-content: center;

    > .main {
        margin: 1em 0;
        padding: 1em;

        width: min(60%, 800px);
    }
}

.nav-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 12em;
    height: 100%;

    background-color: $casket-bg-color;
}

.nav {
    > .item {
        overflow: hidden;
        
        > .level1, > .level2 {
            margin: 0;
        }

        > .level2 {
            height: 0;
        }

        &:hover {
            > .level2 {
                height: auto;
            }
        }
    }
}

.demo {
    box-sizing: border-box;
    padding: 1em;

    width: min(90%, 1080px);
    height: 100vh;

    .title {
        margin-top: 2em;
        font-weight: normal;
        margin-bottom: 0;
    }

    .subtitle {
        margin-top: 0;
        margin-bottom: 2em;
        font-weight: lighter;
        font-size: small;
    }
}

.feature-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 2em;

    > .feature {
        padding: 0.5em 1em;
        border: 1px solid $casket-color;
        background-color: $casket-bg-color;

        box-shadow: 4px 4px 5px $casket-sd-color;

        color: $text-p-color;

        text-align: justify;

        .title {
            margin-top: 0.5em;
            color: $text-h-color;

            font-weight: normal;

            > .decoration {
                height: 1px;
                width: 100%;
                background-color: $casket-color;
            }
        }
    }
}

table.interface {
    border: 1px solid $casket-color;
    border-collapse: collapse;
    
    background-color: white;

    table-layout: fixed;
    width: 100%;

    tr {
        &:nth-child(odd){
            background-color: $casket-bg-color;
        }
    }

    th, td {
        padding: 0.8em 1em;
    }

    th {
        color: $text-h-color;
    }

    td {
        color: $text-p-color;
        border: 1px solid $casket-color;

        &:nth-child(1){
            font-family: consolas;
        }

        &:nth-child(2){
            font-family: consolas;
        }
    }
}
</style>
