<template>
    <main>
        <div v-if="!channelCount">
            <section class="hero is-info is-medium">
            

                <!-- Hero content: will be in the middle style="background-image: url('')"-->
                <div class="hero-body"  v-bind:style="{ backgroundImage: 'url(' + background + ')' }">
                    <div class="overlay">
                        <div class="container has-text-centered">
                            <h1 class="title">
                                {{title}}
                            </h1>
                            <h2 class="subtitle">
                                {{subtitle}}
                            </h2>
                        </div>
                    </div>
                </div>

                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <nav class="tabs is-boxed is-fullwidth">
                        <div class="container">
                            <!-- menus goes here -->
                            <menus @changeTitle="changePageTitle" :chosenNews="defaultNews2">
                            </menus>
                        </div>
                    </nav>
                </div>

            </section>
            <section class="articles">
                <div class="container width-60p">
                    <div class="loader-container" v-if="loading">
                        <div class="spinner"></div>
                        <br>
                        <p>Please wait...</p>
                    </div>
                    <article class="media" v-for="story in post" >
                        <figure class="media-left">
                            <p class="image is-100x100">
                                <img :src="story.urlToImage">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h4 class="media-heading">
                                    <router-link :to="'/contents/articles/' + story.id" >{{story.title || 'Untitled'}}</router-link>
                                </h4>
                                <h5><i>by {{story.author || 'Anonymous'}}</i></h5>
                                <p>{{story.description}}</p>
                            </div>
                            <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small">
                                        <i  @click="favorited(story)" :class="[story.isFavorite ? 'fa fa-heart' : 'fa fa-heart-o' ]"></i>
                                    </span>
                                </a>
                            </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </section>
        </div>
        <!-- If no channel is selected show this ...-->
        <div v-if="channelCount" class="noChannel">NO CHANNEL SELECTED</div>
    </main>
</template>

<script>
//import Article service
import ArticleService from '@/services/ArticleService'

//import Menus component
import Menus from '../menus/Menus.vue'


export default {
    name: 'home',
    components:{
        Menus
    },
    props:{

    },
    data () {
        return {
            defaultNews: '',
            title: '',
            subtitle: '',
            stories: [],
            background: '',
            isFavorite: false,
            loading: false,
            channelCount: false
        }
    },
    methods:{
        favorited(obj){
            console.log(obj);
            //note this will be sink with database..obj.favourite will change
           // this.isFavorite = !this.favorite;
            obj.isFavorite = !obj.isFavorite
        
        },
        changePageTitle(arg){
            // arg as component itself

            const $this = this;

            //show loader 
            $this.loading = true;

            //change title...
            $this.title = `Welcome to ${(arg.$el.innerText).toUpperCase()}`;

            //using services to fetch data......
            ArticleService.get(arg.id.toLowerCase()).then(response => {
                //update stories....
                $this.stories = response.data.articles;
            
                
                //change the background image to a random article background image base on stories length
               // console.log(Math.floor(Math.random() * (this.stories.length + 1)));
                $this.background = $this.stories[Math.floor(Math.random() * ($this.stories.length + 1))].urlToImage;

                
               // console.log(this.stories)
                $this.subtitle = `Visit ${this.stories[0].url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)} for more info`;

                //hide loader
                $this.loading = false;

            }).catch(function(error){
                //console.log(error.ok);
                if(error.status == 0){
                  // alert('You need network...')
                  //$this.loading = false;
                }
            });

        }
    },
    created(){
        
        // //fetch default news by passing an object....
        this.changePageTitle({
            id: this.defaultNews || '',
            $el:{
                innerText: this.defaultNews || ''
            }
        });
      
    },
    computed:{
        post(){
            const $stories = this.stories;
            this.stories.forEach(function(story){
                story['isFavorite'] = false;
                 story['id'] = $stories.indexOf(story);
            });
            console.log(this.stories);
            return this.stories;
        },
        //default news should always be the first object's id in the array...
        defaultNews2(){
            if(this.$store.state.selectedChannels.length > 0){
                this.channelCount = false;
                return this.$store.state.selectedChannels[0].id;
            }
            else{
                this.channelCount = true;
                return this.defaultNews;
            }
        }
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    section.articles{
        padding: 100px 0;
    }
   .tabs{
       overflow-x: visible;
   }
   .hero{
       min-height: 400px;
   }
   .hero-body{
       background-repeat: no-repeat;
       background-size: cover;
   }
   .container, .hero-body{
       position: relative;
   }
   .container.width-60p{
        min-width: 150px;
        min-height: 150px;
   }

   @media(min-width: 991px){
       .width-60p{width: 60%;}
   }
   @media(max-width: 990px){
       section.articles{
           padding: 80px 15px;
       }
   }

   .overlay{
       position: absolute;
       top: 0;
       left: 0;
       right:0;
       bottom: 0;
       width: 100%;
       height:100%;
       /*background: rgba(0, 0, 0, 0.75);*/
       display: flex;
       justify-content: center;
       align-items: center;
       align-content: center;
       background: linear-gradient(to bottom right,rgba(50, 115, 220, 0.95),rgba(255,255,255, 0.10));
   }

   .image.is-100x100 {
        height: 100px;
        width: 100px;
    }

    .noChannel{
        min-height: 450px;
    }
    
</style>
