




<template>
    <div id="mainHeader"  class="flex items-center w-full bg-white">
        <div class="flex lg:justify-start justify-between gap-8 max-w-[1150px] w-full px-2 py-5 mx-auto">
            <NuxtLink to="/" class="min-w-[170px]">
                <img 
                    width="170px"
                    src="/AliExpress-logo.png"
                >
            </NuxtLink>

            <div class="max-w-[700px] w-full h-full  md:block hidden">
                <div class="relative">
                    <div class="flex  text-sm items-center border-2 border-[#FF4646] rounded-md w-full">
                        <input type="text"  placeholder="search items " v-model="searchItem"
                        class="w-full outline-none pl-3" >
                        <div v-if="isSearching" class="flex items-center h-[100%] p-1.5 px-2">
                                <Icon  name="eos-icons:loading" size="20" />
                        </div>
                        <button  class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]">
                            <Icon name="ph:magnifying-glass" size="20" color="#ffffff"/>
                        </button>
                    </div>

                    <div v-if="false" class="absolute bg-white max-w-[700px] h-auto w-full">
                        <div class="p-1">
                            <NuxtLink 
                                :to="`/item/1`" 
                                class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                            >
                                <div class="flex items-center">
                                    <img class="rounded-md" width="40" :src="'https://picsum.photos/id/212/800/800'">
                                    <div class="truncate ml-2">test</div>
                                </div>
                                <div class="truncate">$233.4</div>
                            </NuxtLink>
                        </div>
                    </div>
                    
                </div>

            </div>

            <nuxt-link to="shoppingcart" class="flex items-center">
                <button class="relative md:block hidden" @mouseenter=" isCartHover = true" 
                   @mouseleave="isCartHover = false">
                   <span class="absolute flex items-center justify-center -right-[3px]  top-0
                   bg-[#FF4646]  h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full">
                      0
                    </span>
                    <div class="min-w-[40px]">
                            <Icon 
                                name="ph:shopping-cart-simple-light" 
                                size="33" 
                                :color="isCartHover ? '#FF4646' : ''"
                            />
                    </div>
                </button>
            </nuxt-link>


            <button  @click="userStore.isMenuOverlay=true" 
             class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
                   
                   <Icon name="radix-icons:hamburger-menu" size="33" />
            </button>
        </div>
    </div> 
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
let isCartHover = ref(false)
let isSearching = ref(false)
let searchItem = ref('')
let items = ref(null)
</script>