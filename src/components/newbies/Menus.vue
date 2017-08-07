<template>
    <ul>
        <menuList :selected="true" @addActiveClassToMe="activeClasshandler" name="ESPN">Espn</menuList>
        <menuList @addActiveClassToMe="activeClasshandler" name="CNN">Cnn</menuList>
        <menuList @addActiveClassToMe="activeClasshandler" name="ALJEZEERZ">ALJEZEERA</menuList>
        <menuList @addActiveClassToMe="activeClasshandler" name="HONDA">hONDA</menuList>
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
            menus: []
        }
    },
    created(){
        this.menus = this.$children;
        //console.log(this.$children);
    },
    methods:{
        activeClasshandler(arg){
            //console.log(arg.name);
            //arg is the component being clicked...
            this.menus.forEach(menu =>{
                menu.isActive = (menu.name == arg.name);
            });
            //emit another event on Home.vue
            this.$emit('changeTitle', arg.name);
        }
    },
    computed:{
        href(){
            return this.name;
            //about us or something..
            //return '#'+ this.name.toLowerCase().replace(/ /g, '-');
        }

    }
}
</script>


