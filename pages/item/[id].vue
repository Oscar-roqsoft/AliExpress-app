<template>
    <div  class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%] items-center">
                    <div class="flex w-full justify-center items-center ">
                       <div class="h-[250px] w-[500px] border rounded-tl-lg rounded-tr-lg bg-slate-500 
                       flex justify-center items-center">
                        <img width="250"  class="rounded-lg object-fit"
                         :src="currentImage" alt="">
                       </div>
                    </div>
                    

                    <div v-if="images[0] !== ''" class="flex  bg-black rounded-bl-lg rounded-br-lg items-center justify-center">
                        <div v-for="image in images" class="w-[500px] flex justify-center items-center">
                            <img 
                                @mouseover="currentImage = image"
                                @click="currentImage = image"
                                width="70"
                                class="rounded-md object-fit border-[3px] cursor-pointer"
                                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                                :src="image"
                            >
                        </div>
                    </div>
                </div>

         vj       <div class="md:w-[60%]">
                    <div v-if="product && product.data">
                        <p class="mb-2">{{ product.data.title }}</p>
                        <p class="font-light text-[12px] mb-2">{{ product.data.description }}</p>
                    </div>
                </div>


            </div>
    </div>
</template>


<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const currentImage = ref(null)
let product = ref(null)

onMounted(() => {
    watchEffect(()=>{
        currentImage.value = "/balenciaga.jpeg"
        images.value[0] = "/lapstand.jpeg"
    })
})

const images = ref([
    " ",
   "/balenciaga.jpeg",
    "/epic-nike.png",
    "/download.jpeg",
    "/blackshoe.jpeg",
])
</script>