<script setup>
import channelsightWidget from "./js/channelsight-widget.js";
import dataModel from "./js/model.js";
import csModal from "./components/csModal.vue";
import hero from "./components/hero.vue";
import inlineRetailers from "./components/inlineRetailers.vue";
import info from "./components/info.vue";
import ingredients from "./components/ingredients.vue";

//invoke the channelsight widget, if needed
channelsightWidget();

//grab URL parameter to determine experience
let params = new URLSearchParams(document.location.search);
let brandContextParam = params.get("brandContext");

//parse URL parameter ready to pass to component
var brandContext =
  !brandContextParam == "" && brandContextParam <= Object.keys(dataModel).length
    ? (brandContext = brandContextParam)
    : console.log("Generating experience " + brandContextParam);
</script>

<template>
  <hero :brandExperience="brandContext" />
  <csModal :brandExperience="brandContext" />
  <inlineRetailers :brandExperience="brandContext" />
  <ingredients :brandExperience="brandContext" />
</template>

<style>
body {
  background: url("/public/body/red-pattern.jpg");
  background-size: 100% auto;
  margin: 0;
}
#app {
  text-align: center;
}
</style>
