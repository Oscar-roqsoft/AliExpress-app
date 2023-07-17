<template>
    <div class="w-full  z-50 font-sans">
        <TopMenu />
        <MainHeader/>
        <Loading v-if="userStore.isLoading" />
        <div class="lg:pt-[50px] md:pt-[20px] pt-[10px]" />
        <slot />

        <FootHeader/>

    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()

</script>