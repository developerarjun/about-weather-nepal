<template>
    <div class="site-content">
        <app-header></app-header>
        <app-contact></app-contact>
        <app-footer></app-footer>
        <router-view/>
    </div>
</template>
<script>
import Header from '@/components/layout/header.vue';
import Footer from '@/components/layout/footer.vue';
import Contact from '@/components/Pages/contact.vue';

export default {
    name: "Contact",
    components: {
        appHeader: Header,
        appFooter: Footer,
        appContact: Contact,
    }
};
</script>