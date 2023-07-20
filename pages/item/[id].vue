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

               <div class="md:w-[60%]">
                    <div >
                        <p class="mb-2">title</p>
                        <p class="font-light text-[12px] mb-2">description</p>
                    </div>

                    <div class="flex items-center pt-1.5">
                        <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
                            <Icon name="material-symbols:star-rate" class="-mt-[17px]" size="12"/>
                        </span>
                        <p class="text-[#FF5353]">Extra 5% off</p>
                    </div>

                    <div class="flex items-center justify-start my-2">
                        <Icon name="material-symbols:star-rate" color="#FF5353"/>
                        <Icon name="material-symbols:star-rate" color="#FF5353"/>
                        <Icon name="material-symbols:star-rate" color="#FF5353"/>
                        <Icon name="material-symbols:star-rate" color="#FF5353"/>
                        <Icon name="material-symbols:star-rate" color="black"/>
                        <span class="text-[13px] font-light ml-2">5 213 Reviews 1,000+ orders</span>
                    </div>

                    <div class="border-b" />

                    <div class="flex items-center justify-start gap-2 my-2">
                        <div class="text-xl font-bold">$ {{ priceComputed }}</div>
                        <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">70% off</span>
                    </div>

                    <p class="text-[#009A66] text-xs font-semibold pt-1">
                        Free 11-day delivery over ￡8.28
                    </p>

                    <p class="text-[#009A66] text-xs font-semibold pt-1">
                        Free Shipping
                    </p>

                    <div class="py-2"/>

                    <button  @click="addToCart()"
                        :disabled="isInCart"
                        class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r 
                            from-[#FF851A] to-[#FFAC2C]">
                        <div v-if="isInCart">Is Added</div>
                        <div v-else>Add to Cart</div>
                    </button>

                </div>


            </div>
    </div>
</template>


<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const currentImage = ref(null)
let product = ref(null)
const route = useRoute()

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

const isInCart = computed(() => {
    let res = false
    userStore.cart.forEach(prod => {
        if (route.params.id == prod.id) {
            res = true
        }
    })
    return res
})
const addToCart = () => {
    userStore.cart.push(product.value.data)
}
</script>