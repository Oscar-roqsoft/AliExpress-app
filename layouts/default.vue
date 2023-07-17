<template>
    <div class="w-full  z-50 font-sans">
        <TopMenu />
        <MainHeader/>
        <Loading v-if="userStore.isLoading" />
        <!-- <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" /> -->
       

        <slot />
        <footHeader />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()

</script>