<template>
    <div id="indexpage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            <div v-if="userStore.products" v-for="product in userStore.products" :key="product">
                <Product :product="product"/>
            </div>
        </div>
    </div>
</template>



<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
</script>