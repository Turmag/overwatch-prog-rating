<template>
    <div>
        <MyTable />
    </div>
</template>

<script>
    import MyTable from '@/components/MyTable.vue';

    export default {
        name: 'Overwatch-prog-rating',
        components: {
            MyTable,
        },
    };
</script>

<style lang="scss">
    body {
        margin: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 20px;
        color: #000;
        background-color: #ededed;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img {
        user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>
