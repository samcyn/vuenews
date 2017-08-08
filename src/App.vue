<template>

  <div id="app">
  
    <section class="hero is-info is-medium">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                    <a class="nav-item">
                        <img src="images/bulma-type-white.png" alt="Logo">
                    </a>
                    </div>
                    <span class="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                    <div class="nav-right nav-menu">
                        <a class="nav-item is-active">
                            <router-link :to="{ name: 'Home' }" tag="span">Home</router-link>
                        </a>
                        <a class="nav-item">
                            <router-link :to="{ name: 'SourceSelection' }" tag="span">Examples</router-link>
                        </a>
                        <a class="nav-item">
                            <router-link :to="{ name: 'Hello' }" tag="span">Documentation</router-link>
                        </a>
                        <span class="nav-item">
                            <a class="button is-info is-inverted">
                              <span class="icon">
                                  <i class="fa fa-github"></i>
                              </span>
                              <span>Download</span>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
      </div>
    </section>

    <router-view></router-view>
  </div>

</template>

<script>
  // import Newslist from './components/Newslist.vue'
  import SourceSelection from './components/SourceSelection'
  import Home from './components/Home'

  export default {
    name: 'app',
    components: {
      Home,
      SourceSelection
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
