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
        id: 6,
        title: 'title 5',
        description: 'this is description',
        url: "/balenciaga.jpeg",
        price: 449
      },
      {
        id: 7,
        title: 'title 5',
        description: 'this is description',
        url: "/balenciaga.jpeg",
        price: 449
      },
      {
        id: 8,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      },
      {
        id: 9,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      }, 
      {
        id: 10,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      },
      {
        id: 11,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      },
      {
        id: 12,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      },
      {
        id: 13,
        title: 'title 5',
        description: 'this is description',
        url: "/blackshoe.jpeg",
        price: 449
      },
    ]
  }),
  persist: true
})