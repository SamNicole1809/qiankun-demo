<template>
    <div class="about">
        this is two about
        <br>
        <button @click="testFn">测试事件</button>
        <br>
        {{ 'this is my name --- ' + name }}
    </div>
</template>
<script>
    export default {
        name: 'About',
        data() {
            return {
                name: 'init name'
            }
        },
        mounted() {
            // 增加state监听，当mt数据发生变化时，修改name
            this.$onGlobalStateChange((state, prev) => {
                if (state.mt !== prev.mt) {
                    this.name = state.mt
                }
            })
        },
        methods: {
            testFn() {
                this.$show('测试事件成功')
            }
        }
    }
</script>

<style scoped></style>