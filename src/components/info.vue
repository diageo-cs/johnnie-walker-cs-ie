<template>
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
          <a
            ><img src="../../public/info/button-get-recipe.png" class="btn-img"
          /></a>
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
.cod__and__chips-images {
  width: 100%;
  //background-color: blue;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.image-wrapper {
  margin-right: -105px;
}
.cod__and__chips-text {
  width: 100%;
  //background-color: orange;
  min-height: 280px;

  display: flex;
  flex-direction: column;
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
  display: flex;
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
    font-size: 40px !important;
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
}
</style>
