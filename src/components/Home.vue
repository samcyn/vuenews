<template>
    <div>
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
                        <menus @changeTitle="changePageTitle">
                        </menus>
                    </div>
                </nav>
            </div>

        </section>

        <div class="container width-60p">
            <div class="loader-container" v-if="loading">
                <div class="spinner"></div>
                <br>
                <p>Please wait...</p>
            </div>
            <article class="media" v-for="story in stories" >
                <figure class="media-left">
                    <p class="image is-100x100">
                    <img :src="story.urlToImage">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                    <p>
                        <strong>{{story.author || 'Anonymous' }}</strong> <small>@{{story.author}}</small> <small>{{story.publishedAt}}</small>
                        <br>
                        {{story.description}}
                    </p>
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
                            <span class="icon is-small"><i class="fa fa-heart-o"></i></span>
                        </a>
                    </div>
                    </nav>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import Menus from './menus/Menus.vue'


export default {
    name: 'home',
    components:{
        Menus
    },
    props:{

    },
    data () {
        return {
            title: "You're watching ESPN",
            subtitle: '',
            stories: [],
            loading: false,
            background: ''
        }
    },
    methods:{
        changePageTitle(arg){
            // arg as component itself

            //show loader 
            this.loading = true;

            //change title...
            this.title = `You're watching ${(arg.$el.innerText).toUpperCase()}`;

            //fecth articles available....
            this.$http.get('https://newsapi.org/v1/articles?source=' + arg.id.toLowerCase() + '&apiKey=6728cb03140d4fc3966b9e0a8c8691dc')
            .then(response => {
                //update stories....
                this.stories = response.data.articles;
                
                //change the background image to a random article background image base on stories length
               
                this.background = this.stories[Math.floor(Math.random() * (this.stories.length + 1))].urlToImage;

                //change subtitle according to length of article avilable
                this.subtitle = `${this.stories.length} Articles today`;

                //hide loader
                this.loading = false;
            }); 
        }
    },
    created(){
        
        //fetch espn news....
        this.changePageTitle({
            id: 'espn',
            $el:{
                innerText: 'espn'
            }
        });
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .tabs{
       overflow-x: visible;
   }
   .hero{
       margin-bottom: 100px;
   }
   .container, .hero-body{
       position: relative;
   }
   @media(min-width: 991px){
       .width-60p{width: 60%;}
   }

   .overlay{
       position: absolute;
       top: 0;
       left: 0;
       right:0;
       bottom: 0;
       width: 100%;
       height:100%;
       background: rgba(0, 0, 0, 0.75);
       display: flex;
       justify-content: center;
       align-items: center;
       align-content: center;
   }

   .image.is-100x100 {
        height: 100px;
        width: 100px;
    }
    .loader-container{
        position: absolute;
        min-width: 150px;
        min-height: 150px;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255, 0.95);
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        z-index: 1;
        margin: 0 auto;
    }
    .spinner {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid #3273dc; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
