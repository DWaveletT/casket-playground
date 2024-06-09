<template>
    <div class="demo-container">
        <div class="demo">
                <h2 class="title">
                    Casket of Star / 星之器
                    
                    <svg @click="showConfig = true" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" fill="currentColor"/>
                    </svg>
                </h2>
                <p class="subtitle">使用 Codemirror 6 和 Vue3，基于 Remark & Rehype 生态构建的最新一代 Markdown 编译器。<br><i>version 0.0.16</i></p>

            <div style="margin-bottom: 2em" />

            <casket-star
                v-model="value"
                :plugins="plugins"

                :key="updateTime"
                :upload="upload"

                :lang="lang === 'zh_CN' ? zhCN : enUS"

                :hideHeader="hideHeader"
                :hideFooter="hideFooter"
                :disabled="editDisable"
                />
        </div>

        <div class="config-container" :class="{ hidden: !showConfig }" @click=" showConfig = false">
            <div class="config" :class="{ hidden: !showConfig }" @click.stop >

                <h2 class="title">语言设置</h2>

                <div class="lang">
                    <div class="select">
                        选择语言
                    </div>
                    <div class="items">
                        <div class="item" :class="{ selected: lang === 'zh_CN'}" @click="lang = 'zh_CN'">
                            简体中文
                        </div>
                        <div class="item" :class="{ selected: lang === 'en_US'}" @click="lang = 'en_US'">
                            English
                        </div>
                    </div>
                </div>

                
                <h2 class="title">插件选项</h2>

                <div class="options">
                    <div class="option-group">
                        <div class="item" :class="{ selected: listConfig.length === 0 }" @click=" listConfig = [] ">默认</div>
                    </div>
                    <div class="option-group">
                        <div class="item"
                            v-for="[key, name] in Object.entries(options)"
                            :class="{ selected: listConfig.includes(key) }"
                            @click="config(key)"
                        >{{ name }}</div>
                    </div>
                </div>

                <h2 class="title">其他设置</h2>

                <div class="options">
                    <div class="option-group">
                        <div class="item"
                            :class="{ selected: hideHeader === true }"
                            @click="hideHeader = !hideHeader"
                        >隐藏顶部</div>
                        <div class="item"
                            :class="{ selected: hideFooter === true }"
                            @click="hideFooter = !hideFooter"
                        >隐藏底部</div>
                        <div class="item"
                            :class="{ selected: editDisable === true }"
                            @click="editDisable = !editDisable"
                        >禁用编辑</div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="nav-container" :class="{ hidden: showConfig }">
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

                <div class="sub-item">
                    <div class="level2"><code>Plugins</code></div>
                    <div class="level2"><code>CasterViewer</code></div>
                    <div class="level2"><code>CasterEditor</code></div>
                    <div class="level2"><code>CasterStar</code></div>
                </div>
            </div>
        </div>

        <div class="github-container">
            <a href="https://github.com/DWaveletT/star-casket">
                <svg class="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"/>
                </svg>
            </a>
        </div>
    </div>

    <div class="main-container">
        <div class="main">
            <h2 id="feature" class="section-title">主要特性<div class="decoration" /></h2>

            <div class="feature-container">
                <div class="feature">
                    <h3 class="title">速度快<div class="decoration" /></h3>

                    <p>星之器基于 Vue 进行构建，使用 Vite 进行打包。项目并未使用任何外部 UI 库，使得打包生成的文件轻巧。</p>

                    <p>星之器使用 Codemirror 作为编辑器，Micromark 用于渲染，对较长的文章仍然表现出优秀的性能。</p>

                    <p>当用户编辑长文章时，可以通过降低预览区的预览频率来防止预览卡顿；用户也可以直接关闭预览区专注于编辑区，由此获得更为流畅的编辑体验。</p>
                </div>

                <div class="feature">
                    <h3 class="title">易扩展<div class="decoration" /></h3>
                    <p>考虑到不同应用场景的需求，扩展能力一直是我们十分关心的话题。几乎一切功能都是高度可定制的。</p>
                    <p>星之器基于 Codemirror、Remark 和 Rehype 生态，拥有庞大的社区资源。同时星之器保留了工具栏、编辑器、预览器的扩展接口，用户可以根据自己的喜好选择相应的插件。</p>
                    <p>此外，星之器将所有 css 样式打包成单独文件，用户可以自行对编辑器的外观进行定制，来适配站点风格。</p>

                </div>

                <div class="feature">
                    <h3 class="title">体验好<div class="decoration" /></h3>
                    <p>工具栏提供了快捷编辑按钮，提高编辑效率。</p>
                    <p>基于 Codemirror，编辑区提供了大量功能。也可以通过加入新的 Codemirror 插件以实现更多编辑功能。</p>
                    <p>基于 Remark 插件实现，星之器提供了精确的同步滚动功能用于快速对当前编辑部分的预览进行定位。不仅如此，用户还可以选择将编辑器全屏，又或是隐藏编辑区和预览区其中之一，来丰富编辑体验。</p>
                    <!-- <p>星之器针对移动便携设备提供了支持。</p> -->
                </div>
            </div>

            <p>除此之外，星之器还具有完整的 Typescript 类型系统支持，以及原生的 Vue3 组件支持。</p>

            <h2 class="section-title">快速开始<div class="decoration" /></h2>

            <p>安装 Casket of Star：</p>

            <highlightjs language="bash" code="$ npm install casket-star" />

            <h3>Vue 3</h3>

            <highlightjs language="bash" :code="codes['useage-vue3']" />

            <h2 class="section-title">插件定制<div class="decoration" /></h2>

            <p>星之器主要由三部分组成：工具栏、编辑区、预览区。</p>

            <ol>
                <li>工具栏上每个按钮绑定一个函数。当用户单击按钮，对应函数会被执行，并对编辑器产生效果。编辑区的实例 <code>CodemirrorView</code>、编辑器的实例 <code>CasketView</code>，以及用于放置弹出窗口的容器节点会被作为参数传入该函数，用户可以借此实现工具按钮对编辑器的控制。</li>
                <li>编辑区使用 Codemirror 实现，支持传入 Codemirror 插件。</li>
                <li>预览区使用 Remark 和 Rehype 实现，支持传入 Remark 生态的插件以及 Rehype 生态的插件。</li>
            </ol>

            <i>TODO</i>

            <!-- <h3>示例：启用 HTML</h3>

            <p>允许用户使用 HTML 可能是一个危险的选择，因为内嵌的 javascript 代码可能会导致 XSS 攻击等问题。默认配置的星之器完全禁用了 HTML，这包括编辑区取消了对 HTML 语法的识别、不允许 remark 在解析 markdown 的源码时解析 HTML（而是作为纯文本进行转义）。</p>

            <p>在这个示例中，我们将会打开所有 HTML 选项，并且添加 rehype-sanitize 用于过滤</p>

            <h3>示例：提供数学公式支持</h3>

            <p>在各大数学相关的网站上，让编辑和渲染支持 LaTeX 是非常重要的。</p> -->

            <h2 id="theme" class="section-title">外观定制<div class="decoration" /></h2>

            <p>星之器的外观由三个部分组成，分别是编辑区（Codemirror）的外观、预览区（Markdown）的外观和编辑器（例如工具条和工具模态组件）的外观。</p>

            <ul>
                <li>Codemirror 的外观可以通过向 <code>plugin</code> 的 <code>codemirror</code> 属性插入插件进行修改；</li>
                <li>Markdown 的外观和编辑器的外观可以通过修改导入的 css 文件来实现。</li>
            </ul>

            <highlightjs language="js" :code="codes['theme-default']" />

            <h3 id="theme-codemirror">编辑区</h3>

            <p>Codemirror 的外观通过使用 Codemirror 插件来实现。</p>
            
            <i>TODO</i>

            <h2 id="detail" class="section-title">技术细节<div class="decoration" /></h2>

            <i>TODO</i>

            <h2 id="api" class="section-title">参考接口<div class="decoration" /></h2>

            <h3 id="api-tool">接口 Tool</h3>
            
            <table class="describe">
                
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
                        <td>name</td>
                        <td>string</td>
                        <td>工具的名称的键值。将会作为 i18n 的键值查找对应的翻译被显示在对应工具的 Tooltip 上。</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>工具的图标的 HTML 源码。将会被放在工具图标的 innerHTML 当中被直接渲染到屏幕上。</td>
                    </tr>
                    <tr>
                        <td>func</td>
                        <td>
                            <div class="tip-container">
                                <div class="content">Function</div>
                                <div class="tip">
                                    (<br>
                                    &nbsp;&nbsp;codemirror:&nbsp;EditorView,<br>
                                    &nbsp;&nbsp;casketstar:&nbsp;CasketView,<br>
                                    &nbsp;&nbsp;container:&nbsp;HTMLDivElement<br>
                                    ) => void
                                </div>
                            </div>
                        </td>
                        <td>Remark 插件，将会在渲染 Markdown 的过程中，作为 remarkRehype 的设置选项被使用。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-tool-group">类型 ToolGroup</h3>

            <highlightjs language="js" code="ToolGroup: Tool[]" />
            

            <p>一组工具形成的工具组，表示这些工具属于同一类别（比如均用来修饰行内文本的粗体、斜体、删除线）。</p>

            <h3 id="api-toolbar">类型 Toolbar</h3>

            <highlightjs language="js" code="Toolbar: ToolGroup[]" />
            

            <p>一组工具组。显示到工具栏时，每组工具之间用竖线隔开。星之器的工具栏分为左右两个部分，分别是一个 Toolbar。</p>

            <h3 id="api-plugins">接口 Plugins</h3>
            
            <table class="describe">
                
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

            <h3 id="api-editor">组件 CasketEditor</h3>
            
            <table class="describe">
                
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
                        <td><a href="#api-plugins">Plugins</a></td>
                        <td><a href="#api-plugins">Plugins</a></td>
                        <td>编辑器使用的插件包，默认为预设插件包。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-viewer">组件 CasketViewer</h3>
            
            <table class="describe">
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
                        <td><a href="#api-plugins">Plugins</a></td>
                        <td>预览器使用的插件包，默认为预设插件包。</td>
                    </tr>
                    <tr>
                        <td>interval</td>
                        <td>number</td>
                        <td>预览区两次刷新之间间隔的最小时间长度，单位为毫秒，默认为 0，即每当用户修改编辑区的一个字符后预览区会立即进行刷新。值越大，刷新间隔越长，用于编辑较长文本时降低预览卡顿。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-casketstar">组件 CasketStar</h3>
            
            <table class="describe">
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
                        <td><a href="#api-plugins">Plugins</a></td>
                        <td>编辑器和预览器使用的插件包，默认为预设插件包。</td>
                    </tr>
                    <tr>
                        <td>toolbarl</td>
                        <td><a href="#api-toolbar">Toolbar</a></td>
                        <td>放置在工具栏左侧的工具按钮。默认为预设左侧工具。</td>
                    </tr>
                    <tr>
                        <td>toolbarr</td>
                        <td><a href="#api-toolbar">Toolbar</a></td>
                        <td>放置在工具栏右侧的工具按钮。默认为预设右侧工具。</td>
                    </tr>
                    <tr>
                        <td>lang</td>
                        <td>string</td>
                        <td>国际化选项，用于设置星之器的语言环境，会被提供给所有插件，默认为英语。</td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-default-tools">内置工具</h3>
            
            <table class="describe">
                <colgroup>
                    <col style="width: 200px;">
                    <col style="width: 100px;">
                    <col style="width: auto;">
                </colgroup>
                <tbody>
                    <tr>
                        <th>常量</th>
                        <th>类型</th>
                        <th>描述</th>
                    </tr>
                    <tr>
                        <td>ToolIncrease</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>增加选中行的标题行等级，最高为 6 级。</td>
                    </tr>
                    <tr>
                        <td>ToolHorizontal</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标位置插入一条水平线。</td>
                    </tr>
                    <tr>
                        <td>ToolBold</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中区域标记为粗体。</td>
                    </tr>
                    <tr>
                        <td>ToolItalic</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中区域标记为斜体。</td>
                    </tr>
                    <tr>
                        <td>ToolStrikethrough</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中区域标记为删除。</td>
                    </tr>
                    <tr>
                        <td>ToolLink</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标处插入一条链接。</td>
                    </tr>
                    <tr>
                        <td>ToolPicture</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标处插入一张图片。</td>
                    </tr>
                    <tr>
                        <td>ToolCode</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标处插入代码块。</td>
                    </tr>
                    <tr>
                        <td>ToolTable</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标处插入一张表格。</td>
                    </tr>
                    <tr>
                        <td>ToolBlock</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>在光标处插入块体。</td>
                    </tr>
                    <tr>
                        <td>ToolQuote</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中行标记为引用块。</td>
                    </tr>
                    <tr>
                        <td>ToolUList</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中行标记为无序列表。</td>
                    </tr>
                    <tr>
                        <td>ToolOList</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中行标记为有序列表。</td>
                    </tr>
                    <tr>
                        <td>ToolTaskList</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将选中行标记为任务列表。</td>
                    </tr>
                    <tr>
                        <td>ToolOnlyEdit</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将预览区域隐藏，再点击一次恢复显示。</td>
                    </tr>
                    <tr>
                        <td>ToolOnlyView</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将编辑区域隐藏，再点击一次恢复显示。</td>
                    </tr>
                    <tr>
                        <td>ToolFullScreen</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>将星之器设置为全屏，再点击一次回复原样。</td>
                    </tr>
                    <tr>
                        <td>ToolHelp</td>
                        <td><a href="#api-tool">Tool</a></td>
                        <td>显示帮助信息。</td>
                    </tr>
                    <tr>
                        <td>ToolGroupTitle</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolIncrease,
    ToolDecrease,
    ToolHorizontal
]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ToolGroupInline</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolBold,
    ToolItalic,
    ToolStrikethrough
]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ToolGroupInterline</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolLink,
    ToolPicture,
    ToolCode,
    ToolTable,
    ToolBlock
]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ToolGroupBlock</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolQuote,
    ToolUList,
    ToolOList,
    ToolTaskList
]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ToolGroupCasket</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolOnlyEdit,
    ToolOnlyView,
    ToolFullScreen
]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>ToolGroupHelp</td>
                        <td style="padding-left: 0.5em; padding-right: 0.5em;"><a href="#api-tool-group">ToolGroup</a></td>
                        <td>
                            <highlightjs language="js" code=
