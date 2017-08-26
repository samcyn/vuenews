<template>
  <!--<div>
    <div>{{ selectedId }}</div>
    <div>{{article}}</div>
  </div>-->
  <div class="container">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="article.urlToImage" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        
        <div class="content">
          <p class="title is-4">{{article.title}}</p>
          <p class="subtitle is-6">@{{article.author || 'Anonymous'}}</p>
        </div>
      

        <div class="content">
          <p>{{article.description}}</p>
          
          <a>{{article.isFavorite}}</a>
          <br>
          <small>{{article.publishedAt}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data(){
      return{
        selectedId: this.$route.params.id,
        article: []
      }
    },
    mounted(){
      this.article = this.$store.state.selectedArticles[this.$route.params.id];
    },
    computed:{
      // hi: function(){
      //   console.log('hi');
      // },
      // selectedArticle(){
      //   let v = this.$store.state.selectedArticles[this.$route.params.id];
      //   console.log(v);
      //   return v;
      // }
    }

  }
</script>

<style scoped>
  .container{
    padding: 60px 0;
  }
  .card{
    max-width: 400px;
    margin: 0 auto;
  }
  figure{
    width: 100%;
    height: 250px;
  }

  img{
    height: 100% !important;
  }
</style>


