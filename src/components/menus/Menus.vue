<template>
    <ul>
        <menuList v-for="list in listItems" :key="list" :selected="list == 'ESPN'" @addActiveClassToMe="activeClasshandler" :id="list">{{list}}</menuList>
        <!--<menuList @addActiveClassToMe="activeClasshandler" name="CNN">CNN</menuList>
        <menuList @addActiveClassToMe="activeClasshandler" name="MTV">MTV</menuList>
        <menuList @addActiveClassToMe="activeClasshandler" name="TECHRADAR">TECHRADAR</menuList>-->
    </ul>
</template>

<script>

import MenuList from './Menu.vue'

export default {
    name: 'menus',
    components:{
        MenuList
    },
    data () {
        return {
            menus: [],
            listItems: ['ESPN', 'CNN', 'MTV', 'TECHRADAR']
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
            //update listItems here
            //this.listItems = response.data.sources;
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


