<template>
  <div class="hero">
    <div class="hero__top">
      <img class="hero__img" :src="logoSrc" />
    </div>
    <img
      class="drinkware-logo"
      src="../../public/hero/drinkwarelogo.png
    "
    />
    <div class="hero__body">
      <div class="hero__flex" data-v-a3f6e548="">
        <div class="hero__flex-child" data-v-a3f6e548="">
          <div class="hero__inline-block" data-v-a3f6e548="">
            <div class="hero__title-line--1 hero__title-line">
              FULL OF IRISH
            </div>
            <div class="hero__title-line--2 hero__title-line">FLAVOUR</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoSrc: "/hero/logo.png",
      logoBg: "#ffffff",
    };
  },
  methods: {
    logoBar: function (event) {
      $(".hero__top").css({
        backgroundColor: this.logoBg,
      });
    },
  },
  //invoke on load
  mounted() {
    this.logoBar();
  },
};
</script>

<script setup>
import gsap from "gsap";
const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});

$(document).ready(function () {
  gsap.set(".api__bg", {
    height: 0,
  });
  gsap.set(".drinkware-logo", {
    opacity: 0,
  });
  gsap.set(".hero__title-line--1", {
    x: () => {
      return -50;
    },
    opacity: 0,
  });
  gsap.set(".hero__title-line--2", {
    x: () => {
      return window.innerWidth < 600 ? -50 : 50;
    },
    opacity: 0,
  });
  var tl_heroText = gsap.timeline();
  if (window.innerWidth < 600 && window.inner) {
  } else {
  }
  tl_heroText
    .to(".hero__title-line", {
      opacity: 1,
      x: 0,
      stagger: 0.25,
    })
    .to(".drinkware-logo", {
      opacity: 1,
    })
    .to(
      ".api__bg",
      {
        height: "auto",
        duration: 0.5,
        ease: "back",
      },
      "-=.5"
    );
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.drinkware-logo {
  margin-left: auto;
  padding-top: 25px;
  margin-right: 25px;
  width: 200px;
}
.hero {
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
  @include flex-direction(column);
  background: url("../../public/hero/background-hero.png") center center / cover;
  position: relative;
  width: 100%;
  height: 100%;
}
.hero__top {
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
  @include flex-direction(column);
  height: 50px;
  position: relative;
  width: 100%;
}
.hero__img {
  display: block;
  position: absolute;
  top: 0px;
  width: 100px;
}
.hero__body {
  height: 800px;
  width: 100%;
}
.hero__flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // max-width: 1280px;
  width: 100%;
  height: 100%;
}
.hero__flex-child {
  max-width: 50%;
  color: #fff;
  margin-right: 8%;
}
.hero__title-line--2 {
  font-size: 90px;

  line-height: 4vw;
  font-weight: 700;
}
.hero__title-line--1 {
  font-size: 56px;
  font-weight: 400;
}
@media only screen and (max-width: 765px) {
  .hero__body {
    height: 650px !important;
  }
}
@media only screen and (max-width: 1120px) {
  .hero__title-line--2 {
    font-size: 7vw !important;
  }
  .hero__title-line--1 {
    font-size: 4vw !important;
  }
}
@media only screen and (max-width: 900px) {
  .hero__title-line--2 {
    font-size: 8vw !important;
    line-height: 6vw !important;
  }
  .hero__title-line--1 {
    font-size: 5vw !important;
  }
}
@media only screen and (max-width: 600px) {
  .hero {
    background: url("../../public/hero/mob-hero.png") center center / cover !important;
  }
  .hero__flex {
    justify-content: center !important;
    align-items: end !important;
  }
  .hero__flex-child {
    margin-right: 0 !important;
    margin-bottom: 150px !important;
  }
  .drinkware-logo {
    position: absolute !important;
    left: 0 !important;
    bottom: 0 !important;
  }
}
</style>
