<template>
    <div class="header-search"><label class="search-line">
            <div class="icon-inline">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
            <div class="lazy-search">
                <input placeholder="Поиск..." autocapitalize="none" autocomplete="off" autocorrect="off"
                    name="disable-autofill" spellcheck="false" type="search">
            </div>
        </label>
        <div class="search-popup">
            <div class="message">Ничего не найдено</div>
        </div>
    </div>
</template>


<style>
.search-popup {
  margin-top: 5px;
  position: absolute;
  width: 100%;
  max-height: 500px;
  border-radius: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: right;
  background-color: #1f2631;
  z-index: 150;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all .05s ease-out .2s;
  transition: all .05s ease-out .2s
}
.search-line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 600px;
  width: 100%;
  height: inherit;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #1f2631;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  background: var(--bg-color);
  padding-right: 14px;
}
.search-popup>.loading {
  padding: 10px
}
.search-popup>.message {
  padding: 10px;
  color: hsla(0, 0%, 100%, .6);
  font-size: 14px
}
.search-popup>.error {
  text-align: center;
  color: #fff;
  padding: 13.5px;
  font-size: 15px
}
.search-popup>.search-items>.search-header {
  background-color: rgba(0, 0, 0, .1);
  border-bottom: 1px solid rgba(61, 64, 74, .4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff
}
.search-popup>.search-items>.search-header>span {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-left: 8px
}
.search-popup>.search-items>.search-header>.show-more {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-align: right
}
.search-popup.open {
  -webkit-transition: all .03s ease-out;
  transition: all .03s ease-out;
  -webkit-transform: scale(1);
  transform: scale(1)
}
.page-header>.header-search {
  position: relative;
  width: 100%;
  height: 42px;
  margin-left: 15px;
  z-index: 1;
}

@media(min-width:576px) {
  .page-header>.header-search {
    max-width: 600px;
  }
}

.lazy-search {
    width: 100%;
}
</style>