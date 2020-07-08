<template>
    <div class="grey darken-1 empty-layout">
        <router-view />
    </div>
</template>

<script>
import messsges from "@/utils/messages";

export default {
    computed: {
        error() {
            return this.$store.getters.error;
        },
    },
    watch: {
        error(fbError) {
            console.log(fbError);
            this.$error(messsges[fbError.code] || "Что то пошло не так");
        },
    },
};
</script>
