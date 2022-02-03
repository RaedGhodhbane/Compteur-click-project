<template>
  <div class="about">
    <Compteur/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Compteur from '@/components/Compteur.vue';

export default defineComponent({
  name: 'About',
  components: {
    Compteur,
  },
});
</script>
