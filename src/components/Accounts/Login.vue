<template>
    <form>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Login
            </button>
          </p>
        </div>
    </form>
</template>

<script>
export default {
  name: 'userLog',
  props:{
    
  }
}
</script>


<style scoped>
  form{
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
</style>