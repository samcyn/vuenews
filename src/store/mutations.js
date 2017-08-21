import { SELECTEDCHANNEL} from './mutation-types'

export default {
  [SELECTEDCHANNEL](state, channels){
      state.selectedChannels = channels
  }
}
