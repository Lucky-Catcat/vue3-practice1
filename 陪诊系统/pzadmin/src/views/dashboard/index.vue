<template>
    <panel-head :route="route"/>
</template>
<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
</script>
<style lang='less' scoped></style>