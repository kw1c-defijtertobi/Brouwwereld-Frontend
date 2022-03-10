<template>
    <div>
        <transition-group name='fade' tag='div'>
            <div v-for="i in [currentIndex]" :key='i'>
                <img class="sliderpic" :src="currentImg" />
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data: () => ({
        images: [
            '/assets/slider1.jpg',
            '/assets/slider2.jpg',
            '/assets/slider3.jpg'
        ],
        timer: null,
        currentIndex: 0,
    }),

    
    mounted() {
        this.startSlide();
    },
    
    methods: {
        startSlide() {
            this.timer = setInterval(this.next, 4000);
        },
    
        next() {
            this.currentIndex += 1
        },
        prev: function() {
            this.currentIndex -= 1
        }
    },
    
    computed: {
        currentImg() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: all 0.5s ease;
    position: absolute;
    width:100%;

    }

    .fade-enter,
    .fade-leave-to {
    visibility: hidden;
    width:100%;
    }

    .sliderpic {
    margin: 1rem 0 1rem 0;
    width:50%;
    }
</style>