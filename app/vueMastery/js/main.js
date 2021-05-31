var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './images/socks.jpg',
        link: 'http://www.vuemastery.com',
        inStock:true,
        inventory:0,
        onSale:true,
        details:["80% Cotton","20% Polyester", "Gender-neutral"]
    }
})