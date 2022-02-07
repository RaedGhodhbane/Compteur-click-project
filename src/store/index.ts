/* Utilisation de VueX pour : */
/* Éviter la répétition du code */
/* Mettre les données (avec l'option state) dans plusieurs pages en même temps */
/* Accéder aux données (avec l'option getters) dans plusieurs pages en même temps */
/* Mettre à jours les données (avec l'option mutations) dans plusieurs pages en même temps */

import { createStore } from 'vuex';
import axios from 'axios';
import { CovidData } from './data-type';

export default createStore({
  state: { /* Mettre les données */
    totalFromVueX: 30,
    statistics: {} as CovidData,
  },
  getters: { /* Accéder aux données */
    doubleDuTotal(state) {
      return state.totalFromVueX * 2;
    },
  },
  mutations: { /* Mettre à jours nos données du state dans une nouvelle valeur */
    setTotalFromVueX(state, nouvelleValeur) {
      state.totalFromVueX = nouvelleValeur;
    },
    getProducts(state) {
      axios
        .get('https://coronavirusapifr.herokuapp.com/data/live/france')
        .then((response) => { state.statistics = response.data; });
    },
  },
});