"[
    ToolHelp
]"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 id="api-get-default-plugins">函数 getDefaultPlugins</h3>
            
            <div class="function">
                <div class="item">
                    <div class="label">参数</div>
                    <div class="description">无</div>
                </div>
                <div class="item">
                    <div class="label">返回值</div>
                    <div class="description">
                        <p>默认的插件列表：</p>

                        <highlightjs language="json" :code="codes['getDefaultPlugins']" />

                        <p>对于 Codemirror 增加了对 Markdown 的识别，但是不识别 HTML 标签，也不会在编辑过程中自动补全标签；移除了 Remark 对 HTML 的解析（当作普通字符串处理）。</p>

                        <p>即完全禁用了在 Markdown 中编写原生的 HTML 元素。</p>
                    </div>
                </div>
            </div>

            <h3 id="api-get-default-toolbarl">函数 getDefaultToolbarL</h3>
            
            <div class="function">
                <div class="item">
                    <div class="label">参数</div>
                    <div class="description">无</div>
                </div>
                <div class="item">
                    <div class="label">返回值</div>
                    <div class="description">
                        <p>默认的左侧工具栏：</p>

                        <highlightjs language="json" code=
"[
    ToolGroupTitle, ToolGroupInline, ToolGroupInterline, ToolGroupBlock
]"
                        />
                    </div>
                </div>
            </div>

            <h3 id="api-get-default-toolbarr">函数 getDefaultToolbarR</h3>
            
            <div class="function">
                <div class="item">
                    <div class="label">参数</div>
                    <div class="description">无</div>
                </div>
                <div class="item">
                    <div class="label">返回值</div>
                    <div class="description">
                        <p>默认的右侧工具栏：</p>

                        <highlightjs language="json" code=
