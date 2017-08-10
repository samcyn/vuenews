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
                              <span>Profile</span>
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
                this.$emit('sideBarToggle', this);
            }
        },
        computed:{
            collapseClone(){
                //console.log(this.$el.querySelector('.nav-menu').querySelectorAll('.nav-item'));
                //clone the collapse section of navbar in mobile all html content..
                const arrs = Array.from(this.$el.querySelector('.nav-menu').cloneNode(true).querySelectorAll('.nav-item'));
                let output = '';
               // console.log(arrs);
                
                //iterate all the html collection and wrap each one with list tags
                arrs.forEach(function(arr){
                    output += '<li>' + arr.outerHTML + '</li>';
                })
                console.log(output);
                return output;
            }
        }
    }
</script>


