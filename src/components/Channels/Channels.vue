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
                        <!--@change="selectHandler($event)"-->
                        Select All Channels <input type="checkbox" value="all" v-model="selectAll">
                    </label>
                </li>
                
                <li v-for="(channel, index) in channels">
                    
                    <label class="checkbox">
                        <!-- @change="selectHandler($event, index, channel)" -->
                        {{channel.name}} <input type="checkbox" :value="channel" v-model="$store.state.selectedChannels"  number>
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
            //selectedChannels: [],
            // selectedIds: [],
            // selectedObjs: [],
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
            
        }); 
    },
    methods:{
        //handles the on change behaviour....
        // selectHandler(e, ind, arg){
        //     //if all channels are selected do this
        //     if(e.target.value == 'all'){
        //         //if checkbox with value all is selected do this....
        //         if(e.target.checked){

        //             //this return array having channel.id as items..
        //             this.selectedIds = this.channels.map((channel => channel.id));
                    
        //             //spread operator to  the rescue
        //             this.selectedObjs.push(...this.channels);
        //             // console.log(this.selectedObjs);
        //         }
        //         // else empty both arrays
        //         else{
        //             this.selectedIds = [];
        //             this.selectedObjs = [];
        //         }
        //         return;
        //     }
        //     //do this if a particular checkbox is selected....
        //     if(e.target.checked){
        //         this.selectedObjs.push(arg);
        //        // this.selected.push(arg.id);
        //         // console.log(Array.from(this.selectedObjs));
        //         // console.log(Array.from(this.selectedIds));
        //     }
        //     //or do this if a particular checkbox is unselected...
        //     else{
        //         this.selectedObjs.splice(ind, 1);
        //          //this.selected.splice(ind, 1);
        //         // console.log(this.selectedObjs);
        //         // console.log(this.selectedIds);
        //     }
            
        // }
    },
    computed: {
        selectAll: {
            get: function () {
                //console.log(this.$store.state.selectedChannels);
                //return this.$store.state.selectedChannels
                return this.channels ? this.$store.state.selectedChannels.length == this.channels.length : false;
            },
            set: function (value) {
                //var selected = [];
                var selectedChannels = [];

                if (value) {
                    this.channels.forEach(function (channels) {
                        //selected.push(channels.id);
                        selectedChannels.push(channels);
                    });
                }

                //dispatch action here....
                this.$store.dispatch('selectedChannel', selectedChannels)
            
                //console.log(this.$store.state.selectedChannels);
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