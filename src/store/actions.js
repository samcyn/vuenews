import {SELECTEDCHANNEL} from './mutation-types'

export default {
  selectedChannel(store, channels){
    store.commit(SELECTEDCHANNEL, channels)
  }
}
