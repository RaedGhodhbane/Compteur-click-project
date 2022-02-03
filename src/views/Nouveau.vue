<template>
<p> Coucou, je suis la nouvelle page ! </p>
  <div v-for="(statistic, index) in statistics" :key="index">
    <h1>Statistiques sur le COVID-19 en France</h1>
    <br />
    <p>Date : {{ statistic.date }}</p>
    <p>
      Taux de positivité : {{ statistic.tx_pos ? statistic.tx_pos : "null" }}
    </p>
    <p>
      Taux d'incidence : {{ statistic.tx_incid ? statistic.tx_incid : "null" }}
    </p>
    <p>Taux d'occupation : {{ statistic.TO ? statistic.TO : "null" }}</p>
    <p>
      Facteur de reproduction du virus :
      {{ statistic.R ? statistic.R : "null" }}
    </p>
    <p>
      Nombre de patients actuellement en réanimation ou en soins intensifs :
      {{ statistic.rea ? statistic.rea : "null" }}
    </p>
    <p>
      Nombre de patients actuellement hospitalisés pour COVID-19 :
      {{ statistic.hosp ? statistic.hosp : "null" }}
    </p>
    <p>
      Nombre cumulé de patients ayant été hospitalisés pour COVID-19 et de
      retour à domicile en raison de l'amélioration de leur état de santé :
      {{ statistic.rad ? statistic.rad : "null" }}
    </p>
    <p>
      Décès à l’hôpital : {{ statistic.dchosp ? statistic.dchosp : "null" }}
    </p>
    <p>
      Nombre de nouveaux patients admis en réanimation au cours des dernières
      24h : {{ statistic.incid_rea ? statistic.incid_rea : "null" }}
    </p>
    <p>
      Nombre de nouveaux patients hospitalisés au cours des dernières 24h :
      {{ statistic.incid_hosp ? statistic.incid_hosp : "null" }}
    </p>
    <p>
      Nouveaux retours à domicile au cours des dernières 24h :
      {{ statistic.incid_rad ? statistic.incid_rad : "null" }}
    </p>
    <p>
      Nouveaux patients décédés à l’hôpital au cours des dernières 24h :
      {{ statistic.incid_dchosp ? statistic.incid_dchosp : "null" }}
    </p>
    <p>
      Nombre de cas confirmés : {{ statistic.conf ? statistic.conf : "null" }}
    </p>
    <p>
      Nombre de nouveaux cas confirmés (J-1 date de résultats) :
      {{ statistic.conf_j1 ? statistic.conf_j1 : "null" }}
    </p>
    <p>
      Nombre de personnes déclarées positives (J-3 date de prélèvement) :
      {{ statistic.pos ? statistic.pos : "null" }}
    </p>
    <p>Décès en ESMS : {{ statistic.esms_dc ? statistic.esms_dc : "null" }}</p>
    <p>
      Cumul des décès (cumul des décès constatés à l'hôpital et en EMS) :
      {{ statistic.dc_tot ? statistic.dc_tot : "null" }}
    </p>
    <p>
      Nombre de personnes déclarées positives sur une semaine (J-3 date de
      prélèvement) : {{ statistic.pos_7j ? statistic.pos_7j : "null" }}
    </p>
    <p>
      Nombre de doses : {{ statistic.cv_dose1 ? statistic.cv_dose1 : "null" }}
    </p>
    <p>
      Cas confirmés en ESMS :
      {{ statistic.esms_cas ? statistic.esms_cas : "null" }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
      statistic() {
          return this.$store.state.statistics;
      }
  },
  mounted() {
    this.$store.dispatch('getProducts');
    },
  },
});
</script>
