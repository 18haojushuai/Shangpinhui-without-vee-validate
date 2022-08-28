<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name:'Carousel',
    props:['list'],
    watch: {
    list: {
        immediate: true,
        handler() {
            //只能监听到数据已经有了，但是v-for动态渲染结构没有办法确定，只能nextTick
            this.$nextTick(() => {
                var mySwiper = new Swiper(
                    this.$refs.cur,
                    {
                        loop: true,

                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,

                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                    })
            })
        }
    }
    }
}
</script>

<style scoped >

</style>