"[
    ToolGroupCasket, ToolGroupHelp
]"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div class="footer">
        
    </div>
</template>

<script setup lang="ts">

import { codes } from './codes';


import {
    CasketStar,
    ToolLink,
    ToolTable,
    getDefaultToolbarL,
    getDefaultToolbarR, 
    markdown,
    markdownLanguage,
    type Plugins,
    type Uploader
} from 'casket-star';

import 'casket-star/themes/markdown/light.css';
import 'casket-star/themes/casket/light.css';

import zhCN from 'casket-star/lang/zh_CN.json';
import enUS from 'casket-star/lang/en_US.json';

import { computed, ref, watch } from 'vue';

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
import type { Plugin } from 'unified';
import type { Extension } from '@codemirror/state';

const value = ref('');

const showConfig = ref(false);
const listConfig = ref<string[]>([]);

const updateTime = ref(0);

const options = {
    'html': '内嵌 HTML',
    'math': '数学公式',
    'code': '代码高亮',
    'video': '插入视频',
    'table': '合并单元格',
    'block': '样式化块体',
}

const lang = ref('zh_CN');

watch(lang, () => {
    updateTime.value = new Date().getTime();
});

function config(name: string){
    if(listConfig.value.includes(name)){
        listConfig.value = listConfig.value.filter((w) => w !== name);
    } else {
        listConfig.value.push(name);
    }
    updateTime.value = new Date().getTime();
}

