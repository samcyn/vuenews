<template>
    <header class="hero is-info is-medium">
      <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <div class="nav">
                <div class="container">
                    <div class="nav-left">
                    <a class="nav-item">
                        <img src="#" alt="Logo">
                    </a>
                    </div>
                    <span class="nav-toggle" @click="navController()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div class="nav-right nav-menu">
                        
                            <router-link :to="{ name: 'Articles' }"  class="nav-item is-active">Home</router-link>
                        
                    
                            <router-link :to="{ name: 'Profile' }" class="nav-item">Profile</router-link>
                        
                    
                            <router-link :to="{ name: 'Settings' }" class="nav-item">Settings</router-link>
                    
                        <span class="nav-item">
                            <a class="button is-info is-inverted">
                              <span class="icon">
                                  <i class="fa fa-github"></i>
                              </span>
                              <span>Fork Repo</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'navigation',
        methods:{
            navController(){
                //emit this event in parent component...
                this.$emit('sideBarToggle', this);
            }
        },
        computed:{
            collapseClone(){
                //console.log(this.$el.querySelector('.nav-menu').querySelectorAll('.nav-item'));
                //clone the collapse section of navbar in mobile all html content..
                const arrs = Array.from(this.$el.querySelector('.nav-menu').cloneNode(true).querySelectorAll('.nav-item'));
                let output = '<ul class="menu-list">';
               // console.log(arrs);
                
                //iterate all the html collection and wrap each one with list tags
                arrs.forEach(function(arr){
                    output += '<li class="items">' + arr.outerHTML + '</li>';
                });
                output += '</ul>'
                console.log(output);
                return output;
            }
        }
    }
    
</script>

<style>
    .items:last-child{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>


