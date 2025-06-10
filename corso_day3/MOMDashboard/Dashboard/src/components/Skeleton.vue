<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>
<template>
  <nav class="navbar navKoerber navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Production</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <slot name="nav">

          </slot>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <slot name="body">

  </slot>
</template>
<style scoped>
.navKoerber {
  --bs-navbar-color: #344054;
  background-color: #344054;
  --bs-navbar-brand-color : white;
  color : white;
}
</style>
