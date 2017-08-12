<template>
  <!-- adding nav-open to div if hamburger is clicked -->
  <div :class="[navToggle ? 'nav-open' : '' ]">
    <div class = "wrapper">
      
      <!-- navbar right here -->
      <!--when hamburger is clicked, emit @siebarToggle which invoke sideBarController method -->
      <navigation @sideBarToggle="sideBarController"></navigation>

      <!-- router view -->
      <router-view></router-view>

      <!-- footer being called bottom -->
      <bottom></bottom>

    </div>
    <!--sidebar for mobile screen -->
    <sidebar :sidebarLists="sideBarList"></sidebar>

  </div>

</template>

<script>

  // import Newslist from './components/Newslist.vue'
  import SourceSelection from './SourceSelection'
  import Home from './Home'
  import Navigation from './Navigation'
  import Bottom from './Footer'
  import Sidebar from './Sidebar'

  export default {
    name: 'house',
    components: {
      Home,
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

        //this added navbar content to sidebar
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
