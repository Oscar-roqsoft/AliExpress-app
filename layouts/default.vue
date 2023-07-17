<template>
    <div class="w-full fixed z-50 font-sans">
        <TopMenu />
        <!-- <Loading v-if="userStore.isLoading" /> -->
        <!-- <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" /> -->
        <MainHeader/>
        <slot />
         <!-- <footer v-if="!userStore.isLoading"/> -->
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()

</script>