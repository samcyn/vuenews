<template>
  <div class="wrapper">
    <div class="auth">
      <figure class="image is-48x48">
        <img src="http://bulma.io/images/placeholders/48x48.png">
      </figure>
      <p>Log In</p>
      <div class="social">
        <a class="button">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
      </div>
      <p>Or</p>
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
            <p class="control has-text-centered">
                <router-link class="button is-success" :to="{ name: 'Articles' }" tag="button">Login</router-link>
            </p>
          </div>
      </form>
      <div class="">
        <a class="button is-primary is-inverted is-outlined">Invert Outlined</a>
        <a class="button is-info is-inverted is-outlined">Invert Outlined</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'userLog',
  props:{
  
  }
}
</script>


<style scoped>
  .wrapper{
    height: 100vh;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
  }
  .auth{
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
 
</style>