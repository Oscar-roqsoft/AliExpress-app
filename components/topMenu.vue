<script setup>
let isAccountMenu = ref(false)
let isIconMenu = ref(true)
</script>

<template>
    <div id="top"
        class="w-full bg-[#FAFAFA] border-b md:block hidden">
        <ul  class="flex items-center justify-end text-xs text-[#333333]
                    font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px] ">

                <li class="border-r border-r-gray-900 px-3 hover:text-[#FF4646] cursor-pointer">
                    Sell on AliExpress
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Cookie Preferences
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Buyer Protection
                </li>
                <li class="px-3 hover:text-[#FF4646] cursor-pointer">
                    <Icon name="ic:sharp-install-mobile" size="17"/>
                    App
                </li>
                <li @mouseenter =" isAccountMenu = true"  @mouseleave="isAccountMenu = false"
                :class="isAccountMenu ? 'relative px-2 hover:text-[#FF4646] bg-white   flex items-center  h-full border-x cursor-pointer z-40 shadow' : 
                'relative px-2 flex items-center bg-white  hover:text-[#FF4646] h-full  cursor-pointer'">
                    <Icon name="ph:user-thin" size="17" class="mr-2"/>
                       Account
                    <div class="ml-2">
                        <!-- <Icon v-if="!isIconMenu" name="mdi:chevron-up" size="15"/> -->
                        <Icon  name="mdi:chevron-down" size="15" />
                    </div>
                    <div v-if="isAccountMenu"
                       class="absolute bg-white w-[235px]  text-[#333333] z-40 top-[39px]
                        -left-[147px] border-x border-b shadow" >
                        <div v-if="!user">
                            <div class="text-semibold text-[15px] my-4 px-3">Welcome to AliExpress!</div>
                            <div class="flex items-center gap-1 px-3 mb-3">
                                <NuxtLink 
                                    to="/auth"
                                    class="bg-[#f62e2e] text-center w-full text-[16px] rounded-md text-white font-semibold p-2"
                                >
                                    Login / Register
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="border-b"/>

                        <ul class="bg-white ">
                            <li 
                                @click="navigateTo('/orders')"
                                class="text-[13px] text-center  py-2 px-4 w-full hover:bg-gray-200"
                            >
                            My Orders
                            </li>
                            <li 
                                v-if="true" 
                                @click="client.auth.signOut()"
                                class="text-[13px] text-center py-2 px-4 w-full hover:bg-gray-200"
                            >
                                Sign out
                            </li>
                        </ul>
                    </div>

                </li>

        </ul>

    </div>
</template>