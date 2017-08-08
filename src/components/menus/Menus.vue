<template>
    <ul>
        <menuList v-for="list in listItems" :key="list.id" :selected="list.id == chosenNews" @addActiveClassToMe="activeClasshandler" :id="list.id">{{list.name}}</menuList>
    </ul>
</template>

<script>

import MenuList from './Menu.vue'

export default {
    name: 'menus',
    props:{
        //this props is used to decide menulist to chose
        chosenNews:{required: true}
    },
    components:{
        MenuList
    },
    data () {
        return {
            menus: [],
            listItems: [
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
            ]
        }
    },
    created(){
        //menus is now an array of components from menuList...
        this.menus = this.$children;
        //console.log(this.$children);
    },
    mounted(){
        //fetch all options avaialable...
        this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then(response => {
            //console.log(response.data.sources);
            //update listItems here
            this.listItems = response.data.sources;
            for(var i =0; i < this.listItems.length; i++){
                console.log(this.listItems[i].id);
            }
            //this.loading = false;
        });  
    },
    methods:{
        activeClasshandler(arg){
            //console.log(arg.$el.innerText);
            //arg is the component being clicked since it was passed as the argument...
            this.menus.forEach(menu =>{
                menu.isActive = (menu.id == arg.id);
            });
            //emit another event on Home.vue passing component.name as argument
            this.$emit('changeTitle', arg);
        }
    }
}
</script>


