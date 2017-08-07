<template>
    <div>
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
                                Home
                            </a>
                            <a class="nav-item">
                                Examples
                            </a>
                            <a class="nav-item">
                                Documentation
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

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        {{title}}
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
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
                <div class="loader"></div>
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
                        <span class="icon is-small"><i class="fa fa-heart"></i></span>
                        </a>
                    </div>
                    </nav>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import Menus from './newbies/Menus.vue'


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
            infos: [],
            info: '',
            stories: [],
            loading: false
        }
    },
    methods:{
        changePageTitle(arg){
            this.loading = true;
            this.title = `You're watching ${arg}`;

            this.$http.get('https://newsapi.org/v1/articles?source=' + arg.toLowerCase() + '&apiKey=6728cb03140d4fc3966b9e0a8c8691dc')
            .then(response => {
                this.stories = response.data.articles;
                this.loading = false;
                console.log(this.stories);
            }); 
        }
    },
    created(){
        //fetch espn news....
        this.changePageTitle('espn');
        //fetch all options avaialable...
        this.$http.get('https://newsapi.org/v1/sources?language=fr')
        .then(response => {
            this.infos = response.data.sources;
            console.log(this.infos);
        });        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .hero{
       margin-bottom: 100px;
   }
   .container{
       position: relative;
   }
   @media(min-width: 991px){
       .width-60p{width: 60%;}
   }

   .image.is-100x100 {
        height: 100px;
        width: 100px;
    }
    .loader-container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255, 0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
    .loader {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
