<template>
    <div>{{ selectedId }}</div>
</template>

<script>
export default {
  name: 'article',
  data(){
    return{
      selectedId: this.$route.params.id
    }
  }
}
</script>


