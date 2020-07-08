<template>
  <div class="gallery">
    <h2>Фотогаллерея</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <swiper class="slider">
      <swiper-slide>I'm Slide 1</swiper-slide>
    </swiper>
  </div>
</template>


<script>
let images = [{ src: "img/img1.jpg" }, { src: "img/img2.jpg" }];

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  }
};
</script>