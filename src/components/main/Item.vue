<template>
    <div :class="$style.item">
        <div :class="$style.imgWrapper">
            <img :src="imageUrl" :class="$style.img">
        </div>
        <div :class="$style.name">
            {{ rank.title }}
        </div>
        <div :class="$style.description">
            {{ description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Rank } from '@/shared/types';

interface Props {
    rank: Rank;
}

const props = defineProps<Props>();
const description = computed(() => `${props.rank.range[0]} - ${props.rank.range[1]}`);
const imageUrl = computed( () => new URL(`/src/assets/img/${props.rank.name}.png`, import.meta.url).href);
</script>

<style lang="scss" module>
    .item {
        display: flex;
        flex-flow: column;
        height: 300px;
    }

    .imgWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        margin: 40px 0;
    }

    .img {
        width: 100px;
    }

    .name {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
    }

    .description {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        text-transform: uppercase;
        font-size: 16px;
        color: var(--color-magic);
        font-weight: 700;
    }
    
</style>
