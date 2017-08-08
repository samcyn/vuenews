<template>

    <li :class="{'is-active': isActive}">
        <a @click="selectTab()"><slot></slot></a>
    </li>

</template>

<script>
    export default {

        name: 'menuList',
        props:{
            id:{required: true},
            selected: {default: false}
        },
        data () {
            return {
                isActive: false
            }
        },
        mounted(){
            this.isActive = this.selected
        },
        methods:{
            selectTab(e){
                //pass this component as reference in the emitted methods in Menus component....
                this.$emit('addActiveClassToMe', this);
            }
        },
        computed:{
            href(){
                //do something about the menu anchor tag ids..
                return '#'+ this.id.toLowerCase().replace(/ /g, '-');
            }

        }

    }
</script>


