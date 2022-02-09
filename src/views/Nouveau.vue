<template>
  <p>Coucou, je suis la nouvelle page !</p>
  <h1 class="classname">Statistiques sur le COVID-19 en France</h1>
  <br />
  <div class="box">
    <p>Date : {{ data.date }}</p>
    <p>Taux de positivité : {{ data.tx_pos ? data.tx_pos : "null" }}</p>
    <p>Taux d'incidence : {{ data.tx_incid ? data.tx_incid : "null" }}</p>
    <p>Taux d'occupation : {{ data.TO ? data.TO : "null" }}</p>
    <p>
      Facteur de reproduction du virus :
      {{ data.R ? data.R : "null" }}
    </p>
    <p>
      Nombre de patients actuellement en réanimation ou en soins intensifs :
      {{ data.rea ? data.rea : "null" }}
    </p>
    <p>
      Nombre de patients actuellement hospitalisés pour COVID-19 :
      {{ data.hosp ? data.hosp : "null" }}
    </p>
    <p>
      Nombre cumulé de patients ayant été hospitalisés pour COVID-19 et de retour à domicile en
      raison de l'amélioration de leur état de santé :
      {{ data.rad ? data.rad : "null" }}
    </p>
    <p>Décès à l’hôpital : {{ data.dchosp ? data.dchosp : "null" }}</p>
    <p>
      Nombre de nouveaux patients admis en réanimation au cours des dernières 24h :
      {{ data.incid_rea ? data.incid_rea : "null" }}
    </p>
    <p>
      Nombre de nouveaux patients hospitalisés au cours des dernières 24h :
      {{ data.incid_hosp ? data.incid_hosp : "null" }}
    </p>
    <p>
      Nouveaux retours à domicile au cours des dernières 24h :
      {{ data.incid_rad ? data.incid_rad : "null" }}
    </p>
    <p>
      Nouveaux patients décédés à l’hôpital au cours des dernières 24h :
      {{ data.incid_dchosp ? data.incid_dchosp : "null" }}
    </p>
    <p>Nombre de cas confirmés : {{ data.conf ? data.conf : "null" }}</p>
    <p>
      Nombre de nouveaux cas confirmés (J-1 date de résultats) :
      {{ data.conf_j1 ? data.conf_j1 : "null" }}
    </p>
    <p>
      Nombre de personnes déclarées positives (J-3 date de prélèvement) :
      {{ data.pos ? data.pos : "null" }}
    </p>
    <p>Décès en ESMS : {{ data.esms_dc ? data.esms_dc : "null" }}</p>
    <p>
      Cumul des décès (cumul des décès constatés à l'hôpital et en EMS) :
      {{ data.dc_tot ? data.dc_tot : "null" }}
    </p>
    <p>
      Nombre de personnes déclarées positives sur une semaine (J-3 date de prélèvement) :
      {{ data.pos_7j ? data.pos_7j : "null" }}
    </p>
    <p>Nombre de doses : {{ data.cv_dose1 ? data.cv_dose1 : "null" }}</p>
    <p>
      Cas confirmés en ESMS :
      {{ data.esms_cas }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    data() {
      return this.$store.state.statistics;
    },
  },
  mounted() {
    this.$store.commit("getProducts");
  },
});
</script>
<style scoped>
.classname {
  @apply mt-10 mb-10 text-2xl text-fuchsia-500;
}
.box {
  @apply border-8 border-black pb-2 mx-4;
}
</style>
