<template>
    <div class="table">
        <div class="table-inner">
            <TableElem v-for="(rang, i) in rangs" :key="i" :rang="rang" />
        </div>
    </div>
</template>

<script>
    import TableElem from '@/components/TableElem.vue';

    export default {
        components: {
            TableElem,
        },
        data() {
            return {
                rangs: [
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
                ],
            };
        },
    };
</script>

<style lang="scss" scoped>
    .table {
        padding: 20px;

        &-inner {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            min-height: 300px;
            background-color: #33313d;
            box-sizing: border-box;
        }
    }
</style>
