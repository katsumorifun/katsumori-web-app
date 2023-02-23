<script setup>
import {RouterView } from 'vue-router'
import navbar from './components/NavBar.vue'
import pageHeader from './components/PageHeader.vue'
import footerContainer from './components/Footer.vue'
</script>

<template>
  <header>
    <!-- <div class="preloader">
        <div class="preloader__row">
            <div class="preloader__item"></div>
            <div class="preloader__item"></div>
        </div>
    </div> -->

    <main class="layout">
        <navbar />
        <div class="wrapper">
            <pageHeader />
            <transition name="slide-fade">
                  <RouterView />
                </transition>
              <footerContainer />
        </div>
    </main>
  </header>
</template>

<style scoped>

</style>
