<template>
  <!-- adding nav-open to div if hamburger is clicked -->
  <div id="app" :class="[navToggle ? 'nav-open' : '' ]">
    

      <!-- router view -->
      <router-view></router-view>


  </div>

</template>

<script>

  // import Newslist from './components/Newslist.vue'
  import SourceSelection from './components/SourceSelection'
  import Articles from './components/Articles/Articles'
  import Navigation from './components/Layouts/Navigations'
  import Bottom from './components/Layouts/Footer'
  import Sidebar from './components/Layouts/SideNavigation'

  export default {
    name: 'app',
    components: {
      Articles,
      Navigation,
      Bottom,
      Sidebar,
      SourceSelection
    },
    data () {
      return {
        source: "",
        navToggle: false,
        sideBarList:""
      }
    },
    methods: {

      sourceChangedFromChildComponent(source){
        this.source = source;
      },

      sideBarController(arg){
        //arg is the navbar component as a whole

        this.navToggle = !this.navToggle;

        //this added navbar content to sidebarList which a bind to sidebarList prop of sidebarComponent
        this.sideBarList = arg.collapseClone;
        console.log(arg.collapseClone);
      }

    }
  }

</script>

<style>
  @media (max-width: 768px){
    .wrapper {
        -webkit-transform: translate3d(0px, 0, 0);
        -moz-transform: translate3d(0px, 0, 0);
        -o-transform: translate3d(0px, 0, 0);
        -ms-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
        -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -moz-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -o-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -ms-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        position: relative;
    }

    .nav-open .wrapper {
      left: 0;
      -webkit-transform: translate3d(-250px, 0, 0);
      -moz-transform: translate3d(-250px, 0, 0);
      -o-transform: translate3d(-250px, 0, 0);
      -ms-transform: translate3d(-250px, 0, 0);
      transform: translate3d(-250px, 0, 0);
    }
  }
</style>
