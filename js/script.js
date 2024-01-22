console.log('Vue ok', Vue)

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            pictures,
            currentIndex: 0
        }
    },
    computed: {
        lastIndex() {
            return this.currentIndex === this.pictures.length - 1;
        },
        firstIndex() {
            return this.currentIndex === 0
        },
        lastElementIndex() {
            return this.pictures.length - 1
        }

    },
    methods: {
        goNext() {
            const lastElementIndex = this.pictures.length - 1;
            if (this.currentIndex === lastElementIndex) this.currentIndex = 0
            else this.currentIndex++

        },
        goPrev() {
            const lastElementIndex = this.pictures.length - 1;
            if (this.currentIndex === 0) this.currentIndex = this.lastElementIndex
            else this.currentIndex--
        }

    }

})

app.mount('#root')
