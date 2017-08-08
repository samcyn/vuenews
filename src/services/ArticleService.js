import Vue from 'vue'

export default {
  get(arg) {
    return Vue.http.get('https://newsapi.org/v1/articles?source=' + arg + '&apiKey=6728cb03140d4fc3966b9e0a8c8691dc')
  }
}