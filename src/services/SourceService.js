import Vue from 'vue'


export default {
  get() {
    return Vue.http.get('https://newsapi.org/v1/sources?language=en');
  },
  share(){
    return Vue.http.get('../data/raw.json');
  }
}