const upload: Uploader = (data: FileList) => {
    const info: {
        alt: string,
        url: string
    }[] = [];

    for(let i = 0;i < data.length;i ++){
        console.log(`upload [${data[i].name}]`);

        info.push({
            alt: data[i].name,
            url: 'fakeURL'
        });
    }

    return info;
}

const plugins = computed<Plugins>(() => {

    const remarks = [];
    const rehypes = [];
    const codemirrors = [];

    const remarkRehypeOptions: Options = {};

    remarks.push(remarkGfm);

    const markdownConfig: Record<string, unknown> = {};
    markdownConfig.extensions = [];

    markdownConfig.base = markdownLanguage;

    if(listConfig.value.includes('html')){
        remarkRehypeOptions.allowDangerousHtml = true;
    } else {
        remarks.push(remarkNoHtml);

        (markdownConfig.extensions as MarkdownExtension[]).push(RemoveHTML);
        markdownConfig.completeHTMLTags = false;
    }
    if(listConfig.value.includes('math')){
        const macros = {};
        remarks.push(remarkMath);
        rehypes.push([rehypeKatex, { macros: macros }]);

        (markdownConfig.extensions as MarkdownExtension[]).push(LuoguMath);
    }
    if(listConfig.value.includes('code')){
        rehypes.push([rehypeHighlight, { detect: true }]);
    }
    if(listConfig.value.includes('table')){
        remarks.push(remarkExtendedTable);
        remarkRehypeOptions.handlers = {
            ...(remarkRehypeOptions.handlers as object),
            ...extendedTableHandlers
        }
    }

    if(listConfig.value.includes('video') || listConfig.value.includes('block')){
        remarks.push(remarkDirective);

        if(listConfig.value.includes('video')){
            remarks.push(remarkVideo);
        }
        if(listConfig.value.includes('block')){
            remarks.push(remarkCallouts);
        }
    }

    codemirrors.push(markdown(markdownConfig));

    const toolbarL = getDefaultToolbarL();

    if(listConfig.value.includes('table')){
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'table');
            if(i !== -1){
                toolgroup[i] = ToolMergeTable;
            }
        }
    } else {
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'merge-table');
            if(i !== -1){
                toolgroup[i] = ToolTable;
            }
        }
    }

    if(listConfig.value.includes('video')){
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'link');
            if(i !== -1){
                toolgroup[i] = ToolVideoLink;
            }
        }
    } else {
        for(const toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'video-link');
            if(i !== -1){
                toolgroup[i] = ToolLink;
            }
        }
    }

    if(listConfig.value.includes('block')){
        let exist = false;
        for(let toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'block');
            if(i !== -1){
                exist = true;
            }
        }
        if(exist === false){
            for(let toolgroup of toolbarL){
                const i = toolgroup.findIndex((t) => t.name === 'link');
                if(i !== -1){
                    toolgroup.push(ToolBlock);
                }
            }

        }
    } else {
        for(let toolgroup of toolbarL){
            const i = toolgroup.findIndex((t) => t.name === 'block');
            if(i !== -1){
                toolgroup = toolgroup.splice(i, 1);
            }
        }
    }

    const toolbarR = getDefaultToolbarR();

    return {
        remark: remarks as unknown as Plugin,
        rehype: rehypes as unknown as Plugin,
        remarkRehypeOptions,
        codemirror: codemirrors as unknown as Extension,

        toolbarL,
        toolbarR,
    };
});

