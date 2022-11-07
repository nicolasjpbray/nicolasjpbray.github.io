const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            onSale: true, // new data property //
            inventory: 100 
        }
    }
})