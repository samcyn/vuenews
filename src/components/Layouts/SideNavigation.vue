<template>
   <aside class="menu" id="rightSideBar">
        <!-- <comp :temp="sidebarLists"></comp>-->
        <!-- <component v-bind:is="transformed" v-bind="$props"/>-->
        <!-- Hard coding this since the dynamic one is messing up -->
        <ul class="menu-list">
            <li class="items">
                <a class="nav-item is-active">
                    <router-link :to="{ name: 'Articles' }" tag="span">Home</router-link>
                </a>
            </li>
            <li class="items">
                <a class="nav-item">
                    <router-link :to="{ name: 'Profile' }" tag="span">Profile</router-link>
                </a>
            </li>
            <li class="items">
                <a class="nav-item">
                    <router-link :to="{ name: 'Settings' }" tag="span">Settings</router-link>
                </a>
            </li>
            <li class="items">
                <span class="nav-item">
                    <a class="button is-info">
                        <span class="icon">
                            <i class="fa fa-github"></i>
                        </span>
                        <span>Fork Repo</span>
                    </a>
                </span>
            </li>
        </ul>
    </aside>
</template>

<script>

export default {
  name: 'sideNav',
  props:{
      //this props is used to decide sidebar content
      sidebarLists:{required: true}
  },
  //using computed to return all the nav links and it worked
  computed: {
    transformed() {
        return {
            template: this.sidebarLists,
            //this.$router.options.routes
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
            -webkit-box-shadow: -31px -9px 9px -34px rgba(0,0,0,0.26);
            -moz-box-shadow: -31px -9px 9px -34px rgba(0,0,0,0.26);
            box-shadow: -31px -9px 9px -34px rgba(0,0,0,0.26);
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
        
        .items:last-child{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }
</style>

