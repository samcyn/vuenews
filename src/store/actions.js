import {SELECTEDCHANNEL, SELECTEDARTICLES} from './mutation-types'

export default {
  selectedChannel(store, channels){
    store.commit(SELECTEDCHANNEL, channels);
  },
  selectedArticles(store, articles){
    store.commit(SELECTEDARTICLES, articles);
  }
}
