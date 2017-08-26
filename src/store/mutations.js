import { SELECTEDCHANNEL, SELECTEDARTICLES} from './mutation-types'

export default {
  [SELECTEDCHANNEL](state, channels){
      state.selectedChannels = channels
  },
  [SELECTEDARTICLES](state, articles){
    state.selectedArticles = articles
  }
}
