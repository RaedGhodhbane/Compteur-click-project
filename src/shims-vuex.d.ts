import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    statistics: any;
    totalFromVueX: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
