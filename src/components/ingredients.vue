<template>
  <div class="wrapper">
    <div class="info__wrapper">
      <div class="info__text-wrapper">
        <div class="line__1">Scroll for our</div>
        <div class="line__2">Delicious recipe</div>
      </div>
      <div class="info__arrow">
        <img src="../../public/info/arrow-info.png" class="arrow-img" />
      </div>
      <div class="cod__and__chips-container">
        <div class="cod__and__chips-images">
          <div class="image-wrapper">
            <img src="../../public/info/cod-and-chips.png" class="under" />
            <img src="../../public/info/bottle.png" class="over" />
          </div>
        </div>
        <div class="cod__and__chips-text">
          <div class="text-wrapper">
            <div class="text-1">HH13 BATTERED</div>
            <div class="text-2">cod & chips</div>
            <a>
              <div
                class="show-ingrediants"
                v-if="isHidden"
                v-on:click="isHidden = !isHidden"
              >
                <div class="btn-show">SHOW INGREDIANTS</div>
                <img
                  class="black-arrow"
                  src="../../public/info/arrow-black.png"
                />
              </div>
              <img
                v-if="!isHidden"
                src="../../public/info/button-get-recipe.png"
                class="btn-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ingredients__wrapper" v-if="!isHidden">
      <div class="title">INGREDIENTS</div>

      <div class="ingredients__flex">
        <div class="left-ingredients">
          <div class="top-ingredients-wrapper">
            <div class="ingredients-title title-1">WHAT YOU'LL NEED</div>
            <div
              class="top-ingredients-item"
              v-for="(ingredients, index) in ingredientsTop"
              :key="ingredients"
              :data-id="index"
            >
              <div class="text">{{ ingredients.ingredients }}</div>
              <span class="mobhide"
                >................................................................................................................</span
              >
              <span class="mobshow" style="display: flex"
                >........................................................................................</span
              >
              <span class="mobshow-xs"
                >..............................................................................................................</span
              >
              <span class="mobshow-xxs"
                >..................................................................................</span
              >
            </div>
          </div>
          <div class="bottom-ingredients-wrapper">
            <div class="ingredients-title padding-title">FOR THE MARINADE:</div>
            <div
              class="bottom-ingredients-item"
              v-for="(ingredients, index) in ingredientsBottom"
              :key="ingredients"
              :data-id="index"
            >
              <div class="text">{{ ingredients.ingredients }}</div>
              <span class="mobhide"
                >........................................................................</span
              >
              <span class="mobshow"
                >..........................................................</span
              >
              <span class="mobshow-xs"
                >..............................................................................................................</span
              >
              <span class="mobshow-xxs"
                >..................................................................................</span
              >
            </div>
          </div>
        </div>
        <div class="right-ingredients">
          <div class="right-ingredients-wrapper">
            <div class="ingredients-title">FOR THE BATTER:</div>
            <div
              class="right-ingredients-item"
              v-for="(ingredients, index) in ingredientsRight"
              :key="ingredients"
              :data-id="index"
            >
              <div class="text">{{ ingredients.ingredients }}</div>
              <span class="mobhide"
                >......................................................................................</span
              >
              <span class="mobshow"
                >...................................................................</span
              >
              <span class="mobshow-xs"
                >..............................................................................................................</span
              >
              <span class="mobshow-xxs"
                >..................................................................................</span
              >
            </div>
          </div>
        </div>
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
      isHidden: true,
      ingredientsTop: {
        1: {
          ingredients: "Oil for frying",
        },
        2: {
          ingredients: "1kg fresh cod fillets, skinned and pin-boned",
        },
        3: {
          ingredients: "Tartare Sauce and lemon wedge to serve",
        },
      },
      ingredientsBottom: {
        1: {
          ingredients: "1 tsp sault",
        },
        2: {
          ingredients: "1/2 tsp black pepper",
        },
        3: {
          ingredients: "1/2 cup milk",
        },
        4: {
          ingredients: "1/2 cup soy sauce",
        },
        5: {
          ingredients: "1/2 cup lemon juice",
        },
      },
      ingredientsRight: {
        1: {
          ingredients: "1 cup flour, add extra for dusting",
        },
        2: {
          ingredients: "1/2 cup baking flour",
        },
        3: {
          ingredients: "2 Tbsp cornflour",
        },
        4: {
          ingredients: "2 Tbsp dill",
        },
        4: {
          ingredients: "2 Tbsp chilli powder",
        },
        5: {
          ingredients: "2 tsp black pepper",
        },
        6: {
          ingredients: "2 tsp seasoned salt",
        },
        7: {
          ingredients: "2/3 pint of HH13",
        },
      },
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
// @include flexbox();
// @include justify-content(center);
// @include align-items(center);
// @include flex-direction(column);
.show-ingrediants {
  @include flexbox();
  justify-content: center;
}
.black-arrow {
  margin-left: 10px;
}
.ingredients-wrapper {
  color: #ffffff;
}
.ingredients__flex {
  @include flexbox();
  margin-left: 100px;
}
.left-ingredients {
  //   background-color: aquamarine;
  height: 100%;
  width: 50%;
  @include flexbox();
  @include flex-direction(column);
  color: #ffffff;
  justify-content: start;
  align-items: end;
}
.top-ingredients {
  width: 100%;
  //background-color: palevioletred;
  @include flexbox();
  align-items: start;
  @include flex-direction(column);
  color: #ffffff;
}
.top-ingredients-item {
  @include flexbox();
  @include flex-direction(column);
}
.bottom-ingredients {
  width: 100%;
  //background-color: salmon;
  color: #ffffff;
}
.bottom-ingredients-item {
  @include flexbox();
  align-items: start;
  @include flex-direction(column);
}
.bottom-ingredients-wrapper {
  margin-right: 165px;
}
.right-ingredients {
  //background-color: olive;
  height: 150px;
  width: 50%;
  display: flex !important;
  flex-direction: column !important;
  justify-content: start;
  align-items: start;
  color: #ffffff;
  margin-left: 50px;
}
.right-ingredients-wrapper {
  @include flexbox();
  align-items: start;
  @include flex-direction(column);
}
.right-ingredients-item {
  @include flexbox();
  @include flex-direction(column);
  justify-content: start;
}
.text {
  justify-content: start;
  margin-right: auto;
  font-size: 14px;
  margin-bottom: -5px;
}
.title {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  text-decoration: underline;
}
.padding-title {
  padding-top: 25px;
}
.ingredients-title {
  @include flexbox();
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  padding-bottom: 10px;
  text-decoration: underline;
}
span {
  padding-bottom: 5px;
}
.mobshow {
  display: none !important;
}
.mobshow-xs {
  display: none !important;
}
.mobshow-xxs {
  display: none !important;
}
.btn-show {
  color: black;
  font-weight: 600;
}
.cod__and__chips-images {
  width: 100%;
  //background-color: blue;
  min-height: 200px;
  @include flexbox();
  @include flex-direction(column);
  align-items: end;
}
.image-wrapper {
  margin-right: -105px;
}
.cod__and__chips-text {
  width: 100%;
  //background-color: orange;
  min-height: 280px;

  @include flexbox();
  @include flex-direction(column);
  align-items: start;
  justify-content: center;
  padding-left: 10%;
  color: #ffffff;
}
.text-1 {
  font-weight: 400;
  font-size: 21px;
}
.text-2 {
  font-size: 55px;
  font-weight: 600;
}
.btn-img {
  height: 35%;
}
.under {
  width: 82%;
  min-width: 410px;
  margin-bottom: 60px;
}
.over {
  height: 470px;
  margin-left: -45px;
}
.cod__and__chips-container {
  @include flexbox();
}
.info__text-wrapper {
  padding-top: 50px;
  color: #ffffff;
}
.info__arrow {
  padding-top: 20px;
  padding-bottom: 50px;
}
.arrow-img {
  height: 60px;
}
.iingredients-wrapper {
  display: none;
}

