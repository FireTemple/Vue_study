let app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法导论',
                date: '2018-2-3',
                price: 85,
                count: 1
            },
            {
                id: 2,
                name: 'linux',
                date: '2018-2-3',
                price: 852,
                count: 1
            },
            {
                id: 3,
                name: '数据结构',
                date: '2018-2-3',
                price: 285,
                count: 1
            },
            {
                id: 1,
                name: '编译原理',
                date: '2018-2-3',
                price: 185,
                count: 1
            }
        ]

    },
    computed: {
        total: function () {
            let sum = 0;
            for (let i = 0; i < this.books.length; i++) {
                sum = sum + this.books[i].count * this.books[i].price;
            }
            return sum;
        }
    },

    methods: {
        decrement(index) {
            if (this.books[index].count === 0) {
                alert("empty!")
                return;
            }
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeBook(index) {
            this.books.splice(index, 1);
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})
