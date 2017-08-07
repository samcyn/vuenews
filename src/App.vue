<template>

  <div id="app">
      <!--<SourceSelection v-on:sourceChangedEventually="sourceChangedFromChildComponent"></SourceSelection>
      <Newslist v-bind:source="source"></Newslist>-->
      <home></home>
  </div>

</template>

<script>
  // import Newslist from './components/Newslist.vue'
  // import SourceSelection from './components/SourceSelection.vue'
  import Home from './components/Home.vue'

  export default {
    name: 'app',
    components: {
      Home
      // Newslist,
      // SourceSelection
    },
    data () {
      return {
        source: ""
      }
    },
    methods: {
      sourceChangedFromChildComponent: function (source) {
        this.source = source;
      }
    }
  }

</script>

<style>
  
</style>
