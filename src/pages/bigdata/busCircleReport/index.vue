<template>
    <div>
        <headnav></headnav>
        <sidebar></sidebar>
        <container></container>
    </div>
</template>

<script>
import headnav from "../../components/headnav.vue";
import sidebar from "../../components/sidebar";
import container from "../../components/container";
export default {
    components: {
        headnav,
        sidebar,
        container
    }
}
</script>

<style>

</style>
