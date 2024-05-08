<template>
    <div class="container">
        <div class="main">
            <div class="title-container">
                <h2 class="title">Casket of Star / 星之器</h2>
                <p class="subtitle">使用 Codemirror 6 和 Vue3，基于 Remark & Rehype 生态构建的最新一代 Markdown 编译器。</p>
            </div>
            
            <div class="demo">
                <casket-star v-model="value1" />
            </div>

            <div class="feature">
                <h2 class="section-title">特性</h2>

                <p><i>TODO</i></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { CasketStar } from 'casket-star';

import 'casket-star/themes/markdown/light.css';
import 'casket-star/themes/casket/light.css';

import { ref } from 'vue';

const value1 = ref('');

</script>

<style scoped lang="scss">

$casket-color: #FFE300;

.section-title {
    font-weight: normal;
}

.title-container {
    .title {
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

.container {
    display: flex;

    justify-content: center;

    > .main {
        margin: 1em 0;
        padding: 1em;

        width: min(90%, 1080px);
    }
}
</style>
