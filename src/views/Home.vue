<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Compteur />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Compteur from "@/components/Compteur.vue";

export default defineComponent({
  name: "Home",
  components: {
    Compteur,
  },
});
</script>