@media only screen and (max-width: 1020px) {
  .text {
    font-size: 11px !important;
  }
  .mobshow {
    display: block !important;
  }
  .mobhide {
    display: none !important;
  }
  .right-ingredients {
    margin-left: 5vw !important;
    margin-right: -30px !important;
  }
  .ingredients-title {
    font-size: 18px !important;
  }
  .ingredients__flex {
    margin-left: 4.5vw !important;
  }
  .bottom-ingredients-wrapper {
    margin-right: 122px !important;
  }
}
@media only screen and (max-width: 765px) {
  .ingredients__flex {
    flex-wrap: wrap !important;
    margin-left: 0 !important;
  }
  .ingredients-title {
    font-size: 22px !important;
  }
  .left-ingredients-wrapper {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .left-ingredients {
    max-width: 50% !important;
    margin-left: 25% !important;
    padding-bottom: 25px !important;
    align-items: center !important;
  }
  .right-ingredients {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    align-items: center !important;
    height: 100% !important;
  }
  .right-ingredients-wrapper {
    align-items: center !important;
  }
  .right-ingredients-item {
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 auto !important;
  }
  .top-ingredients {
    align-items: center !important;
    height: 100% !important;
  }
  .bottom-ingredients-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottom-ingredients-wrapper {
    margin: 0 !important;
  }
  .bottom-ingredients-item {
    align-items: center !important;
  }
  .top-ingredients-item {
    align-items: center !important;
  }
  .title-1 {
    display: flex !important;
    justify-content: center !important;
  }
  .text {
    display: contents !important;
    font-size: 18px !important;
  }
  .mobshow {
    display: none !important;
  }
  .mobshow-xs {
    display: block !important;
  }
}

@media only screen and (max-width: 1200px) {
  .under {
    width: 70% !important;
  }
  .over {
    height: 430px !important;
  }
}
@media only screen and (max-width: 1100px) {
  .under {
    width: 65% !important;
  }
  .over {
    height: 370px !important;
  }
  .text-2 {
    font-size: 45px !important;
  }
}
@media only screen and (max-width: 900px) {
  .under {
    min-width: 360px !important;
  }
  .over {
    height: 340px !important;
  }
  .text-2 {
    font-size: 40px !important;
  }
  .black-arrow {
    width: 20% !important;
  }
  .btn-show {
    font-size: 13px !important;
  }
}
@media only screen and (max-width: 900px) {
  .text-2 {
    font-size: 30px !important;
  }
  .cod__and__chips-text {
    padding-left: 14% !important;
  }
}
@media only screen and (max-width: 765px) {
  .cod__and__chips-container {
    flex-wrap: wrap !important;
  }
  .cod__and__chips-images {
    align-items: center !important;
  }
  .cod__and__chips-text {
    align-items: center !important;
    padding-left: 0 !important;
    padding-top: 20px !important;
    min-height: 0 !important;
  }
  .image-wrapper {
    margin-right: 0 !important;
  }
  .over {
    display: none !important;
  }
  .under {
    margin-bottom: 0 !important;
    width: 95% !important;
  }
  .info__arrow {
    padding-bottom: 20px !important;
  }
  .text-2 {
    font-size: 40px !important;
    padding-bottom: 15px !important;
  }
  .info__text-wrapper {
    padding-top: 15px !important;
  }
  .black-arrow {
    width: 30% !important;
  }
  .btn-show {
    font-size: 15px !important;
  }
}
@media only screen and (max-width: 500px) {
  .text {
    font-size: 11px !important;
  }
  .mobshow-xs {
    display: none !important;
  }
  .mobshow-xxs {
    display: block !important;
  }
}
</style>
