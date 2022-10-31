<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link
            tag="li"
            class="nav-item"
            exact
            to="/"
            active-class="active"
          >
            <a class="nav-link">Home</a>
          </router-link>

          <router-link
            tag="li"
            class="nav-item"
            to="/cars"
            active-class="active"
          >
            <a class="nav-link">Cars</a>
          </router-link>

          <router-link
            tag="li"
            class="nav-item"
            to="/car/3"
            active-class="active"
          >
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            to="/car/4"
            active-class="active"
          >
            <a class="nav-link">Car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
