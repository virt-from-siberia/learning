<template>
<body>
  <router-view></router-view>

  <aside>
    <router-link
      v-for="item in menuItems"
      :key="item.route"
      :to="{name: item.route}"
      tag="li"
      class="menu-item"
    >
      <a href="left-menu-item">{{item.title}}</a>
    </router-link>
  </aside>
</body>
</template>

 <script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: " Главная",
          route: "home"
        },
        {
          title: " gallery",
          route: "gallery"
        },
        {
          title: " faq",
          route: "faq"
        },
        {
          title: " feedback",
          route: "feedback"
        }
      ]
    };
  }
};
</script>


<style>
</style>
