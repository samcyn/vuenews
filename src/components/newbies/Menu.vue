<template>

    <li :class="{'is-active': isActive}">
        <a @click="selectTab()"><slot></slot></a>
    </li>

</template>

<script>
export default {

    name: 'menuList',
    props:{
        name:{required: true},
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
            //pass this component as reference
            this.$emit('addActiveClassToMe', this);
        }
    }

}
</script>