const hideHeader = ref(false);
const hideFooter = ref(false);
const editDisable = ref(false);

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
$casket-nv-color: lighten($casket-color, 40%);

$text-h-color: darken($casket-color, 10%);
$text-p-color: darken($casket-color, 32%);
$text-a-color: darken($casket-color, 5%);

p, th, td, li {
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

    > .demo {
        
        box-sizing: border-box;
        padding: 1em;

        width: min(90%, 1080px);
        height: 100vh;

        .title {
            margin-top: 2em;
            font-weight: normal;
            margin-bottom: 0;
            
            position: relative;

            > .icon {
                position: absolute;
                right: 0.5em;
                top: 0.5em;
                width: 32x;
                height: 32px;

                color: black;

                opacity: 0.4;

                cursor: pointer;

                transition: 0.2s ease-in-out opacity;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .subtitle {
            margin-top: 0;
            margin-bottom: 2em;
            font-weight: lighter;
            font-size: small;
        }
    }
}

.config-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-color: rgb(0 0 0 / 0.2);

    transition: 0.2s ease-in-out background;

    &.hidden {
        background-color: transparent;
        pointer-events: none;
    }

    > .config {

        position: fixed;
        width: min(80%, 360px);
        height: 100%;
        top: 0;
        right: 0;

        background-color: $casket-bg-color;
        
        transition: 0.2s ease-in-out transform;

        &.hidden {
            transform: translateX(100%);
        }

        > .title {
            text-align: center;

            color: $text-h-color;

            margin: 0.7em 0;
        }

        > .lang {
            display: flex;
            justify-content: center;

            position: relative;

            font-weight: lighter;
            text-align: center;
            
            .select {
                width: 8em;
                padding: 0.5em 1em;
                background-color: white;
                box-shadow: 4px 4px 2px $casket-sd-color;
            }

            .items {
                position: absolute;
                top: 100%;
                border: 2px solid $casket-color;
                opacity: 0;
                pointer-events: none;
                z-index: 2;

                transition: 0.2s ease-in-out opacity;

                > .item {
                    width: 8em;
                    padding: 0.5em 1em;
                    background-color: white;


                    cursor: pointer;

                    &:not(:last-child){
                        border-bottom: 1px solid $casket-color;
                    }

                    &.selected {
                        background-color: $casket-nv-color;
                    }
                }
            }

            &:hover {
                .items {
                    opacity: 1;
                    pointer-events: all;
                }
            }
        }

        > .options {
            width: 10em;
            margin: 0 auto;

            .item {
                position: relative;

                cursor: pointer;

                padding: 0.4em 1em;
                background-color: white;
                font-weight: lighter;
                box-shadow: 4px 4px 2px $casket-sd-color;
                border-radius: 1em;

                transition: 0.2s ease-in-out background-color;

                &:not(:last-child){
                    margin-bottom: 0.5em;
                }

                &.selected {
                    background-color: $casket-nv-color;
                }
            }

            .option-group {
                &:not(:last-child){
                    padding-bottom: 0.8em;
                    margin-bottom: 0.5em;
                    border-bottom: 2px dashed $casket-color;
                }
            }
        }
    }
}

.main-container {
    display: flex;

    justify-content: center;

    > .main {
        margin: 1em 0;
        padding: 1em;

        width: min(90%, 800px);
    }
}

.nav-container {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 48px;

    backdrop-filter: blur(2px);

    padding: 0 5em;

    &.hidden {
        visibility: hidden;
    }
}

.nav {

    display: flex;
    border-bottom: 1px solid black;

    > .item {
        width: 100px;

        position: relative;

        .level1, .level2 {
            margin: 0;
        }

        .level1 {
            height: 48px;

            color: black;

            font-weight: bold;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.2s ease-in-out opacity;
            opacity: 0.6;
        }

        .level2 {
            height: 2em;

            background-color: rgb(from $casket-bg-color r g b / 0.8);
            border-bottom: 1px solid $casket-color;

            padding: 0.2em 1em;
            color: black;

            display: flex;
            align-items: center; 
        }

        .sub-item {
            position: absolute;
            top: 48px;

            margin: 0 -15px;
            overflow: hidden;
            border: 1px solid $casket-color;
            border-radius: 8px;
            opacity: 0;
            pointer-events: none;
            transition: 0.2s ease-in-out opacity;
        }

        &:hover {
            .level1 {
                opacity: 1;
            }

            .sub-item {
                pointer-events: all;
                opacity: 1;
            }
        }
    }
}

.github-container {
    display: flex;
    height: 100%;

    align-items: center;
}

.github {
    width: 24px;
    height: 24px;

    opacity: 0.6;

    transition: 0.2s ease-in-out opacity;

    &:hover {
        opacity: 1.0;
    }
}

.tip-container {
    position: relative;

    display: flex;
    justify-content: center;

    > .content {
        width: 100%;
        color: $text-a-color;
    }

    > .tip {
        position: absolute;

        top: calc(100% + 0.5em);
        opacity: 0;

        padding: 0.5em 1em;
        background-color: #444;
        border-radius: 4px;

        color: $casket-bg-color;

        transition: 0.2s ease-in-out opacity;
        pointer-events: none;
    }

    &:hover {
        > .tip {
            pointer-events: all;
            opacity: 1;
        }
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

@media screen and (max-width: 768px) {
    .feature-container {
        grid-template-columns: 1fr;
    }
}

table.describe {
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

div.function {
    border-top: 2px solid $casket-color;
    border-bottom: 2px solid $casket-color;
    
    background-color: $casket-bg-color;
    color: $text-p-color;
    > .item {
        padding: 1em;

        display: grid;
        grid-template-columns: 5em 1fr;
        
        > .label {
            font-weight: bold;
        }

        > .description {

            :first-child {
                margin-top: 0;
            }
        }

        &:not(:last-child){
            border-bottom: 1px solid $casket-color;
        }
    }
}

:global(.hljs){
    overflow-x: scroll;
}
</style>
