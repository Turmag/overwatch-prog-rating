<template>
    <div :class="$style.main">
        <Item v-for="(rank, i) in ranks" :key="i" :rank="rank" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Item from '@/components/main/Item.vue';
import type { Rank } from '@/shared/types';

const ranks = ref<Rank[]>([
    {
        name: 'bronze',
        title: 'Intern',
        range: [10000, 30000],
    },
    {
        name: 'silver',
        title: 'Junior',
        range: [30000, 80000],
    },
    {
        name: 'gold',
        title: 'Junior+',
        range: [70000, 120000],
    },
    {
        name: 'platinum',
        title: 'Middle',
        range: [100000, 170000],
    },
    {
        name: 'diamond',
        title: 'Middle+',
        range: [150000, 250000],
    },
    {
        name: 'master',
        title: 'Senior',
        range: [200000, 300000],
    },
    {
        name: 'elite',
        title: 'Senior+',
        range: [300000, '500000+'],
    },
]);
</script>

<style lang="scss" module>
    .main {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        width: 100%;
        min-height: 300px;
        padding: 20px;
    }
</style>
