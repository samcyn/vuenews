<template>
    <main>
        <div class="contents">
            <ul class="channels">
                <!-- loader before channels load up -->
                <div class="loader-container" v-if="loading">
                    <div class="spinner"></div>
                    <br>
                    <p>Please wait...</p>
                </div>
                <li>
                    <label class="checkbox">
                        Select All Channels <input type="checkbox" value="Select all channels" v-model="selectAll">
                    </label>
                </li>
                
                <li v-for="channel in channels">
                    
                    <label class="checkbox">
                        {{channel.name}} <input type="checkbox" :value="channel.id" v-model="selected" number>
                    </label>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>


//import Source service
import ChannelsService from '../../services/ChannelsService'


export default {
    name: 'channels',
    data () {
        return {
            channels: [
                {
                    id: 'espn',
                    name:'ESPN'
                },
                {
                    id:'cnn',
                    name: 'CNN'
                },
                {
                    id: 'mtv-news',
                    name: 'MTV News'
                },
                {
                    id:'techradar',
                    name: 'TechRadar'
                }
            ],
            selected: [],
            loading: false
        }
    },

    mounted(){
        //fetch all options avaialable...
        //using services ..........
        this.loading = true;
        ChannelsService.get().then(response => {
            //update listItems here
            this.channels = response.data.sources;
            this.loading = false;
            
            //this.loading = false;
        }); 
    },
    computed: {
        selectAll: {
            get: function () {
                return this.channels ? this.selected.length == this.channels.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.channels.forEach(function (channels) {
                        selected.push(channels.id);
                    });
                }

                this.selected = selected;
                //console.log(this.selected);
            }
        }
    }
}
</script>


<style scoped>
  main{
      padding: 100px 0;
  }
  .contents{
      width: 100%;
      max-width: 450px;
      margin: 0 auto;
  }
  .channels{
      position: relative;
  }
  .channels li{
      height: 50px;
      border-bottom: 1px solid #EEE;
      padding: 0 15px;
  }
  .channels li:first-child{
      background: #EEE;
  }
  .channels label{
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
</style>