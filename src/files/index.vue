<template>
    <div class="site-content">
        <app-header></app-header>
        <app-welcome></app-welcome>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '@/components/layout/header.vue';
import Footer from '@/components/layout/footer.vue';
import Welcome from '@/components/home/welcome.vue';
export default {
    name: "Home",
    components: {
        appHeader: Header,
        appFooter: Footer,
        appWelcome: Welcome,
    }
};
</script>