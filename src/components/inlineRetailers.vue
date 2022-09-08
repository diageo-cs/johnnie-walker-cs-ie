<template>
  <div class="api__bg">
    <div class="retailer-title-wrapper">
      <div class="retailer-title-item">
        HOP HOUSE 13 LAGER
        <span style="font-weight: 400">330ML&nbsp;20&nbsp;PACK</span>
      </div>
      <div class="line"></div>
      <div class="retailer-title-item">
        HOP HOUSE 13 LAGER
        <span style="font-weight: 400">500ML&nbsp;x8&nbsp;CANS</span>
      </div>

      <div class="line"></div>
      <div class="retailer-title-item">
        SMITHWICKS RED ALE
        <span style="font-weight: 400">8x500ML&nbsp;CAN</span>
      </div>
    </div>
    <div class="api">
      <div
        v-for="item in dataModel[props.brandExperience].retailers"
        :key="item.retailer"
        class="api__retailer"
      >
        <a :href="item.url" class="api__a" target="_blank">
          <div class="api__img-wrapper temp__center">
            <img :src="item.logo" class="api__img--logo" />
          </div>
          <div class="api__price">£{{ item.price }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import dataModel from "../js/model.js";
export default {
  data() {
    return {
      priceColor: "#000000",
    };
  },
  methods: {
    apiPrice: function (event) {
      $(".api__price").css({
        backgroundColor: this.priceColor,
      });
    },
  },
  //invoke on load
  mounted() {
    this.apiPrice();
  },
};
</script>
<script setup>
const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});
$(document).ready(function () {});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.api__bg {
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: inline-block;
  max-width: 700px;
  min-width: none;
  position: relative;
  margin-top: -75px;
  z-index: 100;
  @media screen and (max-width: 475px) {
    border-radius: 0px;
    bottom: 0px;
    left: 0px;
    margin-right: 10px;
    overflow: scroll;
    position: fixed;
    width: 100%;
    z-index: 150;
  }
}
.api {
  @include flexbox();
  @include align-items(center);
  @include justify-content(center);
  padding: 10px;
  width: 100%;
  overflow-y: scroll !important;

  @media only screen and (max-width: 475px) {
    @include justify-content(flex-start);
    .api {
      overflow-y: scroll !important;
    }
  }
}
.api__retailer {
  border-radius: 5px;
  max-width: 100px;
  min-width: 70px;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:last-child:after {
    content: "";
    position: absolute;
    height: 100%;
    right: -10px;
    top: 0;
    background: none;
    width: 20px;
  }
}
.api__img-wrapper {
  border: 1px solid #f0f0f0;
  border-radius: 5px 5px 0px 0px;
  padding: 5px;
}
.api__img--logo {
  display: block;
  width: 100%;
}
.api__a {
  color: #333333;
  text-decoration: none;
}
.api__price {
  border-radius: 0px 0px 5px 5px;
  color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  padding: 5px 0px;
  text-align: center;
}
.retailer-title-item {
  display: flex;
  font-size: 12px;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  min-width: 232px;
}
.retailer-title-wrapper {
  background-color: red;
  height: 55px;
  color: #ffffff;
  text-align: center;
  display: flex;
  overflow-y: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.line {
  height: 100%;
  width: 4px;
  color: #ffffff;
  background-color: #ffffff;
}

@media only screen and (max-width: 690px) {
  .api__bg {
    margin-top: 0 !important;
  }
  .retailer-title-wrapper {
    border-radius: 0 !important;
  }
}
</style>
