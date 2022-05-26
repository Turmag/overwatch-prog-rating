<template>
    <div class="elem">
        <div class="elem-img-wrapper">
            <img :src="require(`@/assets/rangs/${rang.name}.png`)" class="elem-img" />
        </div>
        <div class="elem-name">{{ rang.title }}</div>
        <div class="elem-desc">{{ desc }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            rang: {
                type: Object,
                default: () => ({}),
            },
        },
        computed: {
            desc() {
                return this.rang.range[0] + ' - ' + this.rang.range[1];
            },
        },
    };
</script>

<style lang="scss" scoped>
    .elem {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        min-width: 200px;
        width: 200px;
        flex-grow: 1;
        height: 300px;

        &-img-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100px;
            margin: 40px 0;
        }

        &-img {
            width: 100px;
        }

        &-name {
            width: 100%;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
        }

        &-desc {
            width: 100%;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 700;
            color: #b200ff;
            text-align: center;
            text-transform: uppercase;
        }
    }
</style>
