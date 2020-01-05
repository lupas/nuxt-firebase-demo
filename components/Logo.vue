<template>
  <div class="LogoWrapper">
    <div class="VueToNuxtLogo">
      <div class="Triangle Triangle--two" />
      <div class="Triangle Triangle--one" />
      <div class="Triangle Triangle--three" />
      <div class="Triangle Triangle--four" />
    </div>
    <FirebaseLogo class="FirebaseLogo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FirebaseLogo from '~/components/FirebaseLogo.vue'

export default Vue.extend({
  components: {
    FirebaseLogo
  }
})
</script>

<style>
.LogoWrapper {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.VueToNuxtLogo {
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  height: 180px;
  width: 245px;
}

.FirebaseLogo {
  position: absolute;
  top: -50px;
  right: -80px;
  animation: goleft 0.5s linear forwards 4s;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

@keyframes goleft {
  100% {
    right: 10px;
    top: 20px;
  }
}
</style>
