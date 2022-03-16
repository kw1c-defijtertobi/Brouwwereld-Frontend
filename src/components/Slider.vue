<template>
    <div class="slider--container">
        <div class="slider" :style="`transform: translateX(-${activeIndex * 100}%)`" >
            <img v-for="(item, index) in items" :key="index" :src="`/assets/${item}`" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        activeIndex: 0,
        items: ["slider1.jpg", "slider2.jpg", "slider3.jpg"],
    }),

    mounted() {
        setInterval(() => {
            this.activeIndex++;
            if (this.activeIndex >= this.items.length) this.activeIndex = 0;
        }, 5000)
    }
}
</script>

<style scoped lang="scss">
.slider--container {
    overflow: hidden;
    position: relative;
}
.slider {
    display: flex;
    transition: transform 300ms ease;
}

img {
    flex: 1 0 100%;
    width: 100%;
    height: auto;
    display: block;
    max-height: 40rem;
    object-fit: cover;
}
</style>