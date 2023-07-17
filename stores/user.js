// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
    products:[
      {
        id: 2,
        title: 'title 2',
        description: 'this is description',
        url: "/balenciaga.jpeg",
        price: 219
      },
      {
          id: 3,
          title: 'title 3',
          description: 'this is description',
          url: "/balenciaga.jpeg",
          price: 999
      },
      {
          id: 4,
          title: 'title 4',
          description: 'this is description',
          url: "/balenciaga.jpeg",
          price: 99908
      },
      {
          id: 5,
          title: 'title 5',
          description: 'this is description',
          url: "/balenciaga.jpeg",
          price: 449
      },
      {
        id: 5,
        title: 'title 5',
        description: 'this is description',
        url: "/balenciaga.jpeg",
        price: 449
      },
      {
        id: 5,
        title: 'title 5',
        description: 'this is description',
        url: "/balenciaga.jpeg",
        price: 449
      },
      {
        id: 5,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      }
    ]
  }),
  persist: true
})