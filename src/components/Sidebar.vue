<template>
   <aside class="menu" id="rightSideBar">
        <ul class="menu-list" v-html="transformed.template">
            
        </ul>
    </aside>
</template>

<script>
export default {
  name: 'sidebar',
  props:{
      //this props is used to decide sidebar content
      sidebarLists:{required: true}
  },
  computed: {
    transformed() {
        return {
            template: this.sidebarLists,
            props: this.$options.props
        }
    }
}

}
</script>
<style scoped>
    #rightSideBar{
        display: none;
    }
    @media (max-width: 768px){
        #rightSideBar {
            position: fixed;
            display: block !important;
            top: 0;
            height: 100%;
            width: 250px;
            right: 0;
            z-index: 1032;
            visibility: visible;
            background: #FFFFFF;
            overflow-y: visible;
            border-top: none;
            text-align: left;
            padding: 10px;
            -webkit-transform: translate3d(250px, 0, 0);
            -moz-transform: translate3d(250px, 0, 0);
            -o-transform: translate3d(250px, 0, 0);
            -ms-transform: translate3d(250px, 0, 0);
            transform: translate3d(250px, 0, 0);
            -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
            -moz-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
            -o-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
            -ms-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
            transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
        }
        .nav-open #rightSideBar {
            -webkit-transform: translate3d(0px, 0, 0);
            -moz-transform: translate3d(0px, 0, 0);
            -o-transform: translate3d(0px, 0, 0);
            -ms-transform: translate3d(0px, 0, 0);
            transform: translate3d(0px, 0, 0);
        }
        .menu-list{
            height: 100%;
            position: relative;
        }
        li:last-of-type{
            position: absolute;
            bottom: 0;
        }
    }
</style>

