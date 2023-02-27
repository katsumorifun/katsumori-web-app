<script>

import search from './Search.vue'

export default {
  components: {
    search
  }
}
</script>

<template>
  <div class="page-header">
    <!-- <div class="logo"> -->
      <!-- <router-link :to="{ name: 'home' }" aria-current="page"> -->
        <!-- {{($t(title.toLowerCase())).toUpperCase()}} -->
        <!-- Katsumori -->
      <!-- </router-link> -->
    <!-- </div> -->

    <search />

    <div class="user-wrapper">
      <a class="button-auth">
        <span>Авторизация</span>
        <div class="icon-inline">
          <svg width="17px" height="18px" viewBox="0 0 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path
                d="M8.125,9.81818188 C16.25,9.81818188 16.25,14.2363637 16.25,16.5272728 C16.25,17.6727274 15.925,18.0000001 13.975,18.0000001 L2.4375,18.0000001 C0.4875,18.0000001 5.5067062e-14,17.6727274 5.5067062e-14,16.5272728 L0.000729394906,16.1872748 C0.0162898196,13.7002532 0.36380597,9.81818188 8.125,9.81818188 Z M8.125,3.99680289e-14 C9.91992544,3.99680289e-14 11.375,1.36363583 11.375,4.09090912 C11.375,6.81818241 9.91992544,8.18181824 8.125,8.18181824 C6.33007456,8.18181824 4.875,6.81818241 4.875,4.09090912 C4.875,1.36363583 6.33007456,3.99680289e-14 8.125,3.99680289e-14 Z"
                id="Combined-Shape" fill="#797C84"></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>


<style>
.page-header {
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #282828;
  transition: background-color .1s ease-in, top .2s ease-in, border-bottom-color .3s ease-in;
  z-index: 99;
  background: var(--navigation-color);

}

.page-header.show,
.page-header.top {
  opacity: .95;
  background-color: #272c38
}

.page-header:hover {
  opacity: 1;
  -webkit-transition: opacity .3s ease 0s;
  transition: opacity .3s ease 0s
}
.page-header>.user-wrapper {
  height: inherit;
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  z-index: 1;
}

.page-header>.user-wrapper>.button-auth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 27px 30px;
  cursor: pointer;
  color: #d5d5d6;
  z-index: 10;
  text-decoration: none;
}

.page-header>.user-wrapper>.button-auth>.icon-inline {
  height: 18px;
  width: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 10px;
}

.page-header>.user-wrapper>.button-auth>.icon-inline path {
  fill: #d5d5d6
}

.page-header>.user-wrapper>.button-auth>.icon-inline>svg {
  height: inherit;
  width: inherit;
}

.page-header>.user-wrapper>.button-auth:hover {
  background: rgba(213, 213, 214, .05)
}

@media(max-width:575.98px) {
  .page-header>.user-wrapper {
    width: auto;
  }

  .page-header>.user-wrapper>.button-auth>.icon-inline {
    margin-left: 0;
  }

  .page-header>.user-wrapper>.button-auth>span {
    display: none;
  }
}

.page-header>.user-wrapper>.logging-spinner {
  padding: 4.5px 30px;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.logo {
  padding: 27px 30px;
}

.lazy-search input {
  width: 100%;
  font-size: 14px;
  background: inherit;
  height: 42px;
  font-family: NeoSansPro-Regular;
  color: #fff;
  border: none;
  outline: none;
}

.search-line>.icon-inline {
  padding: 0 10px 0 16px;
}
.search-line>.icon-inline.focused>svg path {
  fill: #fff
}
.search-line>.loading {
  width: 60px;
  -webkit-transform: scale(.35);
  transform: scale(.35)
}

</style>